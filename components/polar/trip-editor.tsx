"use client";

import { DemoSaveButton } from "@/components/polar/demo-save";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EXPERIENCE_TYPES, VESSELS, type Trip } from "@/lib/demo/catalog";

export function TripEditor({ trip }: { trip?: Trip }) {
  const vesselName = VESSELS.find((item) => item.slug === trip?.vesselSlug)?.name ?? VESSELS[0]!.name;

  return (
    <form
      className="grid max-w-3xl gap-5"
      onSubmit={(event) => event.preventDefault()}
    >
      <Input label="Nombre" name="title" defaultValue={trip?.title ?? ""} placeholder="Nombre del viaje" />
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-brand-charcoal">
          Destino
          <select
            name="region"
            defaultValue={trip?.region ?? "antartida"}
            className="mt-1.5 w-full rounded-lg border border-brand-border bg-white px-4 py-2.5"
          >
            <option value="antartida">Antártida</option>
            <option value="artico">Ártico</option>
          </select>
        </label>
        <label className="text-sm font-medium text-brand-charcoal">
          Tipo de experiencia
          <select
            name="type"
            defaultValue={trip?.experienceType ?? EXPERIENCE_TYPES[0]!.name}
            className="mt-1.5 w-full rounded-lg border border-brand-border bg-white px-4 py-2.5"
          >
            {EXPERIENCE_TYPES.map((type) => (
              <option key={type.name}>{type.name}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="Duración" name="duration" defaultValue={trip?.duration ?? ""} placeholder="11 días" />
        <label className="text-sm font-medium text-brand-charcoal">
          Embarcación
          <select
            name="vessel"
            defaultValue={vesselName}
            className="mt-1.5 w-full rounded-lg border border-brand-border bg-white px-4 py-2.5"
          >
            {VESSELS.map((vessel) => (
              <option key={vessel.slug}>{vessel.name}</option>
            ))}
          </select>
        </label>
      </div>
      <Textarea
        label="Descripción"
        name="description"
        defaultValue={trip?.description ?? ""}
        rows={5}
      />
      <Textarea
        label="Itinerario"
        name="itinerary"
        defaultValue={trip?.itinerary.map((step) => `${step.day} — ${step.title}. ${step.text}`).join("\n") ?? ""}
        rows={6}
      />
      <label className="flex items-center gap-2 text-sm text-brand-charcoal">
        <input type="checkbox" defaultChecked={trip ? true : false} />
        Publicado en el sitio
      </label>
      {trip ? (
        <p className="text-sm text-brand-muted">
          Galería: {trip.images.length} imágenes cargadas. En el panel publicado se agregan desde acá.
        </p>
      ) : (
        <p className="text-sm text-brand-muted">Las fotos se suben en este mismo formulario cuando el panel está publicado.</p>
      )}
      <DemoSaveButton label={trip ? "Guardar cambios" : "Publicar viaje"} />
    </form>
  );
}
