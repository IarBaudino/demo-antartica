import Link from "next/link";
import { PageHeader } from "@/components/dashboard/page-header";
import { VESSELS, tripsForVessel } from "@/lib/demo/catalog";

export default function AdminEmbarcacionesPage() {
  return (
    <div>
      <PageHeader
        title="Embarcaciones"
        description="Fotos, descripción y características. Desde acá se vinculan con los viajes."
      />
      <div className="grid gap-4">
        {VESSELS.map((vessel) => {
          const trips = tripsForVessel(vessel.slug);
          return (
            <Link
              key={vessel.slug}
              href={`/admin/embarcaciones/${vessel.slug}`}
              className="rounded-xl border border-brand-border bg-white p-5"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-brand-secondary">{vessel.kind}</p>
              <h2 className="mt-1 font-heading text-3xl">{vessel.name}</h2>
              <p className="mt-2 text-sm text-brand-muted">
                {trips.length === 1 ? "1 viaje asociado" : `${trips.length} viajes asociados`}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
