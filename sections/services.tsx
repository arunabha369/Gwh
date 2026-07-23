"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Globe,
  Bot,
  Layers,
  BarChart3,
  Smartphone,
  Zap,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

/* ─────────────────────────────────────────
   6 SERVICE DEFINITIONS WITH FEATURE BADGES
───────────────────────────────────────── */
const SERVICES = [
  {
    id: "website",
    title: "Website Development",
    badge: "SEO Ready",
    desc: "Fast, responsive marketing websites that convert visitors.",
    Icon: Globe,
  },
  {
    id: "ai",
    title: "AI Products",
    badge: "AI Powered",
    desc: "Intelligent agents, automations and smart workflows.",
    Icon: Bot,
  },
  {
    id: "saas",
    title: "SaaS Development",
    badge: "Scalable",
    desc: "Scalable multi-tenant web platforms built for growth.",
    Icon: Layers,
  },
  {
    id: "dashboard",
    title: "Dashboard & Web Apps",
    badge: "Analytics",
    desc: "Custom admin portals and internal business tools.",
    Icon: BarChart3,
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    badge: "iOS + Android",
    desc: "High-performance native and cross-platform mobile apps.",
    Icon: Smartphone,
  },
  {
    id: "automation",
    title: "Automation & Integrations",
    badge: "API Ready",
    desc: "Streamline operations with custom APIs and workflows.",
    Icon: Zap,
  },
];

/* ─────────────────────────────────────────
   1. MAIN HERO LAPTOP (PUBLIC WEBSITE MOCKUP)
───────────────────────────────────────── */
function MacBookMockup() {
  return (
    <div className="relative w-full max-w-[570px] mx-auto select-none">
      {/* Outer Aluminum Display Shell */}
      <div className="relative bg-[#1E1E24] rounded-t-[18px] p-[9px] pb-[12px] border-[2px] border-[#222222] shadow-2xl">
        {/* Camera Notch Dot */}
        <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#0D0D11] border border-[#333333] z-20 flex items-center justify-center">
          <span className="w-0.5 h-0.5 rounded-full bg-[#1A5276]" />
        </div>

        {/* Screen Display Container */}
        <div className="relative w-full aspect-[1.76/1] bg-[#0A0D14] rounded-[10px] overflow-hidden border border-[#333333]">
          <Image
            src="/swapno-fe.png"
            alt="Swapno Motors Public Website"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>

      {/* MacBook Bottom Base / Keyboard Lip */}
      <div className="relative w-[108%] -left-[4%] h-[14px] bg-gradient-to-b from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8] rounded-b-[14px] border-x-[2px] border-b-[2px] border-[#222222] flex justify-center items-center">
        {/* Thumb Opening Indentation */}
        <div className="w-[12%] h-[4px] bg-[#64748B] rounded-b-[4px] border-t border-[#475569]" />
      </div>

      {/* Soft Ground Elevation Shadow */}
      <div className="w-[92%] h-[14px] mx-auto bg-black/25 rounded-full blur-md mt-1 pointer-events-none" />
    </div>
  );
}

/* ─────────────────────────────────────────
   2. SMALL FLOATING WINDOW (ADMIN DASHBOARD MOCKUP)
───────────────────────────────────────── */
function FloatingAdminDashboard() {
  return (
    <div
      className="w-[205px] sm:w-[225px] aspect-[1.55/1] bg-[#0F172A] border-[1.5px] border-[#222222] rounded-[14px] overflow-hidden shadow-2xl select-none"
      style={{ boxShadow: "0 14px 32px rgba(0,0,0,0.25)" }}
    >
      {/* Mac Chrome Header Bar */}
      <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#1E293B] border-b border-[#334155]">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
          <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
          <span className="w-2 h-2 rounded-full bg-[#10B981]" />
          <span className="font-mono text-[7.5px] font-bold text-[#94A3B8] ml-1">Swapno OS Admin</span>
        </div>
        <span className="px-1.5 py-0.5 bg-[#22C55E]/20 text-[#22C55E] text-[6.5px] font-bold rounded-full border border-[#22C55E]/30">
          Live
        </span>
      </div>

      {/* Dashboard Preview Image */}
      <div className="relative w-full h-full bg-[#0F172A]">
        <Image
          src="/images/hero/swapno-dash.png"
          alt="Swapno Motors Admin Dashboard"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   3. REALISTIC MOBILE PHONE MOCKUP
───────────────────────────────────────── */
function MobilePhoneMockup() {
  return (
    <div className="relative w-[122px] sm:w-[132px] h-[235px] sm:h-[255px] select-none shadow-2xl">
      {/* Outer Phone Shell */}
      <div className="relative w-full h-full bg-[#111115] border-[2px] border-[#222222] rounded-[26px] p-2 shadow-2xl flex flex-col">
        {/* Top Speaker Ear Piece */}
        <div className="w-8 h-1 bg-[#222225] rounded-full mx-auto mb-1.5 shrink-0" />

        {/* Mobile Screen Display Container */}
        <div className="relative flex-1 w-full bg-[#090D16] rounded-[18px] overflow-hidden border border-[#222225]">
          <Image
            src="/swapno-fe-mobile.png"
            alt="Swapno Motors Mobile Frontend"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   4. FLOATING DARK TERMINAL CODE CARD
───────────────────────────────────────── */
function FloatingCodeCard() {
  return (
    <div className="bg-[#0F172A] border-[1.5px] border-[#222222] rounded-[16px] p-3 text-white shadow-xl max-w-[235px] select-none">
      {/* Mac Window Controls */}
      <div className="flex items-center justify-between mb-2 border-b border-[#ffffff15] pb-1.5">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
          <span className="font-mono text-[8px] text-[#64748B] ml-1">app/api/cars/route.ts</span>
        </div>
        <span className="font-mono text-[7px] text-[#22C55E] bg-[#22C55E]/10 px-1 py-0.5 rounded">200 OK</span>
      </div>

      {/* Production Code Snippet */}
      <pre className="font-mono text-[8px] leading-[1.45] text-[#93C5FD]">
        <code>
          <span className="text-[#F472B6]">const</span> cars = <span className="text-[#F472B6]">await</span> prisma.car.<span className="text-[#60A5FA]">findMany</span>(&#123;<br />
          &nbsp;&nbsp;where: &#123; <span className="text-[#FBBF24]">available</span>: <span className="text-[#F472B6]">true</span> &#125;,<br />
          &nbsp;&nbsp;include: &#123; <span className="text-[#FBBF24]">dealer</span>: <span className="text-[#F472B6]">true</span> &#125;<br />
          &#125;);<br />
          <span className="text-[#F472B6]">return</span> NextResponse.<span className="text-[#60A5FA]">json</span>(cars);
        </code>
      </pre>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN SERVICES SECTION (WHAT WE BUILD)
───────────────────────────────────────── */
export function Services() {
  return (
    <section className="relative w-full h-[94vh] min-h-[640px] max-h-[960px] bg-background overflow-hidden flex flex-col justify-between py-5 select-none">

      {/* Texture Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.14]">
        <Image src="/images/hero/GWH_Background Texture.png" alt="" fill className="object-cover" priority />
      </div>

      {/* 5% Opacity Light Blueprint Grid */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.05] z-0" aria-hidden="true">
        <defs>
          <pattern id="bpGridServices" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#2457FF" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bpGridServices)" />
      </svg>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-center my-auto">

        {/* Two-Column Grid (Left ~40%, Right ~60%) */}
        <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-8 lg:gap-12 items-center">

          {/* ─────────────────────────────────────────
             LEFT COLUMN — Editorial Copy & 6 Premium Interactive Cards
          ───────────────────────────────────────── */}
          <div className="flex flex-col justify-center max-w-[500px]">

            {/* Small Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-2 relative inline-block self-start"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border-[1.5px] border-[#222222] bg-[#FFD43B] font-sans text-[10px] font-bold uppercase tracking-wider text-[#111111] shadow-sm">
                <span>⚡ WHAT WE BUILD</span>
              </div>
            </motion.div>

            {/* Editorial Heading */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.06 }}
              className="mb-2.5"
            >
              <h2 className="font-heading font-extrabold text-[#111111] leading-[1.0] tracking-tight text-[clamp(28px,2.6vw,36px)] uppercase">
                Digital Products <br />
                <span className="block text-[#111111]">
                  That Drive{" "}
                  <span className="relative inline-block text-primary">
                    Real Impact.
                    {/* Yellow Underline */}
                    <span className="absolute -bottom-1 left-0 w-full h-[4px] bg-[#FFD43B] rounded-full" />
                  </span>
                </span>
              </h2>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="font-sans text-[12.5px] sm:text-[13px] text-[#555555] leading-[1.5] mb-3.5 max-w-[460px]"
            >
              We design, build and scale digital products that help startups launch faster, grow smarter and stay ahead.
            </motion.p>

            {/* 6 Vertical Service Cards Stack */}
            <div className="space-y-2">
              {SERVICES.map(({ id, title, badge, desc, Icon }, index) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.15 + index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="h-[60px] sm:h-[62px] border-[1.5px] border-[#222222] rounded-[16px] bg-white hover:bg-[#F8FAFC] hover:border-primary transition-all duration-200 px-3.5 flex items-center justify-between cursor-pointer group shadow-sm select-none"
                  style={{ boxShadow: "1.5px 1.5px 0 rgba(17,17,17,0.04)" }}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    {/* Icon Container */}
                    <div className="w-8 h-8 rounded-full bg-[#EEF2FF] border border-[#2457FF]/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-transform duration-200">
                      <Icon className="w-4 h-4" />
                    </div>

                    {/* Text & Feature Badge */}
                    <div className="overflow-hidden">
                      <div className="flex items-center gap-2">
                        <h3 className="font-sans font-bold text-[13.5px] text-[#111111] leading-tight group-hover:text-primary transition-colors">
                          {title}
                        </h3>
                        <span className="px-1.5 py-0.5 rounded-full text-[8.5px] font-black uppercase tracking-wider bg-[#F1F5F9] text-[#475569] border border-[#CBD5E1] group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-200 shrink-0">
                          {badge}
                        </span>
                      </div>
                      <p className="font-sans text-[10.5px] text-[#6B6B6B] truncate max-w-[310px] font-normal">
                        {desc}
                      </p>
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <ArrowRight className="w-3.5 h-3.5 text-[#111111] shrink-0 ml-2 group-hover:translate-x-1 group-hover:text-primary transition-all duration-200" />
                </motion.div>
              ))}
            </div>

          </div>

          {/* ─────────────────────────────────────────
             RIGHT COLUMN — VISUAL HERO PRODUCT ECOSYSTEM SHOWCASE
          ───────────────────────────────────────── */}
          <div className="relative w-full flex flex-col items-center justify-center min-h-[460px]">

            {/* Top Right Security Badge — Secure & Scalable */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ y: -2 }}
              className="absolute top-1 right-2 z-20 bg-white border-[1.5px] border-[#222222] rounded-full px-3.5 py-1 font-sans text-[10px] font-extrabold text-[#111111] shadow-sm flex items-center gap-1.5 cursor-default"
              style={{ boxShadow: "1.5px 1.5px 0 rgba(17,17,17,0.04)" }}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              <span>Secure &amp; Scalable</span>
            </motion.div>

            {/* Hand-drawn Star Doodle Top Right */}
            <div className="absolute top-0 right-0 text-[#FFD43B] text-sm pointer-events-none opacity-80">★</div>

            {/* ── 1. MAIN HERO OBJECT: LAPTOP MOCKUP (PUBLIC WEBSITE) ── */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-[560px]"
            >
              <MacBookMockup />
            </motion.div>

            {/* ── 2. FLOATING SMALL ADMIN DASHBOARD WINDOW (TOP RIGHT OVERLAP 8°) ── */}
            <motion.div
              initial={{ opacity: 0, y: -10, rotate: 6 }}
              whileInView={{ opacity: 1, y: 0, rotate: 8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              whileHover={{ rotate: 4, scale: 1.02 }}
              className="absolute -top-3 right-0 z-20"
            >
              <FloatingAdminDashboard />
            </motion.div>

            {/* ── 3. MOBILE PHONE MOCKUP (BOTTOM RIGHT OVERLAP 18%) ── */}
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-3 right-1 z-20"
            >
              <MobilePhoneMockup />
            </motion.div>

            {/* ── 4. FLOATING DARK TERMINAL CODE CARD (BOTTOM LEFT) ── */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="absolute bottom-5 left-0 z-20"
            >
              <FloatingCodeCard />
            </motion.div>

            {/* ── 5. DEPLOYMENT BADGE (LIVE ON VERCEL) ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="absolute bottom-10 left-[265px] z-20 bg-white border-[1.5px] border-[#222222] rounded-full px-3 py-1 font-sans text-[9.5px] font-extrabold text-[#111111] shadow-sm flex items-center gap-1.5 cursor-default"
              style={{ boxShadow: "1.5px 1.5px 0 rgba(17,17,17,0.04)" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              <span>Live on Vercel</span>
            </motion.div>

            {/* ── 6. TECH STACK BADGE (BOTTOM RIGHT) ── */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="absolute bottom-0 right-20 z-20 bg-white border-[1.5px] border-[#222222] rounded-full px-3.5 py-1 font-sans text-[9.5px] font-extrabold text-[#111111] shadow-sm flex items-center gap-1.5 cursor-default"
              style={{ boxShadow: "1.5px 1.5px 0 rgba(17,17,17,0.04)" }}
            >
              <div className="w-3.5 h-3.5 rounded-full bg-[#111111] text-white flex items-center justify-center font-black text-[7px]">N</div>
              <span>Next.js • Supabase • Prisma</span>
              <CheckCircle2 className="w-3 h-3 text-[#22C55E]" />
            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}
