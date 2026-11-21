import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/dashboard/page-header";
import { DemoSaveButton } from "@/components/polar/demo-save";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getPost } from "@/lib/demo/catalog";

type Props = { params: Promise<{ slug: string }> };

export default async function EditarNotaPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div>
      <PageHeader
        title={post.title}
        action={
          <Link href={`/blog/${post.slug}`} className="text-sm text-brand-secondary">
            Ver nota
          </Link>
        }
      />
      <div className="grid max-w-3xl gap-5">
        <Input label="Título" name="title" defaultValue={post.title} />
        <Input label="Fecha" name="date" defaultValue={post.date} />
        <Textarea label="Bajada" name="excerpt" defaultValue={post.excerpt} rows={3} />
        <Textarea label="Nota" name="body" defaultValue={post.paragraphs.join("\n\n")} rows={10} />
        <DemoSaveButton label="Guardar nota" />
      </div>
    </div>
  );
}
