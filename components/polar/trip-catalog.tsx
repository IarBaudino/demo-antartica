"use client";

import { useMemo, useState } from "react";
import { TripCard } from "@/components/polar/trip-card";
import { EXPERIENCE_TYPES, REGION_LABEL, type Region, type Trip } from "@/lib/demo/catalog";
import { cn } from "@/lib/utils";

const regions: Array<{ id: "todos" | Region; label: string }> = [
  { id: "todos", label: "Todos" },
  { id: "antartida", label: REGION_LABEL.antartida },
  { id: "artico", label: REGION_LABEL.artico },
];

export function TripCatalog({ trips }: { trips: Trip[] }) {
  const [region, setRegion] = useState<(typeof regions)[number]["id"]>("todos");
  const [type, setType] = useState("todos");

  const filtered = useMemo(
    () =>
      trips.filter((trip) => {
        if (region !== "todos" && trip.region !== region) return false;
        if (type !== "todos" && trip.experienceType !== type) return false;
        return true;
      }),
    [trips, region, type]
  );

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Destino">
          {regions.map((item) => (
            <FilterChip
              key={item.id}
              active={region === item.id}
              onClick={() => setRegion(item.id)}
            >
              {item.label}
            </FilterChip>
          ))}
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Tipo de experiencia">
          <FilterChip active={type === "todos"} onClick={() => setType("todos")}>
            Todos los tipos
          </FilterChip>
          {EXPERIENCE_TYPES.map((item) => (
            <FilterChip key={item.name} active={type === item.name} onClick={() => setType(item.name)}>
              {item.name}
            </FilterChip>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-brand-muted">No hay viajes con ese filtro. Probá otra combinación.</p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((trip) => (
            <TripCard key={trip.slug} trip={trip} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-1.5 text-sm",
        active
          ? "border-brand-primary bg-brand-primary text-white"
          : "border-brand-border bg-white text-brand-charcoal hover:border-brand-secondary"
      )}
    >
      {children}
    </button>
  );
}
