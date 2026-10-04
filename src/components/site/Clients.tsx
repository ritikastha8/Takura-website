import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CLIENT_LOGOS, COUNTRIES } from "./data";
import { cn } from "@/lib/utils";

export function Clients() {
  const [open, setOpen] = useState<string | null>(COUNTRIES[0]?.country ?? null);

  return (
    <section id="clients" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="group mt-2 overflow-hidden" aria-label="Client logos">
          <div className="marquee-track flex gap-4 group-hover:[animation-play-state:paused]">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                title={client.name}
                className="flex h-28 w-52 shrink-0 items-center justify-center rounded-xl border border-border bg-white p-4 grayscale transition-all duration-300 hover:grayscale-0 hover:shadow-card"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-center text-sm font-bold tracking-[0.3em] text-ink uppercase">
            Global Presence
          </h3>
          <div className="mx-auto mt-10 grid max-w-4xl gap-3">
            {COUNTRIES.map((entry) => {
              const isOpen = open === entry.country;
              return (
                <div
                  key={entry.country}
                  className={cn(
                    "rounded-xl border bg-background transition-colors",
                    isOpen ? "border-primary" : "border-border",
                  )}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : entry.country)}
                    className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 p-5 text-left"
                  >
                    <span className="text-2xl" aria-hidden="true">
                      {entry.flag}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-bold tracking-wide text-ink uppercase">
                        {entry.country}
                      </span>
                      <span className="text-xs">{entry.clients.length} partner companies</span>
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-primary transition-transform",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                  {isOpen ? (
                    <ul className="max-h-56 overflow-y-auto border-t border-border px-5 py-4 text-sm">
                      {entry.clients.map((client) => (
                        <li key={client} className="border-b border-border/60 py-2 last:border-0">
                          {client}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
