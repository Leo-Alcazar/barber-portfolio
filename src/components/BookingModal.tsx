"use client";

import { useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

const services = [
  { id: "s1", name: "Corte Clásico", price: "$15", duration: "30 min" },
  { id: "s2", name: "Corte + Barba", price: "$25", duration: "45 min" },
  { id: "s3", name: "Tinte", price: "$40", duration: "60 min" },
];

const barbers = [
  { id: "b1", name: "Fernando" },
  { id: "b2", name: "Marcos" },
  { id: "b3", name: "Alex" },
];

const availableTimes = [
  "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"
];

interface BookingModalProps {
  children: React.ReactNode;
}

export default function BookingModal({ children }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedBarber, setSelectedBarber] = useState<string | null>(null);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Reiniciar el modal cuando se cierra
  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setTimeout(() => {
        setStep(1);
        setSelectedService(null);
        setSelectedBarber(null);
        setDate(undefined);
        setTime(null);
        setIsConfirmed(false);
      }, 300); // Dar tiempo a la animación de cierre
    }
    setOpen(newOpen);
  };

  const nextStep = () => {
    if (step === 4) {
      setIsConfirmed(true);
    } else {
      setStep((prev) => prev + 1);
    }
  };
  
  const prevStep = () => setStep((prev) => Math.max(1, prev - 1));

  const isNextDisabled = () => {
    if (step === 1) return !selectedService;
    if (step === 2) return !selectedBarber;
    if (step === 3) return !date || !time;
    return false;
  };

  const selectedServiceObj = services.find((s) => s.id === selectedService);
  const selectedBarberObj = barbers.find((b) => b.id === selectedBarber);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[600px]">
        {isConfirmed ? (
          <div className="py-12 flex flex-col items-center justify-center space-y-4 text-center">
            <CheckCircle2 className="w-16 h-16 text-green-500" />
            <h2 className="text-2xl font-bold">¡Cita confirmada!</h2>
            <p className="text-zinc-500 max-w-sm">
              Tu reserva con <span className="font-semibold text-zinc-900 dark:text-zinc-100">{selectedBarberObj?.name}</span> para <span className="font-medium text-zinc-900 dark:text-zinc-100">{selectedServiceObj?.name}</span> ha sido agendada para el{" "}
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                {date ? format(date, "d 'de' MMMM", { locale: es }) : ""} a las {time}
              </span>.
            </p>
            <Button className="mt-6 w-[200px]" onClick={() => handleOpenChange(false)}>
              Cerrar
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Reserva tu Cita</DialogTitle>
            </DialogHeader>

            <div className="py-4">
              {step === 1 && (
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-lg font-medium">Paso 1: Elige el Servicio</h3>
                    <p className="text-sm text-zinc-500 mt-2">
                      Selecciona el servicio que deseas agendar
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        className={cn(
                          "flex flex-col items-start p-4 rounded-xl border-2 transition-all text-left",
                          selectedService === service.id
                            ? "border-zinc-900 bg-zinc-50 dark:border-zinc-100 dark:bg-zinc-800/50"
                            : "border-zinc-200 hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
                        )}
                      >
                        <span className="font-semibold">{service.name}</span>
                        <div className="flex justify-between w-full mt-2 text-sm text-zinc-500">
                          <span>{service.duration}</span>
                          <span className="font-medium text-zinc-900 dark:text-zinc-100">{service.price}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-lg font-medium">Paso 2: Elige a tu Barbero</h3>
                    <p className="text-sm text-zinc-500 mt-2">
                      Selecciona el profesional de tu preferencia
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {barbers.map((barber) => (
                      <button
                        key={barber.id}
                        onClick={() => setSelectedBarber(barber.id)}
                        className={cn(
                          "flex items-center justify-center p-4 rounded-xl border-2 transition-all text-center",
                          selectedBarber === barber.id
                            ? "border-zinc-900 bg-zinc-50 dark:border-zinc-100 dark:bg-zinc-800/50"
                            : "border-zinc-200 hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
                        )}
                      >
                        <span className="font-semibold">{barber.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-lg font-medium">Paso 3: Fecha y Hora</h3>
                    <p className="text-sm text-zinc-500 mt-2">
                      Elige cuándo quieres venir
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex justify-center flex-1">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border shadow"
                      />
                    </div>
                    <div className="flex-1 space-y-3">
                      <h4 className="font-medium text-sm text-zinc-900 dark:text-zinc-100 text-center md:text-left">
                        Horarios disponibles
                      </h4>
                      <div className="grid grid-cols-2 gap-2 max-h-[300px] overflow-y-auto pr-2">
                        {availableTimes.map((t) => (
                          <button
                            key={t}
                            onClick={() => setTime(t)}
                            className={cn(
                              "p-2 rounded-md border text-sm transition-all text-center",
                              time === t
                                ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
                                : "border-zinc-200 hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
                            )}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-lg font-medium">Paso 4: Resumen</h3>
                    <p className="text-sm text-zinc-500 mt-2">
                      Confirma los detalles de tu cita
                    </p>
                  </div>
                  <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-4 bg-zinc-50/50 dark:bg-zinc-900/50">
                    <div className="flex justify-between items-center pb-4 border-b border-zinc-200 dark:border-zinc-800">
                      <span className="text-zinc-500">Servicio</span>
                      <span className="font-medium text-right">{selectedServiceObj?.name}</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-zinc-200 dark:border-zinc-800">
                      <span className="text-zinc-500">Barbero</span>
                      <span className="font-medium text-right">{selectedBarberObj?.name}</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-zinc-200 dark:border-zinc-800">
                      <span className="text-zinc-500">Fecha</span>
                      <span className="font-medium text-right capitalize">
                        {date ? format(date, "EEEE, d 'de' MMMM, yyyy", { locale: es }) : ""}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-500">Hora</span>
                      <span className="font-medium text-right">{time}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between mt-4">
              <div className="w-[100px]">
                {step > 1 ? (
                  <Button variant="outline" onClick={prevStep} className="w-full">
                    Atrás
                  </Button>
                ) : (
                  <div /> // Espaciador
                )}
              </div>
              
              <Button 
                onClick={nextStep} 
                disabled={isNextDisabled()} 
                className="w-[auto] min-w-[100px]"
              >
                {step === 4 ? "Confirmar Reserva" : "Siguiente"}
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
