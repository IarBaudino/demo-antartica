import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TripCard } from "@/components/polar/trip-card";
import { getVessel, tripsForVessel, VESSELS } from "@/lib/demo/catalog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return VESSELS.map((vessel) => ({ slug: vessel.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const vessel = getVessel(slug);
  if (!vessel) return { title: "Embarcación" };
  return { title: vessel.name, description: vessel.tagline };
}

export default async function VesselPage({ params }: Props) {
  const { slug } = await params;
  const vessel = getVessel(slug);
  if (!vessel) notFound();
  const trips = tripsForVessel(vessel.slug);

  return (
    <>
      <section className="relative min-h-[56vh] bg-brand-primary-dark">
        <Image src={vessel.images[0]!} alt="" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#0B1E2D_0%,rgba(11,30,45,0.4)_55%,rgba(11,30,45,0.12)_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-[56vh] max-w-7xl flex-col justify-end px-4 pb-12 pt-28 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.22em] text-white/80">{vessel.kind}</p>
          <h1 className="mt-3 text-5xl text-white md:text-6xl">{vessel.name}</h1>
          <p className="mt-3 max-w-xl text-lg text-white/85">{vessel.tagline}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="max-w-3xl text-lg leading-relaxed">{vessel.description}</p>
        <dl className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {vessel.specs.map((spec) => (
            <div key={spec.label} className="rounded-xl border border-brand-border bg-white p-4">
              <dt className="text-xs uppercase tracking-[0.14em] text-brand-secondary">{spec.label}</dt>
              <dd className="mt-2 text-brand-charcoal">{spec.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {vessel.images.map((src) => (
            <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image src={src} alt="" fill className="object-cover" sizes="33vw" />
            </div>
          ))}
        </div>

        <h2 className="mt-14 text-4xl">Viajes que salen en este barco</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {trips.map((trip) => (
            <TripCard key={trip.slug} trip={trip} />
          ))}
        </div>
        <Link href="/embarcaciones" className="mt-8 inline-block text-sm text-brand-secondary">
          Volver a embarcaciones
        </Link>
      </section>
    </>
  );
}
