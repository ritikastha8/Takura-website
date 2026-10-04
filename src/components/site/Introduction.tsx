import { Link } from "@tanstack/react-router";
import { BadgeCheck, Building2, CalendarDays, Globe, MapPin, ShieldCheck } from "lucide-react";
import { CONTACT } from "./data";
import { Reveal, SectionHeading } from "./reveal";
import { PhotoBanner } from "./PhotoBanner";
import { WhereWeWork } from "./WhereWeWork";
import bannerPhoto from "@/assets/banner-intro-photo.jpg";
import aboutPhoto from "@/assets/cat-finance.jpg";

const PROFILE = [
  { icon: Building2, label: "Registered Name", value: "Takura Overseas Pvt. Ltd." },
  { icon: ShieldCheck, label: "Govt. Licence No.", value: "1538/078/79" },
  { icon: BadgeCheck, label: "Certification", value: "ISO 9001:2015 Certified" },
  { icon: MapPin, label: "Head Office", value: CONTACT.address },
  { icon: Globe, label: "Scope of Service", value: "Foreign Employment Consultancy" },
  { icon: CalendarDays, label: "Office Hours", value: "Sun - Fri, 10:00 - 18:00" },
];

const DESTINATIONS = [
  "Saudi Arabia",
  "Qatar",
  "United Arab Emirates",
  "Kuwait",
  "Bahrain",
  "Malaysia",
];

const DIFFERENTIATORS = [
  {
    title: "Licensed and audited",
    body: "Every deployment runs through Department of Foreign Employment channels, with attested demand letters and full documentation on file.",
  },
  {
    title: "One accountable point of contact",
    body: "A single coordinator owns your file from demand letter to departure, so you are never chasing updates across departments.",
  },
  {
    title: "Verified candidate database",
    body: "Trade skills, experience letters and documents are validated before a candidate is ever shortlisted for your panel.",
  },
  {
    title: "Post-deployment follow-up",
    body: "We stay in contact after arrival and share structured feedback, so retention problems surface early rather than at contract end.",
  },
];

export function Introduction() {
  return (
    <>
      <PhotoBanner image={bannerPhoto} title="Welcome to" highlight="Takura Overseas" />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-[1.35fr_1fr]">
            <Reveal>
              <SectionHeading title="About" highlight="Us" />
              <p className="mt-6 leading-relaxed">
                Takura Overseas Pvt. Ltd. is an internationally recognized organization, holding
                the esteemed Government of Nepal Licence No. 1538/078/79. As a leading specialist
                recruitment company in Nepal, we operate with a strong influence from the
                Recruitment Board of Advisors (RBA), providing comprehensive solutions in
                Executive Search, Headhunting, Permanent Staffing, HR Services Outsourcing, and
                Human Resource and Soft Skills Training to client organisations.
              </p>
              <p className="mt-4 leading-relaxed">
                We understand the critical role manpower plays in shaping the success of any
                business, and cater to the diverse manpower requirements of various sectors at
                junior, middle and senior management levels, both nationally and internationally.
                Our dedicated team assists clients in creating and developing their organisations
                by delivering services tailored to their specific needs - whether that is finding
                exceptional talent, enhancing HR processes, or providing comprehensive training.
              </p>
              <p className="mt-4 leading-relaxed">
                What sets Takura apart is our unwavering commitment to matching the right
                individuals to our clients' unique requirements. Through a rigorous process of
                identifying, evaluating and placing candidates, we ensure that every placement we
                make is a perfect fit, drawing on an extensive network of professionals across
                Nepal.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/what-we-do"
                  className="rounded-full bg-primary px-6 py-3 text-xs font-bold tracking-wide text-primary-foreground uppercase transition-opacity hover:opacity-90"
                >
                  What We Do
                </Link>
                <Link
                  to="/chairman-message"
                  className="rounded-full border border-ink px-6 py-3 text-xs font-bold tracking-wide text-ink uppercase transition-colors hover:bg-ink hover:text-ink-foreground"
                >
                  Chairman's Message
                </Link>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="overflow-hidden rounded-xl border border-border shadow-card">
                <img
                  src={aboutPhoto}
                  alt="Takura Overseas team presenting recruitment performance to a client"
                  loading="lazy"
                  className="h-52 w-full object-cover sm:h-60"
                />
              </div>

              <div className="mt-6 rounded-xl border border-border bg-surface p-8">
                <h3 className="text-sm font-extrabold tracking-wide text-primary uppercase">
                  Company at a Glance
                </h3>
                <dl className="mt-6 space-y-5">
                  {PROFILE.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex gap-3.5">
                      <Icon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" aria-hidden="true" />
                      <div>
                        <dt className="text-[0.65rem] font-bold tracking-wide text-muted-foreground uppercase">
                          {label}
                        </dt>
                        <dd className="mt-1 text-sm font-semibold text-ink">{value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-6 rounded-xl bg-ink p-8">
                <h3 className="text-sm font-extrabold tracking-wide text-primary uppercase">
                  Where We Deploy
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {DESTINATIONS.map((country) => (
                    <li
                      key={country}
                      className="rounded-full border border-white/20 px-3.5 py-1.5 text-xs font-semibold text-white/80"
                    >
                      {country}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <WhereWeWork />

      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              title="Why Employers"
              highlight="Work With Us"
              center
              subtitle="Four things we hold ourselves to on every file, regardless of how large or small the requirement is."
            />
          </Reveal>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2">
            {DIFFERENTIATORS.map((item, index) => (
              <Reveal as="li" key={item.title} delay={Math.min(index, 3) * 90}>
                <article className="flex h-full gap-5 rounded-xl border border-border bg-background p-7">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-sm font-extrabold text-primary-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-extrabold text-ink">{item.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
