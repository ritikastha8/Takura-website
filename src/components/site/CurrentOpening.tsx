import { Link } from "@tanstack/react-router";
import { MapPin, Briefcase, Users, FileText } from "lucide-react";
import { CURRENT_OPENINGS, CONTACT } from "./data";
import { Reveal } from "./reveal";

const REQUIRED_DOCS = [
  "Valid passport (minimum 6 months validity)",
  "Passport-size photographs with white background",
  "Training or trade certificates, where applicable",
  "Previous employment or experience letters",
  "Academic certificates (for skilled and supervisory roles)",
];

const STATUS_STYLES: Record<string, string> = {
  Open: "bg-[#1a8033] text-white",
  "Interview Scheduled": "bg-primary text-primary-foreground",
  Shortlisting: "bg-ink text-ink-foreground",
};

export function CurrentOpening() {
  return (
    <section className="pt-8 pb-20 lg:pt-10 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CURRENT_OPENINGS.map((job, index) => (
            <Reveal as="li" key={`${job.position}-${job.country}`} delay={Math.min(index, 3) * 80}>
              <article className="flex h-full flex-col rounded-xl border border-border bg-background p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-extrabold text-ink">{job.position}</h3>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-[0.6rem] font-bold tracking-wide uppercase ${
                      STATUS_STYLES[job.status] ?? "bg-ink text-ink-foreground"
                    }`}
                  >
                    {job.status}
                  </span>
                </div>

                <dl className="mt-5 space-y-2.5 text-sm">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <dt className="sr-only">Country</dt>
                    <dd>{job.country}</dd>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Briefcase className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <dt className="sr-only">Sector</dt>
                    <dd>{job.sector}</dd>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Users className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <dt className="sr-only">Vacancies</dt>
                    <dd>{job.vacancies} vacancies</dd>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <FileText className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <dt className="sr-only">Contract</dt>
                    <dd>{job.contract}</dd>
                  </div>
                </dl>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold tracking-wide text-primary uppercase"
                >
                  Apply / Enquire
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            </Reveal>
          ))}
        </ul>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-sm font-extrabold tracking-wide text-primary uppercase">
              Documents Required to Apply
            </h3>
            <ul className="mt-5 space-y-3">
              {REQUIRED_DOCS.map((doc) => (
                <li key={doc} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {doc}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100} className="flex flex-col rounded-xl bg-ink p-8 text-ink-foreground">
            <h3 className="text-sm font-extrabold tracking-wide text-primary uppercase">How to Apply</h3>
            <p className="mt-5 text-sm leading-relaxed text-white/75">
              Visit our office in {CONTACT.address} with your documents, or contact us by phone to confirm your
              eligibility before travelling. Our team will guide you through screening, trade testing, medical
              examination and departure.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-white/75">
              Takura Overseas never charges candidates beyond the limits set by the Department of Foreign Employment.
              If anyone requests additional payment in our name, please report it to our office immediately.
            </p>
            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              <Link
                to="/contact"
                className="rounded-full bg-primary px-6 py-3 text-xs font-bold tracking-wide text-primary-foreground uppercase transition-opacity hover:opacity-90"
              >
                Contact Office
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
