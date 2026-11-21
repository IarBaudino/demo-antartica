import Link from "next/link";
import { PageHeader } from "@/components/dashboard/page-header";
import { POSTS } from "@/lib/demo/catalog";

export default function AdminBlogPage() {
  return (
    <div>
      <PageHeader
        title="Blog"
        description="Notas con imagen de presentación y página de lectura."
        action={
          <Link href="/admin/blog/nuevo" className="text-sm font-semibold text-brand-secondary">
            + Nueva nota
          </Link>
        }
      />
      <ul className="divide-y divide-brand-border rounded-xl border border-brand-border bg-white">
        {POSTS.map((post) => (
          <li key={post.slug} className="flex items-center justify-between gap-4 px-4 py-4">
            <div>
              <Link href={`/admin/blog/${post.slug}`} className="font-medium text-brand-primary hover:underline">
                {post.title}
              </Link>
              <p className="mt-1 text-sm text-brand-muted">{post.date}</p>
            </div>
            <span className="text-xs uppercase tracking-[0.14em] text-brand-secondary">Publicada</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
