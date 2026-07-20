import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "./reveal";

/* ------------------------------------------------------------------
   Layout primitives.
   Sections are separated by whitespace and a hairline rule, in
   preference to cards and shadows. Cards appear only where content is
   genuinely enumerable.
   ------------------------------------------------------------------ */

type Width = "prose" | "standard" | "wide";

/**
 * Every section shares one container and therefore one left edge. The
 * width prop constrains the content, left-aligned inside that
 * container, rather than centring a narrower column: centring makes
 * body copy jump inward relative to the page title, which reads as a
 * layout bug rather than as rhythm.
 */
const CONTENT: Record<Width, string> = {
  prose: "max-w-[45rem]",
  standard: "max-w-[62rem]",
  wide: "",
};

export function Container({
  width = "standard",
  className = "",
  children,
}: {
  width?: Width;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-[75rem] px-6 md:px-8 ${className}`}>
      <div className={CONTENT[width]}>{children}</div>
    </div>
  );
}

export function Section({
  width = "standard",
  rule = true,
  tint = false,
  reveal = true,
  className = "",
  children,
}: {
  width?: Width;
  /** Hairline above the section. The default separator on this site. */
  rule?: boolean;
  /** Faint wash of the brand colour. Never a coloured card. */
  tint?: boolean;
  /**
   * Fade and 8px rise as the section reaches the fold. On by default:
   * motion belongs to the section rhythm, so opting in page by page
   * would guarantee that some page eventually forgets and reads as
   * broken next to the others. Turn it off for content that must be
   * present the instant it exists — anything above the fold, and any
   * block a user is being sent to by an anchor.
   */
  reveal?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const cls = [
    "py-14 md:py-20",
    rule ? "border-t border-[var(--rule)]" : "",
    tint ? "bg-[var(--surface-tint)]" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // The children stay server-rendered: they are passed through the
  // client boundary as an already-rendered subtree, not re-executed
  // on the client.
  if (reveal) {
    return (
      <Reveal as="section" className={cls}>
        <Container width={width}>{children}</Container>
      </Reveal>
    );
  }

  return (
    <section className={cls}>
      <Container width={width}>{children}</Container>
    </section>
  );
}

/* ------------------------------------------------------------------
   Typography
   ------------------------------------------------------------------ */

export function PageTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={`display text-[2.1rem] leading-[1.14] sm:text-[2.6rem] ${className}`}
    >
      {children}
    </h1>
  );
}

export function SectionTitle({
  as: Tag = "h2",
  serif = false,
  children,
  className = "",
}: {
  as?: "h2" | "h3";
  serif?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Tag
      className={
        serif
          ? `display text-[1.6rem] leading-[1.25] sm:text-[1.95rem] ${className}`
          : `text-[1.2rem] leading-[1.35] font-semibold tracking-[-0.01em] sm:text-[1.4rem] ${className}`
      }
    >
      {children}
    </Tag>
  );
}

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="measure-wide text-[1.075rem] leading-[1.65] text-[var(--text-secondary)]">
      {children}
    </p>
  );
}

/** Body copy capped at roughly 68 characters. */
export function Prose({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`measure-wide space-y-5 text-[var(--text-secondary)] ${className}`}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow mb-3">{children}</p>;
}

/* ------------------------------------------------------------------
   Buttons. 44px minimum touch target, 4px radius, never uppercase.
   Primary is navy (14.74:1 with white). Secondary is teal-600
   (5.41:1). Brand teal is never a button fill: it fails AA.
   ------------------------------------------------------------------ */

type ButtonVariant = "primary" | "secondary" | "tertiary";

const BUTTON: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--text)] text-[var(--surface)] hover:bg-[var(--text-secondary)]",
  secondary:
    "bg-[var(--accent)] text-[var(--on-accent)] hover:bg-[var(--accent-hover)]",
  tertiary:
    "border border-[var(--rule)] text-[var(--link)] hover:border-[var(--rule-strong)] hover:bg-[var(--surface-tint)]",
};

export function ButtonLink({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
}) {
  const external = href.startsWith("mailto:") || href.startsWith("http");
  const cls = `press inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-[4px] px-6 text-[0.9375rem] font-medium ${BUTTON[variant]}`;

  if (external) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** Inline text link with a restrained underline. */
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const external = href.startsWith("mailto:") || href.startsWith("http");
  const cls =
    "link-underline font-medium text-[var(--link)] transition-colors hover:text-[var(--link-hover)]";
  if (external) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/* ------------------------------------------------------------------
   Notice block. Left rule in the semantic colour, tinted ground,
   no shadow. Used for compliance, verification and fraud content.
   ------------------------------------------------------------------ */

export function Notice({
  tone = "info",
  title,
  children,
}: {
  tone?: "info" | "danger" | "warning";
  title?: string;
  children: ReactNode;
}) {
  const border = {
    info: "border-l-[var(--accent)]",
    danger: "border-l-[color:var(--color-danger)]",
    warning: "border-l-[color:var(--color-warning)]",
  }[tone];

  return (
    <div
      className={`border-l-[3px] ${border} rounded-r-[2px] bg-[var(--surface-tint)] px-5 py-4 md:px-6 md:py-5`}
    >
      {title ? (
        <p className="mb-2 font-semibold text-[var(--text)]">{title}</p>
      ) : null}
      <div className="space-y-3 text-[0.9375rem] text-[var(--text-secondary)]">
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   Placeholder marker.

   Renders the facts the client must supply as visible, deliberate
   gaps rather than invented content.

   These stay visible in every build, including production. Hiding them
   would leave orphaned labels ("Telephone" with nothing after it),
   which reads as a broken page rather than an unfinished one. More
   importantly, the site is not publishable until they are resolved:
   every one marks a claim the surrounding copy implies but cannot yet
   support. Find them all with [data-placeholder].
   ------------------------------------------------------------------ */

export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <span
      data-placeholder
      className="mx-0.5 inline rounded-[2px] border border-dashed border-[color:var(--color-warning)] bg-[color:var(--color-warning)]/10 px-1.5 py-0.5 align-baseline font-mono text-[0.8em] leading-normal text-[color:var(--color-warning)]"
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------
   Definition rows. Used in place of long bulleted lists where the
   content is label-and-value.
   ------------------------------------------------------------------ */

export function DefRow({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-1 border-t border-[var(--rule)] py-4 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-6">
      <dt className="text-[0.9375rem] font-medium text-[var(--text)]">
        {label}
      </dt>
      <dd className="text-[0.9375rem] text-[var(--text-secondary)]">
        {children}
      </dd>
    </div>
  );
}
