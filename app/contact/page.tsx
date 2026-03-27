"use client";
import React from "react";
import CommonHeader from "@/components/CommonHeader";
import ContactForm from "@/components/ContactForm";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const CONTACT_INFO = [
  {
    title: "Office Address",
    icon: FaMapMarkerAlt,
    bg: "bg-white",
    content: (
      <>
        <strong>Priya Engineers</strong>
        <br />
        <a
          href="https://maps.app.goo.gl/C9HV6h5AtPR19uGJA"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          19 Swaminarayan complex, <br />
          near Mangaldeep Party Plot, Amraiwadi,
          <br />
          Ahmedabad – 382415,
          <br />
          Gujarat – India
        </a>
      </>
    ),
  },
  {
    title: "Phone Number",
    icon: FaPhoneAlt,
    bg: "bg-white",
    content: (
      <a href="tel:+919825790413" className="hover:underline">
        +91 9825790413
      </a>
    ),
  },
  {
    title: "Email Address",
    icon: FaEnvelope,
    bg: "bg-white",
    content: (
      <a
        href="mailto:priyaengineersahd@gmail.com"
        className="text-red-600 font-medium hover:underline"
      >
        priyaengineersahd@gmail.com
      </a>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <CommonHeader
        title="Contact Us"
        imageUrl="https://images.unsplash.com/photo-1711199694531-e982a79ea381?q=80&w=1932&auto=format&fit=crop"
      />

      <section className="py-20 bg-white px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info Cards */}
          <div className="space-y-8">
            {CONTACT_INFO.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div
                  key={idx}
                  className="bg-gray-100 p-6 rounded-lg shadow hover:bg-[rgb(78,100,141)] transition-colors duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`${info.bg} p-3 rounded-full`}>
                      <Icon className="text-2xl md:text-3xl text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-white transition-colors duration-300">
                        {info.title}
                      </h3>
                      <p className="text-gray-700 group-hover:text-white transition-colors duration-300">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </section>

      {/* Google Map - Full Width */}
      <section className="w-full">
        <iframe
          title="Priya Engineers Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7345.2895049714525!2d72.63185714228902!3d23.000087316757963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e876f8f71a487%3A0x47bfc9d8b0234ec8!2sPriya%20Engineers!5e0!3m2!1sen!2sca!4v1751714877400!5m2!1sen!2sca"
          width="100%"
          height="500"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}