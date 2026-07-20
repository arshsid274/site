import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { COMPANIES, SITE, companyPath } from "@/lib/site";
import { ContactForm } from "@/components/contact-form";
import {
  Container,
  DefRow,
  Notice,
  PageTitle,
  Section,
  SectionTitle,
  TextLink,
  Placeholder,
} from "@/components/primitives";

export const metadata: Metadata = {
  title: "Contact Lamer Holdings | Registered Office & Enquiries",
  description:
    "Contact Lamer Holdings. Registered office in Mont Fleuri, Mahe, Seychelles. Route group and subsidiary enquiries to the right company.",
  alternates: { canonical: "/contact" },
};

const DEPARTMENTS = [
  {
    label: "Supplier and vendor registration",
    email: SITE.procurementEmail,
  },
  { label: "Careers and recruitment", email: SITE.careersEmail },
  { label: "Media and press", email: SITE.mediaEmail },
  {
    label: "Compliance, banking and due diligence",
    email: SITE.complianceEmail,
  },
];

export default function ContactPage() {
  return (
    <>
      <Container width="wide" className="pt-14 pb-14 md:pt-20 md:pb-16">
        <div className="enter-group max-w-[46rem]">
          <PageTitle>Contact Lamer Holdings</PageTitle>
          <p className="measure-wide mt-6 text-[1.075rem] leading-[1.6] text-[var(--text-secondary)]">
            Use the routes below to reach the right company directly, or contact
            the group office if you are unsure.
          </p>
        </div>
      </Container>

      {/* Group contact, above the form and as text rather than an image. */}
      <Section width="wide">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionTitle serif>Group enquiries</SectionTitle>
            <address className="mt-5 text-[0.9375rem] leading-relaxed text-[var(--text-secondary)] not-italic">
              <span className="mb-1 block font-medium text-[var(--text)]">
                Registered office
              </span>
              {SITE.registeredOffice.line1}
              <br />
              {SITE.registeredOffice.line2}
              <br />
              {SITE.registeredOffice.locality}, {SITE.registeredOffice.country}
            </address>
            <dl className="mt-6 space-y-3 text-[0.9375rem]">
              <div>
                <dt className="font-medium text-[var(--text)]">
                  General enquiries
                </dt>
                <dd>
                  <TextLink href={`mailto:${SITE.email}`}>
                    {SITE.email}
                  </TextLink>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-[var(--text)]">
                  Compliance and verification
                </dt>
                <dd>
                  <TextLink href={`mailto:${SITE.complianceEmail}`}>
                    {SITE.complianceEmail}
                  </TextLink>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-[var(--text)]">Telephone</dt>
                <dd className="text-[var(--text-secondary)]">
                  <Placeholder>
                    PLACEHOLDER (BLOCKING): telephone number
                  </Placeholder>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-[var(--text)]">
                  Business hours
                </dt>
                <dd className="text-[var(--text-secondary)]">
                  <Placeholder>
                    PLACEHOLDER (BLOCKING): days, hours and timezone
                  </Placeholder>
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            <Notice title="Due diligence and bank verification">
              <p>
                Counterparties, correspondent banks and underwriters running due
                diligence can request corporate documentation directly at{" "}
                <TextLink href={`mailto:${SITE.complianceEmail}`}>
                  {SITE.complianceEmail}
                </TextLink>
                . Certified corporate documents are available to counterparties
                on request.
              </p>
              <p>
                This channel exists because it is the one most groups omit, and
                because being diligenced is a normal part of how we trade rather
                than an exception to it.
              </p>
            </Notice>

            <div className="mt-6">
              <SectionTitle as="h3">Other enquiries</SectionTitle>
              <dl className="mt-4 border-b border-[var(--rule)]">
                {DEPARTMENTS.map((d) => (
                  <DefRow key={d.email} label={d.label}>
                    <TextLink href={`mailto:${d.email}`}>{d.email}</TextLink>
                  </DefRow>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Section>

      {/* Subsidiary routing. Six items, six cells. */}
      <Section width="wide">
        <SectionTitle serif>Contact a specific company</SectionTitle>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPANIES.map((c) => (
            <li
              key={c.slug}
              className="rounded-[4px] border border-[var(--rule)] p-5"
            >
              <p className="meta-label mb-2">{c.sectorShort}</p>
              <h3 className="text-[1rem] font-semibold text-[var(--text)]">
                {c.name}
              </h3>
              <p className="mt-2 text-[0.875rem] leading-relaxed text-[var(--text-secondary)]">
                {c.blurb}
              </p>
              <p className="mt-4 text-[0.875rem]">
                <TextLink href={`mailto:${c.email}`}>{c.email}</TextLink>
              </p>
              <p className="mt-2 text-[0.875rem]">
                <Link
                  href={companyPath(c.slug)}
                  className="link-underline font-medium text-[var(--link)]"
                >
                  {c.shortName}
                </Link>
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Notice tone="warning" title="Before publication">
            <p>
              <Placeholder>
                PLACEHOLDER (BLOCKING): confirm every alias above exists and is
                monitored
              </Placeholder>
            </p>
            <p>
              Aliases may all forward to one inbox internally, which is normal
              and not misleading, but a published address that bounces is worse
              than no address. Keeping every alias on the single
              lamerholdings.com domain is deliberate: it is what makes the
              anti-fraud rule simple and absolute.
            </p>
          </Notice>
        </div>
      </Section>

      {/* Supplier path, kept out of the sales queue. */}
      <Section width="prose" tint>
        <SectionTitle serif>Supplying Lamer Holdings</SectionTitle>
        <div className="measure-wide mt-5 space-y-5 text-[var(--text-secondary)]">
          <p>
            Our subsidiaries source goods and services across medical, food,
            construction, machinery, aviation and energy categories. We work with
            manufacturers, authorised distributors and specialist service
            providers.
          </p>
          <p>
            To register your interest, write to{" "}
            <TextLink href={`mailto:${SITE.procurementEmail}`}>
              {SITE.procurementEmail}
            </TextLink>{" "}
            with your company profile, the categories you supply, your
            registration details, relevant certifications, and reference clients.
            Please indicate which of our companies your offering is relevant to.
          </p>
          <p>
            Where there is a fit, our procurement team will make contact to begin
            prequalification. Registration does not constitute a commitment to
            purchase.
          </p>
          <p className="font-semibold text-[var(--text)]">
            We never charge a fee for supplier registration or prequalification.
            Any request for such a payment is fraudulent.
          </p>
        </div>
      </Section>

      <Section width="prose">
        <SectionTitle serif>Send us a message</SectionTitle>
        <div className="mt-7">
          <Suspense
            fallback={
              <div
                className="h-96 animate-pulse rounded-[4px] border border-[var(--rule)] bg-[var(--surface-soft)]"
                aria-hidden="true"
              />
            }
          >
            <ContactForm />
          </Suspense>
        </div>
      </Section>

      <Section width="prose">
        <SectionTitle>Response times</SectionTitle>
        <div className="mt-5">
          <Notice tone="warning" title="Before publication">
            <p>
              <Placeholder>
                PLACEHOLDER (BLOCKING): response-time commitment per channel, or
                one conservative group-wide figure
              </Placeholder>
            </p>
            <p>
              Commit to something achievable and dull. Two business days beats
              twenty-four hours if twenty-four hours cannot be met, because a
              missed public commitment is worse than a modest one.
            </p>
          </Notice>
        </div>
      </Section>

      <Section width="prose">
        <SectionTitle>Corporate information</SectionTitle>
        <p className="measure-wide mt-4 text-[0.9375rem] leading-relaxed text-[var(--text-secondary)]">
          Lamer Holdings. Registered in the Republic of Seychelles. Registration
          number{" "}
          <Placeholder>PLACEHOLDER (BLOCKING): registration number</Placeholder>
          . Registration details may be verified with the Registrar of Companies,
          Seychelles.
        </p>
        <p className="measure-wide mt-4 text-[0.9375rem] leading-relaxed text-[var(--text-secondary)]">
          Our only website is www.lamerholdings.com, and all genuine
          correspondence comes from an address ending in @lamerholdings.com. We
          never request fees for employment, supplier registration, or contract
          awards.{" "}
          <TextLink href="/fraud-alert">Read our full fraud notice</TextLink>.
        </p>
      </Section>
    </>
  );
}
