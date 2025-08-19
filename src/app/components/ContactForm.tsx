"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    grecaptcha: {
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}

export default function ContactForm() {
  const router = useRouter();
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

  // reCAPTCHA v3 state
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);
  const [isLocalhost, setIsLocalhost] = useState(false);

  // Check if running on localhost
  useEffect(() => {
    setIsLocalhost(
      window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1"
    );
  }, []);

  // Load reCAPTCHA v3 script
  useEffect(() => {
    // Skip reCAPTCHA on localhost (comment out to test locally)
    // if (isLocalhost) {
    //   return;
    // }

    // Check if script is already loaded
    if (window.grecaptcha) {
      setIsRecaptchaLoaded(true);
      return;
    }

    const siteKey =
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
      "6LeGF2orAAAAACn0ayaUNhhsmQHqbnp3arca_gsf";

    // Load reCAPTCHA v3 script
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      setIsRecaptchaLoaded(true);
    };

    script.onerror = () => {
      console.error("Failed to load reCAPTCHA v3 script");
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [isLocalhost]);

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

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      let recaptchaToken = "";

      // Get reCAPTCHA token (skip on localhost)
      // if (!isLocalhost) {
      if (!window.grecaptcha) {
        throw new Error("reCAPTCHA not loaded");
      }

      const siteKey =
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
        "6LeGF2orAAAAACn0ayaUNhhsmQHqbnp3arca_gsf";

      recaptchaToken = await window.grecaptcha.execute(siteKey, {
        action: "submit",
      });
      // } else {
      //   recaptchaToken = "localhost-development";
      // }

      // Send form data
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // setSubmitStatus({
        //   type: "success",
        //   message: "Thank you! Your message has been sent successfully.",
        // });
        // setFormData({ name: "", email: "", message: "" });
        // Redirect to success page for conversion tracking (e.g., Google Ads)
        router.push("/contact/success");
        return;
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
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
          maxLength={30}
          minLength={2}
          autoComplete="name"
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
          maxLength={50}
          autoComplete="email"
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
          maxLength={1000}
          minLength={10}
          className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-vertical text-gray-900 dark:text-white"
        />
      </div>

      {/* reCAPTCHA v3 is invisible - no UI needed */}
      {!isLocalhost && !isRecaptchaLoaded && (
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Loading security verification...
          </p>
        </div>
      )}

      {/* Development notice */}
      {isLocalhost && (
        <div className="bg-yellow-500/20 border border-yellow-500 text-yellow-300 p-4 rounded-lg">
          <p className="text-sm">
            🚧 Development Mode: reCAPTCHA v3 is disabled for localhost testing.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full font-bold py-3 px-8 rounded-lg transition duration-300 ${
          isSubmitting
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        } text-white`}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
