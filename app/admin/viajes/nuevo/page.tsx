import Link from "next/link";
import { PageHeader } from "@/components/dashboard/page-header";
import { TripEditor } from "@/components/polar/trip-editor";

export default function NuevoViajePage() {
  return (
    <div>
      <PageHeader
        title="Nuevo viaje"
        description="Los campos que después completa el equipo: destino, tipo, duración, barco e itinerario."
        action={
          <Link href="/admin/viajes" className="text-sm text-brand-secondary">
            Volver al listado
          </Link>
        }
      />
      <TripEditor />
    </div>
  );
}
