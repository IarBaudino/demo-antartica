/**
 * Identidad de la agencia. Cada cliente se configura con NEXT_PUBLIC_BRAND_*.
 * Los fallbacks son placeholders de plantilla, no de un cliente real.
 */
function env(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value || undefined;
}

function csv(name: string, fallback: string[]): string[] {
  const raw = env(name);
  if (!raw) return fallback;
  return raw
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function getAppUrl(): string {
  return (env("NEXT_PUBLIC_APP_URL") ?? "http://localhost:3000").replace(/\/$/, "");
}

const agencyName = env("NEXT_PUBLIC_BRAND_NAME") ?? "Aurora Polar";
const shortName = env("NEXT_PUBLIC_BRAND_SHORT_NAME") ?? "Aurora Polar";
const city = env("NEXT_PUBLIC_BRAND_CITY") ?? "Buenos Aires";
const region = env("NEXT_PUBLIC_BRAND_REGION") ?? "Argentina";
const country = env("NEXT_PUBLIC_BRAND_COUNTRY") ?? "Argentina";
const countryCode = env("NEXT_PUBLIC_BRAND_COUNTRY_CODE") ?? "AR";
const slug = env("NEXT_PUBLIC_BRAND_SLUG") ?? "agencia";

export const brand = {
  agencyName,
  shortName,
  slug,
  logo: {
    src: env("NEXT_PUBLIC_BRAND_LOGO_SRC") ?? "/logo.png",
    width: Number(env("NEXT_PUBLIC_BRAND_LOGO_WIDTH") ?? "240"),
    height: Number(env("NEXT_PUBLIC_BRAND_LOGO_HEIGHT") ?? "280"),
  },
  locale: env("NEXT_PUBLIC_BRAND_LOCALE") ?? "es_AR",
  htmlLang: env("NEXT_PUBLIC_BRAND_HTML_LANG") ?? "es",
  currency: env("NEXT_PUBLIC_BRAND_CURRENCY") ?? "ARS",
  countryCallingCode: env("NEXT_PUBLIC_BRAND_CALLING_CODE") ?? "54",
  whatsappNumber: env("NEXT_PUBLIC_WHATSAPP_NUMBER") ?? "5491155501011",
  email: env("NEXT_PUBLIC_BRAND_EMAIL") ?? "hola@aurorapolar.com",
  phoneLabel: env("NEXT_PUBLIC_BRAND_PHONE_LABEL") ?? "(11) 5550-0101",
  phoneDigits: env("NEXT_PUBLIC_BRAND_PHONE_DIGITS") ?? "1155501011",
  location: {
    city,
    region,
    country,
    countryCode,
    address: env("NEXT_PUBLIC_BRAND_ADDRESS") ?? `${city}, ${region}, ${country}`,
    line: env("NEXT_PUBLIC_BRAND_LOCATION_LINE") ?? `${city} · ${region}`,
  },
  social: {
    instagramUrl: env("NEXT_PUBLIC_INSTAGRAM_URL") ?? "",
    instagramHandle: env("NEXT_PUBLIC_INSTAGRAM_HANDLE") ?? "",
  },
  seo: {
    titleDefault:
      env("NEXT_PUBLIC_SEO_TITLE") ?? `${agencyName} | Viajes a Antártida y Ártico`,
    titleTemplate: env("NEXT_PUBLIC_SEO_TITLE_TEMPLATE") ?? `%s | ${agencyName}`,
    description:
      env("NEXT_PUBLIC_SEO_DESCRIPTION") ??
      `Expediciones a la Antártida y al Ártico. Viajes, embarcaciones y consulta directa con ${agencyName}.`,
    keywords: csv("NEXT_PUBLIC_SEO_KEYWORDS", [
      "viajes Antártida",
      "cruceros Ártico",
      "expediciones polares",
      "embarcaciones antárticas",
      shortName,
    ]),
  },
  theme: {
    primary: env("NEXT_PUBLIC_THEME_PRIMARY") ?? "#123044",
    primaryDark: env("NEXT_PUBLIC_THEME_PRIMARY_DARK") ?? "#0B1E2D",
    secondary: env("NEXT_PUBLIC_THEME_SECONDARY") ?? "#2F6F82",
    secondaryHover: env("NEXT_PUBLIC_THEME_SECONDARY_HOVER") ?? "#245868",
    charcoal: env("NEXT_PUBLIC_THEME_CHARCOAL") ?? "#1A242B",
    charcoalMuted: env("NEXT_PUBLIC_THEME_CHARCOAL_MUTED") ?? "#5C6B73",
    sand: env("NEXT_PUBLIC_THEME_SAND") ?? "#F4F7F8",
    ice: env("NEXT_PUBLIC_THEME_ICE") ?? "#E6EEF1",
    surface: env("NEXT_PUBLIC_THEME_SURFACE") ?? "#F8FBFC",
    border: env("NEXT_PUBLIC_THEME_BORDER") ?? "#D5E0E4",
  },
  developerCredit: {
    enabled: env("NEXT_PUBLIC_DEVELOPER_CREDIT") !== "false",
    name: env("NEXT_PUBLIC_DEVELOPER_NAME") ?? "Iara Baudino",
    url: env("NEXT_PUBLIC_DEVELOPER_URL") ?? "https://www.iarabaudinodev.com.ar",
  },
  cartStorageKey: env("NEXT_PUBLIC_CART_STORAGE_KEY") ?? `${slug}-cart-v10`,
} as const;

export function brandLogoAlt(): string {
  return brand.agencyName;
}

export function brandEmailSignatureHtml(): string {
  return `Equipo ${brand.agencyName}<br>${brand.location.city}, ${brand.location.region}`;
}

export function brandEmailSignatureText(): string {
  return `Equipo ${brand.agencyName} — ${brand.location.city}, ${brand.location.region}`;
}

export function brandLogoHtml(width = 120): string {
  const src = `${getAppUrl()}${brand.logo.src}`;
  return `<img src="${src}" alt="${brand.agencyName}" width="${width}" style="display:block;margin:0 0 20px 0" />`;
}

export function brandThemeCssVars(): Record<string, string> {
  const { theme } = brand;
  return {
    "--color-brand-primary": theme.primary,
    "--color-brand-primary-dark": theme.primaryDark,
    "--color-brand-secondary": theme.secondary,
    "--color-brand-secondary-hover": theme.secondaryHover,
    "--color-brand-accent": theme.primary,
    "--color-brand-forest": theme.primary,
    "--color-brand-charcoal": theme.charcoal,
    "--color-brand-charcoal-muted": theme.charcoalMuted,
    "--color-brand-muted": theme.charcoalMuted,
    "--color-brand-sand": theme.sand,
    "--color-brand-ice": theme.ice,
    "--color-brand-surface": theme.surface,
    "--color-brand-border": theme.border,
  };
}

export function formatPhoneHref(digits: string): { tel: string; whatsapp: string } {
  const cleaned = digits.replace(/\D/g, "");
  const code = brand.countryCallingCode;
  const national = cleaned.startsWith(code) ? cleaned.slice(code.length) : cleaned;
  return {
    tel: `tel:+${code}${national}`,
    whatsapp: `https://wa.me/${code}${national}`,
  };
}
