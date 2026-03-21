"use client";

import { useState } from "react";

type Props = {
  productTitle: string;
};

export default function QuoteForm({ productTitle }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setErrorMsg("Please fill in name, email and message.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, product: productTitle }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section aria-labelledby="quote-heading" className="bg-blue-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2
          id="quote-heading"
          className="text-2xl font-semibold mb-6 text-[rgb(225,6,0)]"
        >
          Request a Quote
        </h2>

        {/* Success message */}
        {status === "success" && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-md">
            Your request has been sent successfully. We will get back to you shortly.
          </div>
        )}

        {/* Error message */}
        {status === "error" && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-md">
            {errorMsg}
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Name *"
            aria-label="Your name"
            value={form.name}
            onChange={handleChange}
            className="p-3 border rounded w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            aria-label="Your email address"
            value={form.email}
            onChange={handleChange}
            className="p-3 border rounded w-full"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            aria-label="Your phone number"
            value={form.phone}
            onChange={handleChange}
            className="p-3 border rounded w-full"
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            aria-label="Your company name"
            value={form.company}
            onChange={handleChange}
            className="p-3 border rounded w-full"
          />
          <textarea
            name="message"
            placeholder="Message *"
            rows={4}
            aria-label="Your message"
            value={form.message}
            onChange={handleChange}
            className="p-3 border rounded md:col-span-2 w-full"
          />
          <button
            onClick={handleSubmit}
            disabled={status === "loading"}
            className="bg-[rgb(78,100,141)] text-white py-3 px-6 rounded hover:bg-[rgb(225,6,0)] transition md:col-span-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Submit Request"}
          </button>
        </div>
      </div>
    </section>
  );
}