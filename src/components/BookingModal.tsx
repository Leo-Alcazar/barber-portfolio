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

interface BookingModalProps {
  children: React.ReactNode;
}

export default function BookingModal({ children }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(false);

  // Opcional: reiniciar el modal cuando se cierra
  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setTimeout(() => setStep(1), 300); // Dar tiempo a la animación de cierre
    }
    setOpen(newOpen);
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => Math.max(1, prev - 1));

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
            <div className="text-center">
              <h3 className="text-lg font-medium">Paso 1: Elige el Servicio</h3>
              <p className="text-sm text-zinc-500 mt-2">
                (Aquí irán las opciones de servicios)
              </p>
            </div>
          )}
          {step === 2 && (
            <div className="text-center">
              <h3 className="text-lg font-medium">Paso 2: Elige a tu Barbero</h3>
              <p className="text-sm text-zinc-500 mt-2">
                (Aquí irán las opciones de barberos disponibles)
              </p>
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
          
          <Button onClick={nextStep} disabled={step >= 3} className="w-[100px]">
            {step === 3 ? "Confirmar" : "Siguiente"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
