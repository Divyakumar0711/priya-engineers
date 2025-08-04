"use client";
import CommonHeader from "@/components/CommonHeader";
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <CommonHeader
        title="Contact Us"
        imageUrl="https://images.unsplash.com/photo-1711199694531-e982a79ea381?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
"
      />
      <section className="py-20 bg-white px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <div className="space-y-8">
            {/* Office Address */}
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:bg-blue-600 transition-colors duration-300 group">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full">
                  <FaMapMarkerAlt className="text-3xl text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-white transition-colors duration-300">
                    Office Address
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-colors duration-300">
                    <strong>Priya Engineers</strong>
                    <br />
                    19 Swaminarayan complex, <br />
                    near Mangaldeep Party Plot, Amraiwadi,
                    <br />
                    Ahmedabad – 382415,
                    <br />
                    Gujarat – India
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Number */}
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:bg-blue-600 transition-colors duration-300 group">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full">
                  <FaPhoneAlt className="text-2xl text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-white transition-colors duration-300">
                    Phone Number
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-colors duration-300">
                    +91 9825790413
                  </p>
                </div>
              </div>
            </div>

            {/* Email Address */}
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:bg-blue-600 transition-colors duration-300 group">
              <div className="flex items-start gap-4">
                {/* Icon Circle */}
                <div className="bg-white p-3 rounded-full">
                  <FaEnvelope className="text-red-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-white transition-colors duration-300">
                    Email Address
                  </h3>
                  <p className="text-red-600 font-medium group-hover:text-white transition-colors duration-300">
                    priyaengineersahd@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <span className="inline-block bg-red-600 text-white px-4 py-1 text-sm font-semibold mb-4 rounded">
              Fill The Form
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
              Get In Touch
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Enter Name"
                className="col-span-1 border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-red-600"
              />
              <input
                type="email"
                placeholder="Enter Email Address"
                className="col-span-1 border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-red-600"
              />
              <input
                type="text"
                placeholder="Enter Number"
                className="col-span-1 border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-red-600"
              />
              <input
                type="text"
                placeholder="Enter Product"
                className="col-span-1 border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-red-600"
              />
              <textarea
                placeholder="Enter Message"
                rows={5}
                className="col-span-2 border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-red-600"
              ></textarea>

              <button
                type="submit"
                className="col-span-2 bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded-lg hover:bg-red-600 transition"
              >
                Get A Quote
              </button>
            </form>
          </div>
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
          // allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
