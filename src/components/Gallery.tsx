import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const haircuts = [
  {
    id: 1,
    title: "Fade Clásico",
    description: "Un degradado pulido y limpio, ideal para un look profesional y moderno en cualquier ocasión.",
    imageUrl: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=500&q=80"
  },
  {
    id: 2,
    title: "Pompadour",
    description: "Estilo retro con gran volumen en la parte superior. Perfecto para destacar con elegancia.",
    imageUrl: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=500&q=80"
  },
  {
    id: 3,
    title: "Buzz Cut",
    description: "Corto, uniforme y de bajo mantenimiento. Aporta un aspecto fuerte y decidido.",
    imageUrl: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=500&q=80"
  },
  {
    id: 4,
    title: "Textured Crop",
    description: "Corte texturizado en la parte superior con flequillo corto. Estilo fresco y juvenil.",
    imageUrl: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=500&q=80"
  },
  {
    id: 5,
    title: "Slick Back",
    description: "Peinado hacia atrás con pomada para un acabado pulcro y sofisticado.",
    imageUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&q=80"
  },
  {
    id: 6,
    title: "Mullet Moderno",
    description: "Corto a los lados y largo atrás, reinventado para un estilo rebelde y actual.",
    imageUrl: "https://images.unsplash.com/photo-1593702275630-d322ce6765fd?w=500&q=80"
  }
];

export default function Gallery() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Nuestros Estilos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {haircuts.map((haircut) => (
            <Card key={haircut.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64 w-full">
                <Image
                  src={haircut.imageUrl}
                  alt={haircut.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle>{haircut.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-500 dark:text-zinc-400">
                  {haircut.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
