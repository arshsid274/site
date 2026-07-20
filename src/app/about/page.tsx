import type { Metadata } from "next";
import { COMPANIES, SITE } from "@/lib/site";
import { GroupStructure } from "@/components/group-structure";
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
  title: "About Lamer Holdings | Our Structure & Governance",
  description:
    "Learn about Lamer Holdings: our group structure, governance approach, operating principles and the six subsidiary companies we own and support.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    label: "Accountability",
    body: "Someone owns every decision in this group, and the delegation framework makes it clear who. We do not distribute responsibility until it disappears.",
  },
  {
    label: "Precision",
    body: "In our businesses the difference between right and nearly right is a rejected batch, a grounded aircraft, a broken cold chain or a stopped site. Specification, documentation and traceability are not administration. They are the product.",
  },
  {
    label: "Restraint",
    body: "We would rather decline business than take on an obligation we cannot meet, a counterparty we cannot verify, or growth the balance sheet cannot carry. A small centre is part of the same discipline.",
  },
  {
    label: "Directness",
    body: "We tell customers what we can do and what we cannot, on the timeline that is real rather than the one they would prefer. This costs us business occasionally. We consider that the price of being worth believing the rest of the time.",
  },
];

const RISKS = [
  "Counterparty and credit risk: customer concentration, payment terms, and receivables in institutional and public-sector sales",
  "Trade compliance and sanctions risk: screening of counterparties, end users and destinations across all six businesses",
  "Regulatory and licensing risk: pharmaceutical, food safety, aviation and petroleum activities each carry licence conditions that cannot be treated as administrative",
  "Supply chain and logistics risk: lead times, freight availability, customs and clearance",
  "Product integrity and cold chain risk: temperature, handling and traceability in medical and food supply",
  "Aviation safety risk, treated as a category of its own and not aggregated with operational risk",
  "Commodity price and foreign exchange risk across energy trading and imported inputs",
  "Health, safety and environment across construction, plant, aviation and fuel handling",
];

const FAQS = [
  {
    q: "Where is Lamer Holdings registered?",
    a: "In the Republic of Seychelles, with its registered office in Mont Fleuri, Mahé, maintained through a registered agent licensed by the Seychelles Financial Services Authority.",
  },
  {
    q: "How many companies are in the group?",
    a: "Six operating subsidiaries, each a distinct legal entity, listed in full above.",
  },
  {
    q: "Can I obtain corporate documentation for due diligence?",
    a: "Yes. Certified corporate documents are available to counterparties on request at compliance@lamerholdings.com.",
  },
  {
    q: "Do the subsidiaries trade with each other?",
    a: "Where a group company's requirement can be met from within the portfolio, it is sourced, specified and contracted on the same commercial terms as any external supply.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Container width="wide" className="pt-14 pb-14 md:pt-20 md:pb-16">
        <div className="enter-group max-w-[46rem]">
          <PageTitle>About Lamer Holdings</PageTitle>
          <p className="measure-wide mt-6 text-[1.075rem] leading-[1.6] text-[var(--text-secondary)]">
            The parent company of six operating businesses in medical supply,
            food, construction and civil engineering, machinery and spare parts,
            aviation, and oil and gas.
          </p>
        </div>
      </Container>

      <Section width="wide">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <SectionTitle serif>Who we are</SectionTitle>
            <Prose className="mt-5">
              <p>
                The structure is deliberately simple: a parent, and six
                subsidiaries that trade under their own names. The parent does
                four things. It allocates capital, it sets and oversees the
                governance framework, it holds the group&rsquo;s shared
                functions, and it consolidates reporting. It does not run the
                businesses. Management does that, close to the customer, inside
                a defined delegation of authority.
              </p>
              <p>
                What the group offers each company is what none of them could
                build at its own scale: patient capital, an uncorrelated
                portfolio standing behind every commitment they make, one
                compliance and counterparty standard, and board-level oversight
                from the first day of trading.
              </p>
            </Prose>
          </div>
          <div className="lg:col-span-5 lg:pt-2">
            <SiteImage
              slot="about-texture"
              aspect="aspect-[4/3]"
              sizes="(min-width: 1024px) 28rem, 100vw"
            />
          </div>
        </div>
      </Section>

      {/* Purpose. Full-width tinted band, different family from the sections
          either side of it. */}
      <Section width="prose" tint>
        <SectionTitle serif>Purpose</SectionTitle>
        <p className="display mt-4 text-[1.5rem] leading-snug text-[var(--text)] sm:text-[1.75rem]">
          To supply what everything else depends on.
        </p>
        <Prose className="mt-5">
          <p>
            Medicines, and the consumables a ward runs out of. The raw materials
            behind a finished food product. The part that decides whether a
            machine works on Monday. The fuel, the plant, the freight.
          </p>
          <p>
            None of it is glamorous and almost none of it is noticed, until it is
            missing, at which point nothing else functions. Our six companies
            work at that layer. We think it is the most consequential place to
            be.
          </p>
        </Prose>

        <div className="mt-10 border-t border-[var(--rule)] pt-8">
          <SectionTitle>Vision</SectionTitle>
          <p className="measure-wide mt-3 text-[1rem] leading-relaxed text-[var(--text-secondary)]">
            To be the group a serious buyer can rely on when the order actually
            matters, and to be structured well enough that they never have to
            take that on trust.
          </p>
        </div>
      </Section>

      <Section width="wide">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionTitle serif>What we value</SectionTitle>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-[var(--text-muted)]">
              Four words with plausible opposites, in place of the conventional
              set. Integrity, quality and reliability are words no company claims
              the reverse of, which is why they carry no information.
            </p>
          </div>
          <div className="lg:col-span-8">
            <dl className="border-b border-[var(--rule)]">
              {VALUES.map((v) => (
                <DefRow key={v.label} label={v.label}>
                  {v.body}
                </DefRow>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section width="wide">
        <SectionTitle serif>How the group is structured</SectionTitle>
        <div className="mt-8 max-w-[52rem]">
          <GroupStructure columns={3} />
        </div>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[34rem] text-left text-[0.9375rem]">
            <caption className="sr-only">
              Lamer Holdings subsidiaries and their registration details
            </caption>
            <thead>
              <tr className="border-b border-[var(--rule)] bg-[var(--surface-soft)]">
                <th scope="col" className="meta-label px-4 py-3">
                  Company
                </th>
                <th scope="col" className="meta-label px-4 py-3">
                  Sector
                </th>
                <th scope="col" className="meta-label px-4 py-3">
                  Registration
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
                    {c.sectorShort}
                  </td>
                  <td className="px-4 py-3 text-[var(--text-secondary)]">
                    <Placeholder>
                      PLACEHOLDER: registration number and jurisdiction
                    </Placeholder>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section width="prose">
        <SectionTitle serif>What the parent does, and does not do</SectionTitle>
        <Prose className="mt-5">
          <p>
            The parent&rsquo;s role is defined by four functions: oversight,
            strategic direction, capital allocation, and consolidated reporting.
          </p>
          <p>
            It does not manage customers, price contracts, hire operating staff,
            or make day-to-day commercial decisions. Those sit with subsidiary
            management, which is accountable for them. The parent&rsquo;s
            authority is exercised through the composition of subsidiary boards,
            the approval of business plans and budgets, the delegation of
            authority framework, and the review of performance against plan.
          </p>
        </Prose>
      </Section>

      <Section width="prose">
        <SectionTitle serif>Governance and oversight</SectionTitle>

        <div className="mt-6 space-y-8">
          <div>
            <SectionTitle as="h3">Board oversight</SectionTitle>
            <Prose className="mt-3">
              <p>
                The group is governed by the Board of Lamer Holdings, which is
                responsible for group strategy, risk appetite, the appointment
                and oversight of senior management, and the integrity of
                financial reporting. Each operating subsidiary is governed by its
                own board, whose composition is determined by the parent.
              </p>
            </Prose>
            <div className="mt-4">
              <Notice tone="warning" title="Before publication">
                <p>
                  <Placeholder>
                    PLACEHOLDER (BLOCKING): confirm a functioning group board
                    with meetings and minutes exists
                  </Placeholder>
                </p>
                <p>
                  If it does not, replace the paragraph above with: &ldquo;Oversight
                  of the group is exercised at parent level. Each subsidiary
                  operates within a business plan and budget approved by the
                  parent, and within a defined delegation of authority.&rdquo;
                  Never publish a board description with no names and no meeting
                  cadence behind it.
                </p>
              </Notice>
            </div>
          </div>

          <div>
            <SectionTitle as="h3">Delegation of authority</SectionTitle>
            <Prose className="mt-3">
              <p>
                The group operates a written delegation of authority framework.
                It specifies which decisions subsidiary management may take
                independently, which require approval at subsidiary board level,
                and which are reserved to the parent. It covers capital
                expenditure, borrowing and guarantees, contract commitments above
                defined values, senior appointments, entry into new markets,
                related-party transactions, and the onboarding of higher-risk
                counterparties.
              </p>
              <p>
                The thresholds are internal. The principle is not: authority is
                explicit, written down, and matched to accountability. Nobody in
                this group is uncertain about what they may decide alone.
              </p>
            </Prose>
          </div>

          <div>
            <SectionTitle as="h3">Risk management</SectionTitle>
            <Prose className="mt-3">
              <p>
                The parent sets the risk framework and appetite. Subsidiary
                management operates within it and is accountable for identifying
                and managing risk in its own business. The risks the group treats
                as principal, and monitors at parent level:
              </p>
            </Prose>
            <ul className="measure-wide mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {RISKS.map((r) => (
                <li
                  key={r}
                  className="border-t border-[var(--rule)] pt-3 text-[0.875rem] leading-relaxed text-[var(--text-secondary)]"
                >
                  {r}
                </li>
              ))}
            </ul>
            <p className="measure-wide mt-6 text-[0.9375rem] leading-relaxed text-[var(--text-secondary)]">
              Naming a risk is not managing it. What the framework requires is
              that each of these has an owner, a control, and a reporting line
              that reaches the parent.
            </p>
          </div>
        </div>
      </Section>

      <Section width="prose">
        <SectionTitle serif>Compliance and business conduct</SectionTitle>
        <Prose className="mt-5">
          <p>
            The group operates one standard of conduct across all six
            subsidiaries, expressed in a code of conduct that applies to every
            employee and to those acting on the group&rsquo;s behalf.
          </p>
          <p>
            <strong className="font-semibold text-[var(--text)]">
              Anti-bribery and anti-corruption.
            </strong>{" "}
            The group prohibits the offering, giving, soliciting or accepting of
            any improper payment or advantage, without exception, and regardless
            of local practice or commercial consequence. This applies to agents,
            intermediaries and consultants engaged by group companies.
          </p>
          <p>
            <strong className="font-semibold text-[var(--text)]">
              Counterparty due diligence, anti-money-laundering and sanctions.
            </strong>{" "}
            Customers, suppliers, agents and intermediaries are subject to due
            diligence proportionate to risk, and screened against applicable
            sanctions regimes before onboarding and on an ongoing basis.
            Pharmaceuticals, aviation and petroleum are among the most
            compliance-sensitive activities a trading group can undertake. Rather
            than let each company set its own threshold, we operate one standard
            across all six.
          </p>
          <p>
            <strong className="font-semibold text-[var(--text)]">
              Raising concerns.
            </strong>{" "}
            Any employee, supplier or counterparty may raise a concern about
            suspected misconduct through a confidential channel that does not run
            through the individual&rsquo;s own management line. The group does
            not tolerate retaliation against anyone who raises a concern in good
            faith.
          </p>
        </Prose>
        <div className="mt-6">
          <Notice tone="warning" title="Before publication">
            <p>
              <Placeholder>
                PLACEHOLDER (BLOCKING): each item above is a representation.
                Confirm the group will stand behind each one, and delete any it
                will not.
              </Placeholder>
            </p>
            <p>
              A published policy the group does not operate is worse than no
              policy page.
            </p>
          </Notice>
        </div>
      </Section>

      {/* Domicile. Addressed head-on rather than left in the footer. */}
      <Section width="prose" tint>
        <SectionTitle serif>
          Where the group is incorporated, and what that means
        </SectionTitle>
        <Prose className="mt-5">
          <p>
            Lamer Holdings is incorporated in the Republic of Seychelles. Its
            registered office is at Suite 3, Global Village, Jivan&rsquo;s
            Complex, Mont Fleuri, Mahé, maintained through Abacus (Seychelles)
            Limited, a corporate service provider licensed by the Seychelles
            Financial Services Authority. Seychelles law requires every company
            of this type to maintain its registered office through a licensed
            registered agent. Ours is that arrangement and nothing more
            elaborate.
          </p>
          <p>
            We would rather be explicit about what the domicile is and is not.
            Seychelles is where the group is incorporated and where its holding
            structure sits. It is not an operating market for us. Our
            subsidiaries deliver their services in the markets in which they
            operate, under the licensing and regulatory requirements applicable
            there. Nobody should read this address as a claim about where our
            businesses trade.
          </p>
          <p>
            On the jurisdiction itself, the current position is a matter of
            public record. In January 2026 the OECD Global Forum&rsquo;s peer
            review rated Seychelles &ldquo;Largely Compliant&rdquo; on exchange
            of information on request. On 17 February 2026 the European Union
            removed Seychelles from Annex II of its list of non-cooperative
            jurisdictions for tax purposes, completing a process that had already
            seen it removed from the main list in February 2024. Seychelles is a
            member of COMESA, SADC and the Indian Ocean Commission, and ratified
            the African Continental Free Trade Area in July 2021.
          </p>
          <p>
            We set this out because the questions get asked in every onboarding
            process we go through, and we would rather answer them on our own
            website than in an email.
          </p>
        </Prose>
        <p className="mt-5 text-[0.8125rem] text-[var(--text-muted)]">
          <Placeholder>
            PLACEHOLDER: verify both dated facts against current public sources
            at publication and update if superseded
          </Placeholder>
        </p>
      </Section>

      <Section width="prose">
        <SectionTitle serif>Our names</SectionTitle>
        <Prose className="mt-5">
          <p>
            Our companies are named in the languages of the ocean the group is
            oriented toward.
          </p>
          <p>
            Four names come from Kreol Seselwa, the Creole of Seychelles and one
            of its three official languages, which fuses the French article into
            the noun. <strong className="font-semibold text-[var(--text)]">Lamer</strong>{" "}
            is the sea. <strong className="font-semibold text-[var(--text)]">Zil</strong>{" "}
            is the islands.{" "}
            <strong className="font-semibold text-[var(--text)]">Lorizon</strong>{" "}
            is the horizon.{" "}
            <strong className="font-semibold text-[var(--text)]">Manze</strong> is
            food. <strong className="font-semibold text-[var(--text)]">Uzima</strong>{" "}
            is Swahili, the lingua franca of the East African seaboard, and means
            life, vitality and wholeness, in a sense closer to complete
            well-being than to the absence of illness. It is the right word for a
            medical supply business.
          </p>
          <p>
            A name is not a market claim, and we do not intend it as one. It is a
            statement of where this group looks.
          </p>
        </Prose>
      </Section>

      <Section width="prose">
        <SectionTitle serif>Questions about Lamer Holdings</SectionTitle>
        <div className="mt-6">
          <Notice tone="warning" title="Who owns Lamer Holdings?">
            <p>
              <Placeholder>
                PLACEHOLDER (BLOCKING): ownership and beneficial ownership
                disclosure
              </Placeholder>
            </p>
            <p>
              Anonymous ownership is the strongest negative signal a corporate
              site can carry. Naming even two or three principals with roles and
              backgrounds changes how the entire site reads.
            </p>
          </Notice>
        </div>
        <dl className="mt-8 border-b border-[var(--rule)]">
          {FAQS.map((f) => (
            <DefRow key={f.q} label={f.q}>
              {f.a}
            </DefRow>
          ))}
        </dl>
        <p className="mt-8 text-[0.9375rem] text-[var(--text-secondary)]">
          Due diligence requests:{" "}
          <TextLink href={`mailto:${SITE.complianceEmail}`}>
            {SITE.complianceEmail}
          </TextLink>
        </p>
      </Section>
    </>
  );
}
