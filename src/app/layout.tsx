import type { Metadata } from "next";
import { Inter, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import { SITE, COMPANIES } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Lamer Holdings | Diversified Holding Company Group",
    template: "%s | Lamer Holdings",
  },
  description:
    "Lamer Holdings is a diversified holding company operating six subsidiaries across medical, food, construction, machinery, aviation and oil and gas.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en",
    url: SITE.url,
  },
  robots: { index: true, follow: true },
};

/**
 * Organization graph.
 *
 * The parent declares subOrganization here; each child declares
 * parentOrganization on its own page. Declaring one side alone is the
 * most common implementation error. The @id values must match byte for
 * byte on both sides, or this resolves to fourteen separate entities
 * instead of seven.
 *
 * LocalBusiness is deliberately not used anywhere on this site. The
 * Seychelles address is a registered-agent address, not a place of
 * business that customers visit, and marking it as LocalBusiness would
 * be a factual misstatement in structured data.
 */
function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "Corporation"],
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        legalName: SITE.name,
        url: `${SITE.url}/`,
        description:
          "Lamer Holdings is a diversified holding company that owns and supports six subsidiary companies operating in medical services, food services, construction services, machinery and spare parts, aviation services, and oil and gas services.",
        email: SITE.email,
        address: {
          "@type": "PostalAddress",
          name: "Registered office",
          streetAddress: `${SITE.registeredOffice.line1}, ${SITE.registeredOffice.line2}`,
          addressLocality: "Mont Fleuri",
          addressRegion: SITE.registeredOffice.locality,
          addressCountry: SITE.registeredOffice.countryCode,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: SITE.email,
            availableLanguage: ["en"],
          },
          {
            "@type": "ContactPoint",
            contactType: "compliance",
            email: SITE.complianceEmail,
            availableLanguage: ["en"],
          },
          {
            "@type": "ContactPoint",
            contactType: "procurement",
            email: SITE.procurementEmail,
            availableLanguage: ["en"],
          },
        ],
        subOrganization: COMPANIES.map((c) => ({
          "@type": "Organization",
          "@id": `${SITE.url}/companies/${c.slug}/#organization`,
          name: c.name.replace(/\.$/, ""),
          url: `${SITE.url}/companies/${c.slug}/`,
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: `${SITE.url}/`,
        name: SITE.name,
        publisher: { "@id": `${SITE.url}/#organization` },
        inLanguage: "en",
      },
    ],
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${sourceSerif.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {/*
          Marks the document as scripted, before the body paints.

          Every scroll-reveal hidden state in globals.css is scoped to
          html.js. Without this the rule would apply to everyone, and a
          visitor without JavaScript — including a good deal of
          automated compliance and banking review tooling — would
          receive a page of invisible text, since nothing would ever
          arrive to set data-revealed.

          It runs here rather than in <head> so it cannot block the
          stylesheet, and still executes before any revealed content is
          parsed, which is what keeps the class from arriving late and
          flashing the content out.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <a
          href="#main"
          className="sr-only rounded-sm px-4 py-2 text-sm font-medium focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-[var(--surface)] focus:shadow-md"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
