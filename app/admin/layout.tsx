import type { Metadata } from "next";
import { AdminDashboardLayout } from "@/features/admin/components/admin-dashboard-layout";
import { isDemoMode } from "@/lib/demo/mode";
import { requireAdmin } from "@/lib/auth/require-auth";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  if (isDemoMode()) {
    return (
      <AdminDashboardLayout email="Vista de demostración">
        <p className="mb-6 rounded-lg border border-brand-border bg-brand-ice px-4 py-3 text-sm leading-relaxed text-brand-charcoal">
          Así ve el equipo el panel. En esta demostración los datos ya están cargados.
          En el sitio publicado, crear y editar guarda de verdad.
        </p>
        {children}
      </AdminDashboardLayout>
    );
  }

  const user = await requireAdmin();
  return <AdminDashboardLayout email={user.email}>{children}</AdminDashboardLayout>;
}
