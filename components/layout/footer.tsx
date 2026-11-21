import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { brand } from "@/config/brand";
import { getSiteSettings } from "@/lib/site-settings/get-site-settings";
import { PhoneContact } from "@/components/layout/phone-contact";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export async function Footer() {
  const year = new Date().getFullYear();
  const { footer, social } = await getSiteSettings();

  return (
    <footer className="border-t border-brand-border bg-brand-charcoal text-brand-sand/90">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="font-heading text-3xl text-brand-sand">
              {footer.brandName}
            </Link>
            <h2 className="mt-4 text-lg text-brand-sand">Antártida y Ártico</h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-sand/80">{footer.tagline}</p>
          </div>

          <div>
            <h3 className="font-sans text-xs font-medium uppercase tracking-wider text-brand-secondary">
              Enlaces
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/viajes" className="hover:text-brand-sand">
                  Viajes
                </Link>
              </li>
              <li>
                <Link href="/embarcaciones" className="hover:text-brand-sand">
                  Embarcaciones
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-sand">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-brand-sand">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-brand-sand">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-brand-sand">
                  Administración
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs font-medium uppercase tracking-wider text-brand-secondary">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary" aria-hidden />
                <span>{footer.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-brand-secondary" aria-hidden />
                <a href={`mailto:${footer.email}`} className="hover:text-brand-sand">
                  {footer.email}
                </a>
              </li>
              <li>
                <PhoneContact
                  phoneLabel={footer.phoneLabel}
                  phoneNumber={footer.phoneNumber}
                />
              </li>
              {social.instagramUrl ? (
                <li>
                  <a
                    href={social.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-brand-sand"
                  >
                    <InstagramIcon className="h-4 w-4 shrink-0 text-brand-secondary" />
                    {social.instagramHandle}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-1 border-t border-white/10 pt-6 text-center text-xs text-brand-sand/55">
          <p>© {year} {footer.brandName}. Todos los derechos reservados.</p>
          {brand.developerCredit.enabled ? (
            <p>
              Desarrollado por{" "}
              <a
                href={brand.developerCredit.url}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-brand-sand/80 underline underline-offset-2 hover:text-brand-secondary"
              >
                {brand.developerCredit.name}
              </a>
            </p>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
