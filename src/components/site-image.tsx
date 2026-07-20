import Image from "next/image";
import manifest from "@/lib/image-manifest.json";

type ManifestImage = {
  src: string;
  alt: string;
  safety: "SAFE" | "CAPTION" | "BANNED";
  provider: string;
  providerLabel: string;
  licence: string;
  attributionRequired: boolean;
  photographer: string;
  photographerUrl: string;
  sourceUrl: string;
  credit: string;
  width: number;
  height: number;
};

/**
 * The manifest exists in two shapes and both are valid:
 *
 *   candidates  { images: [...] }  written by the fetch script, several
 *               options per slot, for review
 *   selected    { image: {...} }   written by the selection step once a
 *               candidate has been chosen
 *
 * Reading both means a fresh fetch never breaks the build while the
 * candidates are still being reviewed. In candidate shape the first entry
 * renders, which is a preview, not a decision.
 */
type ManifestEntry = {
  page: string;
  note: string | null;
  image?: ManifestImage;
  images?: ManifestImage[];
};

const IMAGES = manifest as unknown as Record<string, ManifestEntry>;

function resolve(entry: ManifestEntry | undefined): ManifestImage | null {
  if (!entry) return null;
  return entry.image ?? entry.images?.[0] ?? null;
}

export type ImageSlot = keyof typeof IMAGES;

/**
 * Renders a sourced photograph with the attribution its licence requires.
 *
 * Two rules are enforced here rather than left to the person writing the
 * page, because these are the mistakes that matter:
 *
 * 1. Alt text comes from the manifest, which the fetch script writes so it
 *    never says "our" and never names a Lamer company. A stock photograph
 *    described as the group's own facility is a false statement of fact
 *    about a company that has not yet published a registration number.
 *
 * 2. A CAPTION-class image always renders its visible source caption. The
 *    caption cannot be suppressed by a caller.
 */
export function SiteImage({
  slot,
  aspect = "aspect-[3/2]",
  priority = false,
  className = "",
  sizes = "(min-width: 1024px) 40rem, 100vw",
}: {
  slot: string;
  aspect?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  const img = resolve(IMAGES[slot]);
  if (!img) return null;
  const mustCaption = img.safety === "CAPTION" || img.attributionRequired;

  return (
    <figure className={className}>
      <div
        className={`relative w-full overflow-hidden rounded-[4px] border border-[var(--rule)] bg-[var(--surface-soft)] ${aspect}`}
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>

      {mustCaption ? (
        <figcaption className="mt-2 text-[0.75rem] leading-relaxed text-[var(--text-muted)]">
          {img.alt}. Photograph by{" "}
          <a
            href={img.photographerUrl}
            rel="noopener noreferrer nofollow"
            target="_blank"
            className="underline decoration-[var(--rule-strong)] underline-offset-2 hover:text-[var(--link)]"
          >
            {img.photographer}
          </a>{" "}
          on {img.providerLabel}. Illustrative; not a photograph of a Lamer
          Holdings operation.
        </figcaption>
      ) : null}
    </figure>
  );
}

/**
 * Full credit list for the colophon. Pixabay and Pexels do not require
 * attribution, but crediting anyway costs nothing and keeps the record
 * straight about what on this site is licensed stock rather than the
 * group's own material.
 */
export function ImageCredits() {
  const entries = Object.entries(IMAGES);
  if (!entries.length) return null;

  return (
    <ul className="space-y-2 text-[0.8125rem] text-[var(--text-muted)]">
      {entries.map(([slot, e]) => {
        const img = resolve(e);
        if (!img) return null;
        return (
          <li key={slot}>
            <span className="text-[var(--text-secondary)]">{img.alt}</span>{" "}
            &middot; {img.photographer} on {img.providerLabel} &middot;{" "}
            {img.licence}
          </li>
        );
      })}
    </ul>
  );
}
