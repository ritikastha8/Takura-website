import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { TopBar } from "./TopBar";
import { NAV_LINKS, type NavItem } from "./data";
import { cn } from "@/lib/utils";

function hasChildren(item: NavItem): item is Extract<NavItem, { children: unknown[] }> {
  return "children" in item && Array.isArray((item as { children?: unknown }).children);
}

function DesktopNavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  if (!hasChildren(item)) {
    return (
      <Link
        to={item.href}
        className="text-[0.8rem] font-semibold tracking-wide text-ink uppercase transition-colors hover:text-primary"
      >
        {item.label}
      </Link>
    );
  }

  const show = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hide = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <Link
        to={item.href}
        className="flex items-center gap-1 text-[0.8rem] font-semibold tracking-wide text-ink uppercase transition-colors hover:text-primary"
        aria-expanded={open}
        onFocus={show}
      >
        {item.label}
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition-transform duration-200", open && "rotate-180")}
          aria-hidden="true"
        />
      </Link>

      <div
        className={cn(
          "absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3 transition-all duration-200",
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0",
        )}
      >
        <ul className="overflow-hidden rounded-xl border border-border bg-background py-2 shadow-lift">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                to={child.href}
                onClick={() => setOpen(false)}
                className="block px-5 py-2.5 text-[0.78rem] font-semibold tracking-wide text-ink uppercase transition-colors hover:bg-surface hover:text-primary"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MobileNavItem({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const [expanded, setExpanded] = useState(false);

  if (!hasChildren(item)) {
    return (
      <Link
        to={item.href}
        onClick={onNavigate}
        className="border-b border-border py-3 text-sm font-semibold tracking-wide text-ink uppercase"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="flex w-full items-center justify-between py-3 text-sm font-semibold tracking-wide text-ink uppercase"
        aria-expanded={expanded}
      >
        {item.label}
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", expanded && "rotate-180")} />
      </button>
      {expanded ? (
        <ul className="flex flex-col gap-0.5 pb-3 pl-3">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                to={child.href}
                onClick={onNavigate}
                className="block py-2 text-[0.8rem] font-semibold tracking-wide text-muted-foreground uppercase transition-colors hover:text-primary"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent bg-background transition-all duration-300",
        scrolled ? "shadow-header" : "border-border",
      )}
    >
      <TopBar />
      <div
        className={cn(
          "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 transition-all duration-300 sm:px-6",
          scrolled ? "py-2" : "py-3",
        )}
      >
        <Link to="/" className="min-w-0" aria-label="Takura Overseas home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
          {NAV_LINKS.map((item) => (
            <DesktopNavItem key={item.href} item={item} />
          ))}
          <Link
            to="/hire-talent"
            className="rounded-full bg-primary px-5 py-2.5 text-[0.8rem] font-bold tracking-wide text-primary-foreground uppercase transition-opacity hover:opacity-90"
          >
            Hire Talent
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border text-ink xl:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 xl:hidden">
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-ink/60"
          />
          <div className="absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col overflow-y-auto bg-background p-6 shadow-lift">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border text-ink"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
              {NAV_LINKS.map((item) => (
                <MobileNavItem key={item.href} item={item} onNavigate={() => setOpen(false)} />
              ))}
            </nav>
            <Link
              to="/hire-talent"
              onClick={() => setOpen(false)}
              className="mt-8 rounded-full bg-primary px-5 py-3 text-center text-sm font-bold tracking-wide text-primary-foreground uppercase"
            >
              Hire Talent
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
