export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Create Website 4U",
    description:
      "Professional small business website development services. Expert web design and development for businesses looking to establish a strong online presence.",
    url: "https://createwebsite4u.com",
    logo: "https://createwebsite4u.com/logo.png",
    image: "https://createwebsite4u.com/og-image.jpg",
    telephone: "+1-415-967-1990",
    email: "contact@createwebsite4u.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Charlotte",
      addressRegion: "NC",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "35.2271",
      longitude: "-80.8431",
    },
    openingHours: "Mo-Fr 09:00-17:00",
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Credit Card, PayPal, Bank Transfer",
    areaServed: [
      {
        "@type": "City",
        name: "Charlotte",
      },
      {
        "@type": "City",
        name: "Raleigh",
      },
      {
        "@type": "City",
        name: "Durham",
      },
      {
        "@type": "City",
        name: "Greensboro",
      },
      {
        "@type": "City",
        name: "Winston-Salem",
      },
      {
        "@type": "State",
        name: "North Carolina",
      },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "35.2271",
        longitude: "-80.8431",
      },
      geoRadius: "50000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Small Business Website Development",
            description: "Custom website development for small businesses",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-commerce Website Development",
            description: "Online store development with payment processing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Optimization",
            description: "Search engine optimization services",
          },
        },
      ],
    },
    sameAs: [
      "https://github.com/sergiionyx",
      "https://linkedin.com/in/sergii-onyx",
    ],
    founder: {
      "@type": "Person",
      name: "Sergii Onyx",
      jobTitle: "Web Developer",
      description:
        "Professional web developer specializing in small business websites",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
