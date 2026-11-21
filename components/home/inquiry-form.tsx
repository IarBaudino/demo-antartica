"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  inquiryFormFieldsSchema,
  type InquiryFormFields,
} from "@/schemas/inquiry";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle } from "lucide-react";
import type { SiteSettings } from "@/types/site-settings";
import { rememberDemoInquiry } from "@/lib/demo/inbox";
import { cn } from "@/lib/utils";

type RelatedKind = "excursion" | "package" | "viaje";

type InquiryFormProps = {
  inquiry: SiteSettings["inquiry"];
  related?: { kind: RelatedKind; slug?: string; title?: string };
  variant?: "band" | "card";
};

function relatedLabel(kind?: string) {
  if (kind === "package") return "paquete";
  if (kind === "excursion") return "excursión";
  if (kind === "viaje") return "viaje";
  return "consulta";
}

export function InquiryForm({ inquiry, related, variant = "band" }: InquiryFormProps) {
  const searchParams = useSearchParams();
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [relatedKind, setRelatedKind] = useState<RelatedKind | undefined>(related?.kind);
  const [relatedSlug, setRelatedSlug] = useState(related?.slug ?? "");
  const [relatedTitle, setRelatedTitle] = useState(related?.title ?? "");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquiryFormFields>({
    resolver: zodResolver(inquiryFormFieldsSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    const kindRaw = searchParams.get("consulta")?.trim() || searchParams.get("kind")?.trim();
    const kind =
      kindRaw === "excursion" || kindRaw === "package" || kindRaw === "viaje" ? kindRaw : undefined;
    const slug = searchParams.get("slug")?.trim() || "";
    const title = searchParams.get("titulo")?.trim() || searchParams.get("title")?.trim() || "";

    if (related) {
      setRelatedKind(related.kind);
      setRelatedSlug(related.slug ?? "");
      setRelatedTitle(related.title ?? "");
      return;
    }

    setRelatedKind(kind);
    setRelatedSlug(slug);
    setRelatedTitle(title);
  }, [searchParams, related]);

  async function onSubmit(data: InquiryFormFields) {
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          ...(relatedKind ? { relatedKind } : {}),
          ...(relatedSlug ? { relatedSlug } : {}),
          ...(relatedTitle ? { relatedTitle } : {}),
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error ?? "Error al enviar la consulta");
      }

      rememberDemoInquiry({
        name: data.name,
        email: data.email,
        message: data.message,
        relatedTitle,
        relatedSlug,
      });
      setSubmitStatus("success");
      reset();
    } catch (err) {
      setSubmitStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Error desconocido");
    }
  }

  const card = variant === "card";

  return (
    <section
      id="consulta"
      className={cn("scroll-mt-24", card ? "bg-transparent py-0" : "bg-brand-primary py-20 text-white")}
    >
      <div className={cn("mx-auto max-w-2xl", card ? "" : "px-4 sm:px-6")}>
        <div className={card ? "" : "text-center"}>
          <h2 className={cn("text-3xl", card ? "text-brand-charcoal" : "text-white")}>{inquiry.title}</h2>
          <p className={cn("mt-3", card ? "text-brand-muted" : "text-brand-sand/85")}>{inquiry.subtitle}</p>
          {relatedTitle ? (
            <p
              className={cn(
                "mt-4 inline-block rounded-lg px-4 py-2 text-sm",
                card ? "bg-brand-ice text-brand-charcoal" : "bg-white/15 text-brand-sand"
              )}
            >
              Consultando por {relatedLabel(relatedKind)}:{" "}
              <span className={cn("font-semibold", card ? "text-brand-primary" : "text-white")}>
                {relatedTitle}
              </span>
            </p>
          ) : null}
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className={cn(
            "space-y-5 rounded-xl bg-white p-6 sm:p-8",
            card ? "mt-6 border border-brand-border" : "mt-10 shadow-[var(--shadow-elevated)]"
          )}
          noValidate
        >
          <Input
            label="Nombre completo"
            placeholder="Tu nombre"
            error={errors.name?.message}
            {...register("name")}
          />
          <Input
            label="Correo electrónico"
            type="email"
            placeholder="tu@email.com"
            error={errors.email?.message}
            {...register("email")}
          />
          <Textarea
            label="Tu consulta"
            placeholder="Contanos sobre tu viaje ideal..."
            error={errors.message?.message}
            {...register("message")}
          />

          {submitStatus === "success" && (
            <div
              className="flex items-center gap-2 rounded-lg bg-green-50 p-4 text-green-800"
              role="status"
            >
              <CheckCircle className="h-5 w-5 shrink-0" aria-hidden />
              <p>¡Consulta enviada! Te responderemos a la brevedad.</p>
            </div>
          )}

          {submitStatus === "error" && (
            <div
              className="flex items-center gap-2 rounded-lg bg-red-50 p-4 text-red-800"
              role="alert"
            >
              <AlertCircle className="h-5 w-5 shrink-0" aria-hidden />
              <p>{errorMessage}</p>
            </div>
          )}

          <Button type="submit" className="w-full" isLoading={isSubmitting} disabled={isSubmitting}>
            Enviar consulta
          </Button>
        </form>
      </div>
    </section>
  );
}
