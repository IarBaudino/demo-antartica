import { brand } from "@/config/brand";
import type { SiteSettings } from "@/types/site-settings";

export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  hero: {
    eyebrow: brand.location.line,
    title: "Antártida y Ártico",
    subtitle: "El viaje empieza mucho antes de embarcar",
    ctaPrimaryLabel: "Ver excursiones",
    ctaPrimaryHref: "/#excursiones",
    ctaSecondaryLabel: "Consultanos",
    ctaSecondaryHref: "/#consulta",
    backgroundImages: [],
    backgroundMedia: [],
  },
  excursionsPreview: {
    title: "Viajes",
    description: "Expediciones a la Antártida y al Ártico, organizadas por destino y tipo de experiencia.",
  },
  packagesPreview: {
    title: "Nuestros Paquetes",
    description:
      "Combinaciones pensadas para aprovechar mejor tu estadía. Armamos el itinerario según tus fechas.",
  },
  about: {
    title: "Nosotros",
    quote: "Diseñamos expediciones polares con tiempo, criterio y los barcos adecuados.",
    values: [
      {
        title: "Criterio",
        text: "Recomendamos un viaje cuando encaja con la época, el ritmo y lo que la persona quiere ver.",
      },
      {
        title: "Los barcos",
        text: "Cada salida está ligada a una embarcación concreta: capacidad, clase de hielo y estilo de navegación.",
      },
      {
        title: "Acompañamiento",
        text: "La consulta queda registrada con el viaje que la persona estaba mirando, y se responde desde el panel.",
      },
    ],
    closingText: `${brand.agencyName} presenta viajes a la Antártida y al Ártico. El equipo actualiza destinos, barcos y notas desde el panel, sin depender de un desarrollador para el día a día.`,
  },
  inquiry: {
    title: "Consultanos por un viaje",
    subtitle: "Contanos la época, el destino y cuántos viajan. Te respondemos con opciones concretas.",
  },
  footer: {
    brandName: brand.agencyName,
    tagline: "Expediciones a la Antártida y al Ártico. Viajes, embarcaciones y consulta directa.",
    address: brand.location.address,
    email: brand.email,
    phoneLabel: brand.phoneLabel,
    phoneNumber: brand.phoneDigits,
  },
  social: {
    instagramUrl: brand.social.instagramUrl,
    instagramHandle: brand.social.instagramHandle,
  },
  googleReviews: {
    enabled: false,
    placeId: "",
    title: "Lo que dicen en Google",
  },
  booking: {
    orderHoldHours: 48,
    hoursBeforeDeparture: 2,
    holdWarningMessage: "",
  },
};
