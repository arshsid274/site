import type { Metadata } from "next";
import Link from "next/link";
import { COMPANIES, companyPath } from "@/lib/site";
import { SiteImage, companyLeadSlot } from "@/components/site-image";
import {
  ButtonLink,
  Container,
  PageTitle,
  Prose,
  Section,
  SectionTitle,
} from "@/components/primitives";
import { RevealGroup } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Our Companies | Lamer Holdings Group Subsidiaries",
  description:
    "Explore the six Lamer Holdings subsidiaries: Uzima, Manze, Zil Engineering, Lorizon Machinery, Elite Airlines and Edenco Oil & Gas. Six sectors, one group.",
  alternates: { canonical: "/companies" },
};

const ADJACENCIES = [
  {
    title: "Machinery and construction",
    body: "Zil's civil engineering work and Lorizon's machinery and spare parts business sit in the same group, which allows equipment specification, parts availability and maintenance planning to be coordinated when a project is scoped rather than after mobilisation.",
  },
  {
    title: "Time and temperature",
    body: "Three of our businesses face the same constraint from different directions: pharmaceuticals and medical consumables, food and raw materials, and critical spare parts where equipment is standing idle. Uzima and Manze work to a common temperature-integrity discipline across receipt, storage and onward movement.",
  },
  {
    title: "Bundled delivery where a client wants it",
    body: "A hospital, clinic, laboratory or food-processing facility requires construction, plant and equipment, and commissioning supply: three procurements a client would normally run separately. Our structure allows them to be contracted through a single group counterparty. Where a client prefers to contract each company directly, they can.",
  },
  {
    title: "One compliance perimeter",
    body: "Rather than let each company set its own threshold for counterparty due diligence, sanctions screening and anti-bribery, the group operates one standard across all six subsidiaries: the standard its most regulated activities require.",
  },
];

export default function CompaniesPage() {
  return (
    <>
      <Container width="wide" className="pt-14 pb-14 md:pt-20 md:pb-16">
        <div className="enter-group max-w-[46rem]">
          <PageTitle>The companies of Lamer Holdings</PageTitle>
          <p className="measure-wide mt-6 text-[1.075rem] leading-[1.6] text-[var(--text-secondary)]">
            Six subsidiaries operating independently within their industries,
            each drawing on the governance, capital and shared functions of the
            wider group.
          </p>
        </div>
      </Container>

      {/* The honesty paragraph. The most credibility-positive content on
          the site, and it belongs above the portfolio rather than below. */}
      <Section width="prose" tint>
        <SectionTitle serif>Six companies, one group</SectionTitle>
        <Prose className="mt-5">
          <p>
            A word on what we do and do not claim here. Unrelated businesses
            under one owner rarely produce the commercial synergies their
            brochures promise, and we are not going to assert any.
          </p>
          <p>
            What group ownership genuinely produces is capability synergy: shared
            functions, shared standards and shared infrastructure that each
            company can draw on and none had to build. Where our businesses can
            serve one another, they do so on the same commercial terms as any
            third party.
          </p>
          <p>That is the honest version, and it is the one we work to.</p>
        </Prose>
      </Section>

      {/* Portfolio. Each entry gets a genuine summary above the link
          rather than a bare grid. */}
      <Section width="wide">
        <RevealGroup className="border-t border-[var(--rule)]">
          {COMPANIES.map((c) => (
            <article
              key={c.slug}
              className="grid gap-4 border-b border-[var(--rule)] py-8 md:grid-cols-12 md:gap-8 md:py-10"
            >
              <div className="md:col-span-4">
                <SiteImage
                  slot={companyLeadSlot(c.slug) ?? ""}
                  aspect="aspect-[16/9]"
                  className="mb-4"
                  sizes="(min-width: 768px) 20rem, 100vw"
                />
                <p className="meta-label mb-2">{c.sectorShort}</p>
                <h2 className="display text-[1.4rem] leading-snug">
                  <Link
                    href={companyPath(c.slug)}
                    className="transition-colors hover:text-[var(--link)]"
                  >
                    {c.name}
                  </Link>
                </h2>
              </div>
              <div className="md:col-span-8">
                <p className="text-[0.9875rem] leading-[1.65] text-[var(--text-secondary)]">
                  {c.summary}
                </p>
                <p className="mt-4">
                  <Link
                    href={companyPath(c.slug)}
                    className="link-underline text-[0.9375rem] font-medium text-[var(--link)] transition-colors hover:text-[var(--link-hover)]"
                  >
                    {c.name}: {c.sector}
                  </Link>
                </p>
              </div>
            </article>
          ))}
        </RevealGroup>
      </Section>

      <Section width="wide">
        <SectionTitle serif>
          How our companies work alongside each other
        </SectionTitle>
        <p className="measure-wide mt-4 text-[0.9875rem] leading-[1.65] text-[var(--text-secondary)]">
          Five of our six businesses import, handle and distribute physical
          goods. Medical consumables, food raw materials, construction materials,
          spare parts and lubricants are all import, clearance and distribution
          flows, so freight forwarding, customs documentation, warehousing and
          last-mile handling are treated as a group capability rather than five
          separate learning curves. Some adjacencies are more specific.
        </p>

        <div className="mt-9 grid gap-6 md:grid-cols-2 lg:gap-8">
          {ADJACENCIES.map((a) => (
            <div key={a.title} className="border-t border-[var(--rule)] pt-5">
              <h3 className="text-[1rem] font-semibold text-[var(--text)]">
                {a.title}
              </h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-[var(--text-secondary)]">
                {a.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section width="prose">
        <SectionTitle>Enquiries about a specific company</SectionTitle>
        <p className="measure-wide mt-4 text-[0.9375rem] leading-relaxed text-[var(--text-secondary)]">
          Each company has its own contact route. If you are not sure which
          company you need, the group office will route your enquiry.
        </p>
        <div className="mt-6">
          <ButtonLink href="/contact">Contact us</ButtonLink>
        </div>
      </Section>
    </>
  );
}
