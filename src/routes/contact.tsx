import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/site/Contact";
import { PhotoBanner } from "@/components/site/PhotoBanner";
import { SiteLayout } from "@/components/site/SiteLayout";
import bannerPhoto from "@/assets/banner-contact-photo.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get in Touch | Takura Overseas Pvt. Ltd." },
      {
        name: "description",
        content:
          "Visit the Takura Overseas office in Manbhwan-14, Lalitpur or reach out by phone or email - our team is ready to help with your next step.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PhotoBanner image={bannerPhoto} title="Get in" highlight="Touch" />
      <div>
        <Contact />
      </div>
    </SiteLayout>
  );
}