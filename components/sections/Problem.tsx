"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { painPoints } from "@/lib/data";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Problem() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <Container>
        <SectionTitle
          badge="Sound Familiar?"
          title="Instagram Was Just the Beginning."
          subtitle="You built something real. But the tools you're using were never meant for a real business."
          centered
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {painPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={itemVariants}
              className="group relative bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:border-red-100 hover:bg-red-50/30 transition-all duration-300"
            >
              <span className="text-3xl mb-5 block">{point.icon}</span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {point.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12 text-slate-400 text-sm"
        >
          Every week you stay on Instagram only,{" "}
          <span className="text-slate-700 font-semibold">you leave money on the table.</span>
        </motion.p>
      </Container>
    </section>
  );
}
