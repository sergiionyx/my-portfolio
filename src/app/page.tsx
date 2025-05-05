import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Professional Software Engineer
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Specializing in building modern, responsive websites for small
            businesses. Transforming ideas into elegant digital solutions.
          </p>
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            View My Work
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="container mx-auto px-4 py-20 bg-gray-800"
      >
        <h2 className="text-3xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition duration-300">
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <p className="text-gray-300">
              Custom websites built with modern technologies and best practices.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition duration-300">
            <h3 className="text-xl font-semibold mb-4">E-commerce Solutions</h3>
            <p className="text-gray-300">
              Online stores that drive sales and provide great user experience.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition duration-300">
            <h3 className="text-xl font-semibold mb-4">Website Maintenance</h3>
            <p className="text-gray-300">
              Regular updates and maintenance to keep your website running
              smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-700 rounded-lg overflow-hidden hover:bg-gray-600 transition duration-300">
            <div className="h-48 bg-gray-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Project Name</h3>
              <p className="text-gray-300 mb-4">
                Brief description of the project and technologies used.
              </p>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center"
              >
                View Project
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="container mx-auto px-4 py-20 bg-gray-800"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
