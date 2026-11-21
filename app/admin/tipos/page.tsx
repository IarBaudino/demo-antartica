"use client";

import { useState } from "react";
import { PageHeader } from "@/components/dashboard/page-header";
import { DemoSaveButton } from "@/components/polar/demo-save";
import { Input } from "@/components/ui/input";
import { EXPERIENCE_TYPES } from "@/lib/demo/catalog";

export default function TiposPage() {
  const [types, setTypes] = useState(EXPERIENCE_TYPES);
  const [name, setName] = useState("");

  return (
    <div>
      <PageHeader
        title="Tipos de viaje"
        description="Las categorías con las que se organiza el catálogo: expedición, navegación, fotografía, o las que el equipo sume."
      />
      <ul className="max-w-2xl divide-y divide-brand-border rounded-xl border border-brand-border bg-white">
        {types.map((type) => (
          <li key={type.name} className="flex items-start justify-between gap-4 px-4 py-4">
            <div>
              <p className="font-medium text-brand-charcoal">{type.name}</p>
              <p className="mt-1 text-sm text-brand-muted">{type.description}</p>
            </div>
            <button
              type="button"
              className="text-sm text-brand-secondary"
              onClick={() => setTypes((current) => current.filter((item) => item.name !== type.name))}
            >
              Quitar
            </button>
          </li>
        ))}
      </ul>
      <form
        className="mt-6 flex max-w-2xl flex-col gap-3 sm:flex-row sm:items-end"
        onSubmit={(event) => {
          event.preventDefault();
          const next = name.trim();
          if (!next) return;
          setTypes((current) => [...current, { name: next, description: "Categoría creada en la demostración." }]);
          setName("");
        }}
      >
        <Input label="Nuevo tipo" value={name} onChange={(event) => setName(event.target.value)} placeholder="Por ejemplo, Aventura familiar" />
        <button type="submit" className="rounded-lg bg-brand-primary px-4 py-2.5 text-sm font-semibold text-white">
          Agregar
        </button>
      </form>
      <div className="mt-6">
        <DemoSaveButton label="Guardar categorías" />
      </div>
    </div>
  );
}
