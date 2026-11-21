import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/dashboard/page-header";
import { TripEditor } from "@/components/polar/trip-editor";
import { getTrip } from "@/lib/demo/catalog";

type Props = { params: Promise<{ slug: string }> };

export default async function EditarViajePage({ params }: Props) {
  const { slug } = await params;
  const trip = getTrip(slug);
  if (!trip) notFound();

  return (
    <div>
      <PageHeader
        title={trip.title}
        description="Edición de la ficha que se ve en el sitio."
        action={
          <Link href={`/viajes/${trip.slug}`} className="text-sm text-brand-secondary">
            Ver en el sitio
          </Link>
        }
      />
      <TripEditor trip={trip} />
    </div>
  );
}
