import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { Company } from "@/lib/site";
import { companyPath } from "@/lib/site";

/**
 * Company card.
 *
 * Cards are used here because six subsidiaries are genuinely
 * enumerable content. No icons: six abstract glyphs for six unrelated
 * industries invariably look generic, and they would add nothing the
 * sector label does not already say.
 */
export function CompanyCard({ company }: { company: Company }) {
  return (
    <li className="group">
      <Link
        href={companyPath(company.slug)}
        className="lift flex h-full flex-col rounded-[4px] border border-[var(--rule)] bg-[var(--surface)] p-6 hover:border-[var(--rule-strong)] hover:bg-[var(--surface-soft)] md:p-7"
      >
        <p className="meta-label mb-3">{company.sectorShort}</p>
        <h3 className="display text-[1.3rem] leading-snug text-[var(--text)]">
          {company.name}
        </h3>
        <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-[var(--text-secondary)]">
          {company.blurb}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-[0.875rem] font-medium text-[var(--link)]">
          {company.shortName}
          {/* 3px, and only on a real pointer. The arrow is confirming
              that the whole card is the target, not performing. Larger
              travel turns a static grid into six twitching cards the
              moment the cursor crosses it. */}
          <ArrowRight
            size={15}
            weight="regular"
            className="transition-transform duration-[var(--duration-base)] ease-[var(--ease-brand)] motion-safe:group-hover:translate-x-[3px]"
            aria-hidden="true"
          />
        </span>
      </Link>
    </li>
  );
}
