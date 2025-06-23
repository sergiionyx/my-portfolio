"use client";

import { useState, useEffect, useRef } from "react";

declare global {
  interface Window {
    grecaptcha: any;
    onRecaptchaLoad: () => void;
  }
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // reCAPTCHA state
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);
  const [isLocalhost, setIsLocalhost] = useState(false);
  const recaptchaRendered = useRef(false);
  const scriptLoaded = useRef(false);

  // Check if running on localhost
  useEffect(() => {
    setIsLocalhost(
      window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1"
    );
  }, []);

  // Load reCAPTCHA script
  useEffect(() => {
    // Skip reCAPTCHA on localhost if not configured
    if (isLocalhost) {
      console.log("Running on localhost - reCAPTCHA disabled for development");
      return;
    }

    // Prevent multiple script loads
    if (scriptLoaded.current) {
      return;
    }

    // Check if script is already loaded
    if (window.grecaptcha) {
      setIsRecaptchaLoaded(true);
      scriptLoaded.current = true;
      return;
    }

    // Load reCAPTCHA script
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    script.async = true;
    script.defer = true;

    window.onRecaptchaLoad = () => {
      setIsRecaptchaLoaded(true);
      scriptLoaded.current = true;
    };

    script.onload = window.onRecaptchaLoad;
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [isLocalhost]);

  // Render reCAPTCHA when loaded
  useEffect(() => {
    if (isLocalhost) return; // Skip on localhost

    if (isRecaptchaLoaded && window.grecaptcha && !recaptchaRendered.current) {
      // Check if element already has reCAPTCHA
      const container = document.getElementById("recaptcha-container");
      if (container && container.children.length === 0) {
        try {
          window.grecaptcha.ready(() => {
            window.grecaptcha.render("recaptcha-container", {
              sitekey:
                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
                "6LeGF2orAAAAACn0ayaUNhhsmQHqbnp3arca_gsf",
              callback: (token: string) => {
                setRecaptchaToken(token);
              },
              "expired-callback": () => {
                setRecaptchaToken("");
              },
            });
            recaptchaRendered.current = true;
          });
        } catch (error) {
          console.error("reCAPTCHA render error:", error);
        }
      }
    }
  }, [isRecaptchaLoaded, isLocalhost]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Skip reCAPTCHA verification on localhost
    if (!isLocalhost) {
      // Verify reCAPTCHA
      if (!recaptchaToken) {
        setSubmitStatus({
          type: "error",
          message: "Please complete the reCAPTCHA verification.",
        });
        return;
      }
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: isLocalhost
            ? "localhost-development"
            : recaptchaToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", message: "" });
        setRecaptchaToken("");
        // Reset reCAPTCHA
        if (window.grecaptcha && !isLocalhost) {
          window.grecaptcha.reset();
        }
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus.type && (
        <div
          className={`p-4 rounded-lg ${
            submitStatus.type === "success"
              ? "bg-green-500/20 border border-green-500 text-green-300"
              : "bg-red-500/20 border border-red-500 text-red-300"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
        >
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-gray-900 dark:text-white"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-gray-900 dark:text-white"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
          className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-vertical text-gray-900 dark:text-white"
        />
      </div>

      {/* reCAPTCHA Section - Only show on production */}
      {!isLocalhost && (
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Human Verification *
          </label>
          <div id="recaptcha-container" className="flex justify-center"></div>
          {!isRecaptchaLoaded && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Loading verification...
            </p>
          )}
        </div>
      )}

      {/* Development notice */}
      {isLocalhost && (
        <div className="bg-yellow-500/20 border border-yellow-500 text-yellow-300 p-4 rounded-lg">
          <p className="text-sm">
            🚧 Development Mode: reCAPTCHA is disabled for localhost testing.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || (!isLocalhost && !recaptchaToken)}
        className={`w-full font-bold py-3 px-8 rounded-lg transition duration-300 ${
          isSubmitting || (!isLocalhost && !recaptchaToken)
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        } text-white`}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
