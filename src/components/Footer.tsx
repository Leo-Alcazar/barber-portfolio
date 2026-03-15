"use client";

import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-50 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        
        {/* Izquierda: Logo y Slogan */}
        <div className="flex flex-col space-y-4 md:max-w-sm">
          <span className="text-3xl font-bold tracking-tight text-white">BarberX</span>
          <p className="text-zinc-400">
            Elevando el estándar del cuidado masculino. Tu estilo, nuestra obra maestra.
          </p>
        </div>

        {/* Centro: Enlaces Rápidos */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-semibold text-lg text-white">Enlaces Rápidos</h3>
          <ul className="space-y-2 text-zinc-400">
            <li>
              <Link href="#inicio" className="hover:text-white transition-colors">Inicio</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">Servicios</Link>
            </li>
            <li>
              <Link href="#galeria" className="hover:text-white transition-colors">Galería</Link>
            </li>
          </ul>
        </div>

        {/* Derecha: Contacto y Redes Sociales */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-semibold text-lg text-white">Contacto</h3>
          <ul className="space-y-3 text-zinc-400">
            <li className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-zinc-500" />
              <span>Av. Principal 123, Ciudad Central</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-zinc-500" />
              <span>+52 555 123 4567</span>
            </li>
          </ul>
          
          <div className="flex space-x-4 mt-4">
            <a href="#" onClick={(e) => e.preventDefault()} className="text-zinc-400 hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-zinc-400 hover:text-white transition-colors">
              <Facebook className="w-6 h-6" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-zinc-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
        &copy; {new Date().getFullYear()} BarberX. Todos los derechos reservados.
      </div>
    </footer>
  );
}
