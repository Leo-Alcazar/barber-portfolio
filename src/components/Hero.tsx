import { Button } from "@/components/ui/button";
import BookingModal from "@/components/BookingModal";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] w-full bg-gradient-to-br from-zinc-900 via-zinc-950 to-black text-white px-4 text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 mt-10">
        El Estilo que te Define
      </h1>
      <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl">
        Descubre la experiencia definitiva en barbería. Un corte impecable, un ambiente de primera y la atención que mereces.
      </p>
      <BookingModal>
        <Button size="lg" className="text-base px-8 py-6 font-semibold bg-white text-black hover:bg-zinc-200">
          Agendar Cita
        </Button>
      </BookingModal>
    </section>
  );
}
