"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Lightbulb,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  TrendingUp,
  Zap,
  MessageSquare,
  Users,
  Sparkles,
  ArrowUpRight,
  MoveRight,
} from "lucide-react";

/* ─────────────────────────────────────────
   PROCESS STEPS
───────────────────────────────────────── */
const PROCESS_STEPS = [
  {
    num: "01",
    badge: "Research",
    badgeColor: "bg-amber-100 text-amber-700 border-amber-200",
    title: "Discovery",
    desc: "Map your users, goals and competitive landscape.",
    Icon: Lightbulb,
    iconBg: "bg-amber-50",
    iconBorder: "border-amber-200",
    iconColor: "text-amber-500",
    accent: "#F59E0B",
  },
  {
    num: "02",
    badge: "UI / UX",
    badgeColor: "bg-violet-100 text-violet-700 border-violet-200",
    title: "Design",
    desc: "Wire-frame, prototype and validate with real users.",
    Icon: Palette,
    iconBg: "bg-violet-50",
    iconBorder: "border-violet-200",
    iconColor: "text-violet-500",
    accent: "#8B5CF6",
  },
  {
    num: "03",
    badge: "Next.js",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
    title: "Development",
    desc: "Scalable, production-ready code shipped fast.",
    Icon: Code2,
    iconBg: "bg-blue-50",
    iconBorder: "border-blue-200",
    iconColor: "text-blue-500",
    accent: "#3B82F6",
  },
  {
    num: "04",
    badge: "QA",
    badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    title: "Testing",
    desc: "Security, performance and cross-platform QA.",
    Icon: ShieldCheck,
    iconBg: "bg-emerald-50",
    iconBorder: "border-emerald-200",
    iconColor: "text-emerald-500",
    accent: "#10B981",
  },
  {
    num: "05",
    badge: "CI / CD",
    badgeColor: "bg-orange-100 text-orange-700 border-orange-200",
    title: "Deployment",
    desc: "Automated pipelines, zero-downtime cloud launch.",
    Icon: Rocket,
    iconBg: "bg-orange-50",
    iconBorder: "border-orange-200",
    iconColor: "text-orange-500",
    accent: "#F97316",
  },
  {
    num: "06",
    badge: "Analytics",
    badgeColor: "bg-teal-100 text-teal-700 border-teal-200",
    title: "Growth",
    desc: "Data-driven iterations that compound over time.",
    Icon: TrendingUp,
    iconBg: "bg-teal-50",
    iconBorder: "border-teal-200",
    iconColor: "text-teal-500",
    accent: "#14B8A6",
  },
];

/* ─────────────────────────────────────────
   TECH PIPELINE
───────────────────────────────────────── */
const TECH_PIPELINE = [
  { name: "Figma", caption: "Design System", iconType: "figma" },
  { name: "VS Code", caption: "Engineering", iconType: "vscode" },
  { name: "GitHub", caption: "Version Control", iconType: "github" },
  { name: "Vercel", caption: "Cloud Deploy", iconType: "vercel" },
  { name: "Live Product", caption: "Customer Value", iconType: "product" },
];

/* ─────────────────────────────────────────
   BOTTOM METRICS
───────────────────────────────────────── */
const METRICS = [
  { Icon: Zap, title: "2–4 Week MVP", desc: "From brief to live product." },
  { Icon: MessageSquare, title: "Weekly Demos", desc: "Stay informed, every sprint." },
  { Icon: Users, title: "Founder Access", desc: "Direct line to the builders." },
  { Icon: Rocket, title: "Post-Launch Care", desc: "We ship — and stay." },
];

/* ─────────────────────────────────────────
   TECH ICONS
───────────────────────────────────────── */
function TechIcon({ type }: { type: string }) {
  if (type === "figma") {
    return (
      <svg viewBox="0 0 30 45" fill="none" className="w-5 h-6">
        <rect width="15" height="15" rx="7.5" fill="#F24E1E" />
        <rect x="15" width="15" height="15" rx="7.5" fill="#FF7262" />
        <rect y="15" width="15" height="15" rx="7.5" fill="#A259FF" />
        <rect y="30" width="15" height="15" rx="7.5" fill="#0ACF83" />
        <circle cx="22.5" cy="22.5" r="7.5" fill="#1ABCFE" />
      </svg>
    );
  }
  if (type === "vscode") {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#007ACC]" fill="currentColor">
        <path d="M 18.5 2 L 6 12 L 18.5 22 L 22 20 L 22 4 Z M 2 8 L 6 12 L 2 16 L 4 18 L 10 12 L 4 6 Z" />
      </svg>
    );
  }
  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#111111]">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    );
  }
  if (type === "vercel") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#111111]">
        <path d="M12 1L24 22H0L12 1Z" />
      </svg>
    );
  }
  return (
    <div className="w-5 h-5 rounded border-2 border-primary bg-[#EEF2FF] flex items-center justify-center">
      <span className="w-2 h-2 rounded-full bg-primary" />
    </div>
  );
}

/* ─────────────────────────────────────────
   ROADMAP CONNECTOR (animated travelling dot)
───────────────────────────────────────── */
function RoadmapConnector() {
  return (
    <div className="hidden lg:block absolute z-0 pointer-events-none" style={{ top: -14, left: 8, right: 8 }}>
      {/* Base dashed line */}
      <div className="w-full h-0 border-t-[1.5px] border-dashed border-primary/30" />
      {/* Node dots at each card center — 6 evenly spaced */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className="absolute top-[-3.5px] w-[6px] h-[6px] rounded-full bg-[#F8F3E8] border-[2px] border-primary/50"
          style={{ left: `calc(${(i * 100) / 5}% * (5/6) + ${100 / 12}%)` }}
        />
      ))}
      {/* Animated travelling dot */}
      <motion.span
        className="absolute top-[-5px] w-[10px] h-[10px] rounded-full bg-primary shadow-[0_0_8px_rgba(52,104,255,0.65)]"
        animate={{ left: ["2%", "98%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────── */
export function Process() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-background overflow-hidden select-none"
      style={{ padding: "clamp(48px, 5vw, 72px) 0 clamp(40px, 4vw, 60px)" }}
    >
      {/* ── Background Texture ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.12]">
        <Image src="/images/hero/GWH_Background Texture.png" alt="" fill className="object-cover" priority />
      </div>

      {/* ── Blueprint Grid ── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.025] z-0" aria-hidden="true">
        <defs>
          <pattern id="bpGrid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#2457FF" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bpGrid)" />
      </svg>

      {/* ── Decorative: Sparkle top-right ── */}
      <div className="absolute top-10 right-14 pointer-events-none opacity-50 z-[1]">
        <Sparkles className="w-4 h-4 text-[#FFD43B] fill-[#FFD43B]" />
      </div>

      {/* ── Decorative: Arrow mid-left ── */}
      <div className="absolute top-[44%] left-[24%] pointer-events-none opacity-[0.1] z-[1]">
        <ArrowUpRight className="w-5 h-5 text-primary" strokeWidth={1.5} />
      </div>

      {/* ── Decorative: Curved doodle ── */}
      <svg className="absolute top-6 left-[38%] w-[140px] h-[44px] pointer-events-none opacity-[0.06] z-[1]" aria-hidden="true">
        <path d="M 0 36 Q 70 -8 140 28" fill="none" stroke="#2457FF" strokeWidth="1.2" strokeDasharray="4 5" />
      </svg>

      {/* ══════════════════════════════
          MASTER CONTENT WRAPPER
      ══════════════════════════════ */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col gap-9">

        {/* ───────────────────────────────────
            ROW 1: Left copy + Right cards
        ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-start">

          {/* ── LEFT: Copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border-[1.5px] border-[#222] bg-white text-[11px] font-semibold tracking-wide text-[#111] shadow-sm self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Our Process
            </div>

            {/* Heading */}
            <div>
              <h2 className="font-heading text-[#111] leading-[1.06] tracking-[-0.03em]" style={{ fontSize: "clamp(32px, 3.2vw, 46px)", fontWeight: 800 }}>
                From Idea to{" "}
                <span className="relative inline-block text-primary">
                  Launch.
                  <span className="absolute -bottom-0.5 left-0 w-full h-[3.5px] bg-[#FFD43B] rounded-full" />
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="font-sans text-[14px] font-[450] text-[#555] leading-[1.65]">
              A founder-friendly engineering process — transparent, fast, and built for startups that need to move.
            </p>

            {/* Bold statement */}
            <p className="font-sans text-[14px] font-semibold text-[#111] leading-snug tracking-[-0.01em]">
              You focus on the vision.<br />
              <span className="text-primary font-bold">We handle the execution.</span>
            </p>

            {/* CTA */}
            <Link
              href="#projects"
              className="inline-flex items-center gap-1.5 text-[13px] font-bold text-primary border-b border-primary/30 pb-0.5 self-start hover:border-primary transition-all duration-200 group tracking-[-0.01em]"
            >
              View Case Studies
              <MoveRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>

          {/* ── RIGHT: Process Cards ── */}
          <div className="relative w-full">
            {/* Animated roadmap connector — sits ABOVE the cards */}
            <RoadmapConnector />

            {/* Cards — mt-5 to give the connector visual breathing room */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 relative z-10 mt-5">
              {PROCESS_STEPS.map(({ num, badge, badgeColor, title, desc, Icon, iconBg, iconBorder, iconColor }, idx) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, y: 18 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.1 + idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{
                    y: -7,
                    boxShadow: "0 12px 32px rgba(52,104,255,0.12)",
                    borderColor: "#3468FF",
                  }}
                  className="relative flex flex-col w-full h-[216px] bg-white border-[1.5px] border-[#e2e2e2] rounded-[22px] p-4 cursor-pointer group transition-all duration-300"
                  style={{ boxShadow: "2px 3px 0 rgba(17,17,17,0.04)" }}
                >
                  {/* Step number */}
                  <span className="font-sans text-[11px] font-semibold text-primary/50 mb-2 tracking-wide">{num}</span>

                  {/* Icon */}
                  <div className={`w-[52px] h-[52px] rounded-[15px] ${iconBg} border ${iconBorder} flex items-center justify-center mb-3 group-hover:scale-[1.08] group-hover:rotate-[4deg] transition-all duration-300`}>
                    <Icon className={`w-6 h-6 ${iconColor}`} strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-[#111] leading-tight mb-1.5 group-hover:text-primary transition-colors duration-200" style={{ fontSize: 14, fontWeight: 700, letterSpacing: "-0.01em" }}>
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-[11px] font-[450] text-[#777] leading-[1.6] mb-auto">
                    {desc}
                  </p>

                  {/* Badge */}
                  <span className={`mt-2 self-start text-[9.5px] font-semibold tracking-wide px-1.5 py-[3px] rounded-full border ${badgeColor}`}>
                    {badge}
                  </span>

                  {/* Timeline node dot on the top edge of each card */}
                  <span className="hidden lg:block absolute left-1/2 -translate-x-1/2 -top-[19px] w-[7px] h-[7px] rounded-full bg-[#F8F3E8] border-[2px] border-primary/60 z-10 group-hover:bg-primary group-hover:border-primary group-hover:scale-125 transition-all duration-200" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ───────────────────────────────────
            ROW 2: Technology Pipeline
        ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#bbb] mb-2 ml-0.5">
            Built With Modern Tools
          </p>
          <div
            className="bg-white border-[1.5px] border-[#e2e2e2] rounded-[20px] px-7 sm:px-10 flex items-center"
            style={{ height: 84, boxShadow: "2px 3px 0 rgba(17,17,17,0.04)" }}
          >
            <div className="flex items-center justify-between w-full">
              {TECH_PIPELINE.map(({ name, caption, iconType }, i) => (
                <React.Fragment key={name}>
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-[11px] bg-[#F8FAFC] border border-[#EAECF0] flex items-center justify-center shrink-0">
                      <TechIcon type={iconType} />
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-[12.5px] text-[#111] leading-none tracking-[-0.01em]">{name}</p>
                      <p className="font-sans text-[10px] font-[450] text-[#aaa] mt-0.5">{caption}</p>
                    </div>
                  </div>

                  {i < TECH_PIPELINE.length - 1 && (
                    <div className="hidden md:flex items-center shrink-0 relative" style={{ width: 48 }}>
                      <div className="w-full border-t-[1.5px] border-dashed border-primary/30" />
                      {/* Animated pulse dot */}
                      <motion.span
                        className="absolute top-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-primary"
                        style={{ boxShadow: "0 0 5px rgba(52,104,255,0.6)" }}
                        animate={{ left: ["-6px", "calc(100% + 6px)"] }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          ease: "linear",
                          delay: i * 0.45,
                          repeatDelay: 0.3,
                        }}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ───────────────────────────────────
            ROW 3: Bottom Benefits
        ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="pt-5 border-t border-[#111]/[0.07]"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {METRICS.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.8 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-3 group"
              >
                <div className="w-9 h-9 rounded-full bg-[#FFD43B]/15 border border-[#FFD43B]/50 flex items-center justify-center shrink-0 group-hover:scale-[1.1] group-hover:rotate-[6deg] transition-all duration-250">
                  <Icon className="w-4 h-4 text-[#111]" strokeWidth={2} />
                </div>
                <div>
                  <p className="font-heading text-[#111] leading-tight tracking-[-0.01em]" style={{ fontSize: 13, fontWeight: 700 }}>{title}</p>
                  <p className="font-sans text-[11px] font-[450] text-[#888] mt-0.5 leading-snug">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
