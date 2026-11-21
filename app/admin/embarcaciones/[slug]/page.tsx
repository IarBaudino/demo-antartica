import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/dashboard/page-header";
import { DemoSaveButton } from "@/components/polar/demo-save";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getVessel, tripsForVessel } from "@/lib/demo/catalog";

type Props = { params: Promise<{ slug: string }> };

export default async function AdminVesselPage({ params }: Props) {
  const { slug } = await params;
  const vessel = getVessel(slug);
  if (!vessel) notFound();
  const trips = tripsForVessel(vessel.slug);

  return (
    <div>
      <PageHeader
        title={vessel.name}
        description="Características que se muestran en la página del barco."
        action={
          <Link href={`/embarcaciones/${vessel.slug}`} className="text-sm text-brand-secondary">
            Ver en el sitio
          </Link>
        }
      />
      <div className="grid max-w-3xl gap-5">
        <Input label="Nombre" name="name" defaultValue={vessel.name} />
        <Input label="Tipo" name="kind" defaultValue={vessel.kind} />
        <Textarea label="Descripción" name="description" defaultValue={vessel.description} rows={5} />
        <div className="grid gap-4 sm:grid-cols-2">
          {vessel.specs.map((spec) => (
            <Input key={spec.label} label={spec.label} name={spec.label} defaultValue={spec.value} />
          ))}
        </div>
        <p className="text-sm text-brand-muted">
          Viajes asociados: {trips.map((trip) => trip.title).join(" · ")}
        </p>
        <DemoSaveButton label="Guardar embarcación" />
      </div>
    </div>
  );
}
