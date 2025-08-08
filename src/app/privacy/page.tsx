import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Create Website 4U",
  description:
    "Privacy Policy for Create Website 4U — how we collect, use, and protect personal information, including contact form submissions and security services like reCAPTCHA.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const lastUpdated = "2025-01-16";
  return (
    <main className="min-h-screen py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          Last updated: {lastUpdated}
        </p>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p>
            This Privacy Policy explains how Create Website 4U ("Company", "we",
            "us", or "our") collects, uses, and shares information when you
            visit createwebsite4u.com (the "Site") and when you contact us or
            use our services. By using the Site, you agree to this Policy.
          </p>

          <h2>1. Information We Collect</h2>
          <h3>1.1 Information You Provide</h3>
          <ul>
            <li>
              Contact Form: name, email address, message content. We use this
              information to respond to your inquiry and provide requested
              services.
            </li>
          </ul>

          <h3>1.2 Automatically Collected Information</h3>
          <ul>
            <li>
              Security and Logs: like most websites, our hosting platform may
              collect IP addresses, timestamps, user‑agent, and error logs to
              ensure security and reliability.
            </li>
            <li>
              reCAPTCHA: we use Google reCAPTCHA to reduce spam. reCAPTCHA may
              collect hardware and software information, such as device and
              application data, and send it to Google for security purposes.
            </li>
          </ul>

          <h2>2. How We Use Information</h2>
          <ul>
            <li>
              To respond to your messages and provide services you request.
            </li>
            <li>To operate, secure, and improve the Site and our services.</li>
            <li>To prevent spam and abuse (including via reCAPTCHA).</li>
            <li>
              To verify email deliverability (e.g., using third‑party validation
              services) when appropriate to reduce bounced or abusive emails.
            </li>
          </ul>

          <h2>3. Legal Bases (where applicable)</h2>
          <p>
            We process personal information to perform or enter into a contract
            (responding to your request), based on legitimate interests (site
            security, spam prevention, service improvement), and/or with your
            consent where required.
          </p>

          <h2>4. Sharing of Information</h2>
          <ul>
            <li>
              Hosting and Infrastructure: we host on platforms such as Vercel.
            </li>
            <li>
              Email Delivery: we may send messages using Resend (or similar
              providers). Your name, email, and message may be processed by that
              provider to deliver emails.
            </li>
            <li>
              Email Verification: when enabled, we may use a service like
              ZeroBounce to validate the deliverability of an email address
              before sending a reply, to reduce spam and bounces.
            </li>
            <li>
              Security: Google reCAPTCHA is used to protect the contact form and
              reduce abuse. Use of reCAPTCHA is subject to Google’s Privacy
              Policy and Terms.
            </li>
            <li>
              Compliance and Legal: we may disclose information if required by
              law or to protect rights, safety, or security.
            </li>
          </ul>

          <h2>5. Data Retention</h2>
          <p>
            We generally retain contact form communications for as long as
            necessary to respond and for reasonable record‑keeping, then delete
            or anonymize them. Email providers (e.g., Resend) may retain logs
            per their own policies. Security logs may be retained by our hosting
            provider for operational and security purposes.
          </p>

          <h2>6. Your Choices and Rights</h2>
          <ul>
            <li>
              You can contact us to request access, correction, or deletion of
              your personal information, subject to applicable law and
              legitimate business needs.
            </li>
            <li>
              You may opt not to provide certain information, but this may limit
              our ability to respond.
            </li>
          </ul>

          <h2>7. Cookies and Similar Technologies</h2>
          <p>
            We use minimal cookies. If we add analytics or marketing tools in
            the future, we will update this Policy and, where required, provide
            a consent mechanism.
          </p>

          <h2>8. Children’s Privacy</h2>
          <p>
            Our services are not directed to children under 13. We do not
            knowingly collect personal information from children under 13.
          </p>

          <h2>9. Data Security</h2>
          <p>
            We take reasonable measures to protect information from loss, theft,
            misuse, and unauthorized access or disclosure. No method of
            transmission or storage is 100% secure.
          </p>

          <h2>10. International Visitors</h2>
          <p>
            If you access the Site from outside the United States, you
            understand your information may be processed in the U.S. and other
            jurisdictions with different data protection laws.
          </p>

          <h2>11. Third‑Party Links</h2>
          <p>
            The Site may link to third‑party websites. Those sites have their
            own privacy policies, which we recommend reviewing.
          </p>

          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this Policy from time to time. Material changes will
            be indicated by updating the "Last updated" date above. Continued
            use of the Site after changes constitutes acceptance of the updated
            Policy.
          </p>

          <h2>13. Contact Us</h2>
          <p>
            Questions or requests regarding this Policy can be sent to{" "}
            <a
              className="underline"
              href="mailto:www.createwebsite4u.com@gmail.com"
            >
              www.createwebsite4u.com@gmail.com
            </a>
            .
          </p>

          <h3>reCAPTCHA Notice</h3>
          <p>
            This site is protected by reCAPTCHA and the Google{" "}
            <a
              className="underline"
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              className="underline"
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>
      </div>
    </main>
  );
}
