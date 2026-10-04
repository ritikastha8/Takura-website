import { createFileRoute } from "@tanstack/react-router";
import { Certificates } from "@/components/site/Certificates";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates | Takura Overseas Pvt. Ltd." },
      {
        name: "description",
        content:
          "Government licences and registrations held by Takura Overseas Pvt. Ltd., including its Foreign Employment Business Licence, Orientation Training Licence, Certificate of Incorporation and PAN registration.",
      },
    ],
  }),
  component: CertificatesPage,
});

function CertificatesPage() {
  return (
    <SiteLayout>
      <div>
        <Certificates />
      </div>
    </SiteLayout>
  );
}
