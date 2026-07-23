"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Shield,
  MessageCircle,
  TrendingUp,
  Star,
  CheckCircle2,
  Bot,
  Code2,
  Gauge,
  Sparkles,
} from "lucide-react";

/* ─────────────────────────────────────────
   Shared fade-up variant (scroll-triggered)
───────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.06,
      ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
    },
  }),
};

/* ─────────────────────────────────────────
   CLEAN & TRANSPARENT FEATURE CARD COMPONENT
───────────────────────────────────────── */
interface FeatureCardProps {
  badge: string;
  title: string;
  desc: string;
  rotate: number;
  idx: number;
}

function FeatureCard({
  badge,
  title,
  desc,
  rotate,
  idx,
}: FeatureCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-20px" }}
      variants={fadeUp}
      custom={idx * 0.08 + 0.1}
      whileHover={{ y: -5, rotate }}
      transition={{ duration: 0.22, ease: [0.215, 0.61, 0.355, 1] }}
      className="relative bg-transparent border-[2px] border-[#222222] rounded-[18px] p-5 flex flex-col justify-between overflow-hidden cursor-pointer group select-none transition-all duration-200 hover:border-primary hover:shadow-[0_10px_24px_rgba(0,0,0,0.06)]"
      style={{ boxShadow: "2px 2px 0 rgba(17,17,17,0.04)" }}
    >
      {/* Top Row: Micro Badge */}
      <div className="flex items-center justify-between mb-3">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-primary bg-[#EEF2FF] font-sans text-[9.5px] font-extrabold text-primary tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span>{badge}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-end">
        <h3 className="font-heading font-black text-[17px] sm:text-[18px] text-[#111111] leading-tight mb-1.5 tracking-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="font-sans text-[12.5px] sm:text-[13px] text-[#555555] leading-[1.55] mb-3.5">
          {desc}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-1 font-sans font-extrabold text-[11.5px] text-primary group-hover:gap-2 transition-all duration-200">
          <span className="relative">
            Learn More
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary group-hover:w-full transition-all duration-200" />
          </span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   PREMIUM EDITORIAL PRODUCT SHOWCASE (RIGHT COLUMN)
───────────────────────────────────────── */
function RightProductSuiteShowcase() {
  const [activeTab, setActiveTab] = React.useState<"ai" | "stack" | "perf">("ai");

  return (
    <div className="relative w-full max-w-[500px] select-none">

      {/* Main Glass Workspace Window */}
      <div
        className="bg-white border-[2px] border-[#222222] rounded-[20px] overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.08)] relative"
        style={{ boxShadow: "4px 4px 0 rgba(17,17,17,0.08)" }}
      >
        {/* Window Chrome Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#F5F5F7] border-b border-[#E2E4E9]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1AAB29]" />
            <div className="ml-3 px-3 py-1 bg-white border border-[#E2E4E9] rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="font-mono text-[9px] font-bold text-[#374151]">growwithhustler.com/os</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#DEF7EC] text-[#03543F] text-[8px] font-bold rounded-full border border-[#BEE3F8]/30 flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-[#22C55E]" />
              Production Ready
            </span>
          </div>
        </div>

        {/* Tab Selector Header */}
        <div className="flex items-center justify-around px-2 py-2 bg-[#FAFBFD] border-b border-[#EAEAEA]">
          <button
            onClick={() => setActiveTab("ai")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-extrabold transition-all ${
              activeTab === "ai"
                ? "bg-[#2457FF] text-white shadow-sm"
                : "text-[#6B6B6B] hover:text-[#111111] hover:bg-black/5"
            }`}
          >
            <Bot className="w-3 h-3" />
            <span>AI Agents</span>
          </button>

          <button
            onClick={() => setActiveTab("stack")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-extrabold transition-all ${
              activeTab === "stack"
                ? "bg-[#2457FF] text-white shadow-sm"
                : "text-[#6B6B6B] hover:text-[#111111] hover:bg-black/5"
            }`}
          >
            <Code2 className="w-3 h-3" />
            <span>Modern Stack</span>
          </button>

          <button
            onClick={() => setActiveTab("perf")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-extrabold transition-all ${
              activeTab === "perf"
                ? "bg-[#2457FF] text-white shadow-sm"
                : "text-[#6B6B6B] hover:text-[#111111] hover:bg-black/5"
            }`}
          >
            <Gauge className="w-3 h-3" />
            <span>Performance</span>
          </button>
        </div>

        {/* Dynamic Tab Body */}
        <div className="p-4 sm:p-5 bg-white min-h-[220px] flex flex-col justify-between">

          {/* TAB 1: AI AGENTS */}
          {activeTab === "ai" && (
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-black text-[13px] text-[#111111]">Autonomous AI Pipeline</h4>
                  <p className="font-sans text-[9.5px] text-[#6B6B6B]">Built directly into client applications</p>
                </div>
                <span className="px-2 py-0.5 bg-[#EEF2FF] text-[#2457FF] text-[8.5px] font-black rounded-md border border-[#2457FF]/20">
                  OpenAI v4 + Supabase
                </span>
              </div>

              <div className="space-y-2">
                <div className="p-2.5 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-lg bg-[#2457FF] text-white flex items-center justify-center font-bold text-[10px]">
                      🤖
                    </div>
                    <div>
                      <p className="font-sans font-bold text-[10px] text-[#111111]">Lead Gen AI Bot</p>
                      <p className="font-sans text-[8.5px] text-[#6B6B6B]">Auto captures &amp; qualifies inbound leads</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-[#DEF7EC] text-[#03543F] text-[8px] font-bold rounded-full">
                    Active
                  </span>
                </div>

                <div className="p-2.5 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-lg bg-[#111111] text-white flex items-center justify-center font-bold text-[10px]">
                      ⚡
                    </div>
                    <div>
                      <p className="font-sans font-bold text-[10px] text-[#111111]">Auto Code Auditor</p>
                      <p className="font-sans text-[8.5px] text-[#6B6B6B]">Runs static type safety &amp; security checks</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-[#EEF2FF] text-[#2457FF] text-[8px] font-bold rounded-full">
                    Running
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: MODERN STACK */}
          {activeTab === "stack" && (
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-black text-[13px] text-[#111111]">Battle-Tested Architecture</h4>
                  <p className="font-sans text-[9.5px] text-[#6B6B6B]">Scalable, production-ready tech stack</p>
                </div>
                <span className="px-2 py-0.5 bg-[#FFD43B] text-[#111111] text-[8.5px] font-black rounded-md border border-[#222222]">
                  100% Clean Code
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] font-bold text-[#111111]">Next.js 14 App Router</span>
                    <CheckCircle2 className="w-3 h-3 text-[#2457FF]" />
                  </div>
                  <p className="font-sans text-[8px] text-[#6B6B6B]">Server Components &amp; Edge API</p>
                </div>

                <div className="p-2.5 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] font-bold text-[#111111]">Supabase PostgreSQL</span>
                    <CheckCircle2 className="w-3 h-3 text-[#2457FF]" />
                  </div>
                  <p className="font-sans text-[8px] text-[#6B6B6B]">Row Level Security &amp; Auth</p>
                </div>

                <div className="p-2.5 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] font-bold text-[#111111]">TypeScript Strict</span>
                    <CheckCircle2 className="w-3 h-3 text-[#2457FF]" />
                  </div>
                  <p className="font-sans text-[8px] text-[#6B6B6B]">Zero runtime type errors</p>
                </div>

                <div className="p-2.5 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] font-bold text-[#111111]">Tailwind CSS</span>
                    <CheckCircle2 className="w-3 h-3 text-[#2457FF]" />
                  </div>
                  <p className="font-sans text-[8px] text-[#6B6B6B]">Custom editorial design system</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: PERFORMANCE */}
          {activeTab === "perf" && (
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-black text-[13px] text-[#111111]">Blazing Fast Core Web Vitals</h4>
                  <p className="font-sans text-[9.5px] text-[#6B6B6B]">Optimized for SEO &amp; conversion</p>
                </div>
                <span className="px-2 py-0.5 bg-[#DEF7EC] text-[#03543F] text-[8.5px] font-black rounded-md">
                  Vercel Edge Network
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC]">
                  <p className="font-heading font-black text-[18px] text-[#22C55E]">98</p>
                  <p className="font-sans font-bold text-[8.5px] text-[#111111]">Performance</p>
                </div>

                <div className="p-2.5 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC]">
                  <p className="font-heading font-black text-[18px] text-[#2457FF]">100</p>
                  <p className="font-sans font-bold text-[8.5px] text-[#111111]">SEO</p>
                </div>

                <div className="p-2.5 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC]">
                  <p className="font-heading font-black text-[18px] text-[#111111]">&lt;40ms</p>
                  <p className="font-sans font-bold text-[8.5px] text-[#111111]">Latency</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Bottom Bar */}
          <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#F0F0F0]">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="font-sans font-bold text-[9.5px] text-[#111111]">Shipped to Real Users</span>
            </div>
            <span className="font-mono text-[9px] text-[#6B6B6B]">Weekly Syncs &amp; Async Demos</span>
          </div>

        </div>
      </div>

      {/* ── 4 ELEGANT CORNER PROOF PILLS (NO LINES) ── */}

      {/* Top Left Pill */}
      <motion.div
        whileHover={{ y: -3, scale: 1.02 }}
        className="absolute -top-4 -left-4 bg-[#FFD43B] border-[1.5px] border-[#222222] rounded-full px-3 py-1 shadow-md flex items-center gap-1.5 z-20 cursor-default"
      >
        <span className="font-sans font-black text-[9px] text-[#111111]">🎨 Figma → Production</span>
      </motion.div>

      {/* Top Right Pill */}
      <motion.div
        whileHover={{ y: -3, scale: 1.02 }}
        className="absolute -top-4 -right-4 bg-white border-[1.5px] border-[#222222] rounded-full px-3 py-1 shadow-md flex items-center gap-1.5 z-20 cursor-default"
      >
        <div className="flex text-[#FFD43B]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-2.5 h-2.5 fill-[#FFD43B] stroke-none" />
          ))}
        </div>
        <span className="font-sans font-bold text-[9px] text-[#111111]">Founder Approved</span>
      </motion.div>

      {/* Bottom Left Pill */}
      <motion.div
        whileHover={{ y: 3, scale: 1.02 }}
        className="absolute -bottom-4 -left-4 bg-white border-[1.5px] border-[#222222] rounded-full px-3 py-1 shadow-md flex items-center gap-1.5 z-20 cursor-default"
      >
        <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
        <span className="font-sans font-bold text-[9px] text-[#111111]">📱 100% Mobile Responsive</span>
      </motion.div>

      {/* Bottom Right Pill */}
      <motion.div
        whileHover={{ y: 3, scale: 1.02 }}
        className="absolute -bottom-4 -right-4 bg-[#2457FF] border-[1.5px] border-[#222222] text-white rounded-full px-3 py-1 shadow-md flex items-center gap-1.5 z-20 cursor-default"
      >
        <span className="font-sans font-black text-[9px]">⚡ 98 Performance</span>
      </motion.div>

    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN WHY US SECTION
───────────────────────────────────────── */
export function WhyUs() {
  const benefits = [
    { Icon: Zap,           stat: "2–4 Weeks",  label: "Average MVP Delivery"  },
    { Icon: Shield,        stat: "100%",        label: "Quality Focus"          },
    { Icon: MessageCircle, stat: "24/7",        label: "Communication"         },
    { Icon: TrendingUp,    stat: "Long-term",   label: "Partnership"            },
  ];

  return (
    <section className="relative w-full bg-background overflow-hidden py-8 lg:py-10 min-h-[90vh] flex flex-col justify-center select-none">

      {/* Texture Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.14]">
        <Image src="/images/hero/GWH_Background Texture.png" alt="" fill className="object-cover" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[48fr_52fr] gap-8 lg:gap-10 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col justify-center">

            {/* Badge */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={0} className="mb-2.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border-[1.5px] border-[#222222] bg-transparent font-sans text-[10px] font-bold uppercase tracking-wider text-[#111111]">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Why Startups Choose Us</span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={0.08} className="mb-2">
              <h2 className="font-heading font-black leading-[0.95] tracking-tight text-[#111111]" style={{ fontSize: "clamp(28px, 2.7vw, 42px)" }}>
                Why Startups Choose <br />
                <span className="relative inline-block text-primary">
                  Grow With Hustler
                  {/* Yellow Underline */}
                  <motion.svg
                    className="absolute -bottom-1 left-0 w-full overflow-visible"
                    viewBox="0 0 140 8"
                    preserveAspectRatio="none"
                    style={{ transformOrigin: "left center", height: 5 }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <path d="M 2,5.5 Q 70,1.5 138,5.5" fill="none" stroke="#FFD43B" strokeWidth="3" strokeLinecap="round" />
                  </motion.svg>
                </span>
              </h2>
            </motion.div>

            {/* Paragraph */}
            <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={0.14} className="font-sans text-[13px] text-[#6B6B6B] leading-relaxed mb-4 max-w-[420px]">
              We partner with founders to{" "}
              <span className="text-primary font-bold">build</span>,{" "}
              <span className="text-primary font-bold">ship</span> and{" "}
              <span className="text-primary font-bold">scale</span> digital products that users love.
            </motion.p>

            {/* ── 4 SIMPLE TRANSPARENT FEATURE CARDS ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Card 1: Fast Execution */}
              <FeatureCard
                badge="2–4 Weeks MVP"
                title="Fast Execution"
                desc="Launch MVPs in weeks, not months."
                rotate={-1.2}
                idx={0}
              />

              {/* Card 2: AI First Approach */}
              <FeatureCard
                badge="Powered by AI"
                title="AI First Approach"
                desc="AI-powered workflows built into every project."
                rotate={1.2}
                idx={1}
              />

              {/* Card 3: Clean & Scalable Code */}
              <FeatureCard
                badge="Production Ready"
                title="Clean & Scalable Code"
                desc="Maintainable, production-ready codebases."
                rotate={-1}
                idx={2}
              />

              {/* Card 4: Founder Friendly */}
              <FeatureCard
                badge="Weekly Updates"
                title="Founder Friendly"
                desc="Transparent async communication &amp; weekly syncs."
                rotate={1}
                idx={3}
              />
            </div>

          </div>

          {/* ── RIGHT COLUMN — PREMIUM INTERACTIVE PRODUCT SHOWCASE ── */}
          <div className="w-full flex items-center justify-center">
            <RightProductSuiteShowcase />
          </div>

        </div>

        {/* ── BOTTOM METRICS STRIP ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.4}
          className="mt-6"
        >
          <div className="flex items-center justify-center gap-1.5 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="font-sans font-extrabold text-[9.5px] uppercase tracking-widest text-[#6B6B6B]">
              Built For Startup Speed
            </span>
          </div>

          <div
            className="bg-transparent border-[1.5px] border-[#222222] rounded-[14px] px-4 sm:px-6 py-2.5"
            style={{ boxShadow: "2px 2px 0 rgba(17,17,17,0.04)" }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-0 sm:divide-x sm:divide-[#222222]/15">
              {benefits.map(({ Icon, stat, label }) => (
                <div key={label} className="flex items-center justify-center gap-2.5 sm:px-3 first:pl-0 last:pr-0">
                  <div className="w-7 h-7 rounded-full border border-[#222222] bg-transparent flex items-center justify-center shrink-0">
                    <Icon className="text-primary" style={{ width: 13, height: 13 }} />
                  </div>
                  <div>
                    <p className="font-heading font-black text-[14px] sm:text-[15px] text-[#111111] leading-none tracking-tight">
                      {stat}
                    </p>
                    <p className="font-sans text-[9.5px] text-[#6B6B6B] leading-tight mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}