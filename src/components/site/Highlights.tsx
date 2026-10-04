import { Link } from "@tanstack/react-router";
import { Globe2, Users, Search } from "lucide-react";
import { RevealLeft } from "./reveal";

const HIGHLIGHTS = [
  {
    icon: Globe2,
    title: "Overseas Recruitment",
    body: "A systematic, fully documented process - from demand letter attestation through to candidate departure - built for compliance at every step.",
    href: "/process",
    cta: "See the Process",
  },
  {
    icon: Users,
    title: "Bulk Hiring Solutions",
    body: "Skilled, semi-skilled and management manpower sourced and mobilised at scale across construction, hospitality, healthcare and more.",
    href: "/service-categories",
    cta: "View Categories",
  },
  {
    icon: Search,
    title: "Head Hunting",
    body: "Focused executive search and headhunting for mid to senior roles, backed by a verified national and international candidate network.",
    href: "/what-we-do",
    cta: "What We Do",
  },
];

export function Highlights() {
  return (
    <section className="relative bg-background pt-10 pb-4 lg:pt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ul className="grid gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map(({ icon: Icon, title, body, href, cta }, index) => (
            <RevealLeft as="li" key={title} delay={index * 150}>
              <Link
                to={href}
                className="group flex h-full flex-col rounded-xl border border-border bg-background p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lift"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </span>
                <h3 className="mt-5 text-lg font-extrabold tracking-wide text-ink uppercase">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed">{body}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold tracking-wide text-primary uppercase">
                  {cta}
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </RevealLeft>
          ))}
        </ul>
      </div>
    </section>
  );
}
