import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/polar/page-hero";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Cómo trabaja la agencia al armar viajes a la Antártida y al Ártico.",
};

const points = [
  {
    title: "Destino primero",
    text: "Antártida y Ártico no se mezclan en una misma temporada. El sitio los presenta por separado para que la persona llegue al viaje que corresponde.",
  },
  {
    title: "El barco es parte del viaje",
    text: "No es un dato al pie. Capacidad, clase de hielo y estilo de navegación cambian el día a bordo, y por eso cada salida está vinculada a su embarcación.",
  },
  {
    title: "La consulta no se pierde",
    text: "Quien escribe desde una ficha deja nombre, correo y el viaje que estaba viendo. El equipo lo ve en el panel y responde abriendo el correo ya preparado.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow={brand.agencyName}
        title="Nosotros"
        text="Armamos expediciones polares y dejamos el contenido del sitio en manos del equipo, no de una planilla eterna."
        image="/demo/ship-ice.jpg"
      />
      <section className="mx-auto grid max-w-7xl items-start gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-8">
        <div>
          <h2 className="text-4xl">Cómo trabajamos</h2>
          <p className="mt-4 leading-relaxed text-brand-muted">
            {brand.agencyName} presenta viajes a la Antártida y al Ártico. La propuesta pública es clara a propósito: destino, experiencia, itinerario y barco. Lo que no se resuelve en la ficha se conversa: cada viaje tiene su formulario, y el sitio también tiene un contacto general, correo y WhatsApp.
          </p>
          <div className="mt-8 space-y-6">
            {points.map((point) => (
              <div key={point.title}>
                <h3 className="font-heading text-2xl">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[28rem] overflow-hidden rounded-2xl">
          <Image src="/demo/penguin.jpg" alt="Pingüinos rey en la costa" fill className="object-cover" sizes="40vw" />
        </div>
      </section>
    </>
  );
}
