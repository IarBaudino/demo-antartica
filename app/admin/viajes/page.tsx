import Link from "next/link";
import { PageHeader } from "@/components/dashboard/page-header";
import { REGION_LABEL, TRIPS } from "@/lib/demo/catalog";

export default function AdminViajesPage() {
  return (
    <div>
      <PageHeader
        title="Viajes"
        description="Crear, editar y publicar. Cada viaje tiene destino, tipo, itinerario y embarcación."
        action={
          <Link href="/admin/viajes/nuevo" className="text-sm font-semibold text-brand-secondary">
            + Nuevo viaje
          </Link>
        }
      />
      <div className="overflow-hidden rounded-xl border border-brand-border bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-brand-border text-xs uppercase tracking-[0.14em] text-brand-secondary">
            <tr>
              <th className="px-4 py-3 font-medium">Viaje</th>
              <th className="px-4 py-3 font-medium">Destino</th>
              <th className="px-4 py-3 font-medium">Tipo</th>
              <th className="px-4 py-3 font-medium">Duración</th>
            </tr>
          </thead>
          <tbody>
            {TRIPS.map((trip) => (
              <tr key={trip.slug} className="border-b border-brand-border last:border-0">
                <td className="px-4 py-3">
                  <Link href={`/admin/viajes/${trip.slug}`} className="font-medium text-brand-primary hover:underline">
                    {trip.title}
                  </Link>
                </td>
                <td className="px-4 py-3">{REGION_LABEL[trip.region]}</td>
                <td className="px-4 py-3">{trip.experienceType}</td>
                <td className="px-4 py-3">{trip.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
