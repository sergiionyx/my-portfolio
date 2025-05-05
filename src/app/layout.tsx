import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Professional Software Engineer Portfolio",
  description:
    "Portfolio website showcasing web development services and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <a href="/" className="text-xl font-bold text-white">
                Your Name
              </a>
              <div className="hidden md:flex space-x-8">
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition"
                >
                  Services
                </a>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-white transition"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 text-gray-300 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p>
                  &copy; {new Date().getFullYear()} Your Name. All rights
                  reserved.
                </p>
              </div>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
