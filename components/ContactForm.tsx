"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";

interface ContactFormData {
  name: string;
  email: string;
  number: string;
  product: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    number: "",
    product: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^\+?[0-9]{7,15}$/.test(phone);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatusMessage("");

    // Validation
    if (!form.name || !form.email) {
      setStatusMessage("Name and Email are required.");
      return;
    }
    if (!validateEmail(form.email)) {
      setStatusMessage("Please enter a valid email address.");
      return;
    }
    if (form.number && !validatePhone(form.number)) {
      setStatusMessage("Please enter a valid phone number.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatusMessage(data.error || "Something went wrong!");
      } else {
        setForm({ name: "", email: "", number: "", product: "", message: "" });
        setModalOpen(true); // open modal
      }
    } catch (err: any) {
      setStatusMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Auto-close modal after 5 seconds
  useEffect(() => {
    if (modalOpen) {
      const timer = setTimeout(() => setModalOpen(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [modalOpen]);

  return (
    <>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        onSubmit={handleSubmit}
      >
        {statusMessage && (
          <div className="col-span-2 p-4 bg-red-100 text-red-800 rounded">
            {statusMessage}
          </div>
        )}

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          className="col-span-1 border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[rgb(225,6,0)]"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email Address"
          className="col-span-1 border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[rgb(225,6,0)]"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="number"
          placeholder="Enter Number"
          className="col-span-1 border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[rgb(225,6,0)]"
          value={form.number}
          onChange={handleChange}
        />
        <input
          type="text"
          name="product"
          placeholder="Enter Product"
          className="col-span-1 border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[rgb(225,6,0)]"
          value={form.product}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Enter Message"
          rows={5}
          className="col-span-2 border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[rgb(225,6,0)]"
          value={form.message}
          onChange={handleChange}
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className={`col-span-2 text-lg font-medium px-6 py-3 rounded-lg transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[rgb(78,100,141)] text-white hover:bg-[rgb(225,6,0)]"
          }`}
        >
          {loading ? "Sending..." : "Get A Quote"}
        </button>
      </form>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full text-center shadow-lg relative">
            <h2 className="text-2xl font-bold text-[rgb(78,100,141)] mb-4">
              Thank You!
            </h2>
            <p className="mb-6">
              Your message has been sent successfully. We will get back to you
              soon.
            </p>
            <button
              className="bg-[rgb(78,100,141)] text-white px-6 py-2 rounded hover:bg-[rgb(225,6,0)] transition"
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
