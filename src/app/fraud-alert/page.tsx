import type { Metadata } from "next";
import { SITE } from "@/lib/site";
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
} from "@/components/primitives";

export const metadata: Metadata = {
  title: "Fraud Alert and Contact Verification | Lamer Holdings",
  description:
    "How to verify genuine correspondence from Lamer Holdings, the fraud types that misuse our name, and how to report suspected fraud to our compliance team.",
  alternates: { canonical: "/fraud-alert" },
};

const NEVER = [
  "request a fee to apply for a job, to register as a supplier, or to be considered for a contract or tender",
  "request payment to release goods, funds, an allocation, or a contract award",
  "ask you to send money to an individual's personal bank account",
  "request your bank account credentials, card details, or passwords",
  "notify a change of our bank details by email alone",
  "conduct business through free webmail addresses or unsolicited contact on messaging apps",
];

const SCHEMES = [
  {
    label: "Fraudulent job offers",
    body: "Fake recruiters using our name, requesting application, processing, visa, training or medical-examination fees, and making offers through messaging apps without any documented interview process. All recruitment correspondence from us comes from an @lamerholdings.com address, and we never ask a candidate for money at any stage.",
  },
  {
    label: "Advance-fee and payment fraud",
    body: "Requests for processing fees, finder's fees or registration fees against a promised contract, allocation, or fuel or commodity supply. These schemes typically use convincingly forged letterhead and may invoke real names.",
  },
  {
    label: "Fake tenders and supply opportunities",
    body: "Bogus requests for quotation or purchase orders issued in our name, usually accompanied by a request for a bid bond, sample fee or supplier registration fee. We do not charge for supplier registration or prequalification.",
  },
  {
    label: "Payment diversion and invoice fraud",
    body: "A counterparty receives an email appearing to come from us advising that our bank details have changed. This is the highest-value scheme targeting trading groups. Verify any such notice by telephone with your known contact before acting on it.",
  },
  {
    label: "Cloned websites and impersonation",
    body: "Sites reproducing our branding, company names or content at other domains.",
  },
];

export default function FraudAlertPage() {
  return (
    <>
      <Container width="wide" className="pt-14 pb-14 md:pt-20 md:pb-16">
        <div className="enter-group max-w-[46rem]">
          <PageTitle>Fraud alert and contact verification</PageTitle>
          <p className="measure-wide mt-6 text-[1.075rem] leading-[1.6] text-[var(--text-secondary)]">
            Our name, and the names of our subsidiary companies, are used without
            our authorisation in fraudulent schemes. This page sets out how to
            verify that a communication genuinely comes from us.
          </p>
        </div>
      </Container>

      <Section width="prose">
        <SiteImage slot="fraud-security" aspect="aspect-[21/9]" className="mb-10" sizes="45rem" />
        <SectionTitle serif>
          How to verify a genuine communication
        </SectionTitle>
        <p className="measure-wide mt-4 text-[0.9375rem] leading-relaxed text-[var(--text-secondary)]">
          You cannot recognise a fake without knowing what the real thing looks
          like, so we set that out first.
        </p>

        <dl className="mt-7 border-b border-[var(--rule)]">
          <DefRow label="Our website">
            Our only website is{" "}
            <strong className="font-semibold text-[var(--text)]">
              www.lamerholdings.com
            </strong>
            . We operate no other domain. Be alert to lookalike domains using
            hyphens, added words, or different extensions, for example .co, .net,
            .online, lamer-holdings, or lamerholdingsgroup.
          </DefRow>
          <DefRow label="Our email addresses">
            All genuine email from us ends in{" "}
            <strong className="font-semibold text-[var(--text)]">
              @lamerholdings.com
            </strong>
            . We do not use Gmail, Outlook.com, Yahoo or any other free email
            service for business correspondence. An address such as
            lamerholdings@gmail.com is not ours.
          </DefRow>
          <DefRow label="Our registered office">
            {SITE.registeredOffice.line1}, {SITE.registeredOffice.line2},{" "}
            {SITE.registeredOffice.locality}, {SITE.registeredOffice.country}.
            Correspondence claiming a different registered address for Lamer
            Holdings is not genuine.
          </DefRow>
          <DefRow label="If you are unsure">
            Do not reply to the message. Contact us independently using the
            details published on this website. Replying to a fraudulent message
            confirms nothing except that your address is live.
          </DefRow>
        </dl>
      </Section>

      <Section width="prose" tint>
        <SectionTitle serif>What we will never do</SectionTitle>
        <p className="measure-wide mt-4 text-[0.9375rem] leading-relaxed text-[var(--text-secondary)]">
          Lamer Holdings and its subsidiaries will never:
        </p>
        <ul className="measure-wide mt-5 space-y-3">
          {NEVER.map((n) => (
            <li
              key={n}
              className="border-t border-[var(--rule)] pt-3 text-[0.9375rem] leading-relaxed text-[var(--text-secondary)]"
            >
              {n}
            </li>
          ))}
        </ul>
        <div className="mt-7">
          <Notice tone="danger" title="Changed bank details">
            <p>
              Any notice that our banking details have changed must be verified
              by telephone with your known contact at our company before you act
              on it. This is the single most costly scheme targeting trading
              groups, and email confirmation alone is not verification.
            </p>
          </Notice>
        </div>
      </Section>

      <Section width="wide">
        <SectionTitle serif>The schemes that use our name</SectionTitle>
        <dl className="mt-7 border-b border-[var(--rule)]">
          {SCHEMES.map((s) => (
            <DefRow key={s.label} label={s.label}>
              {s.body}
            </DefRow>
          ))}
        </dl>
      </Section>

      <Section width="prose">
        <SectionTitle serif>Reporting suspected fraud</SectionTitle>
        <Prose className="mt-5">
          <p>
            Report suspected fraud to{" "}
            <TextLink href={`mailto:${SITE.complianceEmail}`}>
              {SITE.complianceEmail}
            </TextLink>
            , including the full message with its headers, any attachments, and
            the sender&rsquo;s address.
          </p>
          <p>
            Please note that we are not able to investigate fraudulent schemes or
            recover funds sent to fraudsters. If you have suffered financial
            loss, report the matter to your local law enforcement authority and
            to your bank without delay.
          </p>
          <p>
            Lamer Holdings has no involvement in any such scheme and accepts no
            responsibility for any loss, damage or claim arising from fraudulent
            activity carried out in our name or in the name of any of our
            subsidiary companies.
          </p>
        </Prose>
      </Section>
    </>
  );
}
