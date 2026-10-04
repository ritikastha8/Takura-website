import { Link } from "@tanstack/react-router";
import { Reveal } from "./reveal";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-primary py-20">
      <div className="blob -left-16 -top-16 h-64 w-64 bg-white/10" aria-hidden="true" />
      <div className="blob -bottom-20 right-0 h-72 w-72 bg-ink/15" aria-hidden="true" />
      <Reveal className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="heading-caps text-3xl text-primary-foreground sm:text-4xl">
          Ready to Build Your Winning Team?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/85">
          We power businesses across the Gulf, Malaysia and beyond with dedicated, screened and
          fully documented resources - mobilised on schedule, every time.
        </p>
        <Link
          to="/hire-talent"
          className="mt-9 inline-block rounded-full border-2 border-white px-8 py-3.5 text-sm font-bold tracking-wide text-primary-foreground uppercase transition-colors hover:bg-white hover:text-primary"
        >
          Contact Us
        </Link>
      </Reveal>
    </section>
  );
}
