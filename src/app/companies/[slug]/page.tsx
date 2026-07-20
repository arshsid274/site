import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteImage, ImageGrid, COMPANY_IMAGES } from "@/components/site-image";
import { COMPANIES, SITE, getCompany, companyPath } from "@/lib/site";
import {
  ButtonLink,
  Container,
  DefRow,
  Notice,
  Prose,
  Section,
  SectionTitle,
  TextLink,
  Placeholder,
} from "@/components/primitives";

export function generateStaticParams() {
  return COMPANIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  props: PageProps<"/companies/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const company = getCompany(slug);
  if (!company) return {};
  return {
    title: company.metaTitle,
    description: company.metaDescription,
    alternates: { canonical: companyPath(company.slug) },
  };
}

/**
 * One template for all six subsidiary pages, so the site reads as a
 * single system. The skeleton is shared; the capability sections, the
 * process narrative and the buyer questions are specific to each
 * sector, which keeps shared boilerplate under roughly 15% of the page.
 * Six pages built from one template with only the nouns swapped would
 * be scaled content, not a design system.
 */
export default async function CompanyPage(
  props: PageProps<"/companies/[slug]">,
) {
  const { slug } = await props.params;
  const company = getCompany(slug);
  if (!company) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "Corporation"],
        "@id": `${SITE.url}/companies/${company.slug}/#organization`,
        name: company.name.replace(/\.$/, ""),
        url: `${SITE.url}/companies/${company.slug}/`,
        description: company.metaDescription,
        // No address here. Six entities publishing an identical
        // registered-agent address is a recognised shell signature.
        parentOrganization: {
          "@type": "Organization",
          "@id": `${SITE.url}/#organization`,
          name: SITE.name,
          url: `${SITE.url}/`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE.url}/companies/${company.slug}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE.url}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Our Companies",
            item: `${SITE.url}/companies/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: company.name.replace(/\.$/, ""),
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Container width="wide" className="pt-8 pb-14 md:pt-10 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-[0.8125rem] text-[var(--text-muted)]">
            <li>
              <Link href="/" className="transition-colors hover:text-[var(--link)]">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/companies"
                className="transition-colors hover:text-[var(--link)]"
              >
                Our companies
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-[var(--text-secondary)]">
              {company.shortName}
            </li>
          </ol>
        </nav>

        <div className="enter-group max-w-[48rem]">
          <p className="eyebrow mb-3">{company.sectorShort}</p>
          <h1 className="display text-[2rem] leading-[1.14] sm:text-[2.5rem]">
            {company.name}
          </h1>
          <p className="mt-3 text-[1.0625rem] text-[var(--text-muted)]">
            The {company.sector} company of Lamer Holdings
          </p>
        </div>
      </Container>

      <Section width="wide">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <SectionTitle serif>What {company.shortName} does</SectionTitle>
            <Prose className="mt-5">
              {company.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Prose>
          </div>
          {/* Sector illustration. Materials and products only: never a
              facility, never staff, never an identifiable site. The alt
              text is written so it cannot be read as a claim of ownership. */}
          <div className="lg:col-span-5 lg:pt-2">
            <SiteImage
              slot={COMPANY_IMAGES[company.slug]?.[0] ?? ""}
              aspect="aspect-[4/3]"
              sizes="(min-width: 1024px) 28rem, 100vw"
            />
          </div>
        </div>
      </Section>

      {/* Capabilities. The sub-sections differ substantially between
          companies; this is the part that must not read as a template. */}
      <Section width="wide">
        <SectionTitle serif>
          Our {company.sector} capabilities
        </SectionTitle>
        <div className="mt-9 grid gap-x-10 gap-y-9 lg:grid-cols-2">
          {company.capabilities.map((cap) => (
            <div key={cap.heading} className="border-t border-[var(--rule)] pt-5">
              <h3 className="text-[1.05rem] font-semibold text-[var(--text)]">
                {cap.heading}
              </h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-[var(--text-secondary)]">
                {cap.body}
              </p>
              {cap.items ? (
                <ul className="mt-4 space-y-1.5">
                  {cap.items.map((item) => (
                    <li
                      key={item}
                      className="pl-4 text-[0.875rem] leading-relaxed text-[var(--text-secondary)] before:mr-2 before:-ml-4 before:inline-block before:h-px before:w-2 before:translate-y-[-0.3em] before:bg-[var(--rule-strong)] before:align-middle"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
        <p className="mt-8 text-[0.8125rem] text-[var(--text-muted)]">
          <Placeholder>
            PLACEHOLDER (BLOCKING): confirm which capability lines are live and
            staffed today and which are planned, stated line by line
          </Placeholder>
        </p>

        <ImageGrid
          slots={(COMPANY_IMAGES[company.slug] ?? []).slice(1)}
          className="mt-12"
        />
      </Section>

      {/* The process narrative. This is the section that carries the
          page: it is what separates a real supplier page from a
          brochure, and it requires no facts we do not have. */}
      <Section width="prose" tint>
        <SectionTitle serif>How we work</SectionTitle>
        <Prose className="mt-5">
          {company.howWeWork.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Prose>
      </Section>

      <Section width="prose">
        <SectionTitle serif>{company.buyers.heading}</SectionTitle>
        <Prose className="mt-5">
          <p>{company.buyers.body}</p>
        </Prose>
      </Section>

      <Section width="prose">
        <SectionTitle serif>Quality, safety and compliance</SectionTitle>
        <Prose className="mt-5">
          {company.compliance.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Prose>
        <div className="mt-6">
          <Notice tone="warning" title="Before publication">
            <p>
              <Placeholder>
                PLACEHOLDER (BLOCKING): licences and certifications actually
                held, with issuing body, number, scope and expiry
              </Placeholder>
            </p>
            <p>
              Nothing on this page claims a certification. If none are held, say
              so plainly. The copy is written to survive that answer, and a
              claimed certificate that fails a register check contaminates every
              other statement on the site.
            </p>
          </Notice>
        </div>
        <p className="mt-6 text-[0.9375rem] text-[var(--text-secondary)]">
          Group approach to safety, environment and conduct:{" "}
          <TextLink href="/sustainability">sustainability and responsible business</TextLink>
          .
        </p>
      </Section>

      <Section width="prose">
        <SectionTitle serif>Questions buyers ask</SectionTitle>
        <dl className="mt-6 border-b border-[var(--rule)]">
          {company.faqs.map((f) => (
            <DefRow key={f.q} label={f.q}>
              {f.a}
            </DefRow>
          ))}
        </dl>
      </Section>

      {/* Related companies. Deliberately not called an integrated supply
          chain. Every cross-link is phrased as common ownership, which
          is the only fact known. */}
      <Section width="prose">
        <SectionTitle>Related companies in the Lamer Holdings group</SectionTitle>
        <ul className="mt-5 space-y-3">
          {company.related.map((r) => (
            <li key={r.slug}>
              <Link
                href={companyPath(r.slug)}
                className="link-underline text-[0.9375rem] font-medium text-[var(--link)] transition-colors hover:text-[var(--link-hover)]"
              >
                {r.anchor}
              </Link>
            </li>
          ))}
        </ul>
        <p className="measure-wide mt-5 text-[0.875rem] leading-relaxed text-[var(--text-muted)]">
          These companies share an owner. Where one can serve another, it does so
          on the same commercial terms as any third party.
        </p>
      </Section>

      <Section width="prose">
        <SectionTitle>Enquiries to {company.shortName}</SectionTitle>
        <p className="measure-wide mt-4 text-[0.9375rem] leading-relaxed text-[var(--text-secondary)]">
          Write to{" "}
          <TextLink href={`mailto:${company.email}`}>{company.email}</TextLink>,
          or use the group contact form and select {company.shortName}.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={`/contact?company=${company.slug}`}>
            Contact {company.shortName}
          </ButtonLink>
          <ButtonLink href="/companies" variant="tertiary">
            All companies
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
