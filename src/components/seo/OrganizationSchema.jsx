import React from "react";
import { Const } from "@/utils/Constants";

const OrganizationSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: Const.Brand,
    url: Const?.ClientLink || "",
    logo: {
      "@type": "ImageObject",
      url: `${Const?.ClientLink || ""}/logo-og.png`,
      width: 160,
      height: 90,
    },
    description:
      "We build brands that earn attention back, with interest. Full-service marketing agency specializing in brand strategy, digital marketing & creative excellence.",
    sameAs: [
      "https://www.linkedin.com/company/disrptve/",
      "https://www.instagram.com/bedisrptve?igsh=MWw3enZqcWZnYmZkbQ==",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9769331076",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default OrganizationSchema;
