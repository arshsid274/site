"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

/* ------------------------------------------------------------------
   Scroll reveal.

   The animation itself lives entirely in globals.css. This component
   does one thing: set data-revealed once, when the element first
   enters the viewport, and then stop watching it.

   Deliberately not Motion/Framer, which is already a dependency and
   is still the wrong tool here:

     - It would pull every wrapped section across the server/client
       boundary. These sections are static institutional prose; they
       have no reason to ship as client components.
     - Its animations run on requestAnimationFrame, on the main
       thread. A CSS transition runs off it, and stays smooth while
       Next is hydrating or fetching the next route — which on this
       site is exactly when the reveals are firing.

   The attribute is set imperatively rather than through state. A
   setState here would re-render the subtree on scroll for no visual
   benefit, and the children are server-rendered markup that should
   never re-render at all.
   ------------------------------------------------------------------ */

type Tag = "div" | "section" | "ul" | "dl" | "figure";

function useRevealOnce<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => el.setAttribute("data-revealed", "");

    // No observer support, or the user has asked for reduced motion:
    // reveal immediately. Never leave content gated behind an
    // animation that is not going to run.
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      show();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show();
          io.unobserve(entry.target);
        }
      },
      {
        // Fire a little before the block reaches the fold. Waiting for
        // true intersection means the user watches the animation start,
        // which draws attention to the mechanism instead of the content.
        rootMargin: "0px 0px -10% 0px",
        threshold: 0,
      },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}

/** Reveals one block as a unit. */
export function Reveal({
  as: Tag = "div",
  className = "",
  children,
  ...rest
}: {
  as?: Tag;
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLElement>) {
  const ref = useRevealOnce<HTMLElement>();

  return (
    <Tag
      // @ts-expect-error ref is correct for every tag in the union
      ref={ref}
      data-reveal=""
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Reveals direct children in sequence. One observer on the container,
 * not one per child: six observers on a six-cell grid would trigger at
 * six different scroll positions, and the stagger would collapse into
 * whatever order the user happened to scroll them into view. The
 * cascade has to be authored, not emergent.
 */
export function RevealGroup({
  as: Tag = "div",
  className = "",
  children,
  ...rest
}: {
  as?: Tag;
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLElement>) {
  const ref = useRevealOnce<HTMLElement>();

  return (
    <Tag
      // @ts-expect-error ref is correct for every tag in the union
      ref={ref}
      data-reveal-group=""
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}
