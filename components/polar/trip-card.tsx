import Image from "next/image";
import Link from "next/link";
import { getVessel, REGION_LABEL, type Trip } from "@/lib/demo/catalog";

export function TripCard({ trip }: { trip: Trip }) {
  const vessel = getVessel(trip.vesselSlug);

  return (
    <article className="overflow-hidden rounded-2xl border border-brand-border bg-white">
      <Link href={`/viajes/${trip.slug}`} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={trip.images[0]!}
            alt=""
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-brand-primary">
            {REGION_LABEL[trip.region]}
          </span>
        </div>
        <div className="p-5">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-brand-secondary">
            {trip.experienceType} · {trip.duration}
          </p>
          <h3 className="mt-2 font-heading text-3xl leading-tight text-brand-charcoal">{trip.title}</h3>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-brand-muted">{trip.summary}</p>
          {vessel ? (
            <p className="mt-4 text-sm text-brand-charcoal">
              Embarcación · <span className="text-brand-secondary">{vessel.name}</span>
            </p>
          ) : null}
        </div>
      </Link>
    </article>
  );
}
