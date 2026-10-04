import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { STEPS } from "./data";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

export function Process() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="process" className="relative overflow-hidden bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ol className="mt-14 space-y-3">
          {STEPS.map((step, index) => {
            const isOpen = open === index;
            return (
              <Reveal as="li" key={step.title} delay={Math.min(index, 6) * 50}>
                <div
                  className={cn(
                    "rounded-xl border bg-background transition-colors",
                    isOpen ? "border-primary" : "border-border",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 p-4 text-left sm:p-5"
                  >
                    <span
                      className={cn(
                        "grid h-9 min-w-11 shrink-0 place-items-center rounded-full px-3 text-xs font-bold",
                        index % 2 === 0
                          ? "bg-primary text-primary-foreground"
                          : "bg-ink text-ink-foreground",
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 text-sm font-bold tracking-wide text-ink uppercase sm:text-base">
                      {step.title}
                    </span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-primary">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {isOpen ? (
                    <p className="border-t border-dashed border-border px-5 py-4 text-sm leading-relaxed sm:pl-20">
                      {step.detail}
                    </p>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
