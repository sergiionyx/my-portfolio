import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Message Sent • Thank You",
  robots: { index: false },
};

export default function ContactSuccessPage() {
  const cookieStore = cookies();
  const hasGate = cookieStore.get("contact_success")?.value === "1";
  if (!hasGate) {
    redirect("/");
  }
  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <div className="rounded-lg border border-green-500 bg-green-500/10 p-6 text-green-500 mt-12">
        <h1 className="mb-2 text-2xl font-bold text-green-500">Thank you!</h1>
        <p>
          Your message has been sent successfully. We'll get back to you soon.
        </p>
      </div>

      <div className="mt-8">
        <a
          href="/"
          className="inline-flex items-center rounded-lg bg-blue-500 px-5 py-3 font-semibold text-white hover:bg-blue-600"
        >
          Go back home
        </a>
      </div>
    </main>
  );
}
