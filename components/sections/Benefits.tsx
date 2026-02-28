"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { benefits } from "@/lib/data";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Benefits() {
  return (
    <section className="py-24 md:py-32 bg-[#F3F4F6]">
      <Container>
        <SectionTitle
          badge="Why Synkra"
          title="Everything Instagram Can't Give You."
          subtitle="When you own your platform, you own your business."
          centered
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="group relative bg-white rounded-3xl p-8 md:p-10 border border-slate-100 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

              <span className="text-4xl mb-6 block">{benefit.icon}</span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">{benefit.description}</p>

              {/* Corner number */}
              <span className="absolute bottom-6 right-8 text-7xl font-black text-slate-50 select-none pointer-events-none">
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
