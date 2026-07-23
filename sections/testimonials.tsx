"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Users,
  Zap,
  MessageSquare,
  TrendingUp,
  Star,
  Sparkles,
} from "lucide-react";

/* ─────────────────────────────────────────
   FOUNDER DEFINITIONS & REVIEWS (EXACT MATCH)
───────────────────────────────────────── */
const TESTIMONIALS = [
  {
    id: "swapno",
    company: "Swapno Motors",
    category: "Electric Mobility Platform",
    logoBg: "bg-slate-900 text-white",
    logoContent: <span className="font-bold text-[14px]">S</span>,
    stars: 5,
    quote:
      "Grow With Hustler transformed our vision into a full-fledged platform. Their communication, speed and attention to detail were exceptional. Highly recommended!",
    founder: {
      name: "Rohit Kumar",
      role: "Co-Founder, Swapno Motors",
      avatarBg: "bg-[#28354A] text-slate-100",
      initials: "RK",
    },
    mockupType: "swapno",
  },
  {
    id: "satvik",
    company: "SatvikAI",
    category: "AI Nutrition Platform",
    logoBg: "bg-emerald-50 text-emerald-600 border border-emerald-200",
    logoContent: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    stars: 5,
    quote:
      "The team understood our product goals deeply and built an AI-powered platform beyond our expectations. The quality of work and consistency throughout was outstanding.",
    founder: {
      name: "Aman Verma",
      role: "Founder, SatvikAI",
      avatarBg: "bg-[#1E3A2B] text-emerald-100",
      initials: "AV",
    },
    mockupType: "satvik",
  },
  {
    id: "intento",
    company: "Intento",
    category: "AI Notes Productivity App",
    logoBg: "bg-indigo-950 text-indigo-400 border border-indigo-800",
    logoContent: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
      </svg>
    ),
    stars: 5,
    quote:
      "Grow With Hustler helped us build a beautiful, AI-driven product with a super smooth experience. They're not just developers, they're problem solvers.",
    founder: {
      name: "Arjun Mehta",
      role: "Founder, Intento",
      avatarBg: "bg-[#231F4D] text-indigo-100",
      initials: "AM",
    },
    mockupType: "intento",
  },
];

/* ─────────────────────────────────────────
   3D DEVICE MOCKUP PREVIEW COMPONENT
───────────────────────────────────────── */
function TestimonialMockupDisplay({ type }: { type: string }) {
  if (type === "swapno") {
    return (
      <div className="relative w-full h-[180px] sm:h-[190px] flex items-center justify-center overflow-hidden">
        {/* Laptop Shell */}
        <div className="relative w-[84%] bg-[#1A1D24] rounded-[10px] p-[3.5px] pb-[2px] shadow-xl border border-[#2B303C] flex flex-col group-hover:scale-[1.02] transition-transform duration-300">
          <div className="relative w-full aspect-[1.76/1] bg-[#0A0D14] rounded-[6px] overflow-hidden border border-[#252A36] p-0.5">
            <div className="relative w-full h-full rounded-[4px] overflow-hidden">
              <Image
                src="/swapno-fe.png"
                alt="Swapno Motors Web"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
          <div className="h-1.5 bg-[#282D3A] rounded-b-[5px] flex items-center justify-center mt-[1.5px]">
            <span className="w-7 h-[2px] bg-[#3B4254] rounded-full" />
          </div>
        </div>

        {/* Mobile Shell Overlap */}
        <div className="absolute right-2 bottom-1.5 w-[27%] h-[80%] bg-[#161922] rounded-[13px] p-[2.5px] shadow-2xl border-[1.5px] border-[#313747] overflow-hidden z-10 group-hover:scale-[1.03] transition-transform duration-300">
          <div className="relative w-full h-full rounded-[9px] overflow-hidden bg-[#0A0D15] p-0.5">
            <div className="relative w-full h-full rounded-[7px] overflow-hidden">
              <Image
                src="/swapno-fe-mobile.png"
                alt="Swapno Motors Mobile"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "satvik") {
    return (
      <div className="relative w-full h-[180px] sm:h-[190px] flex items-center justify-center overflow-hidden">
        {/* Laptop Shell */}
        <div className="relative w-[84%] bg-[#1A1D24] rounded-[10px] p-[3.5px] pb-[2px] shadow-xl border border-[#2B303C] flex flex-col group-hover:scale-[1.02] transition-transform duration-300">
          <div className="relative w-full aspect-[1.76/1] bg-[#06120D] rounded-[6px] overflow-hidden border border-[#162A20] p-2 text-white flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-[7.5px] font-bold text-emerald-400">SatvikAI</span>
              </div>
              <span className="text-[6px] bg-emerald-950 text-emerald-300 px-1 py-0.5 rounded border border-emerald-800">Pro</span>
            </div>
            <div>
              <p className="text-[9.5px] font-extrabold text-white leading-tight">Your AI-Powered <br /><span className="text-emerald-400">Nutrition Partner</span></p>
            </div>
            <div className="grid grid-cols-3 gap-0.5 pt-1 border-t border-emerald-900/50">
              <div className="bg-[#0C1E16] p-0.5 rounded">
                <p className="text-[5.5px] text-slate-400">Calories</p>
                <p className="text-[7px] font-bold text-emerald-400">1,850</p>
              </div>
              <div className="bg-[#0C1E16] p-0.5 rounded">
                <p className="text-[5.5px] text-slate-400">Protein</p>
                <p className="text-[7px] font-bold text-emerald-400">142g</p>
              </div>
              <div className="bg-[#0C1E16] p-0.5 rounded">
                <p className="text-[5.5px] text-slate-400">Goal</p>
                <p className="text-[7px] font-bold text-emerald-400">94%</p>
              </div>
            </div>
          </div>
          <div className="h-1.5 bg-[#282D3A] rounded-b-[5px] flex items-center justify-center mt-[1.5px]">
            <span className="w-7 h-[2px] bg-[#3B4254] rounded-full" />
          </div>
        </div>

        {/* Mobile Shell Overlap */}
        <div className="absolute right-2 bottom-1.5 w-[27%] h-[80%] bg-[#161922] rounded-[13px] p-[2.5px] shadow-2xl border-[1.5px] border-[#313747] overflow-hidden z-10 p-1 flex flex-col justify-between bg-[#050D09] group-hover:scale-[1.03] transition-transform duration-300">
          <div className="flex items-center justify-between">
            <span className="text-[6px] font-bold text-emerald-400">Meal Plan</span>
            <span className="w-1 h-1 rounded-full bg-emerald-400" />
          </div>
          <div className="bg-[#0C1E16] rounded p-0.5 border border-emerald-900/40">
            <p className="text-[6.5px] font-bold text-white">Quinoa Salad</p>
            <p className="text-[5.5px] text-emerald-400">420 kcal</p>
          </div>
          <div className="h-1 bg-emerald-950 rounded-full overflow-hidden">
            <div className="w-[78%] h-full bg-emerald-400 rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  // Intento UI
  return (
    <div className="relative w-full h-[180px] sm:h-[190px] flex items-center justify-center overflow-hidden">
      {/* Laptop Shell */}
      <div className="relative w-[84%] bg-[#1A1D24] rounded-[10px] p-[3.5px] pb-[2px] shadow-xl border border-[#2B303C] flex flex-col group-hover:scale-[1.02] transition-transform duration-300">
        <div className="relative w-full aspect-[1.76/1] bg-[#080B15] rounded-[6px] overflow-hidden border border-[#192138] p-2 text-white flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span className="text-[7.5px] font-bold text-indigo-300">Intento AI</span>
            </div>
            <span className="text-[6px] bg-indigo-950 text-indigo-300 px-1 py-0.5 rounded border border-indigo-800">Synced</span>
          </div>
          <div>
            <p className="text-[9.5px] font-extrabold text-white leading-tight">Think it. Note it.<br /><span className="text-indigo-400">Get it done.</span></p>
          </div>
          <div className="bg-[#0F1629] p-1 rounded border border-indigo-900/50">
            <p className="text-[6px] text-indigo-300 font-mono">const notes = ai.summarize();</p>
          </div>
        </div>
        <div className="h-1.5 bg-[#282D3A] rounded-b-[5px] flex items-center justify-center mt-[1.5px]">
          <span className="w-7 h-[2px] bg-[#3B4254] rounded-full" />
        </div>
      </div>

      {/* Mobile Shell Overlap */}
      <div className="absolute right-2 bottom-1.5 w-[27%] h-[80%] bg-[#161922] rounded-[13px] p-[2.5px] shadow-2xl border-[1.5px] border-[#313747] overflow-hidden z-10 p-1 flex flex-col justify-between bg-[#070B14] group-hover:scale-[1.03] transition-transform duration-300">
        <div className="flex items-center justify-between">
          <span className="text-[6px] font-bold text-indigo-300">AI Note</span>
          <span className="w-1 h-1 rounded-full bg-indigo-400" />
        </div>
        <div className="bg-[#0F1629] rounded p-0.5 border border-indigo-900/40">
          <p className="text-[6.5px] font-bold text-white">Roadmap</p>
          <p className="text-[5.5px] text-indigo-300">3 Tasks</p>
        </div>
        <div className="h-1 bg-indigo-950 rounded-full overflow-hidden">
          <div className="w-[90%] h-full bg-indigo-400 rounded-full" />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   TRUST STRIP ITEMS
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
   MAIN TESTIMONIALS SECTION
───────────────────────────────────────── */
export function Testimonials() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative w-full bg-background overflow-hidden select-none py-16 sm:py-20 lg:py-24"
    >
      {/* ── Background Texture ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.12]">
        <Image
          src="/images/hero/GWH_Background Texture.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ── Blueprint Grid ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.025] z-0"
        aria-hidden="true"
      >
        <defs>
          <pattern id="bpGridTestimonials" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#2457FF" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bpGridTestimonials)" />
      </svg>

      {/* ── Decorative Sparkle top-right ── */}
      <div className="absolute top-10 right-14 pointer-events-none opacity-50 z-[1]">
        <Sparkles className="w-4 h-4 text-[#FFD43B] fill-[#FFD43B]" />
      </div>

      {/* ══════════════════════════════
          MASTER CONTAINER (1280px)
      ══════════════════════════════ */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 flex flex-col gap-10 lg:gap-12">

        {/* ───────────────────────────────────
            ROW 1: 2-COLUMN LAYOUT
        ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-9 items-start">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3.5 pt-1"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border-[1.5px] border-[#222] bg-white text-[10.5px] font-semibold tracking-wide text-[#111] shadow-xs self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              CLIENT LOVE
            </div>

            {/* Heading */}
            <div>
              <h2
                className="font-heading text-[#111] leading-[1.08] tracking-[-0.03em]"
                style={{ fontSize: "clamp(28px, 2.8vw, 40px)", fontWeight: 800 }}
              >
                Loved by<br />
                Founders.<br />
                <span className="relative inline-block text-primary">
                  Built on Trust.
                  <span className="absolute -bottom-1 left-0 w-full h-[3.5px] bg-[#FFD43B] rounded-full" />
                </span>
              </h2>
            </div>

            {/* Paragraph */}
            <p className="font-sans text-[13px] font-[450] text-[#555] leading-[1.65] max-w-[310px]">
              We don&apos;t just deliver software. We become product partners, helping founders launch, improve and scale products with confidence.
            </p>

            {/* Single subtle dotted curved arrow */}
            <div className="pt-2 pl-1 opacity-40">
              <svg className="w-12 h-10 text-primary" viewBox="0 0 60 50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3">
                <path d="M 10 10 Q 25 40 50 35" />
                <path d="M 42 27 L 50 35 L 42 42" strokeDasharray="none" />
              </svg>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN (3 TESTIMONIAL CARDS EXACT MATCH) ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
            {TESTIMONIALS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: 0.1 + idx * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col justify-between w-full h-auto bg-[#FAF7F2] border-[1.5px] border-[#E8E2D6] rounded-[20px] p-4.5 cursor-pointer hover:border-primary/50 transition-all duration-300"
                style={{ boxShadow: "0 4px 16px rgba(17,17,17,0.025)" }}
              >
                {/* ── TOP BAR: QUOTE BADGE & 5-STAR RATING ── */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-7 h-7 rounded-[10px] bg-[#EEF4FF] border border-[#D0E2FF] flex items-center justify-center text-primary font-serif text-[16px] font-bold">
                    “
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FFB800] text-[#FFB800]" />
                    ))}
                  </div>
                </div>

                {/* ── LOGO & COMPANY NAME ── */}
                <div className="flex items-center gap-2.5 mb-3">
                  <div className={`w-8.5 h-8.5 rounded-[10px] ${item.logoBg} flex items-center justify-center shrink-0 shadow-2xs`}>
                    {item.logoContent}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-[14px] text-[#111] leading-tight group-hover:text-primary transition-colors">
                      {item.company}
                    </h3>
                    <p className="font-sans text-[10px] font-medium text-[#777] leading-none mt-0.5">
                      {item.category}
                    </p>
                  </div>
                </div>

                {/* ── TESTIMONIAL QUOTE TEXT (EXACT MATCH) ── */}
                <p className="font-sans text-[12px] font-[450] text-[#333] leading-[1.65] mb-4">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* ── FOUNDER INFO ── */}
                <div className="flex items-center gap-2.5 mb-3">
                  <div className={`w-8 h-8 rounded-full ${item.founder.avatarBg} font-bold text-[11px] flex items-center justify-center shrink-0 border border-black/10`}>
                    {item.founder.initials}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[12.5px] text-[#111] leading-tight">
                      {item.founder.name}
                    </h4>
                    <p className="font-sans text-[10px] text-[#777] leading-none mt-0.5">
                      {item.founder.role}
                    </p>
                  </div>
                </div>

                {/* ── PRODUCT MOCKUP PREVIEW AT BOTTOM ── */}
                <div className="mt-auto bg-[#F4EFE6]/60 border border-[#E8E2D6]/80 rounded-[16px] p-2">
                  <TestimonialMockupDisplay type={item.mockupType} />
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* ───────────────────────────────────
            ROW 2: COMPACT BOTTOM TRUST STRIP
        ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 sm:mt-6 bg-white border-[1.5px] border-[#E2E2E2] rounded-[20px] px-6 sm:px-8 py-3.5 shadow-xs"
          style={{ boxShadow: "0 3px 12px rgba(17,17,17,0.03)" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-[#E2E2E2]/60">
            {TRUST_ITEMS.map(({ Icon, title, desc }, i) => (
              <div
                key={title}
                className={`flex items-start gap-3 ${i > 0 ? "lg:pl-5 pt-3 sm:pt-0" : ""}`}
              >
                {/* Yellow Circle Icon */}
                <div className="w-9 h-9 rounded-full bg-[#FFD43B]/20 border border-[#FFD43B]/60 flex items-center justify-center shrink-0 text-[#111]">
                  <Icon className="w-4 h-4 text-[#111]" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[13px] text-[#111] leading-tight">
                    {title}
                  </h4>
                  <p className="font-sans text-[10.5px] font-[450] text-[#777] leading-snug mt-0.5">
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
