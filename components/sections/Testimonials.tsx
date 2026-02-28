"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/lib/data";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white">
      <Container>
        <SectionTitle
          badge="Testimonials"
          title="Chefs Who Made the Switch."
          subtitle="Real Toronto homemade chefs. Real results."
          centered
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={itemVariants}
              className={`group relative bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:border-primary/20 hover:bg-white hover:shadow-lg hover:shadow-slate-200/80 transition-all duration-300 ${
                i === 0 ? "md:col-span-2 md:p-10" : ""
              }`}
            >
              {/* Quote mark */}
              <span className="text-5xl text-primary/20 font-serif leading-none mb-4 block select-none">
                &ldquo;
              </span>

              <p
                className={`text-slate-700 leading-relaxed mb-6 ${
                  i === 0 ? "text-lg md:text-xl" : "text-base"
                }`}
              >
                {t.quote}
              </p>

              <div className="flex items-center gap-4">
                {/* Avatar placeholder */}
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-slate-200 flex-shrink-0 border-2 border-white shadow">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">
                    {t.handle} · {t.dish} · {t.location}
                  </p>
                </div>
                {/* Stars */}
                <div className="ml-auto hidden sm:flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <span key={si} className="text-primary text-sm">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
