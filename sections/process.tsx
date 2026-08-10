"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
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
  ChevronRight,
  ChevronLeft,
  Check,
} from "lucide-react";

/* ─────────────────────────────────────────
   PROCESS STEPS DATA
───────────────────────────────────────── */
interface ProcessStep {
  id: number;
  num: string;
  badge: string;
  badgeColor: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  Icon: React.ElementType;
  iconBg: string;
  iconBorder: string;
  iconColor: string;
  accent: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    num: "01",
    badge: "Research",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    title: "Discovery",
    shortDesc: "Map your users, goals and competitive landscape.",
    fullDesc:
      "Deep dive into your product vision, target audience, core problem, and competitive landscape to establish clear technical scope.",
    deliverables: ["Product Roadmap", "Scope & Architecture", "Feature Spec"],
    Icon: Lightbulb,
    iconBg: "bg-amber-50",
    iconBorder: "border-amber-200",
    iconColor: "text-amber-500",
    accent: "#F59E0B",
  },
  {
    id: 2,
    num: "02",
    badge: "UI / UX",
    badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
    title: "Design",
    shortDesc: "Wire-frame, prototype and validate with real users.",
    fullDesc:
      "Crafting intuitive user journeys, high-fidelity Figma components, and interactive prototypes tailored for high conversion.",
    deliverables: ["Figma Design System", "Interactive Prototype", "Design Specs"],
    Icon: Palette,
    iconBg: "bg-violet-50",
    iconBorder: "border-violet-200",
    iconColor: "text-violet-500",
    accent: "#8B5CF6",
  },
  {
    id: 3,
    num: "03",
    badge: "Next.js",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    title: "Development",
    shortDesc: "Scalable, production-ready code shipped fast.",
    fullDesc:
      "Building clean, scalable full-stack applications using Next.js, React, Tailwind CSS, TypeScript, and modern database backends.",
    deliverables: ["Production Codebase", "API Integrations", "Database Architecture"],
    Icon: Code2,
    iconBg: "bg-blue-50",
    iconBorder: "border-blue-200",
    iconColor: "text-blue-500",
    accent: "#3B82F6",
  },
  {
    id: 4,
    num: "04",
    badge: "QA",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    title: "Testing",
    shortDesc: "Security, performance and cross-platform QA.",
    fullDesc:
      "Rigorous end-to-end testing, responsive audits, Core Web Vitals optimization, and security checks before deployment.",
    deliverables: ["Cross-Device QA", "Performance Audit", "Security Review"],
    Icon: ShieldCheck,
    iconBg: "bg-emerald-50",
    iconBorder: "border-emerald-200",
    iconColor: "text-emerald-500",
    accent: "#10B981",
  },
  {
    id: 5,
    num: "05",
    badge: "CI / CD",
    badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
    title: "Deployment",
    shortDesc: "Automated pipelines, zero-downtime cloud launch.",
    fullDesc:
      "Setting up automated CI/CD pipelines, SSL certificates, edge CDN caching, analytics, and zero-downtime cloud infrastructure.",
    deliverables: ["Vercel / Cloud Setup", "Domain & SSL Config", "Analytics Tracking"],
    Icon: Rocket,
    iconBg: "bg-orange-50",
    iconBorder: "border-orange-200",
    iconColor: "text-orange-500",
    accent: "#F97316",
  },
  {
    id: 6,
    num: "06",
    badge: "Analytics",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
    title: "Growth",
    shortDesc: "Data-driven iterations that compound over time.",
    fullDesc:
      "Post-launch telemetry, user behavior analysis, feature iterations, and dedicated maintenance for continuous growth.",
    deliverables: ["User Funnel Metrics", "Feature Iterations", "SLA Support"],
    Icon: TrendingUp,
    iconBg: "bg-teal-50",
    iconBorder: "border-teal-200",
    iconColor: "text-teal-500",
    accent: "#14B8A6",
  },
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
   RADIAL ORBITAL TIMELINE COMPONENT
───────────────────────────────────────── */
function RadialOrbitalTimeline() {
  const [activeId, setActiveId] = React.useState<number>(1);
  const [rotationAngle, setRotationAngle] = React.useState<number>(0);
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const [autoRotate, setAutoRotate] = React.useState<boolean>(true);

  // Slow smooth auto-rotation
  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (autoRotate && !isHovered) {
      timer = setInterval(() => {
        setRotationAngle((prev) => (prev + 0.25) % 360);
      }, 50);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [autoRotate, isHovered]);

  const activeStep = PROCESS_STEPS.find((s) => s.id === activeId) || PROCESS_STEPS[0];
  const radius = 175; // Orbit radius in px

  const handleStepSelect = (id: number) => {
    setActiveId(id);
    setAutoRotate(false);
  };

  const handleNext = () => {
    setActiveId((prev) => (prev === PROCESS_STEPS.length ? 1 : prev + 1));
    setAutoRotate(false);
  };

  const handlePrev = () => {
    setActiveId((prev) => (prev === 1 ? PROCESS_STEPS.length : prev - 1));
    setAutoRotate(false);
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* ── DESKTOP & TABLET: RADIAL ORBITAL WORKFLOW ── */}
      <div
        className="hidden md:flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 bg-transparent p-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Orbital Stage Viewport */}
        <div className="relative w-[380px] h-[380px] lg:w-[410px] lg:h-[410px] flex items-center justify-center shrink-0 select-none">
          {/* Subtle Outer Dashed Orbit Ring */}
          <div
            className="absolute rounded-full border border-dashed border-primary/25 pointer-events-none"
            style={{ width: radius * 2, height: radius * 2 }}
          />

          {/* Secondary Guide Ring */}
          <div
            className="absolute rounded-full border border-[#EAE4D8]/80 pointer-events-none"
            style={{ width: radius * 2 - 60, height: radius * 2 - 60 }}
          />

          {/* ── CENTER HUB: "FROM IDEA TO LAUNCH" ── */}
          <div className="relative w-36 h-36 rounded-full bg-white border-[1.5px] border-[#222]/15 shadow-sm flex flex-col items-center justify-center text-center p-3 z-10">
            <span className="inline-flex items-center gap-1 bg-[#FFF9EA] text-[#B45309] px-2 py-0.5 rounded-full text-[9px] font-bold border border-[#F3E7C4] mb-1">
              <Zap className="w-2.5 h-2.5 fill-[#FFB800] text-[#FFB800]" />
              STAGE {activeStep.num}
            </span>
            <h4 className="font-heading font-extrabold text-[12px] text-[#111] leading-tight">
              FROM IDEA <br />
              <span className="text-primary">TO LAUNCH</span>
            </h4>
            <span className="text-[10px] font-semibold text-[#888] mt-1 font-sans">
              6-Step Lifecycle
            </span>
          </div>

          {/* ── 6 ORBITAL NODES ── */}
          {PROCESS_STEPS.map((step, index) => {
            const total = PROCESS_STEPS.length;
            const angle = ((index / total) * 360 + rotationAngle) % 360;
            const radian = (angle * Math.PI) / 180;
            const x = (radius * Math.cos(radian)).toFixed(3);
            const y = (radius * Math.sin(radian)).toFixed(3);
            const isActive = step.id === activeId;
            const Icon = step.Icon;

            return (
              <div
                key={step.id}
                suppressHydrationWarning
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
                className="absolute z-20 transition-transform duration-100 ease-linear cursor-pointer"
                onClick={() => handleStepSelect(step.id)}
              >
                <div className="relative group flex items-center justify-center">
                  {/* Node Button */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-11 h-11 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-all duration-250 ${
                      isActive
                        ? "bg-primary text-white border-2 border-primary shadow-[0_4px_16px_rgba(36,87,255,0.4)] ring-4 ring-primary/15 scale-110"
                        : "bg-white text-[#444] border-[1.5px] border-[#E2E2E2] shadow-xs hover:border-primary/60 hover:text-primary"
                    }`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={isActive ? 2.2 : 1.8} />
                  </motion.div>

                  {/* Floating Step Title Pill */}
                  <div
                    className={`absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded-full text-[10px] font-heading font-bold border transition-all duration-200 pointer-events-none ${
                      isActive
                        ? "bg-primary text-white border-primary shadow-xs opacity-100 scale-105"
                        : "bg-white/95 text-[#555] border-[#E2E2E2] opacity-80 group-hover:opacity-100"
                    }`}
                  >
                    {step.num} {step.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── ACTIVE STAGE DETAIL PANEL ── */}
        <div
          className="flex-1 w-full bg-white border-[1.5px] border-[#E2E2E2] rounded-[22px] p-6 lg:p-7 flex flex-col justify-between min-h-[350px]"
          style={{ boxShadow: "0 4px 20px rgba(17,17,17,0.03)" }}
        >
          <div>
            {/* Top row: Stage badge, index, & controls */}
            <div className="flex items-center justify-between gap-3 border-b border-[#E8E2D6]/80 pb-3.5 mb-4">
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-[10.5px] font-bold border ${activeStep.badgeColor}`}>
                  {activeStep.badge}
                </span>
                <span className="font-mono text-[11px] font-bold text-[#888]">
                  Phase {activeStep.num} of 06
                </span>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrev}
                  className="w-7 h-7 rounded-full bg-white border border-[#E2E2E2] flex items-center justify-center text-[#444] hover:text-primary hover:border-primary transition-colors cursor-pointer"
                  title="Previous Step"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-7 h-7 rounded-full bg-white border border-[#E2E2E2] flex items-center justify-center text-[#444] hover:text-primary hover:border-primary transition-colors cursor-pointer"
                  title="Next Step"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Title & Short Description */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-2.5"
              >
                <div className="flex items-center gap-2.5">
                  <div className={`w-9 h-9 rounded-xl ${activeStep.iconBg} border ${activeStep.iconBorder} flex items-center justify-center shrink-0`}>
                    <activeStep.Icon className={`w-5 h-5 ${activeStep.iconColor}`} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-[18px] text-[#111] leading-tight">
                      {activeStep.title}
                    </h3>
                    <p className="font-sans text-[12px] font-medium text-primary leading-tight">
                      {activeStep.shortDesc}
                    </p>
                  </div>
                </div>

                <p className="font-sans text-[13px] font-[450] text-[#555] leading-[1.65] mt-1">
                  {activeStep.fullDesc}
                </p>

                {/* Key Deliverables */}
                <div className="pt-3 border-t border-[#E8E2D6]/80">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#888] block mb-2">
                    Key Outcomes & Deliverables
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeStep.deliverables.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-[#E2E2E2] text-[11px] font-semibold text-[#333] shadow-2xs"
                      >
                        <Check className="w-3 h-3 text-primary" strokeWidth={2.5} />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Stage Progress Steps Indicator */}
          <div className="flex items-center justify-between gap-1.5 pt-4 mt-4 border-t border-[#E8E2D6]/80">
            {PROCESS_STEPS.map((s) => (
              <button
                key={s.id}
                onClick={() => handleStepSelect(s.id)}
                className={`flex-1 py-1.5 rounded-lg text-center font-heading text-[11px] font-bold transition-all cursor-pointer ${
                  s.id === activeId
                    ? "bg-primary text-white shadow-xs"
                    : "bg-white/80 border border-[#E2E2E2] text-[#666] hover:text-[#111]"
                }`}
              >
                {s.num} {s.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── MOBILE: CLEAN STEPPER LIST VIEW ── */}
      <div className="flex md:hidden flex-col gap-3">
        {PROCESS_STEPS.map((step) => {
          const isActive = step.id === activeId;
          const Icon = step.Icon;

          return (
            <div
              key={step.id}
              onClick={() => handleStepSelect(step.id)}
              className={`p-4 rounded-[18px] border-[1.5px] transition-all cursor-pointer ${
                isActive
                  ? "bg-white border-primary shadow-sm"
                  : "bg-white/70 border-[#E2E2E2]"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-lg ${step.iconBg} border ${step.iconBorder} flex items-center justify-center`}>
                    <Icon className={`w-4 h-4 ${step.iconColor}`} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[14px] text-[#111]">
                      {step.num}. {step.title}
                    </h4>
                  </div>
                </div>
                <span className={`text-[9.5px] font-bold px-2 py-0.5 rounded-full border ${step.badgeColor}`}>
                  {step.badge}
                </span>
              </div>
              <p className="font-sans text-[12px] font-[450] text-[#666] leading-relaxed">
                {step.shortDesc}
              </p>
              {isActive && (
                <div className="mt-3 pt-2.5 border-t border-[#F1F5F9] flex flex-wrap gap-1.5">
                  {step.deliverables.map((deliv) => (
                    <span
                      key={deliv}
                      className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#333] bg-[#FAF7F2] border border-[#E8E2D6] px-2 py-0.5 rounded-full"
                    >
                      <Check className="w-2.5 h-2.5 text-primary" />
                      {deliv}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN PROCESS SECTION
───────────────────────────────────────── */
export function Process() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative w-full bg-background overflow-hidden select-none"
      style={{ padding: "clamp(48px, 5vw, 72px) 0 clamp(40px, 4vw, 60px)" }}
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
          <pattern id="bpGridProcess" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#2457FF" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bpGridProcess)" />
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
      <svg
        className="absolute top-6 left-[38%] w-[140px] h-[44px] pointer-events-none opacity-[0.06] z-[1]"
        aria-hidden="true"
      >
        <path d="M 0 36 Q 70 -8 140 28" fill="none" stroke="#2457FF" strokeWidth="1.2" strokeDasharray="4 5" />
      </svg>

      {/* ══════════════════════════════
          MASTER CONTENT WRAPPER (1280px)
      ══════════════════════════════ */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 flex flex-col gap-10">

        {/* ───────────────────────────────────
            ROW 1: Section Header + Copy
        ─────────────────────────────────── */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border-[1.5px] border-[#222] bg-white text-[11px] font-semibold tracking-wide text-[#111] shadow-xs self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Our Process
            </div>

            {/* Heading */}
            <div>
              <h2
                className="font-heading text-[#111] leading-[1.05] tracking-[-0.03em]"
                style={{ fontSize: "clamp(32px, 3.4vw, 48px)", fontWeight: 800 }}
              >
                From Idea to{" "}
                <span className="relative inline-block text-primary">
                  Launch.
                  <span className="absolute -bottom-0.5 left-0 w-full h-[3.5px] bg-[#FFD43B] rounded-full" />
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="font-sans text-[13.5px] font-[450] text-[#555] leading-[1.65] max-w-[540px]">
              A founder-friendly engineering process — transparent, fast, and built for startups that need to move.
            </p>
          </motion.div>
        </div>

        {/* ───────────────────────────────────
            ROW 2: Radial Orbital Workflow
        ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <RadialOrbitalTimeline />
        </motion.div>



        {/* ───────────────────────────────────
            ROW 4: Bottom Benefits
        ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="pt-4 border-t border-[#EAE4D8]"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {METRICS.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.6 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-3 group"
              >
                <div className="w-9 h-9 rounded-full bg-[#FFD43B]/20 border border-[#FFD43B]/60 flex items-center justify-center shrink-0 group-hover:scale-[1.08] transition-all duration-200 text-[#111]">
                  <Icon className="w-4 h-4 text-[#111]" strokeWidth={2} />
                </div>
                <div>
                  <p
                    className="font-heading text-[#111] leading-tight tracking-[-0.01em]"
                    style={{ fontSize: 13, fontWeight: 700 }}
                  >
                    {title}
                  </p>
                  <p className="font-sans text-[11px] font-[450] text-[#777] mt-0.5 leading-snug">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
