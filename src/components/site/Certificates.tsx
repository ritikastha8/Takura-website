import { Reveal, SectionHeading } from "./reveal";

import dofeTraining from "@/assets/certificate-dofe-training-licence.jpg";
import panRegistration from "@/assets/certificate-pan-registration.jpg";
import foreignEmploymentLicence from "@/assets/certificate-foreign-employment-licence.jpg";
import incorporation from "@/assets/certificate-incorporation.jpg";

const CERTIFICATES = [
  {
    title: "Foreign Employment Business Licence",
    body: "Issued by the Department of Foreign Employment, Government of Nepal, authorising Takura Overseas to operate a foreign employment business under the Foreign Employment Act, 2064.",
    image: foreignEmploymentLicence,
  },
  {
    title: "Orientation Training Licence",
    body: "Licence No. 1538/078/79 issued by the Department of Foreign Employment, Ministry of Labour, Employment and Social Security, authorising Takura Overseas to provide pre-departure orientation training.",
    image: dofeTraining,
  },
  {
    title: "Certificate of Incorporation",
    body: "Registration No. 282001/078/079 issued by the Office of the Company Registrar, Ministry of Industry, Commerce & Supplies, confirming Takura Overseas Pvt. Ltd. as a duly incorporated company.",
    image: incorporation,
  },
  {
    title: "PAN Registration Certificate",
    body: "Permanent Account Number registration issued by the Inland Revenue Department, Government of Nepal, confirming Takura Overseas Pvt. Ltd. as a registered taxpayer.",
    image: panRegistration,
  },
];

export function Certificates() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            title="Our"
            highlight="Legal Documents"
            center
            subtitle="Government licences and registrations that keep Takura Overseas accountable, audited and fully compliant."
          />
        </Reveal>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2">
          {CERTIFICATES.map((cert, index) => (
            <Reveal as="li" key={cert.title} delay={Math.min(index, 3) * 90}>
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface">
                <div className="flex h-96 w-full items-center justify-center bg-white p-3">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-extrabold text-ink">{cert.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed">{cert.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
