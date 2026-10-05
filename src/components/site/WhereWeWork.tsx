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


const MARQUEE_CSS = `
@keyframes where-we-work-marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.where-we-work-track {
  animation: where-we-work-marquee 40s linear infinite;
  will-change: transform;
}
.where-we-work-viewport:hover .where-we-work-track,
.where-we-work-viewport:focus-within .where-we-work-track {
  animation-play-state: paused;
}
@media (prefers-reduced-motion: reduce) {
  .where-we-work-viewport { overflow-x: auto; }
  .where-we-work-track { animation: none; }
  .where-we-work-clone { display: none; }
}
`;

function DestinationCard({ country, image }: { country: string; image: string | null }) {
  return (
    <article className="group relative flex aspect-[4/5] flex-col items-end justify-end overflow-hidden rounded-xl border border-border bg-ink">
      {image ? (
        <img
          src={image}
          alt={country}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <div className="blob -right-10 -top-10 h-40 w-40 bg-primary/25" aria-hidden="true" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" aria-hidden="true" />
      <h3 className="relative p-4 text-center text-sm font-extrabold tracking-wide text-ink-foreground uppercase">
        {country}
      </h3>
    </article>
  );
}

export function WhereWeWork() {
  return (
    <section className="py-20 lg:py-28">
      <style>{MARQUEE_CSS}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            title="Where We"
            highlight="Work"
            subtitle="Takura Overseas places skilled and semi-skilled Nepali talent with employers across seven destination countries."
          />
        </Reveal>

        {/* Inside the container so the first card starts aligned with the heading, as before. */}
        <div className="where-we-work-viewport mt-12 overflow-hidden pb-4">
          <ul className="where-we-work-track flex w-max">
            {DESTINATIONS.map((item) => (
              <li key={item.country} className="w-[65vw] shrink-0 pr-5 sm:w-[38vw] lg:w-[18.25rem]">
                <DestinationCard {...item} />
              </li>
            ))}
            {/* Duplicate set for the seamless loop; hidden from assistive tech. */}
            {DESTINATIONS.map((item) => (
              <li
                key={`${item.country}-clone`}
                aria-hidden="true"
                className="where-we-work-clone w-[65vw] shrink-0 pr-5 sm:w-[38vw] lg:w-[18.25rem]"
              >
                <DestinationCard {...item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}