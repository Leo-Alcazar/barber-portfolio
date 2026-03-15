import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <div className="flex flex-grow flex-col w-full">
      <section id="inicio">
        <Hero />
      </section>
      <section id="galeria">
        <Gallery />
      </section>
    </div>
  );
}
