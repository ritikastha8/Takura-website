import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

const TABS = [
  {
    label: "Advertisement",
    href: "/advertisement" as const,
    className: "bg-primary text-primary-foreground",
  },
  {
    label: "Current Opening",
    href: "/current-opening" as const,
    className: "bg-[#1a8033] text-white",
  },
];

export function TopBar() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div className="bg-ink">
      <div
        key={pathname}
        className="mx-auto flex max-w-7xl items-stretch justify-end gap-2 px-4 sm:gap-3 sm:px-6"
      >
        {TABS.map((tab, index) => (
          <Link
            key={tab.href}
            to={tab.href}
            style={{ animationDelay: `${index * 220}ms` }}
            className={`slide-in-left group inline-flex items-center gap-1.5 px-4 py-2.5 text-[0.7rem] font-bold tracking-wide uppercase transition-opacity hover:opacity-90 sm:gap-2 sm:px-7 sm:text-[0.78rem] ${tab.className}`}
          >
            <ChevronRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
