"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { NAV } from "@/lib/site";

/**
 * Header sits at 72px, inside the 80px cap. Navigation renders on a
 * single line at desktop and collapses to a drawer below md.
 *
 * The header does not hide on scroll down. That pattern is fashionable
 * and would be easy to add — it is transform-only and cheap — but the
 * governing question on this site is which option a compliance officer
 * finds more credible, and the answer is the navigation that is where
 * they left it. Motion here is limited to earning the divider: at rest
 * the header is flush with the page, and it separates from the content
 * only once there is content underneath it to separate from.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // The drawer is a navigation surface. Leaving it open across a route
  // change strands the user on a new page behind an old menu.
  //
  // Deriving open from the route it was opened on closes it on
  // navigation for free. The alternative, an effect that calls
  // setOpen(false) whenever pathname changes, schedules a second
  // render pass to undo state React had already committed, which is
  // the cascading-render pattern the react-hooks rules flag.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;
  const setOpen = (next: boolean | ((v: boolean) => boolean)) => {
    const value = typeof next === "function" ? next(open) : next;
    setOpenedOn(value ? pathname : null);
  };

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    // Read once on mount as well as on scroll: a restored scroll
    // position or a hash landing both start the page mid-document,
    // where a flush header would be wrong from the first frame.
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes it. Anything that covers content has to be
  // dismissible from the keyboard.
  //
  // Sets the backing state directly rather than going through the
  // setOpen wrapper: the wrapper closes over `open` and `pathname`, so
  // depending on it would re-register the listener on every render.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenedOn(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      data-scrolled={scrolled ? "" : undefined}
      className="sticky top-0 z-40 border-b border-transparent bg-[var(--surface)]/95 backdrop-blur-sm transition-[border-color,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-brand)] data-scrolled:border-[var(--rule)] data-scrolled:shadow-[var(--shadow-sm)]"
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[75rem] items-center justify-between px-6 md:px-8">
        <Link
          href="/"
          className="press flex items-center rounded-[2px]"
          aria-label="Lamer Holdings, home"
        >
          <Image
            src="/logo.png"
            alt="Lamer Holdings"
            width={1304}
            height={596}
            priority
            className="h-8 w-auto dark:brightness-0 dark:invert"
          />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  data-active={isActive(item.href) ? "" : undefined}
                  className={`nav-rule relative inline-block py-1 text-[0.9375rem] font-medium transition-colors duration-[var(--duration-fast)] ease-[var(--ease-brand)] ${
                    isActive(item.href)
                      ? "text-[var(--text)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text)]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="press -mr-2 inline-flex h-11 w-11 items-center justify-center rounded-[4px] text-[var(--text)] md:hidden"
        >
          {/* Both glyphs are mounted and crossfaded in place. Swapping
              one for the other makes the icon blink out and back, and
              at 22px the eye reads that as a flicker rather than as a
              state change. */}
          <span className="relative block h-[22px] w-[22px]">
            <List
              size={22}
              weight="regular"
              aria-hidden="true"
              className={`absolute inset-0 transition-opacity duration-[var(--duration-fast)] ease-[var(--ease-brand)] ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <X
              size={22}
              weight="regular"
              aria-hidden="true"
              className={`absolute inset-0 transition-opacity duration-[var(--duration-fast)] ease-[var(--ease-brand)] ${
                open ? "opacity-100" : "opacity-0"
              }`}
            />
          </span>
        </button>
      </div>

      {/*
        The drawer stays mounted and animates its own height through
        grid-template-rows 0fr to 1fr. Unmounting it, as this did
        before, gives the open no transition at all and the close no
        chance to run: the markup is simply gone on the next render.

        This is the one place on the site that animates a layout
        property rather than transform or opacity. It is justified: the
        drawer has to displace the page below it, so a transform would
        either overlay the content or leave a hole where the menu will
        be. The subtree is five links on a viewport that is not
        rendering the desktop nav, so the layout cost is bounded and
        the interaction is occasional.
      */}
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-[var(--duration-base)] ease-[var(--ease-brand)] md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <nav
            id="mobile-nav"
            aria-label="Main"
            aria-hidden={!open}
            className="border-t border-[var(--rule)]"
          >
            <ul className="mx-auto w-full max-w-[75rem] px-6 py-2">
              {NAV.map((item) => (
                <li
                  key={item.href}
                  className="border-b border-[var(--rule)] last:border-0"
                >
                  <Link
                    href={item.href}
                    // Inert while closed, so a collapsed drawer cannot
                    // be tabbed into. Height alone does not remove an
                    // element from the tab order.
                    tabIndex={open ? undefined : -1}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`flex min-h-11 items-center py-2 text-[0.9375rem] font-medium transition-colors duration-[var(--duration-fast)] ease-[var(--ease-brand)] ${
                      isActive(item.href)
                        ? "text-[var(--text)]"
                        : "text-[var(--text-secondary)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
