import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Globe, ShieldCheck, Paperclip } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { CONTACT, WEB3FORMS_ACCESS_KEY } from "./data";
import { Reveal } from "./reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
  message: z.string().trim().min(10, "Tell us a little more about your requirement").max(1000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>> & { attachments?: string };

const FIELD_CLASS =
  "w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary";

const MAX_ATTACHMENTS_BYTES = 10 * 1024 * 1024; // 10MB combined - adjust to match your Web3Forms plan limit

export function Contact({ mode = "contact" }: { mode?: "contact" | "hire" }) {
  const isHirePage = mode === "hire";

  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [fileNames, setFileNames] = useState<string[]>([]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(
      Array.from(formData.entries()).filter(([, v]) => typeof v === "string"),
    );
    const result = schema.safeParse(data);

    const files = (formData.getAll("attachments") as File[]).filter((f) => f.size > 0);
    const totalBytes = files.reduce((sum, f) => sum + f.size, 0);

    const next: Errors = {};
    if (!result.success) {
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
    }
    if (totalBytes > MAX_ATTACHMENTS_BYTES) {
      next.attachments = "Attachments are too large - please keep the combined size under 10MB.";
    }
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }
    setErrors({});

    if (WEB3FORMS_ACCESS_KEY === "REPLACE_WITH_WEB3FORMS_ACCESS_KEY") {
      toast.error("Form isn't connected yet - add a Web3Forms access key in data.ts to enable submissions.");
      return;
    }

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", isHirePage ? "New Hire Talent enquiry - Takura Overseas" : "New contact enquiry - Takura Overseas");
    formData.append("from_name", "Takura Overseas Website");

    setSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const responseData = await response.json();
      if (responseData.success) {
        form.reset();
        setFileNames([]);
        toast.success("Thank you - your enquiry has been sent. Our team will respond shortly.");
      } else {
        toast.error("Something went wrong sending your enquiry. Please try again or contact us directly.");
      }
    } catch {
      toast.error("Something went wrong sending your enquiry. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-10 pb-20 lg:pt-14 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={isHirePage ? "grid gap-10 lg:grid-cols-2" : "mx-auto max-w-4xl"}>
          {isHirePage ? (
            <Reveal>
              <form onSubmit={onSubmit} noValidate className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-semibold tracking-wide text-ink uppercase">
                  Full Name
                </label>
                <input id="name" name="name" maxLength={100} className={FIELD_CLASS} />
                {errors.name ? <p className="mt-1 text-xs text-primary">{errors.name}</p> : null}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-semibold tracking-wide text-ink uppercase">
                    Email
                  </label>
                  <input id="email" name="email" type="email" maxLength={255} className={FIELD_CLASS} />
                  {errors.email ? <p className="mt-1 text-xs text-primary">{errors.email}</p> : null}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-xs font-semibold tracking-wide text-ink uppercase">
                    Phone
                  </label>
                  <input id="phone" name="phone" type="tel" maxLength={30} className={FIELD_CLASS} />
                  {errors.phone ? <p className="mt-1 text-xs text-primary">{errors.phone}</p> : null}
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-semibold tracking-wide text-ink uppercase">
                  Message / Requirement
                </label>
                <textarea id="message" name="message" rows={5} maxLength={1000} className={FIELD_CLASS} />
                {errors.message ? <p className="mt-1 text-xs text-primary">{errors.message}</p> : null}
              </div>
              <div>
                <label htmlFor="attachments" className="mb-2 block text-xs font-semibold tracking-wide text-ink uppercase">
                  CV / CV Folder (optional)
                </label>
                <label
                  htmlFor="attachments"
                  className="flex cursor-pointer items-center gap-3 rounded-md border border-dashed border-border bg-surface px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-primary"
                >
                  <Paperclip className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  Attach one or more CVs - PDF, DOC, DOCX or ZIP
                </label>
                <input
                  id="attachments"
                  name="attachments"
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.zip"
                  className="sr-only"
                  onChange={(e) => setFileNames(Array.from(e.currentTarget.files ?? []).map((f) => f.name))}
                />
                {fileNames.length > 0 ? (
                  <ul className="mt-2 space-y-1">
                    {fileNames.map((name) => (
                      <li key={name} className="truncate text-xs text-ink">
                        {name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-1.5 text-xs text-muted-foreground">Combined size up to 10MB.</p>
                )}
                {errors.attachments ? <p className="mt-1 text-xs text-primary">{errors.attachments}</p> : null}
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="rounded-full bg-primary px-8 py-3.5 text-sm font-bold tracking-wide text-primary-foreground uppercase transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Submit Enquiry"}
              </button>
              </form>
            </Reveal>
          ) : null}

          <Reveal delay={isHirePage ? 120 : 0} className="space-y-4">
            <InfoCard icon={MapPin} title="Head Office">
              {CONTACT.address}
            </InfoCard>
            <InfoCard icon={Phone} title="Telephone">
              <a href={`tel:${CONTACT.phones[0]?.replace(/\s/g, "")}`} className="hover:text-primary">
                {CONTACT.phones[0]}
              </a>{" "}
              |{" "}
              <a href={`tel:${CONTACT.phones[1]?.replace(/\s/g, "")}`} className="hover:text-primary">
                {CONTACT.phones[1]}
              </a>
            </InfoCard>
            <InfoCard icon={Mail} title="Email">
              <a href={`mailto:${CONTACT.email}`} className="hover:text-primary">
                {CONTACT.email}
              </a>
            </InfoCard>
            <InfoCard icon={Globe} title="Website">
              {CONTACT.website}
            </InfoCard>
            <InfoCard icon={ShieldCheck} title="Govt. Licence No.">
              {CONTACT.licence}
            </InfoCard>

            <div className="overflow-hidden rounded-xl border border-border bg-surface">
              <iframe
                title="Takura Overseas office location in Manbhawan, Lalitpur"
                src="https://www.google.com/maps?q=Manbhawan-14%2C%20Lalitpur%2C%20Nepal&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0"
              />
              <a
                href={CONTACT.mapHref}
                target="_blank"
                rel="noreferrer"
                className="block border-t border-border px-5 py-4 text-center text-sm font-bold tracking-wide text-primary uppercase hover:bg-primary hover:text-primary-foreground"
              >
                Open Location in Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-border bg-surface p-5">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary">
        <Icon className="h-5 w-5 text-primary-foreground" />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold tracking-[0.18em] text-ink uppercase">{title}</p>
        <p className="mt-1 text-sm break-words">{children}</p>
      </div>
    </div>
  );
}
