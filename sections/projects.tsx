"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Zap,
  MessageSquare,
  Users,
  Rocket,
  Check,
  Sparkles,
} from "lucide-react";

/* ─────────────────────────────────────────
   COLORFUL TECH ICON SVGs
───────────────────────────────────────── */
function TechBadgeIcon({ name }: { name: string }) {
  switch (name) {
    case "Next.js":
      return (
        <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center text-white shrink-0">
          <svg viewBox="0 0 180 180" className="w-2.5 h-2.5 fill-current">
            <path d="M140 160L60 60V160H40V20H60L140 120V20H160V160H140Z" />
          </svg>
        </div>
      );
    case "Prisma":
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#2D3748] shrink-0">
          <path d="M22.5 16.5L12 1.5L1.5 16.5L6 22.5H18L22.5 16.5ZM12 4.5L19.5 15H15L12 9L9 15H4.5L12 4.5Z" />
        </svg>
      );
    case "Supabase":
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#3ECF8E] shrink-0">
          <path d="M13.35 24v-9.52h7.83c.73 0 1.13-.85.67-1.42L9.65 0v9.52H1.82c-.73 0-1.13.85-.67 1.42L13.35 24z" />
        </svg>
      );
    case "Tailwind":
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#38BDF8] shrink-0">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C3.666 17.818 5.027 19.2 8.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C6.336 13.382 4.975 12 2.001 12z" />
        </svg>
      );
    case "React":
    case "React Native":
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-[#61DAFB] shrink-0" strokeWidth="2">
          <ellipse cx="12" cy="12" rx="9" ry="3.5" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
        </svg>
      );
    case "Node.js":
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#5FA04E] shrink-0">
          <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.3l7.5 4.1v7.2L12 19.7l-7.5-4.1V8.4L12 4.3z" />
        </svg>
      );
    case "MongoDB":
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#47A248] shrink-0">
          <path d="M12 1.5s-7 7.5-7 13.5c0 3.86 3.14 7 7 7s7-3.14 7-7c0-6-7-13.5-7-13.5zm0 18c-2.48 0-4.5-2.02-4.5-4.5 0-3.3 3.3-8.1 4.5-9.7 1.2 1.6 4.5 6.4 4.5 9.7 0 2.48-2.02 4.5-4.5 4.5z" />
        </svg>
      );
    case "Gemini AI":
    case "Gemini":
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#1A73E8] shrink-0">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      );
    case "Expo":
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-black shrink-0">
          <path d="M12 2L1 21h22L12 2zm0 4.5l7.5 13h-15L12 6.5z" />
        </svg>
      );
    default:
      return <span className="w-2 h-2 rounded-full bg-primary" />;
  }
}

/* ─────────────────────────────────────────
   PROJECT DEFINITIONS
───────────────────────────────────────── */
const PROJECTS = [
  {
    id: "swapno",
    name: "Swapno Motors",
    category: "Electric Mobility Platform",
    year: "2025",
    logoBg: "bg-slate-900 text-white",
    logoContent: <span className="font-bold text-[15px]">S</span>,
    features: [
      "Website",
      "Dashboard",
      "Admin Panel",
      "Inventory",
      "Appointment Booking",
    ],
    tech: ["Next.js", "Prisma", "Supabase", "Tailwind"],
    mockupType: "swapno",
  },
  {
    id: "satvik",
    name: "SatvikAI",
    category: "AI Nutrition Platform",
    year: "2025",
    logoBg: "bg-emerald-50 text-emerald-600 border border-emerald-200",
    logoContent: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    features: [
      "AI Nutrition",
      "Meal Plans",
      "Image Analysis",
      "Allergen Detection",
      "User Dashboard",
    ],
    tech: ["React", "Node.js", "MongoDB", "Gemini AI"],
    mockupType: "satvik",
  },
  {
    id: "intento",
    name: "Intento",
    category: "AI Notes Productivity App",
    year: "2025",
    logoBg: "bg-indigo-950 text-indigo-400 border border-indigo-800",
    logoContent: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
      </svg>
    ),
    features: [
      "AI Notes",
      "Smart Search",
      "Task Management",
      "Priority",
      "Cross Platform",
    ],
    tech: ["React Native", "Expo", "Gemini", "Supabase"],
    mockupType: "intento",
  },
];

/* ─────────────────────────────────────────
   3D DEVICE MOCKUP PREVIEW COMPONENT
───────────────────────────────────────── */
function ProjectMockupDisplay({ type }: { type: string }) {
  if (type === "swapno") {
    return (
      <div className="relative w-full h-[215px] sm:h-[225px] flex items-center justify-center overflow-hidden">
        {/* Laptop 3D Shell */}
        <div className="relative w-[85%] bg-[#1A1D24] rounded-[11px] p-[4px] pb-[2px] shadow-2xl border border-[#2B303C] flex flex-col group-hover:scale-[1.02] transition-transform duration-300">
          {/* Bezel Screen Container with 1.76:1 Aspect Ratio matching 1920x1080 screenshot */}
          <div className="relative w-full aspect-[1.76/1] bg-[#0A0D14] rounded-[7px] overflow-hidden border border-[#252A36] p-0.5">
            <div className="relative w-full h-full rounded-[5px] overflow-hidden">
              {/* Web Screenshot */}
              <Image
                src="/swapno-fe.png"
                alt="Swapno Motors Web"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
          {/* Laptop Base Stand / Notch */}
          <div className="h-1.5 bg-[#282D3A] rounded-b-[6px] flex items-center justify-center mt-[2px]">
            <span className="w-8 h-[2px] bg-[#3B4254] rounded-full" />
          </div>
        </div>

        {/* Mobile 3D Shell Overlap */}
        <div className="absolute right-2 bottom-1.5 w-[27%] h-[80%] bg-[#161922] rounded-[14px] p-[3px] shadow-2xl border-[2px] border-[#313747] overflow-hidden z-10 group-hover:scale-[1.03] transition-transform duration-300">
          <div className="relative w-full h-full rounded-[10px] overflow-hidden bg-[#0A0D15] p-0.5">
            <div className="relative w-full h-full rounded-[8px] overflow-hidden">
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
      <div className="relative w-full h-[215px] sm:h-[225px] flex items-center justify-center overflow-hidden">
        {/* Laptop 3D Shell */}
        <div className="relative w-[84%] bg-[#1A1D24] rounded-[11px] p-[4px] pb-[2px] shadow-2xl border border-[#2B303C] flex flex-col group-hover:scale-[1.02] transition-transform duration-300">
          <div className="relative w-full aspect-[16/10] bg-[#06120D] rounded-[7px] overflow-hidden border border-[#162A20] p-3 text-white flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-[8.5px] font-bold text-emerald-400">SatvikAI</span>
              </div>
              <span className="text-[7px] bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-800">Pro Plan</span>
            </div>
            <div>
              <p className="text-[11px] font-extrabold text-white leading-tight">Your AI-Powered <br /><span className="text-emerald-400">Nutrition Partner</span></p>
              <p className="text-[7px] text-slate-400 mt-1">Personalized meal plans & instant macro tracking.</p>
            </div>
            <div className="grid grid-cols-3 gap-1 pt-1.5 border-t border-emerald-900/50">
              <div className="bg-[#0C1E16] p-1 rounded">
                <p className="text-[6.5px] text-slate-400">Calories</p>
                <p className="text-[8px] font-bold text-emerald-400">1,850 kcal</p>
              </div>
              <div className="bg-[#0C1E16] p-1 rounded">
                <p className="text-[6.5px] text-slate-400">Protein</p>
                <p className="text-[8px] font-bold text-emerald-400">142g</p>
              </div>
              <div className="bg-[#0C1E16] p-1 rounded">
                <p className="text-[6.5px] text-slate-400">Goal</p>
                <p className="text-[8px] font-bold text-emerald-400">94%</p>
              </div>
            </div>
          </div>
          <div className="h-1.5 bg-[#282D3A] rounded-b-[6px] flex items-center justify-center mt-[2px]">
            <span className="w-8 h-[2px] bg-[#3B4254] rounded-full" />
          </div>
        </div>

        {/* Mobile 3D Shell Overlap */}
        <div className="absolute right-2 bottom-1.5 w-[27%] h-[80%] bg-[#161922] rounded-[14px] p-[2.5px] shadow-2xl border-[2px] border-[#313747] overflow-hidden z-10 p-1.5 flex flex-col justify-between bg-[#050D09] group-hover:scale-[1.03] transition-transform duration-300">
          <div className="flex items-center justify-between">
            <span className="text-[6.5px] font-bold text-emerald-400">Today&apos;s Meal</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>
          <div className="bg-[#0C1E16] rounded p-1 border border-emerald-900/40">
            <p className="text-[7px] font-bold text-white">Quinoa Salad</p>
            <p className="text-[6px] text-emerald-400">420 kcal • High Protein</p>
          </div>
          <div className="h-1.5 bg-emerald-950 rounded-full overflow-hidden">
            <div className="w-[78%] h-full bg-emerald-400 rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  // Intento UI
  return (
    <div className="relative w-full h-[215px] sm:h-[225px] flex items-center justify-center overflow-hidden">
      {/* Laptop 3D Shell */}
      <div className="relative w-[84%] bg-[#1A1D24] rounded-[11px] p-[4px] pb-[2px] shadow-2xl border border-[#2B303C] flex flex-col group-hover:scale-[1.02] transition-transform duration-300">
        <div className="relative w-full aspect-[16/10] bg-[#080B15] rounded-[7px] overflow-hidden border border-[#192138] p-3 text-white flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <span className="text-[8.5px] font-bold text-indigo-300">Intento AI Notes</span>
            </div>
            <span className="text-[7px] bg-indigo-950 text-indigo-300 px-1.5 py-0.5 rounded border border-indigo-800">Synced</span>
          </div>
          <div>
            <p className="text-[11px] font-extrabold text-white leading-tight">Think it. Note it.<br /><span className="text-indigo-400">Get it done.</span></p>
            <p className="text-[7px] text-slate-400 mt-1">Smart AI summary & instant task extraction.</p>
          </div>
          <div className="bg-[#0F1629] p-1.5 rounded border border-indigo-900/50">
            <p className="text-[6.5px] text-indigo-300 font-mono">const notes = await ai.summarize(meeting);</p>
          </div>
        </div>
        <div className="h-1.5 bg-[#282D3A] rounded-b-[6px] flex items-center justify-center mt-[2px]">
          <span className="w-8 h-[2px] bg-[#3B4254] rounded-full" />
        </div>
      </div>

      {/* Mobile 3D Shell Overlap */}
      <div className="absolute right-2 bottom-1.5 w-[27%] h-[80%] bg-[#161922] rounded-[14px] p-[2.5px] shadow-2xl border-[2px] border-[#313747] overflow-hidden z-10 p-1.5 flex flex-col justify-between bg-[#070B14] group-hover:scale-[1.03] transition-transform duration-300">
        <div className="flex items-center justify-between">
          <span className="text-[6.5px] font-bold text-indigo-300">AI Note #04</span>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
        </div>
        <div className="bg-[#0F1629] rounded p-1 border border-indigo-900/40">
          <p className="text-[7px] font-bold text-white">Product Roadmap</p>
          <p className="text-[6px] text-indigo-300">3 Tasks Extracted</p>
        </div>
        <div className="h-1.5 bg-indigo-950 rounded-full overflow-hidden">
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
    Icon: Zap,
    title: "2–4 Week MVP",
    desc: "From idea to initial product in just 2–4 weeks.",
  },
  {
    Icon: MessageSquare,
    title: "Weekly Demos",
    desc: "Stay informed with regular demos and clear updates.",
  },
  {
    Icon: Users,
    title: "Founder Access",
    desc: "Direct line to the founders throughout the journey.",
  },
  {
    Icon: Rocket,
    title: "Post-Launch Care",
    desc: "We ship — and stay with you for continuous growth.",
  },
];

/* ─────────────────────────────────────────
   MAIN FEATURED PROJECTS SECTION
───────────────────────────────────────── */
export function Projects() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="projects"
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
          <pattern id="bpGridProjects" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#2457FF" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bpGridProjects)" />
      </svg>

      {/* ── Decorative Sparkle top-right ── */}
      <div className="absolute top-10 right-14 pointer-events-none opacity-50 z-[1]">
        <Sparkles className="w-4 h-4 text-[#FFD43B] fill-[#FFD43B]" />
      </div>

      {/* ══════════════════════════════
          MASTER CONTAINER (1280px)
      ══════════════════════════════ */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col gap-8 lg:gap-12">

        {/* ───────────────────────────────────
            ROW 1: 2-COLUMN LAYOUT
        ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6 lg:gap-9 items-start">

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
              FEATURED WORK
            </div>

            {/* Large Heading */}
            <div>
              <h2
                className="font-heading text-[#111] leading-[1.08] tracking-[-0.03em]"
                style={{ fontSize: "clamp(28px, 2.8vw, 40px)", fontWeight: 800 }}
              >
                Real Products.<br />
                Real Businesses.<br />
                <span className="relative inline-block text-primary">
                  Real Results.
                  <span className="absolute -bottom-1 left-0 w-full h-[3.5px] bg-[#FFD43B] rounded-full" />
                </span>
              </h2>
            </div>

            {/* Paragraph */}
            <p className="font-sans text-[13px] font-[450] text-[#555] leading-[1.65] max-w-[260px]">
              We&apos;ve helped founders launch production-ready digital products that are fast, scalable, and built for growth.
            </p>
          </motion.div>

          {/* ── RIGHT COLUMN (3 PROJECT CARDS EXACT MATCH TO REFERENCE IMAGE) ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
            {PROJECTS.map((proj, idx) => (
              <motion.div
                key={proj.id}
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
                {/* ── CARD HEADER ── */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    {/* Logo Box */}
                    <div className={`w-9 h-9 rounded-[10px] ${proj.logoBg} flex items-center justify-center shrink-0 shadow-2xs`}>
                      {proj.logoContent}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-[14px] text-[#111] leading-tight group-hover:text-primary transition-colors">
                        {proj.name}
                      </h3>
                      <p className="font-sans text-[10px] font-medium text-[#777] leading-none mt-0.5">
                        {proj.category}
                      </p>
                    </div>
                  </div>

                  {/* Status Pill Badge & Year */}
                  <div className="flex flex-col items-end shrink-0">
                    <span className="text-[9px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                      Completed
                    </span>
                    <span className="text-[9px] font-mono text-[#AAA] mt-1">
                      {proj.year}
                    </span>
                  </div>
                </div>

                {/* ── 3D LAPTOP & PHONE MOCKUP ── */}
                <div className="mb-3">
                  <ProjectMockupDisplay type={proj.mockupType} />
                </div>

                {/* ── FEATURE TAGS (WARM CREAM PILLS WITH AMBER CHECKMARKS) ── */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {proj.features.map((feat) => (
                    <span
                      key={feat}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FFF9EA] border border-[#F3E7C4] text-[9.5px] font-semibold text-[#333]"
                    >
                      <Check className="w-2.5 h-2.5 text-[#D97706] shrink-0" strokeWidth={2.8} />
                      {feat}
                    </span>
                  ))}
                </div>

                {/* ── TECH STACK FOOTER WITH COLORFUL BRAND ICONS ── */}
                <div className="pt-2 border-t border-[#EAE3D6]/70 flex items-center justify-between gap-1">
                  {proj.tech.map((t) => (
                    <div
                      key={t}
                      className="flex items-center gap-1 text-[10px] font-semibold text-[#444]"
                    >
                      <TechBadgeIcon name={t} />
                      <span>{t}</span>
                    </div>
                  ))}
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
          className="mt-6 sm:mt-8 lg:mt-10 bg-white border-[1.5px] border-[#E2E2E2] rounded-[20px] px-6 sm:px-8 py-3.5 shadow-xs"
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
