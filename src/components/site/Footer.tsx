import { Facebook, Linkedin, Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { CATEGORIES, CONTACT, NAV_LINKS } from "./data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pt-16 pb-8">
      <div className="blob -left-24 -top-24 h-64 w-64 bg-primary/20" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <Logo inverted />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
              Your trusted partner for global career opportunities.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="/contact"
                  aria-label={["Facebook", "LinkedIn", "Instagram"][index]}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer quick links">
            <h3 className="text-xs font-bold tracking-[0.25em] text-ink-foreground uppercase">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm text-white/65">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/advertisement" className="transition-colors hover:text-primary">
                  Advertisement
                </a>
              </li>
              <li>
                <a href="/current-opening" className="transition-colors hover:text-primary">
                  Current Opening
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-bold tracking-[0.25em] text-ink-foreground uppercase">
              Services
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm text-white/65">
              {CATEGORIES.map((category) => (
                <li key={category.name}>{category.name}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.25em] text-ink-foreground uppercase">
              Contact
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm text-white/65">
              <li>{CONTACT.address}</li>
              <li>{CONTACT.phones.join(" | ")}</li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-primary">
                  {CONTACT.email}
                </a>
              </li>
              <li>{CONTACT.website}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Takura Overseas Pvt. Ltd. All Rights Reserved.</p>
          <p>Govt. Licence No. {CONTACT.licence} | ISO 9001:2015 Certified</p>
        </div>
      </div>
    </footer>
  );
}
