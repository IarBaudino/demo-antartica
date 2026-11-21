import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import type { Metadata } from "next";
import { InquiryForm } from "@/components/home/inquiry-form";
import { TripCard } from "@/components/polar/trip-card";
import { JsonLd } from "@/components/seo/json-ld";
import { brand, getAppUrl } from "@/config/brand";
import { POSTS, TRIPS, VESSELS } from "@/lib/demo/catalog";
import { getSiteSettings } from "@/lib/site-settings/get-site-settings";

export const metadata: Metadata = {
  title: { absolute: brand.seo.titleDefault },
  description: brand.seo.description,
};

export default async function HomePage() {
  const settings = await getSiteSettings();
  const featured = TRIPS.filter((trip) => trip.featured);
  const appUrl = getAppUrl();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: brand.agencyName,
          url: appUrl,
          description: brand.seo.description,
          email: brand.email,
          address: {
            "@type": "PostalAddress",
            addressLocality: brand.location.city,
            addressCountry: brand.location.countryCode,
          },
        }}
      />

      <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-brand-primary-dark">
        <Image
          src="/demo/greenland-ship.jpg"
          alt="Barco de expedición junto a un iceberg"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#0B1E2D_4%,rgba(11,30,45,0.45)_46%,rgba(11,30,45,0.2)_100%)]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-white/80">
            Expediciones polares
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl text-white sm:text-6xl md:text-7xl">
            Antártida y Ártico
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
            Viajes para mirar el hielo de cerca, con el barco, el itinerario y la consulta en el mismo lugar.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/viajes"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-primary"
            >
              Ver viajes
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-lg border border-white/70 px-6 py-3 text-sm font-semibold text-white"
            >
              Hacer una consulta
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
        <RegionLink
          href="/antartida"
          image="/demo/icebergs.jpg"
          eyebrow="Hemisferio sur"
          title="Antártida"
          text="Península, Georgias y el Círculo Polar. Salidas desde Ushuaia."
        />
        <RegionLink
          href="/artico"
          image="/demo/spitsbergen.jpg"
          eyebrow="Hemisferio norte"
          title="Ártico"
          text="Svalbard y Groenlandia, en el verano en que el hielo abre la costa."
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-secondary">Catálogo</p>
            <h2 className="mt-2 text-4xl text-brand-charcoal">Viajes en salida</h2>
          </div>
          <Link href="/viajes" className="text-sm font-medium text-brand-secondary hover:text-brand-primary">
            Ver todos
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {featured.map((trip) => (
            <TripCard key={trip.slug} trip={trip} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-secondary">La flota</p>
        <h2 className="mt-2 text-4xl text-brand-charcoal">Embarcaciones</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {VESSELS.slice(0, 2).map((vessel) => (
            <Link
              key={vessel.slug}
              href={`/embarcaciones/${vessel.slug}`}
              className="group grid overflow-hidden rounded-2xl border border-brand-border bg-white sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]"
            >
              <div className="relative min-h-56">
                <Image
                  src={vessel.images[0]!}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 25vw, 100vw"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-brand-secondary">{vessel.kind}</p>
                <h3 className="mt-2 font-heading text-3xl">{vessel.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">{vessel.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/embarcaciones" className="mt-6 inline-block text-sm font-medium text-brand-secondary">
          Ver las cuatro embarcaciones
        </Link>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative min-h-80 overflow-hidden rounded-2xl">
            <Image src="/demo/ship-ice.jpg" alt="Velero frente a una costa de hielo" fill className="object-cover" sizes="50vw" />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-secondary">La agencia</p>
            <h2 className="mt-2 text-4xl">El viaje se arma antes de embarcar</h2>
            <p className="mt-4 leading-relaxed text-brand-muted">
              Elegimos destino, tipo de experiencia y barco juntos. Cada ficha muestra el itinerario, la embarcación y un formulario que guarda qué viaje estaba mirando la persona.
            </p>
            <Link href="/nosotros" className="mt-6 inline-block text-sm font-semibold text-brand-secondary">
              Conocer el equipo
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-4xl">Desde el blog</h2>
          <Link href="/blog" className="text-sm font-medium text-brand-secondary">
            Todas las notas
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Image src={post.cover} alt="" fill className="object-cover" sizes="33vw" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-brand-secondary">{post.date}</p>
              <h3 className="mt-1 font-heading text-2xl group-hover:text-brand-secondary">{post.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <Suspense fallback={null}>
        <InquiryForm inquiry={settings.inquiry} />
      </Suspense>
    </>
  );
}

function RegionLink({
  href,
  image,
  eyebrow,
  title,
  text,
}: {
  href: string;
  image: string;
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <Link href={href} className="group relative flex min-h-80 items-end overflow-hidden rounded-2xl">
      <Image src={image} alt="" fill className="object-cover transition duration-500 group-hover:scale-[1.03]" sizes="50vw" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,#0B1E2D_0%,rgba(11,30,45,0.15)_70%)]" />
      <div className="relative z-10 p-6 text-white">
        <p className="text-xs uppercase tracking-[0.2em] text-white/75">{eyebrow}</p>
        <h2 className="mt-1 text-4xl text-white">{title}</h2>
        <p className="mt-2 max-w-sm text-sm text-white/85">{text}</p>
      </div>
    </Link>
  );
}
