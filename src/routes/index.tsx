import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Highlights } from "@/components/site/Highlights";
import { WelcomeTeaser } from "@/components/site/WelcomeTeaser";
import { CategoriesTeaser } from "@/components/site/CategoriesTeaser";
import { ClientsTeaser } from "@/components/site/ClientsTeaser";
import { CtaBand } from "@/components/site/CtaBand";
import { SiteLayout } from "@/components/site/SiteLayout";

const TITLE = "Takura Overseas Pvt. Ltd. | ISO Certified Foreign Employment Agency in Nepal";
const DESCRIPTION =
  "ISO 9001:2015 certified, Govt. licensed (1538/078/79) foreign employment agency in Lalitpur, Nepal - placing skilled Nepali talent with employers across the Gulf and Malaysia.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EmploymentAgency",
          name: "Takura Overseas Pvt. Ltd.",
          slogan: "Creating a better future",
          description: DESCRIPTION,
          telephone: "+977 1 4529674",
          email: "info@takuraoverseas.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Manbhwan-14",
            addressLocality: "Lalitpur",
            addressCountry: "NP",
          },
          areaServed: ["Saudi Arabia", "Qatar", "Bahrain", "United Arab Emirates", "Malaysia", "Kuwait"],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <Highlights />
      <WelcomeTeaser />
      <CategoriesTeaser />
      <ClientsTeaser />
      <CtaBand />
    </SiteLayout>
  );
}
