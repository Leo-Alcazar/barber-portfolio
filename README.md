# BarberX - Landing Page y Sistema de Reservas

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

Este es mi proyecto de portafolio para demostrar mis habilidades en el desarrollo Frontend moderno. Construí la página web para una barbería que no solo es visual, sino que incluye un simulador funcional para agendar citas.

**[Puedes ver el proyecto en vivo aquí](https://barber-portfolio-topaz.vercel.app/)**

## Lo que construí

* **Sistema de reservas interactivo:** Un modal donde el usuario puede elegir el tipo de corte, seleccionar al barbero de su preferencia (como Fernando, por ejemplo), y escoger una fecha/hora disponible en un calendario. Toda esta lógica la manejé con el estado de React.
* **Diseño Responsivo:** Usé Tailwind CSS (específicamente Flexbox y Grid) para asegurar que la galería de cortes y la navegación se adapten perfectamente a celulares y monitores grandes.
* **Componentes Modulares:** Integré la librería `shadcn/ui` para construir una interfaz limpia y accesible sin tener que reinventar la rueda con cada botón o tarjeta.
* **Detalles de UX:** Le agregué un header con efecto de cristal (*glassmorphism*) que se queda fijo al hacer scroll, y navegación suave entre las secciones.

## Stack Tecnológico

* **Core:** Next.js, React, TypeScript.
* **Estilos:** Tailwind CSS.
* **UI:** shadcn/ui.
* **Deploy:** Vercel.

## Cómo correrlo localmente

Si quieres revisar el código en tu máquina:

1. Clona este repositorio:
   git clone [https://github.com/TU_USUARIO/barber-portfolio.git](https://github.com/TU_USUARIO/barber-portfolio.git)
2. Instala las dependencias:
   npm install
3. Inicia el servidor de desarrollo:
   npm run dev
4. Abre http://localhost:3000 en tu navegador.

    Estructura del Proyecto (Next.js App Router)
app/: Contiene el enrutador principal, el layout.tsx (estructura base) y la page.tsx (vista principal).

components/: Componentes reutilizables creados para la interfaz (Hero.tsx, Gallery.tsx, BookingModal.tsx, etc.).

components/ui/: Componentes base instalados e inyectados a través de shadcn/ui.
