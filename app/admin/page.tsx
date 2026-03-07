"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AdminPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    slug: "",
    catalogue: "",
  });

  const handleSubmit = async () => {
    const { error } = await supabase.from("products").insert([form]);
    if (!error) alert("Product added successfully!");
  };

  return (
    <div className="max-w-xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Add Product</h1>

      {Object.keys(form).map((key) => (
        <input
          key={key}
          placeholder={key}
          className="w-full mb-4 p-2 border rounded"
          onChange={(e) =>
            setForm({ ...form, [key]: e.target.value })
          }
        />
      ))}

      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-6 py-2 rounded"
      >
        Save Product
      </button>
    </div>
  );
}