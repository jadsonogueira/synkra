"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { portfolioMetrics } from "@/lib/data";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white">
      <Container>
        <SectionTitle
          badge="Portfolio"
          title="Built for Real Chefs."
          subtitle="See how we transformed a local chef's Instagram hustle into a full-scale ordering business."
          centered
        />

        {/* BlackPan Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-navy border border-white/5 shadow-2xl"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left: Copy */}
            <div className="w-full lg:w-1/2 p-10 md:p-14 flex flex-col justify-center">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-2">
                Featured Case Study
              </span>
              <h3 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                BlackPan Culinary
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                A Toronto chef went from managing 50+ DMs on weekends to running
                a streamlined online business — with zero extra staff.
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                {portfolioMetrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-3xl font-black text-primary">{m.value}</p>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mt-0.5">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-10">
                {[
                  "Full branded ordering app (iOS + Android PWA)",
                  "Admin dashboard with real-time order management",
                  "Online payment with instant payouts",
                  "Customer loyalty & repeat order system",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 text-primary text-xs flex items-center justify-center font-bold">
                      ✓
                    </span>
                    <p className="text-slate-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>

              <button className="self-start text-primary font-bold text-sm hover:text-primary/80 transition-colors flex items-center gap-1.5 group">
                Read full case study
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Right: App screens */}
            <div className="w-full lg:w-1/2 relative min-h-[420px] lg:min-h-0 overflow-hidden bg-navy-light">
              {/* Admin dashboard image */}
              <div className="absolute inset-0">
                <Image
                  src="/mockups/blackpan-admin.png"
                  alt="BlackPan admin dashboard showing orders"
                  fill
                  className="object-cover object-left-top opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy via-transparent to-transparent lg:from-transparent lg:via-transparent lg:to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              </div>

              {/* Floating phone */}
              <div className="absolute bottom-0 right-8 lg:right-12 top-8 flex items-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="relative w-[160px] md:w-[200px]"
                >
                  <div className="rounded-[2.5rem] border-[6px] border-slate-700 bg-slate-900 overflow-hidden aspect-[9/19.5] shadow-2xl shadow-black/50">
                    <div className="absolute top-0 inset-x-0 h-5 bg-slate-800 flex justify-center items-end pb-0.5 z-10">
                      <div className="w-16 h-4 bg-black rounded-full" />
                    </div>
                    <div className="relative w-full h-full">
                      <Image
                        src="https://res.cloudinary.com/dlxsvngm6/image/upload/v1772334697/IMG_6644_iuv1nu.jpg"
                        alt="BlackPan ordering app"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
