import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/polar/page-hero";
import { VESSELS } from "@/lib/demo/catalog";

export const metadata: Metadata = {
  title: "Embarcaciones",
  description: "Barcos de expedición y velero asociados a los viajes de Antártida y Ártico.",
};

export default function EmbarcacionesPage() {
  return (
    <>
      <PageHero
        eyebrow="Flota"
        title="Embarcaciones"
        text="Cada viaje sale en un barco concreto. Acá están las fotos, la capacidad y el tipo de navegación."
        image="/demo/greenland-ship.jpg"
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:px-8">
        {VESSELS.map((vessel) => (
          <Link
            key={vessel.slug}
            href={`/embarcaciones/${vessel.slug}`}
            className="grid overflow-hidden rounded-2xl border border-brand-border bg-white md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
          >
            <div className="relative min-h-64">
              <Image src={vessel.images[0]!} alt="" fill className="object-cover" sizes="40vw" />
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.16em] text-brand-secondary">{vessel.kind}</p>
              <h2 className="mt-2 text-4xl">{vessel.name}</h2>
              <p className="mt-3 max-w-xl leading-relaxed text-brand-muted">{vessel.description}</p>
              <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {vessel.specs.slice(0, 3).map((spec) => (
                  <div key={spec.label}>
                    <dt className="text-xs uppercase tracking-[0.14em] text-brand-secondary">{spec.label}</dt>
                    <dd className="mt-1 text-sm text-brand-charcoal">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
