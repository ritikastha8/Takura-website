import { Reveal } from "./reveal";

export function Chairman() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <h2 className="heading-caps rule-red text-2xl sm:text-3xl">Message from Chairman</h2>
          <div className="mt-8 space-y-4">
            <p className="leading-relaxed">
              Welcome to Takura Overseas. Before founding this company, I spent eighteen years
              leading Lucky HR Solution Pvt. Ltd. - years that taught me that recruitment is never
              only about filling a vacancy. It is about a family's future and an employer's trust.
              In that time, I had the privilege of placing thousands of Nepali workers abroad, and
              of sitting with just as many families before departure - hearing what they hoped for,
              and what they feared.
            </p>
            <p className="leading-relaxed">
              We built Takura on ethical recruitment: honest counselling, transparent costs,
              verified documentation and a strict no-exploitation policy. Our teams place Nepali
              talent across hospitality, construction, engineering, healthcare, manufacturing,
              security, IT, sales and administration with employers who value people. Every file
              that passes through our office is handled by name, not by number, and every
              placement is followed up long after the candidate has landed.
            </p>
            <p className="leading-relaxed">
              Whether you are an employer building a dependable workforce or a candidate seeking a
              better future abroad, you will find a partner here who keeps their word. That
              commitment does not end at departure - it is the standard we hold ourselves to for
              as long as you work with us.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
