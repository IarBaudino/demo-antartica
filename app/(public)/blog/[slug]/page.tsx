import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPost, POSTS } from "@/lib/demo/catalog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Nota" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article>
      <div className="relative min-h-[46vh] bg-brand-primary-dark">
        <Image src={post.cover} alt="" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#0B1E2D_0%,rgba(11,30,45,0.35)_60%)]" />
      </div>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="text-xs uppercase tracking-[0.18em] text-brand-secondary">{post.date}</p>
        <h1 className="mt-3 text-5xl">{post.title}</h1>
        <p className="mt-4 text-lg text-brand-muted">{post.excerpt}</p>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-brand-charcoal">
          {post.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Link href="/blog" className="mt-10 inline-block text-sm font-medium text-brand-secondary">
          Volver al blog
        </Link>
      </div>
    </article>
  );
}
