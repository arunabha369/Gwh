"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Star,
  CheckCircle2,
  Shield,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────
   Floating wrapper with subtle continuous float
───────────────────────────────────────── */
function Float({
  children,
  className,
  rotate = 0,
  floatDelay = 0,
  floatDuration = 6,
  fadeDelay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  floatDelay?: number;
  floatDuration?: number;
  fadeDelay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: fadeDelay, ease: "easeOut" }}
      className={cn("absolute z-[30] pointer-events-auto", className)}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: floatDelay,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   CardShell — standard Retro Arcade styling
───────────────────────────────────────── */
function CardShell({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={cn(
        "bg-white border-[1.5px] border-[#222222] rounded-[16px] select-none transition-shadow duration-200 hover:shadow-md",
        className
      )}
      style={{
        boxShadow: "2.5px 2.5px 0 rgba(17,17,17,0.06)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────
   BrowserFrame — Premium mac browser wrapper
───────────────────────────────────────── */
function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-full h-full flex flex-col overflow-hidden bg-white rounded-[20px] border-[1.5px] border-[#222222]"
      style={{ boxShadow: "0 18px 36px rgba(0,0,0,0.09), 0 40px 80px rgba(0,0,0,0.14)" }}
    >
      {/* Chrome Top Bar */}
      <div className="shrink-0 flex items-center justify-between px-4 h-[40px] bg-[#1E1F29] border-b border-[#33354A] select-none">
        {/* Traffic lights + brand */}
        <div className="flex items-center gap-[11px]">
          <div className="flex items-center gap-[5.5px] shrink-0">
            <span className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
            <span className="w-[10px] h-[10px] rounded-full bg-[#FFBD2E]" />
            <span className="w-[10px] h-[10px] rounded-full bg-[#28C840]" />
          </div>
          <span className="font-heading font-black text-[11px] uppercase tracking-tight text-white hidden sm:inline-block">
            Swapno Motors OS
          </span>
        </div>

        {/* URL bar */}
        <div className="flex-1 flex justify-center px-3">
          <div className="flex items-center gap-[5.5px] bg-[#12131C] border border-[#33354A] rounded-[6px] px-[10px] h-[24px] w-full max-w-[215px]">
            <Shield style={{ width: 9, height: 9 }} className="text-[#22C55E] shrink-0" />
            <span className="font-mono text-[8.5px] text-[#A0A5C0] truncate">swapnomotors.com/dashboard</span>
          </div>
        </div>

        {/* Right status */}
        <div className="flex items-center gap-[7px] shrink-0">
          <div className="flex items-center gap-[4px] bg-[#0F291E] border border-[#166534] px-1.5 py-0.5 rounded-full">
            <span className="w-[5px] h-[5px] rounded-full bg-[#22C55E] animate-pulse shrink-0" />
            <span className="font-mono text-[7px] text-[#4ADE80] font-bold">Live Production</span>
          </div>
        </div>
      </div>

      {/* Real Screenshot Container */}
      <div className="flex-1 relative overflow-hidden bg-[#0F1017]">
        {children}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Card 1 — Founder Review
───────────────────────────────────────── */
function CardFounderReview() {
  return (
    <CardShell className="p-3 max-w-[225px]">
      <div className="flex items-center gap-1 mb-1 text-[#FFD43B]">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-[#FFD43B] stroke-none" />
        ))}
      </div>
      <p className="font-sans text-[10.5px] font-bold text-[#111111] leading-tight mb-2">
        &ldquo;Delivered exactly what we envisioned. Fast communication and outstanding quality.&rdquo;
      </p>
      <div className="flex items-center gap-2 pt-1 border-t border-[#F0F0F0]">
        <div className="w-5 h-5 rounded-full bg-[#2457FF] text-white font-heading font-black text-[9px] flex items-center justify-center shrink-0">
          S
        </div>
        <div>
          <p className="font-sans font-extrabold text-[9.5px] text-[#111111] leading-none">Founder</p>
          <p className="font-sans text-[8px] text-[#6B7280] leading-none mt-0.5">Swapno Motors</p>
        </div>
      </div>
    </CardShell>
  );
}

/* ─────────────────────────────────────────
   Card 2 — GitHub Commit
───────────────────────────────────────── */
function CardGithubCommit() {
  return (
    <CardShell className="px-3.5 py-2.5 min-w-[180px]">
      <div className="flex items-center gap-1.5 mb-1">
        <svg viewBox="0 0 24 24" fill="#111111" className="w-3.5 h-3.5 shrink-0">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
        <p className="font-sans text-[9px] font-bold uppercase tracking-wider text-[#6B6B6B] flex-1">Latest Commit</p>
        <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shrink-0" />
      </div>
      <div className="bg-[#F7F8FA] rounded-[5px] border border-[#E8E8E8] px-2 py-1 mb-1">
        <p className="font-mono font-bold text-[10px] text-[#111111] leading-tight">feat(auth): OAuth + Supabase DB</p>
      </div>
      <div className="flex items-center justify-between">
        <span className="bg-[#DEF7EC] text-[#03543F] font-sans font-bold text-[8.5px] px-1.5 py-0.5 rounded">
          Merged
        </span>
        <span className="font-sans text-[8.5px] text-[#6B6B6B]">2 hours ago</span>
      </div>
    </CardShell>
  );
}

/* ─────────────────────────────────────────
   Card 3 — Mobile Responsive Phone Mockup
───────────────────────────────────────── */
function CardMobileResponsive() {
  return (
    <div
      className="bg-[#111111] border-[1.5px] border-[#222222] rounded-[18px] p-1.5 shadow-xl w-[118px] overflow-hidden"
      style={{ boxShadow: "0 14px 30px rgba(0,0,0,0.22)" }}
    >
      <div className="w-9 h-1 bg-[#333333] rounded-full mx-auto mb-1.5" />
      <div className="bg-[#0F1017] rounded-[13px] p-2 space-y-1 text-center overflow-hidden border border-[#2A2C3E]">
        <div className="flex items-center justify-between pb-0.5 border-b border-[#2A2C3E]">
          <span className="font-heading font-black text-[7.5px] text-white">Swapno OS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
        </div>
        <div className="bg-[#1E1F29] rounded p-1 text-left space-y-0.5 border border-[#33354A]">
          <p className="font-sans text-[6.5px] text-[#A0A5C0]">Dealership OS</p>
          <div className="w-full h-1 bg-[#2457FF] rounded-full" />
          <div className="w-3/4 h-1 bg-[#FFD43B] rounded-full" />
        </div>
        <div className="bg-[#2457FF]/20 border border-[#2457FF]/40 rounded p-0.5 text-center">
          <p className="font-sans font-bold text-[7px] text-[#60A5FA]">100% Responsive</p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Card 4 — Lighthouse Performance Score
───────────────────────────────────────── */
function CardLighthouseScore() {
  return (
    <CardShell className="px-3.5 py-2 min-w-[150px] flex items-center gap-2.5">
      <div className="w-8.5 h-8.5 rounded-full border-[1.5px] border-[#22C55E] text-[#22C55E] font-heading font-black text-[11.5px] flex items-center justify-center shrink-0">
        98
      </div>
      <div>
        <p className="font-sans font-extrabold text-[10px] text-[#111111] leading-none">98 Performance</p>
        <p className="font-sans text-[8px] text-[#6B6B6B] leading-none mt-0.5">100 SEO • 100 Best</p>
      </div>
    </CardShell>
  );
}

/* ─────────────────────────────────────────
   MAIN HERO SECTION (Grand Proportions Fitting Desktop Viewport)
───────────────────────────────────────── */
export function Hero() {
  const brands = [
    { name: "SatvikAI", cls: "font-bold text-[#2457FF]" },
    { name: "Intento", cls: "font-semibold text-[#111111]" },
    { name: "CampusHQ", cls: "font-extrabold text-[#111111]" },
    { name: "Tasko", cls: "font-black text-primary" },
    { name: "CodeGyaan", cls: "font-medium text-[#111111]" },
    { name: "BugWala", cls: "font-bold text-[#111111]" },
  ];

  return (
    <section className="relative w-full min-h-[95vh] overflow-hidden flex flex-col justify-between pt-[104px] pb-5 bg-background select-none">

      {/* ── Background texture ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.20]">
        <Image
          src="/images/hero/GWH_Background Texture.png"
          alt="" fill className="object-cover"
          priority
        />
      </div>

      {/* ── Blueprint grid background — right side ── */}
      <div className="absolute right-0 top-0 h-full w-1/2 z-0 pointer-events-none opacity-[0.05]">
        <Image
          src="/images/hero/GWH_Grid Background.png"
          alt="" fill className="object-cover"
        />
      </div>

      {/* ── Main content grid ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-center min-h-0">
        <div className="grid grid-cols-1 lg:grid-cols-[48fr_52fr] gap-10 lg:gap-12 items-center py-4">

          {/* ─────────────────────────────────────────
             LEFT COLUMN — Bold Editorial Copy & CTAs
          ───────────────────────────────────────── */}
          <div className="flex flex-col justify-center max-w-[530px]">

            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-4 relative inline-block self-start"
            >
              <div className="inline-flex items-center gap-1.5 px-[16px] py-[5.5px] rounded-full border-[1.5px] border-[#222222] bg-transparent font-sans text-[11px] font-bold tracking-wider text-[#111111] uppercase">
                <span>DIGITAL PRODUCTS.</span>
                <span className="text-primary font-black">REAL IMPACT.</span>
              </div>

              {/* Arrow Doodle pointing down to badge */}
              <div className="absolute -top-6 -right-6 w-8 h-8 pointer-events-none text-primary">
                <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                  <path d="M 30 5 Q 15 8 10 25 M 10 25 L 18 20 M 10 25 L 14 30" stroke="#2457FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.08 }}
              className="mb-4"
            >
              <h1 className="font-heading font-black text-[#111111] leading-[0.88] tracking-tight text-[clamp(44px,4.8vw,66px)] uppercase">
                <span className="block text-[#111111]">WE BUILD</span>
                <span className="block text-primary">SOFTWARE</span>
                <span className="relative inline-block text-[#111111] pb-1">
                  THAT GROWS
                  <span className="absolute bottom-[2px] left-0 w-full h-[4.5px] bg-[#FFD43B] rounded-full" />
                </span>
                <span className="block text-primary pt-0.5">BUSINESSES.</span>
              </h1>
            </motion.div>

            {/* Subheadline description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.16 }}
              className="font-sans text-[14.5px] sm:text-[15.5px] text-[#555555] leading-[1.6] mb-7 max-w-[460px]"
            >
              From stunning websites to powerful web apps and AI solutions — we turn your ideas into high-performing digital products.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.24 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <Link
                href="#contact"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "text-[14.5px] px-6.5 py-3.5 font-bold shadow-md hover:translate-y-[-2px] transition-transform bg-[#FFD43B] text-[#111111] border-[1.5px] border-[#222222]"
                )}
              >
                <span>Start Your Project</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="#projects"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "text-[14.5px] px-6.5 py-3.5 font-bold hover:translate-y-[-2px] transition-transform bg-white text-[#111111] border-[1.5px] border-[#222222]"
                )}
              >
                <span>View Our Work</span>
                <ArrowUpRight className="ml-1.5 w-4 h-4" />
              </Link>
            </motion.div>

            {/* Trust highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.48, delay: 0.32 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-4 border-t border-[#EAEAEA]"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span className="font-sans text-[12.5px] font-bold text-[#111111]">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span className="font-sans text-[12.5px] font-bold text-[#111111]">Clean Code</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span className="font-sans text-[12.5px] font-bold text-[#111111]">Scalable Architecture</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span className="font-sans text-[12.5px] font-bold text-[#111111]">AI Powered</span>
              </div>
            </motion.div>

          </div>

          {/* ─────────────────────────────────────────
             RIGHT COLUMN — SWAPNO MOTORS REAL PRODUCT HERO (610px Max Width)
          ───────────────────────────────────────── */}
          <div className="relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[610px] aspect-[1.38/1] select-none">

              {/* Dotted blueprint connectors */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-[12] opacity-[0.15]">
                <path d="M 110 50 Q 170 30 220 60" fill="none" stroke="#2457FF" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M 500 50 Q 440 30 390 60" fill="none" stroke="#2457FF" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M 100 360 Q 160 370 200 330" fill="none" stroke="#2457FF" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M 510 360 Q 450 370 400 330" fill="none" stroke="#22C55E" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>

              {/* ── PRIMARY HERO OBJECT: SWAPNO MOTORS DASHBOARD BROWSER WINDOW ── */}
              <motion.div
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                animate={{ opacity: 1, y: [0, -5, 0], scale: 1 }}
                transition={{
                  opacity: { duration: 0.65, delay: 0.15, ease: "easeOut" },
                  scale: { duration: 0.65, delay: 0.15, ease: "easeOut" },
                  y: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute z-[10]"
                style={{
                  left: "6%", top: "8%", width: "88%",
                  height: "82%",
                  transform: "rotate(-1.8deg)",
                }}
              >
                <BrowserFrame>
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/hero/swapno-dash.png"
                      alt="Swapno Motors Dealership OS Dashboard"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </BrowserFrame>
              </motion.div>

              {/* ── FLOATING CARDS ── */}

              {/* Card 1 — Founder Review (Top Left) */}
              <Float className="left-[-4%] top-[2%]" rotate={-3} floatDelay={0.2} floatDuration={5.5} fadeDelay={0.35}>
                <CardFounderReview />
              </Float>

              {/* Card 2 — GitHub Commit (Top Right) */}
              <Float className="right-[-3%] top-[4%]" rotate={3} floatDelay={1.1} floatDuration={5.2} fadeDelay={0.45}>
                <CardGithubCommit />
              </Float>

              {/* Card 3 — Mobile Responsive Preview (Bottom Left) */}
              <Float className="left-[-2%] bottom-[4%]" rotate={-2} floatDelay={0.7} floatDuration={5.8} fadeDelay={0.55}>
                <CardMobileResponsive />
              </Float>

              {/* Card 4 — Lighthouse Score (Bottom Right) */}
              <Float className="right-[-2%] bottom-[6%]" rotate={2} floatDelay={1.8} floatDuration={4.8} fadeDelay={0.65}>
                <CardLighthouseScore />
              </Float>

              {/* Editorial Doodles */}
              <div className="absolute top-12 left-32 text-[#FFD43B] opacity-60 text-xs pointer-events-none">★</div>
              <div className="absolute bottom-16 right-36 text-[#2457FF] opacity-40 text-xs pointer-events-none">✦</div>

            </div>
          </div>

        </div>

        {/* ── TRUSTED BRANDS BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="shrink-0 mt-6 sm:mt-8 mb-4 border-[1.5px] border-[#222222] rounded-[16px] bg-transparent py-2.5 px-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ boxShadow: "0 2px 14px rgba(17,17,17,0.04)" }}
        >
          <div className="shrink-0 text-center sm:text-left">
            <p className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-[#6B6B6B]">Trusted By</p>
            <p className="font-heading text-[12px] font-extrabold uppercase tracking-wide text-[#111111] border-b-[1.5px] border-primary pb-[1px]">
              Innovative Startups
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-10 gap-y-2 flex-1">
            {brands.map(({ name, cls }) => (
              <span
                key={name}
                className={cn(
                  "font-heading text-[15px] sm:text-[17px] tracking-tight hover:scale-105 transition-transform duration-200 cursor-default select-none",
                  cls
                )}
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}