import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/providers";
import { brand, brandThemeCssVars, getAppUrl } from "@/config/brand";

const fontSans = Outfit({
  subsets: ["latin"],
  variable: "--font-brand-sans",
  display: "swap",
});

const fontHeading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-brand-heading",
  display: "swap",
});

const appUrl = getAppUrl();

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: {
    default: brand.seo.titleDefault,
    template: brand.seo.titleTemplate,
  },
  description: brand.seo.description,
  keywords: [...brand.seo.keywords],
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg" }],
    shortcut: ["/icon.svg"],
  },
  openGraph: {
    type: "website",
    locale: brand.locale,
    url: appUrl,
    siteName: brand.agencyName,
    title: brand.seo.titleDefault,
    description: brand.seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: brand.seo.titleDefault,
    description: brand.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={brand.htmlLang}
      className={`${fontSans.variable} ${fontHeading.variable}`}
      style={brandThemeCssVars() as CSSProperties}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
