"use client";

import { useEffect, useState } from "react";
import { PageHeader } from "@/components/dashboard/page-header";
import { DEMO_INQUIRIES, type DemoInquiry } from "@/lib/demo/catalog";
import { demoInbox } from "@/lib/demo/inbox";

function replyHref(item: DemoInquiry) {
  const subject = item.relatedTitle
    ? `Consulta: ${item.relatedTitle}`
    : "Consulta desde el sitio";
  const body = `Hola ${item.name},\n\nGracias por escribirnos${
    item.relatedTitle ? ` sobre ${item.relatedTitle}` : ""
  }.\n\n`;
  return `mailto:${item.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function AdminConsultasPage() {
  const [items, setItems] = useState<DemoInquiry[]>(DEMO_INQUIRIES);

  useEffect(() => {
    setItems(demoInbox());
  }, []);

  return (
    <div>
      <PageHeader
        title="Consultas"
        description="Mensajes del sitio. Si la persona escribió desde un viaje, la referencia queda junto al contacto. Responder abre el correo con destinatario y asunto listos."
      />
      <div className="space-y-4">
        {items.map((item) => (
          <article key={item.id} className="rounded-xl border border-brand-border bg-white p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-lg text-brand-charcoal">{item.name}</h2>
                <p className="text-sm text-brand-muted">{item.email}</p>
              </div>
              <span className="rounded-full bg-brand-ice px-3 py-1 text-xs font-medium text-brand-primary">
                {item.status === "nuevo" ? "Nueva" : "Respondida"}
              </span>
            </div>
            {item.relatedTitle ? (
              <p className="mt-3 text-sm text-brand-secondary">Viaje: {item.relatedTitle}</p>
            ) : (
              <p className="mt-3 text-sm text-brand-muted">Consulta general</p>
            )}
            <p className="mt-3 text-sm leading-relaxed text-brand-charcoal">{item.message}</p>
            <a
              href={replyHref(item)}
              className="mt-4 inline-flex rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-white"
            >
              Responder
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
