import { Target, Eye, Scale, TrendingUp, Star } from "lucide-react";
import { CORE_VALUES } from "./data";
import { Reveal } from "./reveal";
import missionVisionAside from "@/assets/mission-vision-aside.svg";

const VALUE_ICONS = [Scale, TrendingUp, Star];

export function MissionVision() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_360px]">
          <div className="grid gap-6">
            {[
              {
                icon: Target,
                title: "Our Mission",
                body: "To deliver competitive, high-quality HR consultancy and build long-term client relationships grounded in a genuine understanding of evolving business needs.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                body: "To be a responsive provider of quality HR management and business solutions - growing through diversified services and wider geographic reach at affordable, fair pricing.",
              },
            ].map(({ icon: Icon, title, body }, index) => (
              <Reveal key={title} delay={index * 100}>
                <article className="h-full rounded-xl border border-border bg-surface p-8 transition-shadow hover:shadow-lift">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-primary">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </span>
                  <h3 className="mt-6 text-xl font-extrabold tracking-wide uppercase">{title}</h3>
                  <p className="mt-3 leading-relaxed">{body}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140} className="relative mx-auto w-full max-w-xs">
            <div className="blob -right-8 -top-8 h-40 w-40 bg-primary/15" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-background p-3 shadow-lift">
              <img
                src={missionVisionAside}
                alt="A compass guiding people forward, representing Takura's mission and vision"
                loading="lazy"
                className="h-auto w-full rounded-lg"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {CORE_VALUES.map((value, index) => {
            const Icon = VALUE_ICONS[index] ?? Star;
            return (
              <Reveal key={value.title} delay={index * 100}>
                <article className="h-full rounded-xl border border-border bg-surface p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-background shadow-card">
                    <Icon className="h-5 w-5 text-primary" />
                  </span>
                  <h4 className="mt-5 text-base font-extrabold tracking-wide text-primary uppercase">
                    {value.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed">{value.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
