import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CLIENT_LOGOS } from "./data";
import { Reveal, SectionHeading } from "./reveal";

export function ClientsTeaser() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            title="Trusted By Employers"
            highlight="Worldwide"
            center
            subtitle="A sample of the organisations across the Gulf and Malaysia who rely on Takura Overseas for dependable manpower."
          />
        </Reveal>

        <div className="group mt-14 overflow-hidden" aria-label="Client logos">
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

        <Reveal delay={80} className="mt-12 text-center">
          <Link
            to="/clients"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold tracking-wide text-primary-foreground uppercase transition-opacity hover:opacity-90"
          >
            View All Clients & Countries
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
