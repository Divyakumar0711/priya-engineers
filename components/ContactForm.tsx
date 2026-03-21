// // "use client";

// // import { useState, ChangeEvent, FormEvent, useEffect } from "react";

// // interface ContactFormData {
// //   name: string;
// //   email: string;
// //   number: string;
// //   product: string;
// //   message: string;
// // }

// // export default function ContactForm() {
// //   const [form, setForm] = useState<ContactFormData>({
// //     name: "",
// //     email: "",
// //     number: "",
// //     product: "",
// //     message: "",
// //   });

// //   const [loading, setLoading] = useState(false);
// //   const [modalOpen, setModalOpen] = useState(false);
// //   const [statusMessage, setStatusMessage] = useState("");

// //   const handleChange = (
// //     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
// //   ) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const validateEmail = (email: string) =>
// //     /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// //   const validatePhone = (phone: string) => /^\+?[0-9]{7,15}$/.test(phone);

// //   const handleSubmit = async (e: FormEvent) => {
// //     e.preventDefault();
// //     setStatusMessage("");

// //     // Validation
// //     if (!form.name || !form.email) {
// //       setStatusMessage("Name and Email are required.");
// //       return;
// //     }
// //     if (!validateEmail(form.email)) {
// //       setStatusMessage("Please enter a valid email address.");
// //       return;
// //     }
// //     if (form.number && !validatePhone(form.number)) {
// //       setStatusMessage("Please enter a valid phone number.");
// //       return;
// //     }

// //     try {
// //       setLoading(true);

// //       const res = await fetch("/api/contact", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(form),
// //       });

// //       const data = await res.json();

// //       if (!res.ok) {
// //         setStatusMessage(data.error || "Something went wrong!");
// //       } else {
// //         setForm({ name: "", email: "", number: "", product: "", message: "" });
// //         setModalOpen(true); // open modal
// //       }
// //     } catch (err: any) {
// //       setStatusMessage(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Auto-close modal after 5 seconds
// //   useEffect(() => {
// //     if (modalOpen) {
// //       const timer = setTimeout(() => setModalOpen(false), 5000);
// //       return () => clearTimeout(timer);
// //     }
// //   }, [modalOpen]);

// //   return (
// //     <>
// //       <form
// //         className="grid grid-cols-1 md:grid-cols-2 gap-6"
// //         onSubmit={handleSubmit}
// //       >
// //         {statusMessage && (
// //           <div className="col-span-2 p-4 bg-red-100 text-red-800 rounded">
// //             {statusMessage}
// //           </div>
// //         )}

// //         <input
// //           type="text"
// //           name="name"
// //           placeholder="Enter Name"
// //           className="col-span-1 border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[rgb(225,6,0)]"
// //           value={form.name}
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           type="email"
// //           name="email"
// //           placeholder="Enter Email Address"
// //           className="col-span-1 border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[rgb(225,6,0)]"
// //           value={form.email}
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           type="text"
// //           name="number"
// //           placeholder="Enter Number"
// //           className="col-span-1 border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[rgb(225,6,0)]"
// //           value={form.number}
// //           onChange={handleChange}
// //         />
// //         <input
// //           type="text"
// //           name="product"
// //           placeholder="Enter Product"
// //           className="col-span-1 border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[rgb(225,6,0)]"
// //           value={form.product}
// //           onChange={handleChange}
// //         />
// //         <textarea
// //           name="message"
// //           placeholder="Enter Message"
// //           rows={5}
// //           className="col-span-2 border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[rgb(225,6,0)]"
// //           value={form.message}
// //           onChange={handleChange}
// //         ></textarea>

// //         <button
// //           type="submit"
// //           disabled={loading}
// //           className={`col-span-2 text-lg font-medium px-6 py-3 rounded-lg transition ${
// //             loading
// //               ? "bg-gray-400 cursor-not-allowed"
// //               : "bg-[rgb(78,100,141)] text-white hover:bg-[rgb(225,6,0)]"
// //           }`}
// //         >
// //           {loading ? "Sending..." : "Get A Quote"}
// //         </button>
// //       </form>

// //       {/* Modal */}
// //       {modalOpen && (
// //         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
// //           <div className="bg-white rounded-lg p-8 max-w-md w-full text-center shadow-lg relative">
// //             <h2 className="text-2xl font-bold text-[rgb(78,100,141)] mb-4">
// //               Thank You!
// //             </h2>
// //             <p className="mb-6">
// //               Your message has been sent successfully. We will get back to you
// //               soon.
// //             </p>
// //             <button
// //               className="bg-[rgb(78,100,141)] text-white px-6 py-2 rounded hover:bg-[rgb(225,6,0)] transition"
// //               onClick={() => setModalOpen(false)}
// //             >
// //               Close
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // }
// "use client";

// import { useState, FormEvent, ChangeEvent } from "react";

// interface ContactFormData {
//   name: string;
//   email: string;
//   message: string;
// }

// export default function ContactForm() {
//   const [formData, setFormData] = useState<ContactFormData>({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

//   // Handle input change
//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       if (data.success) setStatus("success");
//       else setStatus("error");
//     } catch (err) {
//       console.error("Contact form submit error:", err);
//       setStatus("error");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
//       <input
//         type="text"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         placeholder="Name"
//         className="w-full p-3 border rounded"
//         required
//       />
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         placeholder="Email"
//         className="w-full p-3 border rounded"
//         required
//       />
//       <textarea
//         name="message"
//         value={formData.message}
//         onChange={handleChange}
//         placeholder="Message"
//         className="w-full p-3 border rounded"
//         required
//       />
//       <button
//         type="submit"
//         className="bg-[rgb(78,100,141)] text-white px-6 py-3 rounded hover:bg-[rgb(60,80,120)] transition"
//       >
//         Submit
//       </button>

//       {status === "success" && <p className="text-green-600">Message sent successfully!</p>}
//       {status === "error" && <p className="text-red-600">Something went wrong. Please try again.</p>}
//     </form>
//   );
// }


"use client";

import { useState, FormEvent, ChangeEvent } from "react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
        return;
      }

      setStatus("success");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        jobTitle: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("Contact form submit error:", err);
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">

      {status === "success" && (
        <div className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-md">
          Message sent successfully! We will get back to you shortly.
        </div>
      )}

      {status === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-md">
          {errorMsg}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name *"
          className="w-full p-3 border rounded"
          required
          disabled={status === "loading"}
        />

        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name *"
          className="w-full p-3 border rounded"
          required
          disabled={status === "loading"}
        />
      </div>

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email *"
        className="w-full p-3 border rounded"
        required
        disabled={status === "loading"}
      />

      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="w-full p-3 border rounded"
        disabled={status === "loading"}
      />

      <input
        type="text"
        name="jobTitle"
        value={formData.jobTitle}
        onChange={handleChange}
        placeholder="Job Title"
        className="w-full p-3 border rounded"
        disabled={status === "loading"}
      />

      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Subject"
        className="w-full p-3 border rounded"
        disabled={status === "loading"}
      />

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Leave us a message..."
        rows={5}
        className="w-full p-3 border rounded"
        required
        disabled={status === "loading"}
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-[rgb(78,100,141)] text-white px-6 py-3 rounded hover:bg-[rgb(225,6,0)] transition disabled:opacity-60 disabled:cursor-not-allowed w-full"
      >
        {status === "loading" ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}