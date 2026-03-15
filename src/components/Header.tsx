import BookingModal from "@/components/BookingModal";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md px-6 py-4 border-b border-zinc-800 flex justify-between items-center text-zinc-50">
      <div className="text-2xl font-bold tracking-tight">BarberX</div>
      <BookingModal>
        <Button variant="default">Reservar</Button>
      </BookingModal>
    </header>
  );
}
