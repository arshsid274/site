import Link from "next/link";
import { SITE, NAV, COMPANIES, companyPath } from "@/lib/site";
import { Placeholder } from "./primitives";

const LEGAL = [
  { href: "/fraud-alert", label: "Fraud & Verification" },
  { href: "/legal/privacy-policy", label: "Privacy Policy" },
  { href: "/legal/terms-of-use", label: "Terms of Use" },
  { href: "/legal/cookie-notice", label: "Cookie Notice" },
];

/**
 * The registration block belongs in the footer of every page. It is the
 * cheapest credibility signal available and its absence is conspicuous.
 * The address is labelled "Registered office", never "head office":
 * it is a registered-agent address, and misdescribing it turns an
 * ordinary fact into a red flag.
 */
export function SiteFooter() {
  return (
    <footer className="mt-auto bg-[#0a1f2e] text-[#dce7ed]">
      <div className="mx-auto w-full max-w-[75rem] px-6 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <p className="mb-3 text-[0.9375rem] font-semibold text-white">
              Lamer Holdings
            </p>
            <p className="max-w-[26rem] text-[0.875rem] leading-relaxed text-[#a9c0cd]">
              A diversified holding company incorporated in the Republic of
              Seychelles, with six operating subsidiaries across medical supply,
              food, construction, machinery, aviation and energy.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="mb-3 text-[0.9375rem] font-semibold text-white">
              Site
            </p>
            <ul className="space-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.875rem] text-[#a9c0cd] transition-colors hover:text-[#7ebdd2]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Our companies">
            <p className="mb-3 text-[0.9375rem] font-semibold text-white">
              Our companies
            </p>
            <ul className="space-y-2">
              {COMPANIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={companyPath(c.slug)}
                    className="text-[0.875rem] text-[#a9c0cd] transition-colors hover:text-[#7ebdd2]"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <p className="mb-3 text-[0.9375rem] font-semibold text-white">
              Legal
            </p>
            <ul className="space-y-2">
              {LEGAL.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.875rem] text-[#a9c0cd] transition-colors hover:text-[#7ebdd2]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-white/12 pt-8">
          <div className="grid gap-6 text-[0.8125rem] leading-relaxed text-[#8aa3b3] md:grid-cols-2">
            <address className="not-italic">
              <span className="block font-medium text-[#a9c0cd]">
                Registered office
              </span>
              {SITE.registeredOffice.line1}
              <br />
              {SITE.registeredOffice.line2}
              <br />
              {SITE.registeredOffice.locality}, {SITE.registeredOffice.country}
            </address>
            <div>
              <span className="block font-medium text-[#a9c0cd]">
                Corporate information
              </span>
              Registered in the Republic of Seychelles.
              <br />
              Company registration number{" "}
              <Placeholder>
                PLACEHOLDER: registration number
              </Placeholder>
              <br />
              <a
                href={`mailto:${SITE.email}`}
                className="text-[#7ebdd2] transition-colors hover:text-[#b3d8e5]"
              >
                {SITE.email}
              </a>
            </div>
          </div>

          <p className="mt-8 text-[0.8125rem] text-[#8aa3b3]">
            &copy; {new Date().getFullYear()} Lamer Holdings. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
