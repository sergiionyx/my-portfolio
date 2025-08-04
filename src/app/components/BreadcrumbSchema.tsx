export default function BreadcrumbSchema() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://createwebsite4u.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://createwebsite4u.com/#services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Projects",
        item: "https://createwebsite4u.com/#projects",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Pricing",
        item: "https://createwebsite4u.com/#pricing",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: "https://createwebsite4u.com/#contact",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
}
