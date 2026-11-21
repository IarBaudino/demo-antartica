import { Suspense } from "react";
import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { InquiryForm } from "@/components/home/inquiry-form";
import { PageHero } from "@/components/polar/page-hero";
import { PhoneContact } from "@/components/layout/phone-contact";
import { brand } from "@/config/brand";
import { getSiteSettings } from "@/lib/site-settings/get-site-settings";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Consulta general, correo y WhatsApp para planear un viaje polar.",
};

export default async function ContactoPage() {
  const settings = await getSiteSettings();

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Escribinos"
        text="Si todavía no elegiste un viaje, empezá por acá. Si ya estás en una ficha, el formulario de esa página guarda el viaje."
        image="/demo/ship-2.jpg"
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:px-8">
        <div>
          <h2 className="text-3xl">Datos directos</h2>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-secondary" aria-hidden />
              <a href={`mailto:${brand.email}`} className="hover:text-brand-secondary">
                {brand.email}
              </a>
            </li>
            <li>
              <PhoneContact phoneLabel={brand.phoneLabel} phoneNumber={brand.phoneDigits} />
            </li>
            <li className="text-brand-muted">{brand.location.address}</li>
          </ul>
        </div>
        <Suspense fallback={null}>
          <InquiryForm
            variant="card"
            inquiry={{
              title: "Consulta general",
              subtitle: settings.inquiry.subtitle,
            }}
          />
        </Suspense>
      </section>
    </>
  );
}
