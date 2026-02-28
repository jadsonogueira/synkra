"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { solutionFeatures } from "@/lib/data";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Solution() {
  return (
    <section className="py-24 md:py-32 bg-[#F3F4F6]">
      <Container>
        <SectionTitle
          badge="The Synkra System"
          title="Your Own Ordering App. Your Own System."
          subtitle="We build you a fully branded, end-to-end ordering experience — from menu to checkout to delivery tracking."
          centered
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {solutionFeatures.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100"
            >
              {/* Mockup screenshot */}
              <div className="relative bg-slate-100 aspect-[9/16] max-h-[380px] overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-navy rounded-3xl p-8 md:p-10"
        >
          {[
            { value: "5 days", label: "Average setup time" },
            { value: "2–3×", label: "More orders month 1" },
            { value: "100%", label: "Your branding" },
            { value: "24/7", label: "Orders while you sleep" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-black text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
