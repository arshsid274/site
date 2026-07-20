import type { Metadata } from "next";
import Link from "next/link";
import { COMPANIES, SITE, companyPath } from "@/lib/site";
import { SiteImage } from "@/components/site-image";
import {
  Container,
  DefRow,
  Notice,
  PageTitle,
  Prose,
  Section,
  SectionTitle,
  TextLink,
  Placeholder,
} from "@/components/primitives";

export const metadata: Metadata = {
  title: "Sustainability & Responsibility | Lamer Holdings",
  description:
    "How Lamer Holdings approaches governance, ethics, health and safety, and environmental management across six operating companies in six sectors.",
  alternates: { canonical: "/sustainability" },
};

const SASB: Record<string, string> = {
  "uzima-medical-services":
    "Medical Equipment & Supplies; Biotechnology & Pharmaceuticals",
  "manze-food-services": "Processed Foods; Agricultural Products",
  "zil-engineering-construction": "Engineering & Construction Services",
  "lorizon-machinery-spare-parts": "Industrial Machinery & Goods",
  "elite-airlines-aviation-services": "Air Freight & Logistics",
  "edenco-oil-and-gas":
    "Oil & Gas Refining & Marketing; Oil & Gas Midstream",
};

const SECTOR_MATERIALITY: Record<string, string> = {
  "uzima-medical-services":
    "The material issues are cold chain integrity, the risk of falsified and substandard medicines entering an import-dependent supply chain, and pharmaceutical and clinical waste. A temperature excursion in vaccines, biologics or reagents is simultaneously a patient safety failure, a financial write-off and a waste event. Expiry management is a waste-prevention control before it is a commercial one. The relevant SDG target is 3.8 on access to essential medicines, and the honest contribution is continuity of supply rather than care delivery.",
  "manze-food-services":
    "Food safety dominates: temperature control, allergen management, traceability one step forward and one step back, and the ability to execute a recall. Food loss between sourcing and delivery is the second issue, and it is where the business intersects SDG target 12.3. On packaging there is a genuine tension between food-safety requirements and material reduction, and we would rather acknowledge the trade-off than claim it away.",
  "zil-engineering-construction":
    "Occupational health and safety is the single most material issue in construction, and SDG target 8.8 on safe working environments is where this business makes its most direct contribution. Labour practices in the subcontractor chain matter as much: recruitment fees charged to workers and retention of identity documents are treated by lenders and regulators as forced-labour indicators. On embodied carbon in cement, steel and aluminium, a contractor's influence is largely bounded by client specification, and we would rather state that boundary than imply control we do not have.",
  "lorizon-machinery-spare-parts":
    "Counterfeit parts are the defining integrity issue in this trade, with direct safety consequences in braking, lifting and pressure systems. Parts provenance is a safety position before it is a commercial one. Maintenance and correctly-specified parts extend equipment service life, which keeps machinery out of the waste stream: a resource-efficiency contribution consistent with SDG targets 9.4 and 12.5, and one we describe as service-life extension rather than as sustainability.",
  "elite-airlines-aviation-services":
    "Safety comes first in this sector and is treated as its own risk category rather than aggregated with operational risk. On emissions, aviation is genuinely hard to abate. Air connectivity supports the trade and access dimensions of SDG target 9.1, and we do not present air transport as climate-positive. Sustainable aviation fuel represented under one per cent of global jet fuel supply in 2026; we monitor availability at the airports our activity touches and make no SAF-based environmental claims.",
  "edenco-oil-and-gas":
    "This is the hardest case in the portfolio and it should be handled directly. The majority of greenhouse gas emissions associated with petroleum products arise when those products are used by customers, not within the operations that distribute them. Under the GHG Protocol this falls within Scope 3, Category 11. We do not present fuel distribution as a climate solution. What sits inside Edenco's control is substantial: tank integrity and secondary containment, spill prevention and response, loading and discharge procedure, road tanker safety, fuel quality and anti-adulteration testing, and handling of contaminated water and sludge.",
};

const SAFETY = [
  {
    label: "Construction sites",
    body: "Permit-to-work, method statements, site induction, work at height, lifting operations, and subcontractor competency. Falls, struck-by, caught-between and electrocution are the recurring fatal hazards in this sector globally.",
  },
  {
    label: "Fuel handling and storage",
    body: "Process safety, static control, hot work control, confined space entry, and road tanker driver competency.",
  },
  {
    label: "Machinery workshops",
    body: "Isolation and lock-out, stored energy, pressure and hydraulic systems, and operator training at handover.",
  },
  {
    label: "Aviation and logistics operations",
    body: "Airside safety discipline and dangerous goods acceptance.",
  },
  {
    label: "Food processing",
    body: "Hygiene, allergen control and equipment guarding.",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <Container width="wide" className="pt-14 pb-14 md:pt-20 md:pb-16">
        <div className="enter-group max-w-[46rem]">
          <PageTitle>Sustainability and responsible business</PageTitle>
          <p className="measure-wide mt-6 text-[1.075rem] leading-[1.6] text-[var(--text-secondary)]">
            Six companies in six sectors, whose impacts are not alike. This page
            is organised around where those impacts actually sit.
          </p>
        </div>
      </Container>

      <Section width="wide" rule={false}>
        <SiteImage
          slot="sustainability-texture"
          aspect="aspect-[21/9]"
          sizes="100vw"
        />
      </Section>

      <Section width="prose">
        <Prose>
          <p>
            A construction site, a pharmaceutical cold chain, a food processing
            operation, a machinery workshop, an aviation logistics desk and a
            fuel distribution business raise genuinely different questions.
            Writing one sustainability narrative across all six would obscure
            more than it explained.
          </p>
          <p>
            One thing should be said at the start rather than buried.{" "}
            <strong className="font-semibold text-[var(--text)]">
              We have chosen to describe our frameworks, policies and priorities
              rather than publish performance data we cannot yet verify.
            </strong>{" "}
            As measurement systems are established across the group, we intend to
            report against them.
          </p>
        </Prose>
      </Section>

      <Section width="prose">
        <SectionTitle serif>Our approach</SectionTitle>
        <Prose className="mt-5">
          <p>
            The group sets policy and standards. The operating companies apply
            them within their own sector and jurisdiction, because a control that
            works on a construction site is not the control that works in a
            pharmaceutical warehouse.
          </p>
          <p>
            In identifying what matters in each business we reference established
            frameworks: the GRI Standards, the SASB Standards now maintained by
            the ISSB under the IFRS Foundation, the Ten Principles of the UN
            Global Compact, and the UN Sustainable Development Goals.
          </p>
        </Prose>
        <div className="mt-6">
          <Notice title="What we are not">
            <p>
              We are not currently a signatory to, or a reporter under, any of
              these frameworks. We reference them because they represent the
              established basis for identifying what matters in each of our
              sectors, and because our counterparties use them.
            </p>
          </Notice>
        </div>
      </Section>

      <Section width="wide">
        <SectionTitle serif>Frameworks and standards we reference</SectionTitle>
        <p className="measure-wide mt-4 text-[0.9375rem] leading-relaxed text-[var(--text-secondary)]">
          SASB provides industry-specific standards identifying the topics most
          likely to be financially material in a given sector. Because we operate
          in six industries, each company maps to a different standard. We use
          them to identify material topics. We do not report against them.
        </p>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[36rem] text-left text-[0.9375rem]">
            <caption className="sr-only">
              Each Lamer Holdings company mapped to its applicable SASB industry
              standard
            </caption>
            <thead>
              <tr className="border-b border-[var(--rule)] bg-[var(--surface-soft)]">
                <th scope="col" className="meta-label px-4 py-3">
                  Company
                </th>
                <th scope="col" className="meta-label px-4 py-3">
                  Applicable SASB industry standard
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPANIES.map((c) => (
                <tr key={c.slug} className="border-b border-[var(--rule)]">
                  <td className="px-4 py-3 font-medium text-[var(--text)]">
                    {c.name}
                  </td>
                  <td className="px-4 py-3 text-[var(--text-secondary)]">
                    {SASB[c.slug]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <dl className="mt-10 border-b border-[var(--rule)]">
          <DefRow label="GRI Standards">
            We use the GRI Standards as a reference point when identifying which
            topics are material. GRI 11 (Oil and Gas) and GRI 13 (Agriculture,
            Aquaculture and Fishing) bear most directly on the group. We do not
            publish a GRI content index and make no claim of reporting in
            accordance with, or with reference to, the GRI Standards.
          </DefRow>
          <DefRow label="IFRS S1 and S2">
            These do not currently apply to Lamer Holdings. We monitor their
            adoption in the jurisdictions where our companies trade, because
            counterparties subject to them may in future request emissions and
            climate-risk data from suppliers. The TCFD recommendations were
            absorbed into IFRS S2 following the TCFD&rsquo;s disbandment in 2023,
            and we treat IFRS S2 as the operative reference.
          </DefRow>
          <DefRow label="UN Global Compact">
            Our code of conduct is modelled on the Ten Principles. We are not a
            participant in or signatory to the UN Global Compact.
          </DefRow>
        </dl>
      </Section>

      {/* Governance carries this page. For the audience this site is
          written for, it is the load-bearing part of sustainability. */}
      <Section width="prose" tint>
        <SectionTitle serif>Governance, ethics and compliance</SectionTitle>
        <p className="measure-wide mt-4 text-[0.9375rem] leading-relaxed text-[var(--text-secondary)]">
          This is the longest section on the page, and deliberately so. In a
          group structured as ours is, governance is the part of sustainability
          that is load-bearing.
        </p>

        <div className="mt-8 space-y-8">
          <div>
            <SectionTitle as="h3">Code of conduct</SectionTitle>
            <Prose className="mt-3">
              <p>
                One code applies across all six subsidiaries, to every employee
                and officer, and to agents, intermediaries and consultants acting
                on the group&rsquo;s behalf. It is modelled on the Ten Principles
                of the UN Global Compact.
              </p>
            </Prose>
          </div>

          <div>
            <SectionTitle as="h3">Anti-bribery and anti-corruption</SectionTitle>
            <Prose className="mt-3">
              <p>
                The group prohibits the offering, giving, soliciting or accepting
                of any improper payment or advantage. Facilitation payments are
                prohibited without exception, regardless of local practice or
                commercial consequence. Gifts and hospitality are subject to
                defined thresholds and approval. Political contributions are
                prohibited.
              </p>
              <p>
                Third-party intermediaries, agents and sponsors are subject to
                due diligence before engagement. This matters more than it may
                appear: agents and intermediaries are the largest anti-bribery
                exposure in construction, machinery trading and oil trading, and
                construction is consistently among the highest bribery-risk
                sectors in permitting and tendering. Naming that exposure is more
                useful than a general statement of zero tolerance.
              </p>
              <p>
                Our framework follows the management-system structure set out in
                ISO 37001.{" "}
                <strong className="font-semibold text-[var(--text)]">
                  We are not certified to that standard.
                </strong>
              </p>
            </Prose>
          </div>

          <div>
            <SectionTitle as="h3">
              Financial crime, anti-money-laundering and sanctions
            </SectionTitle>
            <Prose className="mt-3">
              <p>
                Counterparties are subject to know-your-customer due diligence
                proportionate to risk, including identification of beneficial
                ownership, before onboarding and on an ongoing basis.
                Counterparties, end users and destinations are screened against
                applicable sanctions regimes.
              </p>
              <p>
                Commodity and machinery trading carry recognised exposure to
                trade-based money laundering typologies, including over- and
                under-invoicing, phantom shipments, and multiple invoicing
                against a single movement. Our controls are written with those
                typologies in view. We do not act for undisclosed principals.
              </p>
            </Prose>
          </div>

          <div>
            <SectionTitle as="h3">Whistleblowing and non-retaliation</SectionTitle>
            <Prose className="mt-3">
              <p>
                Any employee, supplier or counterparty may raise a concern
                through a channel that does not run through the
                individual&rsquo;s own management line. Reports may be made
                confidentially. The group does not tolerate retaliation against
                anyone who raises a concern in good faith.
              </p>
            </Prose>
            <div className="mt-4">
              <Notice tone="warning" title="Before publication">
                <p>
                  <Placeholder>
                    PLACEHOLDER (BLOCKING): publish a reporting channel only if
                    it exists and is monitored
                  </Placeholder>
                </p>
                <p>
                  An unmonitored whistleblowing address is a liability, not a
                  credential.
                </p>
              </Notice>
            </div>
          </div>

          <div>
            <SectionTitle as="h3">Supplier code of conduct</SectionTitle>
            <Prose className="mt-3">
              <p>
                We expect suppliers to prohibit forced and child labour, to charge
                no recruitment fees to workers, to respect freedom of
                association, to meet applicable wage and working-hours
                requirements, to manage health and safety, to comply with
                environmental requirements, to prohibit bribery, and to comply
                with applicable sanctions.
              </p>
              <p>
                We are progressively extending these expectations across our
                supplier base, beginning with higher-risk categories. As a
                distributor and contractor rather than a manufacturer, our
                leverage over the deeper tiers of our supply chains is real but
                limited, and we would rather say so than imply full chain
                control.
              </p>
            </Prose>
          </div>

          <div>
            <SectionTitle as="h3">Jurisdiction</SectionTitle>
            <Prose className="mt-3">
              <p>
                Lamer Holdings is registered in the Republic of Seychelles. As of
                February 2026, Seychelles is not listed on the FATF&rsquo;s
                AML/CFT monitoring lists, and on 17 February 2026 it was removed
                from the European Union&rsquo;s Annex II list of jurisdictions
                subject to enhanced due diligence.
              </p>
              <p>
                That is jurisdictional context, not an assessment of this
                company. We set it out because the question is asked in most
                onboarding processes, and we would rather answer it here.{" "}
                <TextLink href="/about">More on our structure and domicile</TextLink>
                .
              </p>
            </Prose>
          </div>
        </div>
      </Section>

      <Section width="wide">
        <SectionTitle serif>Health and safety</SectionTitle>
        <p className="measure-wide mt-4 text-[0.9375rem] leading-relaxed text-[var(--text-secondary)]">
          Our framework follows the management-system structure set out in ISO
          45001.{" "}
          <strong className="font-semibold text-[var(--text)]">
            We are not currently certified to that standard.
          </strong>{" "}
          It requires hazard identification and risk assessment, incident
          reporting and investigation, contractor competency management, and
          defined responsibility at operating-company level. Its application
          differs sharply by business.
        </p>
        <dl className="mt-8 border-b border-[var(--rule)]">
          {SAFETY.map((s) => (
            <DefRow key={s.label} label={s.label}>
              {s.body}
            </DefRow>
          ))}
        </dl>
        <p className="measure-wide mt-6 text-[0.9375rem] leading-relaxed text-[var(--text-secondary)]">
          Zero serious injuries is the objective against which we manage our
          operations. It is a target, not a claim about past performance.
        </p>
      </Section>

      {/* Per-sector materiality. Also the hub that links to all six
          company pages. */}
      <Section width="wide">
        <SectionTitle serif>Where our impacts sit</SectionTitle>
        <div className="mt-8 border-t border-[var(--rule)]">
          {COMPANIES.map((c) => (
            <article
              key={c.slug}
              className="grid gap-3 border-b border-[var(--rule)] py-7 md:grid-cols-12 md:gap-8"
            >
              <h3 className="text-[1rem] font-semibold text-[var(--text)] md:col-span-4">
                {c.name}
                <span className="mt-0.5 block text-[0.8125rem] font-normal text-[var(--text-muted)]">
                  {c.sectorShort}
                </span>
              </h3>
              <div className="md:col-span-8">
                <p className="text-[0.9375rem] leading-relaxed text-[var(--text-secondary)]">
                  {SECTOR_MATERIALITY[c.slug]}
                </p>
                <p className="mt-3">
                  <Link
                    href={companyPath(c.slug)}
                    className="link-underline text-[0.875rem] font-medium text-[var(--link)] transition-colors hover:text-[var(--link-hover)]"
                  >
                    {c.name}
                  </Link>
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section width="prose">
        <SectionTitle serif>Our people and the communities we work in</SectionTitle>
        <Prose className="mt-5">
          <p>
            Our employment practices cover non-discrimination, pay set against
            the local market, working hours, and a grievance mechanism available
            to employees.
          </p>
          <p>
            These are technical businesses, and the training that matters most is
            technical and safety training: competency for the task, rather than
            general development programmes.
          </p>
          <p>
            Where our operating companies work, we seek to recruit locally and to
            develop local supplier relationships, subject to capability and
            compliance requirements. The qualifier is deliberate. Local content
            commitments that ignore capability tend not to survive contact with a
            project.
          </p>
        </Prose>
        <p className="mt-5 text-[0.8125rem] text-[var(--text-muted)]">
          <Placeholder>
            PLACEHOLDER: confirm whether any community investment programme
            exists. If none does, this section stays as written.
          </Placeholder>
        </p>
      </Section>

      <Section width="prose">
        <SectionTitle serif>Environmental management</SectionTitle>
        <Prose className="mt-5">
          <p>
            Each operating company is subject to the environmental permitting and
            compliance requirements of the jurisdictions in which it works. That
            compliance baseline is the floor, not the ambition.
          </p>
          <p>
            The waste streams across the group differ by business and are managed
            separately: pharmaceutical and clinical waste at Uzima, food waste and
            processing effluent at Manze, construction and demolition waste at
            Zil, waste oil and filters at Lorizon, and hydrocarbon-contaminated
            water and sludge at Edenco. Licensed disposal routes are a
            requirement in each case, and pharmaceutical waste in particular must
            never enter a general waste stream.
          </p>
          <p>
            This is a description of how these matters are managed. It is not a
            statement of environmental performance, which we are not yet in a
            position to report.
          </p>
        </Prose>
      </Section>

      <Section width="prose" tint>
        <SectionTitle serif>Climate change and the energy transition</SectionTitle>
        <Prose className="mt-5">
          <p>
            We have not established a group-wide emissions baseline. Developing
            that baseline is a prerequisite for setting any reduction target, and
            it is where our current effort is directed.{" "}
            <strong className="font-semibold text-[var(--text)]">
              Because we have no baseline, we have set no target, and we have not
              published one.
            </strong>
          </p>
          <p>
            Two of our six businesses, aviation services and petroleum products,
            operate in sectors where demand is expected to change materially over
            the coming decades. That is transition risk, and we would rather name
            it than describe it as an opportunity. Group-level diversification
            across six sectors is itself a structural response to single-sector
            concentration exposure, and it is the strongest transition-related
            statement a group in our position can honestly make.
          </p>
          <p>
            IFRS S2 does not currently apply to Lamer Holdings, and we monitor its
            adoption in the jurisdictions where our companies trade. GRI 102
            (Climate Change) takes effect for reporters from 1 January 2027, and
            makes transition planning a central disclosure for the first time.
          </p>
        </Prose>
      </Section>

      <Section width="prose">
        <SectionTitle serif>How we intend to develop our reporting</SectionTitle>
        <Prose className="mt-5">
          <p>
            The sequence we are working through is: formalise policies across all
            six companies, establish data collection at operating-company level,
            build a group baseline, and only then consider targets and external
            reporting.
          </p>
          <p>
            We have not attached dates to those steps. An unmet published
            commitment is worse than an unstated one, and a forward-looking
            environmental claim without an implementation plan behind it is
            precisely the pattern regulators now treat as unsubstantiated.
          </p>
          <p>
            Questions about this page, or requests for our policy documents:{" "}
            <TextLink href={`mailto:${SITE.complianceEmail}`}>
              {SITE.complianceEmail}
            </TextLink>
          </p>
        </Prose>
      </Section>
    </>
  );
}
