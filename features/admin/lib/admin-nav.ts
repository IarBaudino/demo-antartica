import {
  Compass,
  LayoutDashboard,
  MessageSquare,
  Newspaper,
  Ship,
  Tag,
} from "lucide-react";
import type { DashboardNavItem } from "@/components/dashboard/dashboard-shell";

export const ADMIN_NAV: DashboardNavItem[] = [
  { href: "/admin", label: "Resumen", icon: LayoutDashboard, exact: true },
  { href: "/admin/viajes", label: "Viajes", icon: Compass },
  { href: "/admin/tipos", label: "Tipos de viaje", icon: Tag },
  { href: "/admin/embarcaciones", label: "Embarcaciones", icon: Ship },
  { href: "/admin/blog", label: "Blog", icon: Newspaper },
  { href: "/admin/consultas", label: "Consultas", icon: MessageSquare },
];
