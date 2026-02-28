"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface FormState {
  name: string;
  email: string;
  instagram: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  instagram: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.instagram.trim()) newErrors.instagram = "Instagram or business name is required";
    if (!form.message.trim()) newErrors.message = "Tell us a bit about your business";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate async send
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
    setForm(initialForm);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F3F4F6]">
      <Container size="md">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-5">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Let&apos;s Build Your App.
          </h2>
          <p className="text-slate-500 text-lg max-w-lg mx-auto">
            Tell us about your food business and we&apos;ll reach out within 24
            hours to get started.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12 relative overflow-hidden">
          {/* Success overlay */}
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute inset-0 bg-white rounded-3xl flex flex-col items-center justify-center z-10 p-8"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <span className="text-3xl">✅</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  Message sent!
                </h3>
                <p className="text-slate-500 text-center max-w-sm mb-6">
                  We got your message and will reach out within 24 hours.
                  Get ready to launch.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-primary font-semibold text-sm hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all aria-[invalid=true]:border-red-400 aria-[invalid=true]:bg-red-50"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all aria-[invalid=true]:border-red-400 aria-[invalid=true]:bg-red-50"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Instagram / Business */}
            <div className="mb-5">
              <label
                htmlFor="instagram"
                className="block text-sm font-semibold text-slate-700 mb-1.5"
              >
                Instagram Handle or Business Name
              </label>
              <input
                id="instagram"
                name="instagram"
                type="text"
                value={form.instagram}
                onChange={handleChange}
                placeholder="@yourchefhandle"
                aria-invalid={!!errors.instagram}
                aria-describedby={errors.instagram ? "instagram-error" : undefined}
                className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all aria-[invalid=true]:border-red-400 aria-[invalid=true]:bg-red-50"
              />
              {errors.instagram && (
                <p id="instagram-error" className="mt-1.5 text-xs text-red-500">
                  {errors.instagram}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="mb-8">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-slate-700 mb-1.5"
              >
                Tell us about your food business
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="I sell Nigerian food in Toronto, currently 30+ orders/week on Instagram..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all aria-[invalid=true]:border-red-400 aria-[invalid=true]:bg-red-50"
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-500">
                  {errors.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full"
              aria-label="Submit contact form"
            >
              {loading ? "Sending…" : "Send Message →"}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
