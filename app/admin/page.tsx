import Link from "next/link";
import { PageHeader } from "@/components/dashboard/page-header";
import { DEMO_INQUIRIES, POSTS, TRIPS, VESSELS } from "@/lib/demo/catalog";

export default function AdminDashboardPage() {
  const stats = [
    { label: "Viajes publicados", value: TRIPS.length, href: "/admin/viajes" },
    { label: "Embarcaciones", value: VESSELS.length, href: "/admin/embarcaciones" },
    { label: "Notas de blog", value: POSTS.length, href: "/admin/blog" },
    { label: "Consultas nuevas", value: DEMO_INQUIRIES.filter((item) => item.status === "nuevo").length, href: "/admin/consultas" },
  ];

  return (
    <div>
      <PageHeader
        title="Panel"
        description="Viajes, tipos de experiencia, embarcaciones, blog y consultas."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Link key={stat.href} href={stat.href} className="rounded-xl border border-brand-border bg-white p-5">
            <p className="font-heading text-4xl text-brand-primary">{stat.value}</p>
            <p className="mt-1 text-sm text-brand-muted">{stat.label}</p>
          </Link>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link href="/admin/viajes/nuevo" className="font-medium text-brand-secondary">
          + Nuevo viaje
        </Link>
        <Link href="/admin/blog/nuevo" className="font-medium text-brand-secondary">
          + Nueva nota
        </Link>
        <Link href="/" className="font-medium text-brand-secondary">
          Ver el sitio
        </Link>
      </div>
    </div>
  );
}
