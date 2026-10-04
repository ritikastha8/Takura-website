import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

import saudiArabia from "@/assets/country-saudi-arabia.jpg";
import kuwait from "@/assets/country-kuwait.jpg";
import qatar from "@/assets/country-qatar.jpg";
import bahrain from "@/assets/country-bahrain.jpg";
import oman from "@/assets/country-oman.jpg";
import uae from "@/assets/country-united-arab-emirates.jpg";
import malaysia from "@/assets/country-malaysia.jpg";

const DESTINATIONS = [
  { country: "Saudi Arabia", image: saudiArabia },
  { country: "Kuwait", image: kuwait },
  { country: "Qatar", image: qatar },
  { country: "Bahrain", image: bahrain },
  { country: "Oman", image: oman },
  { country: "United Arab Emirates", image: uae },
  { country: "Malaysia", image: malaysia },
];

export function WhereWeWork() {
  const trackRef = useRef<HTMLUListElement>(null);

  const scroll = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * 0.8;
    track.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              title="Where We"
              highlight="Work"
              subtitle="Takura Overseas places skilled and semi-skilled Nepali talent with employers across seven destination countries."
            />
          </Reveal>
          <Reveal delay={80} className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll destinations left"
              className="grid h-11 w-11 place-items-center rounded-full border border-ink text-ink transition-colors hover:bg-ink hover:text-ink-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll destinations right"
              className="grid h-11 w-11 place-items-center rounded-full border border-ink text-ink transition-colors hover:bg-ink hover:text-ink-foreground"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </Reveal>
        </div>

        <ul
          ref={trackRef}
          className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {DESTINATIONS.map((item, index) => (
            <Reveal
              as="li"
              key={item.country}
              delay={Math.min(index, 6) * 60}
              className="w-[65%] shrink-0 snap-start sm:w-[38%] lg:w-[22%]"
            >
              <article className="group relative flex aspect-[4/5] flex-col items-end justify-end overflow-hidden rounded-xl border border-border bg-ink">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.country}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="blob -right-10 -top-10 h-40 w-40 bg-primary/25" aria-hidden="true" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" aria-hidden="true" />
                <h3 className="relative p-4 text-center text-sm font-extrabold tracking-wide text-ink-foreground uppercase">
                  {item.country}
                </h3>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
