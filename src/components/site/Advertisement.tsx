import { Link } from "@tanstack/react-router";
import { ADVERTISEMENTS } from "./data";
import { Reveal } from "./reveal";

export function Advertisement() {
  return (
    <section className="pt-8 pb-20 lg:pt-10 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ADVERTISEMENTS.map((ad, index) => (
            <Reveal as="li" key={ad.title} delay={Math.min(index, 4) * 80}>
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="relative">
                  <img
                    src={ad.image}
                    alt={ad.category}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-40 w-full object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-[0.65rem] font-bold tracking-wide text-primary-foreground uppercase">
                    {ad.status}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[0.7rem] font-bold tracking-wide text-primary uppercase">
                    {ad.category}
                  </span>
                  <h3 className="mt-2 text-base font-extrabold text-ink">{ad.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed">{ad.summary}</p>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold tracking-wide text-primary uppercase"
                  >
                    Enquire About This Opening
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120} className="mt-14 rounded-xl border border-border bg-surface p-8 text-center">
          <p className="text-sm leading-relaxed">
            Have a demand letter ready, or looking to publish a new recruitment notice with us? Get in touch and our
            team will guide you through documentation, attestation and publishing.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-flex rounded-full bg-primary px-6 py-3 text-xs font-bold tracking-wide text-primary-foreground uppercase transition-opacity hover:opacity-90"
          >
            Contact Our Team
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
