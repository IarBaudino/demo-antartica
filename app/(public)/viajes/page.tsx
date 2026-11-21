import type { Metadata } from "next";
import { PageHero } from "@/components/polar/page-hero";
import { TripCatalog } from "@/components/polar/trip-catalog";
import { TRIPS } from "@/lib/demo/catalog";

export const metadata: Metadata = {
  title: "Viajes",
  description: "Catálogo de expediciones a la Antártida y al Ártico, por destino y tipo de experiencia.",
};

export default function ViajesPage() {
  return (
    <>
      <PageHero
        eyebrow="Catálogo"
        title="Viajes"
        text="Filtrá por destino y por tipo de experiencia. Cada ficha tiene itinerario, barco y consulta directa."
        image="/demo/icebergs.jpg"
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <TripCatalog trips={TRIPS} />
      </section>
    </>
  );
}
