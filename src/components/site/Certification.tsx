import { BadgeCheck, ShieldCheck } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

export function Certification() {
  return (
    <section className="bg-surface pt-8 pb-20 lg:pt-10 lg:pb-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            title="ISO 9001:2015"
            highlight="Certified Organization"
            center
            subtitle="Our recruitment, documentation and deployment processes are audited against the international quality management standard - so employers get consistency, traceability and accountability on every mobilisation."
          />
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
            <article className="rounded-xl border-4 border-primary bg-background p-8 text-center shadow-card sm:p-12">
              <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
                Certificate of Registration
              </p>
              <h3 className="mt-6 text-2xl font-extrabold tracking-wide uppercase">
                Takura Overseas Pvt. Ltd.
              </h3>
              <p className="mt-3 text-sm">Ward No. 1, Hattisar, Kathmandu, Nepal</p>
              <div className="mx-auto mt-6 h-px w-24 bg-primary" />
              <p className="mt-6 text-xs tracking-[0.2em] uppercase">Scope of Certification</p>
              <p className="mt-2 font-semibold text-ink">Foreign Employment Consultancy</p>
              <p className="mt-6 text-sm">
                Assessed and registered against the requirements of
                <span className="font-semibold text-ink"> ISO 9001:2015</span>
              </p>
              <p className="mt-6 text-xs tracking-[0.18em] uppercase">
                Govt. Licence No. 1538/078/79
              </p>
            </article>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="flex items-center gap-4 rounded-xl border border-border bg-background p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary">
                  <BadgeCheck className="h-6 w-6 text-primary-foreground" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-ink">ISO 9001:2015</span>
                  <span className="block text-xs">Quality Management System</span>
                </span>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-border bg-background p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink">
                  <ShieldCheck className="h-6 w-6 text-ink-foreground" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-ink">UKAS / URS</span>
                  <span className="block text-xs">Accredited Certification Body</span>
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
