import { Reveal } from "./reveal";
import whatWeDoSide from "@/assets/what-we-do-side.jpg";

const SERVICES = [
  ["Talent Sourcing", "Verified candidates matched to the role, trade and destination."],
  ["Assessment & Screening", "Document checks, interviews and practical trade testing."],
  ["HR & Placement Support", "Compliant processing, orientation and mobilisation support."],
];

export function WhatWeDo({ compact = false }: { compact?: boolean }) {
  return (
    <section id="what-we-do" className="bg-surface pt-20 pb-8 lg:pt-28 lg:pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={
            compact
              ? "mt-10"
              : "mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start"
          }
        >
          <Reveal delay={100}>
            <div className={compact ? "grid gap-5 sm:grid-cols-3" : "grid gap-5 sm:grid-cols-3 lg:grid-cols-1"}>
              {SERVICES.map(([title, detail], index) => (
                <article key={title} className="border-t-4 border-primary bg-background p-6 shadow-card">
                  <span className="text-sm font-extrabold text-primary">0{index + 1}</span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed">{detail}</p>
                </article>
              ))}
            </div>
          </Reveal>

          {!compact ? (
            <Reveal delay={80} className="overflow-hidden rounded-xl border border-border shadow-card">
              <img
                src={whatWeDoSide}
                alt="Field supervisor overlooking an overseas industrial site at dusk"
                loading="lazy"
                className="h-72 w-full object-cover sm:h-80 lg:h-full"
              />
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
