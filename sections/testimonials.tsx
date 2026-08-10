"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Users,
  Zap,
  MessageSquare,
  TrendingUp,
} from "lucide-react";
import {
  AnimatedTestimonials,
  type Testimonial,
} from "@/components/ui/animated-testimonials";

/* ─────────────────────────────────────────
   FOUNDER DEFINITIONS & REVIEWS
───────────────────────────────────────── */
const TESTIMONIALS: Testimonial[] = [
  {
    id: "swapno",
    company: "Swapno Motors",
    category: "Electric Mobility Platform",
    rating: 5,
    quote:
      "Grow With Hustler transformed our vision into a full-fledged platform. Their communication, speed and attention to detail were exceptional. Highly recommended!",
    name: "Rohit Kumar",
    role: "Co-Founder, Swapno Motors",
    avatarBg: "bg-[#28354A]",
    initials: "RK",
  },
  {
    id: "satvik",
    company: "SatvikAI",
    category: "AI Nutrition Platform",
    rating: 5,
    quote:
      "The team understood our product goals deeply and built an AI-powered platform beyond our expectations. The quality of work and consistency throughout was outstanding.",
    name: "Aman Verma",
    role: "Founder, SatvikAI",
    avatarBg: "bg-[#1E3A2B]",
    initials: "AV",
  },
  {
    id: "intento",
    company: "Intento",
    category: "AI Notes Productivity App",
    rating: 5,
    quote:
      "Grow With Hustler helped us build a beautiful, AI-driven product with a super smooth experience. They're not just developers, they're problem solvers.",
    name: "Arjun Mehta",
    role: "Founder, Intento",
    avatarBg: "bg-[#231F4D]",
    initials: "AM",
  },
];

/* ─────────────────────────────────────────
   BOTTOM TRUST STRIP ITEMS
───────────────────────────────────────── */
const TRUST_ITEMS = [
  {
    Icon: Users,
    title: "Founders First",
    desc: "We think like product partners, not contractors.",
  },
  {
    Icon: Zap,
    title: "Fast & Reliable",
    desc: "Quick delivery without sacrificing quality.",
  },
  {
    Icon: MessageSquare,
    title: "Clear Communication",
    desc: "Weekly updates. No surprises, ever.",
  },
  {
    Icon: TrendingUp,
    title: "Results That Matter",
    desc: "We focus on products that create business value.",
  },
];

/* ─────────────────────────────────────────
   MAIN TESTIMONIALS SECTION (CLIENT LOVE)
───────────────────────────────────────── */
export function Testimonials() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      className="relative w-full bg-background overflow-hidden select-none py-14 lg:py-0 lg:min-h-screen lg:flex lg:flex-col lg:justify-center"
    >
      {/* ── Background Texture ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.10]">
        <Image
          src="/images/hero/GWH_Background Texture.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ── Illustrated Background Graphic — MOBILE (< lg) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-95 lg:hidden">
        <Image
          src="/images/testimonials/testimonials-bg-mobile.png"
          alt=""
          fill
          unoptimized
          priority
          className="object-cover object-center"
        />
      </div>

      {/* ── Illustrated Background Graphic — DESKTOP (lg+) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-95 hidden lg:block">
        <Image
          src="/images/testimonials/testimonials-bg.png"
          alt=""
          fill
          unoptimized
          priority
          className="object-cover object-center"
        />
      </div>

      {/* ── Blueprint Grid ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.02] z-0"
        aria-hidden="true"
      >
        <defs>
          <pattern id="bpGridTestimonials" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#2457FF" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bpGridTestimonials)" />
      </svg>

      {/* ══════════════════════════════
          MASTER CONTAINER (1280px)
      ══════════════════════════════ */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 flex flex-col justify-center gap-4 sm:gap-6 lg:gap-10 py-4 sm:py-6 lg:py-10">

        {/* ───────────────────────────────────
            ROW 1: 21st.dev ANIMATED TESTIMONIALS
        ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatedTestimonials
            badgeText="CLIENT LOVE"
            title={
              <h2 className="font-heading text-[#111111] leading-[1.05] tracking-[-0.03em] text-[24px] sm:text-[34px] lg:text-[46px] font-black">
                Loved by <br />
                Founders. <br />
                <span className="relative inline-block text-primary">
                  Built on Trust.
                  <span className="absolute -bottom-0.5 lg:-bottom-1 left-0 w-full h-[3px] lg:h-[4px] bg-[#FFD43B] rounded-full" />
                </span>
              </h2>
            }
            subtitle="We don't just deliver software. We become product partners, helping founders launch, improve and scale products with confidence."
            testimonials={TESTIMONIALS}
            autoRotateInterval={5500}
          />
        </motion.div>

        {/* ───────────────────────────────────
            ROW 2: ENLARGED BOTTOM TRUST STRIP
        ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white border-[1.5px] border-[#222222]/15 rounded-[16px] lg:rounded-[22px] px-3.5 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 shadow-[0_4px_16px_rgba(17,17,17,0.03)]"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-2.5 sm:gap-5 lg:gap-6 lg:divide-x divide-[#222222]/10">
            {TRUST_ITEMS.map(({ Icon, title, desc }, i) => (
              <div
                key={title}
                className={`flex items-start gap-2 lg:gap-3.5 ${i > 0 ? "lg:pl-6" : ""}`}
              >
                {/* Yellow Circle Icon */}
                <div className="w-7 h-7 lg:w-10 lg:h-10 rounded-full bg-[#FFD43B]/20 border border-[#FFD43B]/60 flex items-center justify-center shrink-0 text-[#111111]">
                  <Icon className="w-3.5 h-3.5 lg:w-5 lg:h-5 text-[#111111]" strokeWidth={2.2} />
                </div>
                <div className="min-w-0">
                  <h4 className="font-heading font-bold text-[12px] lg:text-[15.5px] text-[#111111] leading-tight">
                    {title}
                  </h4>
                  <p className="font-sans text-[9.5px] lg:text-[12px] font-[450] text-[#666666] leading-snug mt-0.5">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
