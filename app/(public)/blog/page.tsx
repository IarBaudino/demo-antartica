import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/polar/page-hero";
import { POSTS } from "@/lib/demo/catalog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notas sobre destinos, temporadas y cómo elegir un barco de expedición.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Editorial"
        title="Blog"
        text="Novedades, temporadas y criterios para elegir un viaje polar antes de consultar."
        image="/demo/artico.jpg"
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        {POSTS.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
              <Image src={post.cover} alt="" fill className="object-cover" sizes="33vw" />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-brand-secondary">{post.date}</p>
            <h2 className="mt-2 font-heading text-3xl group-hover:text-brand-secondary">{post.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted">{post.excerpt}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
