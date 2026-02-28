"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-32 bg-navy relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-3xl" />
      </div>

      <Container size="md" className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-6">
            Ready?
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Ready to Stop Renting{" "}
            <span className="text-primary">Instagram?</span>
          </h2>

          <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Every Toronto chef who made the switch wishes they had done it
            sooner. Your app, your brand, your revenue — in 5 days.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollTo("contact")}
              className="w-full sm:w-auto"
            >
              Build My App →
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => scrollTo("portfolio")}
              className="w-full sm:w-auto"
            >
              See Examples
            </Button>
          </div>

          <p className="mt-8 text-slate-500 text-sm">
            No upfront dev cost. Flat monthly. Cancel anytime.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
