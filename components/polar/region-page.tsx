import type { Metadata } from "next";
import { PageHero } from "@/components/polar/page-hero";
import { TripCard } from "@/components/polar/trip-card";
import { tripsInRegion, type Region } from "@/lib/demo/catalog";

const copy: Record<Region, { eyebrow: string; title: string; text: string; image: string; note: string }> = {
  antartida: {
    eyebrow: "Destino",
    title: "Antártida",
    text: "Salidas desde Ushuaia. Península, islas subantárticas y, cuando el hielo abre, el Círculo Polar.",
    image: "/demo/icebergs.jpg",
    note: "La temporada fuerte va de noviembre a marzo. Cada viaje indica duración, tipo de experiencia y el barco con el que sale.",
  },
  artico: {
    eyebrow: "Destino",
    title: "Ártico",
    text: "Svalbard y Groenlandia en el verano del norte, cuando los fiordos se pueden navegar.",
    image: "/demo/spitsbergen.jpg",
    note: "No comparte calendario con la Antártida. Por eso el catálogo los separa: otro hemisferio, otros barcos, otra luz.",
  },
};

export function regionMetadata(region: Region): Metadata {
  const data = copy[region];
  return { title: data.title, description: data.text };
}

export function RegionPage({ region }: { region: Region }) {
  const data = copy[region];
  const trips = tripsInRegion(region);

  return (
    <>
      <PageHero eyebrow={data.eyebrow} title={data.title} text={data.text} image={data.image} />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="max-w-2xl leading-relaxed text-brand-muted">{data.note}</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip) => (
            <TripCard key={trip.slug} trip={trip} />
          ))}
        </div>
      </section>
    </>
  );
}
