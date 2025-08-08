import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Create Website 4U",
  description:
    "Terms of Service for Create Website 4U — website design and development services, payment terms, intellectual property, disclaimers, and legal notices.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  const lastUpdated = "2025-01-16";
  return (
    <main className="min-h-screen py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          Last updated: {lastUpdated}
        </p>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p>
            These Terms of Service (the "Terms") govern your access to and use
            of the website createwebsite4u.com (the "Site") and your purchase of
            any website design, development, and related services (collectively,
            the "Services") offered by Create Website 4U ("Company", "we", "us",
            or "our"). By using the Site or engaging us for Services, you agree
            to these Terms.
          </p>

          <h2>1. Who We Are</h2>
          <p>
            Create Website 4U provides website design and development services
            for small businesses, including but not limited to business
            websites, e‑commerce integrations, SEO setup, analytics
            implementation, hosting setup, content updates, and optional
            add‑ons. Primary service region: Charlotte, North Carolina and
            remote engagements in the U.S.
          </p>

          <h2>2. Use of the Site</h2>
          <ul>
            <li>
              You must use the Site lawfully and not attempt to disrupt it.
            </li>
            <li>
              You may contact us via the Site’s contact form; you agree not to
              submit unlawful, abusive, or misleading content.
            </li>
          </ul>

          <h2>3. Engagement of Services</h2>
          <p>
            A Service engagement begins when you accept a written estimate,
            proposal, or statement of work ("SOW"). The SOW defines scope,
            deliverables, timelines, responsibilities, and pricing. If a term
            here conflicts with an SOW, the SOW controls for that engagement.
          </p>

          <h3>3.1 Client Responsibilities</h3>
          <ul>
            <li>
              Provide timely content, branding assets, approvals, and access
              credentials (e.g., domain registrar, DNS, hosting, email
              provider).
            </li>
            <li>
              Ensure you have rights to all content you supply and that it
              complies with applicable laws (including privacy and IP laws).
            </li>
            <li>
              Designate a point of contact authorized to give approvals and
              feedback.
            </li>
          </ul>

          <h3>3.2 Scope Changes</h3>
          <p>
            Requests outside the agreed scope are handled via written change
            orders and may affect timeline and fees.
          </p>

          <h2>4. Payment Terms</h2>
          <ul>
            <li>
              Unless otherwise stated in the SOW, typical structure: an initial
              deposit to start, milestone payment(s), and final payment due on
              completion/approval and before launch or transfer.
            </li>
            <li>Invoices are due upon receipt unless specified otherwise.</li>
            <li>
              Late payments may incur a reasonable late fee and/or interest as
              permitted by law. Work may pause for overdue balances.
            </li>
            <li>
              Taxes: You are responsible for any applicable taxes. We recommend
              consulting your tax advisor regarding North Carolina and local tax
              requirements.
            </li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <ul>
            <li>
              Upon full and final payment, you receive ownership of the final
              website design and custom code specifically created for you,
              excluding (a) our pre‑existing tools, libraries, and processes;
              (b) third‑party materials; and (c) open‑source components, each of
              which are licensed separately as noted below.
            </li>
            <li>
              We retain ownership of our pre‑existing materials and developer
              tools used to deliver the project and grant you a non‑exclusive,
              perpetual license to use them as incorporated into your
              deliverables.
            </li>
            <li>
              Third‑party services (e.g., hosting, email delivery, analytics,
              payments) and open‑source software are subject to their own
              licenses and terms. You must comply with those terms.
            </li>
            <li>
              Portfolio Right: You grant us permission to display
              non‑confidential screenshots, project titles, and your public
              brand name/logo solely to showcase our work in our portfolio and
              marketing materials.
            </li>
          </ul>

          <h2>6. Third‑Party Services and Dependencies</h2>
          <p>
            Projects may rely on third‑party services (e.g., domain registrar
            and DNS, hosting such as Vercel, email delivery such as Resend,
            analytics, payment processors, maps, authentication, reCAPTCHA). We
            do not control third‑party availability, pricing, or policies. You
            are responsible for obtaining and maintaining required accounts and
            paying third‑party fees.
          </p>

          <h2>7. SEO, Performance, Accessibility, and Compliance</h2>
          <ul>
            <li>
              SEO: We follow best practices where applicable but do not
              guarantee rankings, traffic, or revenue outcomes.
            </li>
            <li>
              Performance: We optimize within scope and constraints. Actual
              speed depends on hosting, content, third‑party scripts, network,
              and user device conditions.
            </li>
            <li>
              Accessibility: On request and if included in scope, we can
              implement reasonable accessibility measures. Conformance to
              standards (e.g., WCAG) is not guaranteed unless explicitly stated
              in the SOW.
            </li>
            <li>
              Legal Compliance: You are responsible for the lawful operation of
              your site (including privacy notices, cookie banners/consent,
              email marketing compliance such as CAN‑SPAM, and data protection
              obligations like GDPR/CPRA if applicable).
            </li>
          </ul>

          <h2>8. Approvals, Acceptance, and Launch</h2>
          <ul>
            <li>
              We provide review checkpoints. Your written approval constitutes
              acceptance for each milestone.
            </li>
            <li>
              Final delivery/launch occurs after final payment. Minor
              post‑launch issues reported within a reasonable period will be
              addressed per the SOW. Ongoing maintenance/support requires a
              separate agreement or add‑on.
            </li>
          </ul>

          <h2>9. Confidentiality</h2>
          <p>
            Each party agrees to use the other party’s confidential information
            only for the engagement and to protect it with reasonable care.
          </p>

          <h2>10. Warranties and Disclaimers</h2>
          <ul>
            <li>
              EXCEPT AS EXPRESSLY STATED IN AN SOW, THE SITE AND SERVICES ARE
              PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY
              KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WITHOUT
              LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, OR NON‑INFRINGEMENT.
            </li>
            <li>
              We do not warrant uninterrupted or error‑free operation or
              specific business outcomes.
            </li>
          </ul>

          <h2>11. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL WE BE
            LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
            EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE,
            DATA, OR USE. OUR AGGREGATE LIABILITY FOR ANY CLAIM RELATING TO THE
            SITE OR SERVICES WILL NOT EXCEED THE AMOUNTS PAID BY YOU FOR THE
            SPECIFIC SERVICES GIVING RISE TO THE CLAIM IN THE 3 MONTHS PRECEDING
            THE EVENT.
          </p>

          <h2>12. Indemnification</h2>
          <p>
            You will defend, indemnify, and hold us harmless from claims,
            damages, liabilities, costs, and expenses arising from (a) your
            content or instructions; (b) your breach of these Terms or
            applicable law; or (c) your use of the Site or Services.
          </p>

          <h2>13. reCAPTCHA and Third‑Party Policies</h2>
          <p>
            This site uses Google reCAPTCHA to protect the contact form. Use of
            reCAPTCHA is subject to the Google{" "}
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
            </a>
            .
          </p>

          <h2>14. Termination</h2>
          <ul>
            <li>
              Either party may terminate a Service engagement for material
              breach if not cured within 10 days of written notice.
            </li>
            <li>
              Upon termination, you will pay for all Services performed and
              approved work to date, plus non‑cancelable third‑party costs.
            </li>
          </ul>

          <h2>15. Governing Law and Dispute Resolution</h2>
          <p>
            These Terms are governed by the laws of the State of North Carolina,
            without regard to conflict‑of‑laws rules. The exclusive venue for
            any dispute not subject to informal resolution will be the state or
            federal courts located in Mecklenburg County, North Carolina, and
            the parties consent to personal jurisdiction there.
          </p>

          <h2>16. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Material changes will
            be indicated by updating the "Last updated" date above. Continued
            use of the Site or Services after changes constitutes acceptance of
            the updated Terms.
          </p>

          <h2>17. Contact</h2>
          <p>
            Questions about these Terms? Contact us at{" "}
            <a
              className="underline"
              href="mailto:www.createwebsite4u.com@gmail.com"
            >
              www.createwebsite4u.com@gmail.com
            </a>
            .
          </p>

          <hr />
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Note: These Terms are provided for general informational purposes
            and do not constitute legal advice. For legal compliance specific to
            your business (e.g., entity status, tax, privacy, accessibility, and
            marketing rules), consult a licensed attorney in your jurisdiction.
          </p>
        </div>
      </div>
    </main>
  );
}
