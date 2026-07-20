import type { Metadata } from "next";
import { COMPANIES, SITE } from "@/lib/site";
import { CompanyCard } from "@/components/company-card";
import { GroupStructure } from "@/components/group-structure";
import { RevealGroup } from "@/components/reveal";
import { SiteImage } from "@/components/site-image";
import {
  ButtonLink,
  Container,
  DefRow,
  Prose,
  Section,
  SectionTitle,
  TextLink,
  Placeholder,
} from "@/components/primitives";

export const metadata: Metadata = {
  title: "Lamer Holdings | Diversified Holding Company Group",
  description:
    "Lamer Holdings is a diversified holding company operating six subsidiaries across medical, food, construction, machinery, aviation and oil and gas.",
  alternates: { canonical: "/" },
};

const PILLARS = [
  {
    title: "Capital with a long horizon",
    body: "Capital is allocated at group level against one set of return and risk criteria, applied consistently across six different sectors. Because it is permanent rather than raised against a fixed exit date, we can fund a business through a slow market and decline growth bought at the cost of the balance sheet.",
  },
  {
    title: "A portfolio that is not correlated",
    body: "Medical supply and food are non-discretionary. Construction and machinery follow capital expenditure. Aviation follows trade. Oil and gas follows the commodity cycle. That mix absorbs shocks which would be existential for any one part, and the stability is what lets the businesses make commitments they otherwise could not.",
  },
  {
    title: "One counterparty instead of six",
    body: "Our subsidiaries buy physical goods, ship them, clear them and deliver them. That is a shared problem, so we treat it as a shared capability: consolidated supplier onboarding, one set of counterparty due diligence, and common freight, customs and warehousing disciplines.",
  },
  {
    title: "Governance a subsidiary would not otherwise have",
    body: "Each operating company inherits board oversight, a written delegation of authority, a code of conduct and an audit trail from the day it starts trading. Companies of this size usually acquire that structure late, after a problem. Ours have it as a condition of belonging.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero: four text elements at most. Headline, subtext, two CTAs.
          Top padding stays inside the pt-24 cap so the content does not
          float halfway down the viewport.

          The entrance is CSS, not the scroll observer. This content is
          in view at mount, so an observer-driven reveal would wait on
          hydration and then animate — arriving as a jolt on a page that
          had already appeared. .enter runs at first paint instead, off
          the main thread, indifferent to when React shows up.

          The image is last in the cascade at index 3. It is the largest
          element on the page and leading with it would pull the eye
          away from the sentence that has to be read first. */}
      <Container width="wide" className="pt-14 pb-16 md:pt-20 md:pb-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h1 className="enter display text-[2.25rem] leading-[1.1] sm:text-[2.9rem] lg:text-[3.25rem]">
              A diversified holding company built on six operating businesses
            </h1>
            <p
              className="enter measure-wide mt-6 text-[1.075rem] leading-[1.6] text-[var(--text-secondary)]"
              style={{ "--enter-index": 1 } as React.CSSProperties}
            >
              Lamer Holdings works in medical supply, food, construction,
              machinery, aviation and energy: the essential inputs other
              people&rsquo;s operations depend on.
            </p>
            <div
              className="enter mt-8 flex flex-wrap gap-3"
              style={{ "--enter-index": 2 } as React.CSSProperties}
            >
              <ButtonLink href="/companies">Our companies</ButtonLink>
              <ButtonLink href="/contact" variant="tertiary">
                Contact us
              </ButtonLink>
            </div>
          </div>

          {/* Lamer is Kreol Seselwa for the sea. Sea and horizon imagery is
              on-brand and claims nothing about the group's operations. */}
          <div
            className="enter lg:col-span-5 lg:pt-2"
            style={{ "--enter-index": 3 } as React.CSSProperties}
          >
            <SiteImage
              slot="home-hero"
              aspect="aspect-[4/3]"
              priority
              sizes="(min-width: 1024px) 30rem, 100vw"
            />
          </div>
        </div>
      </Container>

      <Section width="wide">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionTitle serif>How the group is structured</SectionTitle>
            <Prose className="mt-5">
              <p>
                Two tiers, intentionally. A parent and six operating companies,
                with no intermediate layer of holding vehicles and no complexity
                in the chart that does not correspond to a business doing
                something.
              </p>
            </Prose>
          </div>
          <div className="lg:col-span-8">
            <GroupStructure columns={3} />
          </div>
        </div>
      </Section>

      {/* The intellectual core of the site. Asymmetric split with a
          definition list, not a row of equal feature cards. */}
      <Section width="wide">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionTitle serif>What ownership adds</SectionTitle>
            <Prose className="mt-5">
              <p>
                Lamer Holdings does not sell medical consumables, food
                ingredients, construction plant, spare parts, air cargo capacity
                or fuel. Six operating subsidiaries do that, each under its own
                name, its own management, and its own accountability for
                results.
              </p>
              <p>
                What the parent contributes is narrower than the businesses, and
                more durable: capital, governance, and the shared machinery a
                mid-sized trading company cannot justify building alone.
              </p>
              <p>
                Our centre is deliberately small. Central overhead is a cost the
                businesses carry, so every function that sits at the centre has
                to earn its place there. Four things earn it.
              </p>
            </Prose>
          </div>

          <div className="lg:col-span-7">
            <dl className="border-b border-[var(--rule)]">
              {PILLARS.map((p) => (
                <DefRow key={p.title} label={p.title}>
                  {p.body}
                </DefRow>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      {/* Companies grid: six items, six cells. */}
      <Section width="wide">
        <SectionTitle serif>Our six companies</SectionTitle>
        <p className="measure-wide mt-4 text-[1.0125rem] leading-[1.65] text-[var(--text-secondary)]">
          Each operates independently within its industry, with its own
          management and its own accountability, while drawing on the
          governance, capital and shared functions of the group.
        </p>
        <RevealGroup
          as="ul"
          className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {COMPANIES.map((c) => (
            <CompanyCard key={c.slug} company={c} />
          ))}
        </RevealGroup>
      </Section>

      {/* Tinted band: a different layout family from every section above. */}
      <Section width="prose" tint>
        <SectionTitle serif>
          How we work with partners and suppliers
        </SectionTitle>
        <Prose className="mt-5">
          <p>
            Five of our six businesses import, handle and distribute physical
            goods. Freight forwarding, customs documentation, warehousing and
            last-mile handling are therefore treated as a group capability
            rather than six separate learning curves.
          </p>
          <p>
            For suppliers, that means one onboarding process and one set of
            standards regardless of which company you are supplying. For
            counterparties running due diligence on us, it means one place to
            ask:{" "}
            <TextLink href={`mailto:${SITE.complianceEmail}`}>
              {SITE.complianceEmail}
            </TextLink>
            .
          </p>
        </Prose>
      </Section>

      <Section width="prose">
        <SectionTitle>Registered office and company details</SectionTitle>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <address className="text-[0.9375rem] leading-relaxed text-[var(--text-secondary)] not-italic">
            <span className="mb-1 block font-medium text-[var(--text)]">
              Registered office
            </span>
            {SITE.registeredOffice.line1}
            <br />
            {SITE.registeredOffice.line2}
            <br />
            {SITE.registeredOffice.locality}, {SITE.registeredOffice.country}
          </address>
          <div className="text-[0.9375rem] leading-relaxed text-[var(--text-secondary)]">
            <span className="mb-1 block font-medium text-[var(--text)]">
              Incorporation
            </span>
            Republic of Seychelles.
            <br />
            Registration number{" "}
            <Placeholder>PLACEHOLDER: registration number</Placeholder>
            <span className="mt-3 block">
              Certified corporate documentation is available to counterparties
              on request.
            </span>
          </div>
        </div>
        <div className="mt-8">
          <ButtonLink href="/about" variant="tertiary">
            About the group
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
