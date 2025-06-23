import Image from "next/image";
import Link from "next/link";
import ContactForm from "./components/ContactForm";

// Sample project data - you can replace this with your actual projects
const projects = [
  {
    id: 1,
    title: "Single page Locksmith Website",
    description:
      "This project is a modern, single-page responsive website developed for OK Expedite Locksmith, a local locksmith business serving the greater Charlotte, NC area. The site was designed to build trust, improve local SEO visibility, and convert visitors into customers quickly.",
    image: "/images/ok-expedite-project.png", // Add your actual image path
    liveUrl: "https://www.okexpeditelocksmith.com/",
  },
  {
    id: 2,
    title: "Multi page Website",
    description:
      "Complete business website package with online payment processing, professional photo gallery, customer contact system, and search engine optimization. Perfect for businesses that need to accept payments online and showcase their work with a professional image gallery.",
    image: "/images/locksmith-website.png", // Add your actual image path
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://locksmith-two.vercel.app/",
    githubUrl: "#",
  },
  // {
  //   id: 3,
  //   title: "Portfolio Template",
  //   description:
  //     "Clean and modern portfolio template for creative professionals with smooth animations.",
  //   image: "/images/portfolio-project.jpg", // Add your actual image path
  //   technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
  // {
  //   id: 4,
  //   title: "Business Landing Page",
  //   description:
  //     "Converting landing page for small businesses with contact forms and service showcase.",
  //   image: "/images/business-project.jpg", // Add your actual image path
  //   technologies: ["Vue.js", "Tailwind CSS", "Firebase"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
  // {
  //   id: 5,
  //   title: "Dashboard Application",
  //   description:
  //     "Analytics dashboard with real-time data visualization and user management system.",
  //   image: "/images/dashboard-project.jpg", // Add your actual image path
  //   technologies: ["React", "Chart.js", "Node.js", "PostgreSQL"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
  // {
  //   id: 6,
  //   title: "Mobile App Landing",
  //   description:
  //     "Modern landing page for mobile app with download links and feature showcase.",
  //   image: "/images/mobile-project.jpg", // Add your actual image path
  //   technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 20%" }}
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
            <source src="/videos/hero-background.webm" type="video/webm" />
            {/* Fallback background if video doesn't load */}
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20 dark:bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 pb-2 text-white">
              Professional Websites for Small Businesses
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Get a modern, mobile-friendly website that helps your business
              grow. Affordable, professional web design services tailored for
              small businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Get Started
              </a>
              <a
                href="#projects"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition border border-white/30"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Website Services for Small Businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Business Websites
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Professional, mobile-friendly websites that showcase your
                business and help you connect with customers.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                E-commerce Solutions
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Online stores that make it easy for customers to browse and
                purchase your products.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Website Maintenance
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Regular updates and maintenance to keep your website secure and
                running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Why Choose Us for Your Business Website
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Fast Turnaround
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get your website up and running quickly
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Affordable Pricing
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Competitive rates for small businesses
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Reliable Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ongoing assistance when you need it
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Modern Design
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Professional and responsive websites
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Recent Business Websites
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.liveUrl}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center text-sm"
                target="_blank"
              >
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg overflow-hidden hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition duration-300 group flex flex-col h-full">
                  <div className="relative h-60 bg-gray-100 dark:bg-gray-700 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm flex-1">
                      {project.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Website Packages (Base Prices)
          </h2>

          {/* Main Packages Table */}
          <div className="overflow-x-auto mb-16">
            <table className="w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <thead className="bg-gray-200 dark:bg-gray-900">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Package
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Perfect For
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    What You Get
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Price (USD)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-bold text-blue-600 dark:text-blue-400">
                      Starter
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                    Freelancers, solo service providers
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                    1–3 page website
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-green-600 dark:text-green-400">
                      $700–$1,200
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-bold text-blue-600 dark:text-blue-400">
                      Business
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                    Small/local businesses, nonprofits
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                    4–7 page website
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-green-600 dark:text-green-400">
                      $1,500–$2,800
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-bold text-blue-600 dark:text-blue-400">
                      Premium
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                    Agencies, real estate, legal, education
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                    8–12 page website + blog
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-green-600 dark:text-green-400">
                      $3,000–$5,500
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-bold text-blue-600 dark:text-blue-400">
                      Web App
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                    SaaS, platforms, client portals
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                    Custom web application
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-green-600 dark:text-green-400">
                      $6,000+
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Features Comparison */}
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            What's Included in Each Package
          </h3>
          <div className="overflow-x-auto mb-16">
            <table className="w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <thead className="bg-gray-200 dark:bg-gray-900">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                    Starter
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                    Business
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                    Premium
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                    Web App
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                    Mobile-friendly design
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-500 text-xl">✅</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-500 text-xl">✅</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-500 text-xl">✅</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-500 text-xl">✅</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                    Fast loading website
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-500 text-xl">✅</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-500 text-xl">✅</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-500 text-xl">✅</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-500 text-xl">✅</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                    Contact form
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-500 text-xl">✅</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-500 text-xl">✅</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-500 text-xl">✅</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-500 text-xl">✅</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                    Search engine optimization
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-500 text-xl">✅</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-500 text-xl">✅</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-500 text-xl">✅</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-500 text-xl">✅</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                    Website hosting setup
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-500 text-xl">✅</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-500 text-xl">✅</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-500 text-xl">✅</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-500 text-xl">✅</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                    Custom design & navigation
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-500 text-xl">✅</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-500 text-xl">✅</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-500 text-xl">✅</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-500 text-xl">✅</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                    Blog or content management
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-gray-400 text-xl">—</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-yellow-500 text-xl">🔄</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-500 text-xl">✅</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-500 text-xl">✅</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                    Admin dashboard
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-gray-400 text-xl">—</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-gray-400 text-xl">—</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-gray-400 text-xl">—</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-500 text-xl">✅</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                    User login system
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-gray-400 text-xl">—</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-gray-400 text-xl">—</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-gray-400 text-xl">—</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-500 text-xl">✅</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Add-Ons Section */}
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Add-Ons (Customize Any Package)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-3">
                <span className="text-green-500 text-xl mr-2">✅</span>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  CMS Integration
                </h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Sanity, Strapi, etc.
              </p>
              <p className="font-bold text-green-600 dark:text-green-400">
                +$300–$1,000
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-3">
                <span className="text-blue-500 text-xl mr-2">🖼️</span>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Image Carousel/Gallery
                </h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Slider functionality
              </p>
              <p className="font-bold text-green-600 dark:text-green-400">
                +$100–$300
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-3">
                <span className="text-purple-500 text-xl mr-2">📈</span>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Analytics Setup
                </h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                GA4, Meta Pixel
              </p>
              <p className="font-bold text-green-600 dark:text-green-400">
                +$100–$200
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-3">
                <span className="text-yellow-500 text-xl mr-2">🧠</span>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Copywriting
                </h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Website pages content
              </p>
              <p className="font-bold text-green-600 dark:text-green-400">
                +$200–$800
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-3">
                <span className="text-red-500 text-xl mr-2">📍</span>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Google Maps
                </h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Location embed
              </p>
              <p className="font-bold text-green-600 dark:text-green-400">
                +$50–$150
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-3">
                <span className="text-indigo-500 text-xl mr-2">🌐</span>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Multi-language
                </h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                i18n support
              </p>
              <p className="font-bold text-green-600 dark:text-green-400">
                +$300–$700
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-3">
                <span className="text-green-500 text-xl mr-2">💳</span>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Payment Integration
                </h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Stripe or PayPal
              </p>
              <p className="font-bold text-green-600 dark:text-green-400">
                +$300–$600
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-3">
                <span className="text-orange-500 text-xl mr-2">🔐</span>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  User Login & Access
                </h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Role-based access
              </p>
              <p className="font-bold text-green-600 dark:text-green-400">
                +$800–$1,500
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-3">
                <span className="text-teal-500 text-xl mr-2">🗃️</span>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Custom Admin Panel
                </h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                CMS UI
              </p>
              <p className="font-bold text-green-600 dark:text-green-400">
                +$1,000–$2,000
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-3">
                <span className="text-blue-500 text-xl mr-2">🔄</span>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  API Integration
                </h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                External services
              </p>
              <p className="font-bold text-green-600 dark:text-green-400">
                +$400–$1,000
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-3">
                <span className="text-purple-500 text-xl mr-2">🧪</span>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Monthly Support
                </h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Maintenance
              </p>
              <p className="font-bold text-green-600 dark:text-green-400">
                +$100–$500/mo
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-3">
                <span className="text-yellow-500 text-xl mr-2">🚀</span>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  SEO + Marketing
                </h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Optimization help
              </p>
              <p className="font-bold text-green-600 dark:text-green-400">
                +$500–$2,000/mo
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Ready to get started? Let's discuss your project and find the
              perfect package for your needs.
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Get Your Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Get Your Business Online Today
          </h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
