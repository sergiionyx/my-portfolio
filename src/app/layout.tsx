import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Small Business Website Development | Professional Web Design Services",
  description:
    "Expert small business website development services. Get a modern, mobile-friendly website that helps your business grow. Affordable, professional web design for small businesses.",
  metadataBase: new URL("https://createwebsite4u.com"),
  keywords:
    "small business website, web development, professional web design, affordable website, business website, mobile-friendly website, local business website",
  openGraph: {
    title:
      "Small Business Website Development | Professional Web Design Services",
    description:
      "Expert small business website development services. Get a modern, mobile-friendly website that helps your business grow. Affordable, professional web design for small businesses.",
    url: "https://createwebsite4u.com",
    siteName: "Create Website 4U",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Create Website 4U - Small Business Website Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Small Business Website Development | Professional Web Design Services",
    description:
      "Expert small business website development services. Get a modern, mobile-friendly website that helps your business grow.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification", // Add your Google Search Console verification code
  },
  alternates: {
    canonical: "https://createwebsite4u.com",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <nav className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <a
                href="/"
                className="text-xl font-bold text-gray-900 dark:text-white"
              >
                Create Website 4U
              </a>
              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="#services"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
                >
                  Services
                </a>
                <a
                  href="#projects"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
                >
                  Projects
                </a>
                <a
                  href="#pricing"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
                >
                  Pricing
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
                >
                  Contact
                </a>
                <ThemeToggle />
              </div>
              <div className="md:hidden flex items-center space-x-4">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Create Website 4U
                </h3>
                <p className="text-sm">
                  Professional website development services for small
                  businesses. Helping you establish a strong online presence.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Services
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#services"
                      className="hover:text-gray-900 dark:hover:text-white transition"
                    >
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="hover:text-gray-900 dark:hover:text-white transition"
                    >
                      E-commerce
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="hover:text-gray-900 dark:hover:text-white transition"
                    >
                      SEO Optimization
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="hover:text-gray-900 dark:hover:text-white transition"
                    >
                      Website Maintenance
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#projects"
                      className="hover:text-gray-900 dark:hover:text-white transition"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="hover:text-gray-900 dark:hover:text-white transition"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-gray-900 dark:hover:text-white transition"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy-policy"
                      className="hover:text-gray-900 dark:hover:text-white transition"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Contact
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="mailto:contact@createwebsite4u.com"
                      className="hover:text-gray-900 dark:hover:text-white transition hover:underline"
                    >
                      Email: contact@createwebsite4u.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+14159671990"
                      className="hover:text-gray-900 dark:hover:text-white transition hover:underline"
                    >
                      Phone: (415) 967-1990
                    </a>
                  </li>
                  <li className="flex space-x-4 mt-4">
                    <a
                      href="https://github.com/sergiionyx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-900 dark:hover:text-white transition"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://linkedin.com/in/sergii-onyx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-900 dark:hover:text-white transition"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <p>
                    &copy; {new Date().getFullYear()} Create Website 4U. All
                    rights reserved.
                  </p>
                </div>
                <div className="text-sm">
                  <a
                    href="/terms"
                    className="hover:text-gray-900 dark:hover:text-white transition mr-4"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="/privacy"
                    className="hover:text-gray-900 dark:hover:text-white transition"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
