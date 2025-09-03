"use client";
import { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (err) {
      setStatus("❌ Something went wrong.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-200 py-20">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-teal-400 text-center mb-4">
          Contact Me
        </h1>
        <p className="text-center mb-12 text-gray-400">
          Feel free to reach out through this form or find me on the map.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-gray-900 p-8 rounded-lg shadow-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 border border-gray-700"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 border border-gray-700"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 h-32"
              required
            />
            <button
              type="submit"
              className="btn-primary w-full"
            >
              Send Message
            </button>
            {status && <p className="mt-3">{status}</p>}
          </form>

          {/* Map + Info */}
          <div className="space-y-6">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-teal-400 mb-4">
                My Info
              </h2>
              <p><strong>Email:</strong> ayomidekofoworola59@gmail.com</p>
              <p><strong>Phone:</strong> +234 915 160 2921</p>
              <p><strong>Location:</strong> Lagos, Nigeria</p>
            </div>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.878768045952!2d3.3792!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b15b5cbf4b3%3A0x95db6b8a8a2c1b6!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1676989882934!5m2!1sen!2sng"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;