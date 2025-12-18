import React, { useState } from "react";
import "tailwindcss";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/slider-1.jpeg')",
      }}>
      <div className="max-w-3xl mx-auto px-3">
        <h3 className="text-5xl font-semibold text-center text-white underline">
          Contact Us
        </h3>

        <form
          onSubmit={handleSubmit}
          className="mt-10 bg-slate-50 p-10 rounded-xl space-y-4 text-center"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 h-28"
            required
          />

          <button
            type="submit"
            className="w-40 cursor-pointer bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 active:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
