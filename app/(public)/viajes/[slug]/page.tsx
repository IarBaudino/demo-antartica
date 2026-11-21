import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Suspense } from "react";
import { InquiryForm } from "@/components/home/inquiry-form";
import { getTrip, getVessel, REGION_LABEL, TRIPS } from "@/lib/demo/catalog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return TRIPS.map((trip) => ({ slug: trip.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const trip = getTrip(slug);
  if (!trip) return { title: "Viaje" };
  return { title: trip.title, description: trip.summary };
}

export default async function TripPage({ params }: Props) {
  const { slug } = await params;
  const trip = getTrip(slug);
  if (!trip) notFound();
  const vessel = getVessel(trip.vesselSlug);

  return (
    <>
      <section className="relative min-h-[62vh] bg-brand-primary-dark">
        <Image src={trip.images[0]!} alt="" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#0B1E2D_0%,rgba(11,30,45,0.35)_50%,rgba(11,30,45,0.15)_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-[62vh] max-w-7xl flex-col justify-end px-4 pb-12 pt-28 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/80">
            {REGION_LABEL[trip.region]} · {trip.experienceType} · {trip.duration}
          </p>
          <h1 className="mt-3 max-w-3xl text-5xl text-white md:text-6xl">{trip.title}</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)] lg:px-8">
        <div>
          <p className="text-lg leading-relaxed text-brand-charcoal">{trip.description}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {trip.images.map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src={src} alt="" fill className="object-cover" sizes="30vw" />
              </div>
            ))}
          </div>

          <h2 className="mt-12 text-4xl">Itinerario</h2>
          <ol className="mt-6 space-y-5">
            {trip.itinerary.map((step) => (
              <li key={step.day} className="border-l-2 border-brand-ice pl-4">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-brand-secondary">{step.day}</p>
                <p className="mt-1 font-medium text-brand-charcoal">{step.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-brand-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <aside className="space-y-6">
          {vessel ? (
            <Link href={`/embarcaciones/${vessel.slug}`} className="block overflow-hidden rounded-2xl border border-brand-border bg-white">
              <div className="relative aspect-[16/10]">
                <Image src={vessel.images[0]!} alt="" fill className="object-cover" sizes="40vw" />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-brand-secondary">Embarcación</p>
                <h2 className="mt-1 font-heading text-3xl">{vessel.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{vessel.tagline}</p>
                <p className="mt-3 text-sm font-medium text-brand-secondary">Ver el barco</p>
              </div>
            </Link>
          ) : null}

          <Suspense fallback={null}>
            <InquiryForm
              variant="card"
              inquiry={{
                title: "Consultar este viaje",
                subtitle: "La consulta queda asociada a esta salida.",
              }}
              related={{ kind: "viaje", slug: trip.slug, title: trip.title }}
            />
          </Suspense>
        </aside>
      </section>
    </>
  );
}
