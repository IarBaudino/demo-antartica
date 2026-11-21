"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function DemoSaveButton({ label = "Guardar" }: { label?: string }) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button type="button" onClick={() => setSaved(true)}>
        {label}
      </Button>
      {saved ? (
        <p className="text-sm text-brand-secondary" role="status">
          Listo. En el sitio publicado esto queda guardado en el panel.
        </p>
      ) : null}
    </div>
  );
}
