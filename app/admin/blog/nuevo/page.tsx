import Link from "next/link";
import { PageHeader } from "@/components/dashboard/page-header";
import { DemoSaveButton } from "@/components/polar/demo-save";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function NuevaNotaPage() {
  return (
    <div>
      <PageHeader
        title="Nueva nota"
        description="Título, bajada e imagen de presentación. El texto largo es la página de lectura."
        action={
          <Link href="/admin/blog" className="text-sm text-brand-secondary">
            Volver
          </Link>
        }
      />
      <div className="grid max-w-3xl gap-5">
        <Input label="Título" name="title" placeholder="Título de la nota" />
        <Textarea label="Bajada" name="excerpt" rows={3} placeholder="El texto corto del listado" />
        <Textarea label="Nota" name="body" rows={8} placeholder="El artículo" />
        <p className="text-sm text-brand-muted">La imagen de portada se carga en este formulario en el panel publicado.</p>
        <DemoSaveButton label="Publicar nota" />
      </div>
    </div>
  );
}
