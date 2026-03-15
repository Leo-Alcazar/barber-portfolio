"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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

interface BookingModalProps {
  children: React.ReactNode;
}

export default function BookingModal({ children }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedBarber, setSelectedBarber] = useState<string | null>(null);

  // Opcional: reiniciar el modal cuando se cierra
  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setTimeout(() => {
        setStep(1);
        setSelectedService(null);
        setSelectedBarber(null);
      }, 300); // Dar tiempo a la animación de cierre
    }
    setOpen(newOpen);
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => Math.max(1, prev - 1));

  const isNextDisabled = () => {
    if (step === 1) return !selectedService;
    if (step === 2) return !selectedBarber;
    if (step === 3) return false;
    return false;
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Reserva tu Cita</DialogTitle>
        </DialogHeader>

        <div className="py-6">
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
            <div className="text-center">
              <h3 className="text-lg font-medium">Paso 3: Elige la Fecha y Hora</h3>
              <p className="text-sm text-zinc-500 mt-2">
                (Aquí irá el calendario)
              </p>
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
              <div /> // Espaciador para mantener el botón "Siguiente" a la derecha
            )}
          </div>
          
          <Button onClick={nextStep} disabled={isNextDisabled() || step > 3} className="w-[100px]">
            {step === 3 ? "Confirmar" : "Siguiente"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
