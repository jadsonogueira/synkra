"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-navy flex items-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border text-primary bg-primary/10 border-primary/20 mb-6"
            >
              Built for Toronto Chefs
            </motion.span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white mb-6">
              Stop Taking{" "}
              <span className="text-primary">Orders</span>{" "}
              in DMs.
            </h1>

            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              Synkra builds your own ordering app — your brand, your customers,
              your revenue. No more Instagram middleman.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollTo("contact")}
                className="w-full sm:w-auto"
              >
                Get My App →
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => scrollTo("portfolio")}
                className="w-full sm:w-auto"
              >
                View Portfolio
              </Button>
            </div>

            <p className="mt-6 text-slate-500 text-sm">
              Trusted by 40+ Toronto homemade chefs. Setup in 5 days.
            </p>
          </motion.div>

          {/* Right: iPhone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow under phone */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-64 h-20 bg-primary/20 rounded-full blur-2xl" />

              {/* iPhone mockup with built-in frame */}
              <div className="relative w-[280px] md:w-[340px]">
                <Image
                  src="/mockups/iphone-hero.png"
                  alt="Synkra ordering app on iPhone showing a chef's menu"
                  width={340}
                  height={700}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="absolute -left-8 top-1/3 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-slate-100"
              >
                <p className="text-xs text-slate-500 font-medium">New Order</p>
                <p className="text-sm font-bold text-slate-900">Jollof Rice × 3 🍛</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="absolute -right-6 bottom-1/3 bg-navy border border-white/10 rounded-2xl px-4 py-3 shadow-2xl"
              >
                <p className="text-xs text-slate-400 font-medium">This week</p>
                <p className="text-sm font-bold text-primary">+$1,240 💰</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
