import Link from "next/link";
import { COMPANIES, companyPath } from "@/lib/site";
import { RevealGroup } from "./reveal";

/**
 * Group structure diagram.
 *
 * This is a real diagram of real content, not decoration. The site
 * carries no photography by deliberate policy: the group cannot show
 * facilities, fleets or sites it may not own, and stock imagery
 * captioned as its own would be a credibility failure with exactly the
 * audience this site is written for. A clean structure diagram is the
 * honest substitute and outperforms a stock photo on every axis here.
 *
 * Built in markup rather than as a flat SVG so it stays readable,
 * responsive and navigable.
 */
export function GroupStructure({
  columns = 2,
}: {
  /** 2 in a narrow sidebar, 3 where the container is full width. */
  columns?: 2 | 3;
}) {
  return (
    <figure className="not-prose">
      <figcaption className="sr-only">
        Lamer Holdings group structure: the parent company and its six
        operating subsidiaries.
      </figcaption>

      <div className="rounded-[4px] border border-[var(--rule)] bg-[var(--surface-soft)] p-5 md:p-7">
        <div className="rounded-[4px] border border-[var(--rule-strong)] bg-[var(--surface)] px-5 py-4">
          <p className="text-[0.9375rem] font-semibold text-[var(--text)]">
            Lamer Holdings
          </p>
          <p className="mt-1 text-[0.8125rem] leading-relaxed text-[var(--text-muted)]">
            Parent company. Oversight, capital allocation, governance,
            consolidated reporting.
          </p>
        </div>

        {/* A single connector from parent to the set. Individual stubs to
            each of six cells across two rows read as stray marks. */}
        <div aria-hidden="true" className="flex justify-center">
          <div className="h-6 w-px bg-[var(--rule-strong)]" />
        </div>
        <div aria-hidden="true" className="h-px w-full bg-[var(--rule-strong)]" />

        {/* Staggered, because the cascade restates what the diagram is
            claiming: the parent exists first and the subsidiaries hang
            off it. Six cells arriving simultaneously would read as six
            unrelated companies that happen to share a border. */}
        <RevealGroup
          as="ul"
          className={`mt-5 grid gap-2.5 ${
            columns === 3
              ? "sm:grid-cols-2 lg:grid-cols-3"
              : "sm:grid-cols-2"
          }`}
        >
          {COMPANIES.map((c) => (
            <li key={c.slug}>
              <Link
                href={companyPath(c.slug)}
                className="press flex h-full flex-col justify-start rounded-[4px] border border-[var(--rule)] bg-[var(--surface)] px-4 py-3 hover:border-[var(--rule-strong)] hover:bg-[var(--surface-tint)]"
              >
                <span className="block text-[0.8125rem] leading-snug font-semibold text-[var(--text)]">
                  {c.name}
                </span>
                <span className="mt-1 block text-[0.75rem] leading-snug text-[var(--text-muted)]">
                  {c.sectorShort}
                </span>
              </Link>
            </li>
          ))}
        </RevealGroup>
      </div>

      <p className="mt-3 text-[0.8125rem] leading-relaxed text-[var(--text-muted)]">
        Each subsidiary is a distinct legal entity with its own management,
        books, contracts and liabilities. Consolidation happens at the parent.
      </p>
    </figure>
  );
}
