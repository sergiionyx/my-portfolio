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
  // {
  //   id: 2,
  //   title: "Restaurant Website",
  //   description:
  //     "Responsive restaurant website with online menu, reservation system, and location finder.",
  //   image: "/images/restaurant-project.jpg", // Add your actual image path
  //   technologies: ["React", "Node.js", "MongoDB", "Express"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
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
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 pb-2 text-gray-900 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-blue-400 dark:to-purple-500">
              Professional Websites for Small Businesses
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
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
                className="bg-gray-700 dark:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 dark:hover:bg-gray-500 transition"
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
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-300 group shadow-lg">
                  <div className="relative h-60 bg-gray-100 dark:bg-gray-700 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
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
            Affordable Website Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Basic Business
              </h3>
              <p className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                $999
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  5 Pages
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Mobile Responsive
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Contact Form
                </li>
              </ul>
              <a
                href="#contact"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Get Started
              </a>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg border-2 border-blue-600">
              <div className="bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                Most Popular
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Professional Business
              </h3>
              <p className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                $1,999
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  10 Pages
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Blog Setup
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  SEO Optimization
                </li>
              </ul>
              <a
                href="#contact"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Get Started
              </a>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                E-commerce
              </h3>
              <p className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                $2,999
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Online Store
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Payment Integration
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Inventory Management
                </li>
              </ul>
              <a
                href="#contact"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Get Started
              </a>
            </div>
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
