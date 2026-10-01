import { companies, site, socials } from "@/content/profile";

export function JsonLd() {
  const personId = `${site.url}/#sean`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: site.legalName,
        alternateName: site.name,
        jobTitle: site.role,
        description: site.description,
        url: site.url,
        email: `mailto:${site.email}`,
        address: {
          "@type": "Place",
          name: "Miami-Fort Lauderdale Area",
        },
        sameAs: socials.map((item) => item.href),
        knowsAbout: [
          "Treasury operations",
          "Stablecoin settlement",
          "Agentic AI systems",
          "Blockchain",
          "TypeScript",
          "Next.js",
        ],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            name: "Meta Front-End Developer Specialization",
            credentialCategory: "certificate",
            recognizedBy: { "@type": "Organization", name: "Meta" },
            dateCreated: "2024-02",
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "Generative AI Fundamentals Specialization",
            credentialCategory: "certificate",
            recognizedBy: { "@type": "Organization", name: "IBM" },
            dateCreated: "2024-02",
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "Generative AI for Software Developers Specialization",
            credentialCategory: "certificate",
            recognizedBy: { "@type": "Organization", name: "IBM" },
            dateCreated: "2024-02",
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "AWS Cloud Solutions Architect Specialization",
            credentialCategory: "certificate",
            recognizedBy: { "@type": "Organization", name: "Amazon Web Services" },
            dateCreated: "2024-06",
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "AWS Cloud Technology Consultant Specialization",
            credentialCategory: "certificate",
            recognizedBy: { "@type": "Organization", name: "Amazon Web Services" },
            dateCreated: "2024-06",
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "TOGAF 10 Foundation",
            credentialCategory: "certificate",
            recognizedBy: { "@type": "Organization", name: "EDUCBA" },
            dateCreated: "2024-07",
          },
        ],
      },
      ...companies.map((company) => ({
        "@type": "Organization",
        name: company.name,
        url: company.href,
        founder: { "@id": personId },
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
