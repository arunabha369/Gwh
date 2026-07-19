"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Rocket, Star, Zap, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────
   Float wrapper — animation only, no image
───────────────────────────────────────── */
interface FloatProps {
  className: string;
  rotate: number;
  floatDelay?: number;
  floatDuration?: number;
  fadeDelay?: number;
  children: React.ReactNode;
}
function Float({
  className, rotate,
  floatDelay = 0, floatDuration = 5.5, fadeDelay = 0.55,
  children,
}: FloatProps) {
  return (
    <motion.div
      className={cn("absolute z-40 pointer-events-none", className)}
      style={{ rotate: `${rotate}deg` }}
      initial={{ opacity: 0, scale: 0.82 }}
      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.42, delay: fadeDelay },
        scale:   { duration: 0.42, delay: fadeDelay },
        y: { duration: floatDuration, repeat: Infinity, ease: "easeInOut", delay: floatDelay },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   CardShell — Retro Arcade base
   White bg, 1.5px border, 4px offset shadow
───────────────────────────────────────── */
function CardShell({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn("bg-white border-[1.5px] border-[#222222] rounded-[14px]", className)}
      style={{ boxShadow: "4px 4px 0 rgba(17,17,17,0.85)" }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────
   JSX Browser Frame — replaces GWH_BROWSER_WINDOW.png
   Crisp, consistent, zero image dependency
───────────────────────────────────────── */
function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-full h-full flex flex-col overflow-hidden bg-white rounded-[16px] border-[1.5px] border-[#222222]"
      style={{ boxShadow: "0 32px 80px rgba(17,17,17,0.18), 6px 6px 0 rgba(17,17,17,0.10)" }}
    >
      {/* Chrome bar */}
      <div className="shrink-0 flex items-center gap-3 px-4 h-[38px] bg-[#F3F3F3] border-b border-[#DCDCDC]">
        {/* Traffic lights */}
        <div className="flex items-center gap-[5px]">
          <span className="w-[10px] h-[10px] rounded-full bg-[#FF5F57] border border-[#E0443E]" />
          <span className="w-[10px] h-[10px] rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
          <span className="w-[10px] h-[10px] rounded-full bg-[#28C840] border border-[#1DAD2B]" />
        </div>
        {/* URL bar */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-[6px] bg-white border border-[#E0E0E0] rounded-[6px] px-[10px] h-[22px] w-full max-w-[240px]">
            <Shield style={{ width: 8, height: 8 }} className="text-[#22C55E] shrink-0" />
            <span className="font-mono text-[8.5px] text-[#6B6B6B] truncate">growwithhustler.com/dashboard</span>
          </div>
        </div>
        {/* Right spacer */}
        <div className="w-[52px]" />
      </div>

      {/* Dashboard fills the body */}
      <div className="flex-1 relative overflow-hidden">
        {children}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Card 1 — Project Delivered
───────────────────────────────────────── */
function CardDelivered() {
  return (
    <CardShell className="px-[16px] py-[12px] min-w-[192px]">
      <div className="flex items-center gap-[8px] mb-[8px]">
        <div className="w-[32px] h-[32px] rounded-[9px] bg-[#EEF2FF] border border-[#D1D9FF] flex items-center justify-center shrink-0">
          <Rocket style={{ width: 14, height: 14 }} className="text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-sans font-bold text-[12px] text-[#111111] leading-none">Project Delivered</p>
          <p className="font-sans text-[9px] text-[#6B6B6B] mt-[2px]">2 min ago</p>
        </div>
        <span className="w-[8px] h-[8px] rounded-full bg-[#FFD43B] border border-[#D4A017] shrink-0" />
      </div>
      <div className="flex items-center justify-between bg-[#F5F7FF] rounded-[8px] border border-[#E8ECFF] px-[10px] py-[7px]">
        <p className="font-heading font-black text-[13px] text-primary leading-none">SatvikAI</p>
        <span className="inline-flex items-center gap-[3px] text-[#22C55E] font-sans font-bold text-[9px]">
          <span className="text-[11px]">✓</span> Delivered
        </span>
      </div>
    </CardShell>
  );
}

/* ─────────────────────────────────────────
   Card 2 — GitHub Commit
───────────────────────────────────────── */
function CardGithub() {
  return (
    <CardShell className="px-[16px] py-[12px] min-w-[200px]">
      <div className="flex items-center gap-[7px] mb-[8px]">
        <svg viewBox="0 0 24 24" fill="#111111" className="shrink-0" style={{ width: 15, height: 15 }}>
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
        <p className="font-sans text-[9.5px] font-bold uppercase tracking-[0.08em] text-[#6B6B6B] flex-1">Latest Commit</p>
        <span className="w-[7px] h-[7px] rounded-full bg-[#22C55E] shrink-0" />
      </div>
      <div className="bg-[#F7F8FA] rounded-[8px] border border-[#E8E8E8] px-[10px] py-[8px] mb-[7px]">
        <p className="font-mono font-bold text-[11px] text-[#111111] tracking-[-0.02em]">feat: add payment</p>
      </div>
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center bg-[#EEF2FF] text-primary font-sans font-bold text-[9px] px-[8px] py-[3px] rounded-[6px]">
          main
        </span>
        <span className="font-sans text-[9px] text-[#6B6B6B]">2 hours ago</span>
      </div>
    </CardShell>
  );
}

/* ─────────────────────────────────────────
   Card 3 — Performance Score
───────────────────────────────────────── */
function CardPerformance() {
  const r = 22;
  const circ = 2 * Math.PI * r;
  return (
    <CardShell className="px-[14px] py-[12px] min-w-[158px] flex items-center gap-[12px]">
      <div className="relative flex items-center justify-center w-[52px] h-[52px] shrink-0">
        <svg viewBox="0 0 52 52" className="absolute inset-0 w-full h-full" style={{ transform: "rotate(-90deg)" }}>
          <circle cx="26" cy="26" r={r} fill="none" stroke="#F0FFF4" strokeWidth="4" />
          <circle cx="26" cy="26" r={r} fill="none" stroke="#22C55E" strokeWidth="4"
            strokeDasharray={`${circ * 0.98} ${circ}`} strokeLinecap="round" />
        </svg>
        <span className="font-heading font-black text-[17px] text-primary relative z-10 leading-none">98</span>
      </div>
      <div>
        <p className="font-sans text-[8.5px] font-bold uppercase tracking-[0.1em] text-[#6B6B6B] leading-none">Performance</p>
        <p className="font-heading font-black text-[17px] text-[#111111] leading-tight mt-[2px]">Score</p>
        <div className="flex items-center gap-[3px] mt-[4px]">
          <Zap style={{ width: 9, height: 9 }} className="text-[#FFD43B] fill-[#FFD43B]" />
          <p className="font-sans text-[8px] text-[#6B6B6B]">Lighthouse</p>
        </div>
      </div>
    </CardShell>
  );
}

/* ─────────────────────────────────────────
   Card 4 — Client Rating
───────────────────────────────────────── */
function CardRating() {
  return (
    <CardShell className="px-[16px] py-[12px] min-w-[172px]">
      <div className="flex gap-[3px] mb-[6px]">
        {[...Array(5)].map((_, i) => (
          <Star key={i} style={{ width: 14, height: 14 }} className="text-[#FFD43B] fill-[#FFD43B]" />
        ))}
      </div>
      <div className="flex items-end gap-[5px] mb-[4px]">
        <p className="font-heading font-black text-[28px] text-[#111111] leading-none">5.0</p>
        <p className="font-sans font-bold text-[12px] text-[#111111] mb-[3px] leading-none">Rating</p>
      </div>
      <div className="h-[3px] w-[56px] rounded-full bg-[#FFD43B] mb-[6px]" />
      <p className="font-sans text-[10px] text-[#6B6B6B] font-medium">From 15+ Happy Clients</p>
    </CardShell>
  );
}

/* ─────────────────────────────────────────
   TrustChip
───────────────────────────────────────── */
function TrustChip({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-[6px]">
      <CheckCircle style={{ width: 13, height: 13 }} strokeWidth={2.5} className="shrink-0 text-primary" />
      <span className="font-sans text-[11.5px] font-semibold text-[#444444] whitespace-nowrap">{label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────
   Heading stagger
───────────────────────────────────────── */
const hVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: {
      duration: 0.5, delay: i * 0.09,
      ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
    },
  }),
};

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
export function Hero() {
  const trustPoints = ["Fast Delivery", "Clean Code", "Scalable Architecture", "AI Powered"];

  const brands = [
    { name: "SatvikAI", cls: "text-[#111111] font-bold" },
    { name: "intento",  cls: "text-primary font-black" },
    { name: "kritagya", cls: "text-[#111111] font-extrabold" },
    { name: "CampusHQ", cls: "text-[#111111] font-bold italic" },
    { name: "ShipFast", cls: "text-[#22C55E] font-extrabold font-mono" },
    { name: "foodiee",  cls: "text-[#EF4444] font-black tracking-wide" },
  ];

  const headingLines = [
    { text: "WE BUILD",    blue: false },
    { text: "SOFTWARE",    blue: true  },
    { text: "THAT GROWS",  blue: false, accent: true },
    { text: "BUSINESSES.", blue: true  },
  ];

  return (
    <section
      className="relative w-full bg-background overflow-hidden flex flex-col"
      style={{ paddingTop: 88, height: "100dvh", minHeight: 700 }}
    >
      {/* Paper texture */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.24]">
        <Image src="/images/hero/GWH_Background Texture.png" alt="" fill priority className="object-cover" />
      </div>

      <div className="relative z-10 flex flex-col flex-1 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 overflow-hidden">

        {/* 12-col grid */}
        <div className="flex-1 grid grid-cols-12 gap-x-8 lg:gap-x-12 xl:gap-x-16 items-center">

          {/* ── LEFT — cols 1-5 ── */}
          <div className="col-span-12 lg:col-span-5 flex flex-col items-start">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.44 }}
              className="relative mb-6"
            >
              <div className="inline-flex items-center gap-[6px] px-[14px] py-[7px] rounded-full border-[1.5px] border-[#222222] bg-white font-sans text-[11px] font-semibold uppercase tracking-wider">
                <span className="text-[#111111]">Digital Products.</span>
                <span className="text-primary font-bold">Real Impact.</span>
              </div>
              <div
                className="absolute left-full -top-7 ml-1 w-14 h-14 pointer-events-none hidden md:block opacity-85"
                style={{ transform: "scaleX(-1) rotate(15deg)" }}
              >
                <Image src="/images/hero/GWH_CARROEU.png" alt="" fill className="object-contain" />
              </div>
            </motion.div>

            {/* Heading */}
            <h1
              className="font-heading font-black uppercase leading-[0.87] tracking-tight mb-5"
              style={{ fontSize: "clamp(44px, 4.6vw, 72px)" }}
            >
              {headingLines.map((line, i) => (
                <motion.span
                  key={line.text} custom={i}
                  variants={hVariants} initial="hidden" animate="show"
                  className="block relative"
                >
                  <span className={line.blue ? "text-primary" : "text-[#111111]"}>{line.text}</span>
                  {line.accent && (
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: "80%" }}
                      transition={{ duration: 0.52, delay: 0.72 }}
                      className="absolute left-0 bottom-[4px] h-[7px] bg-accent rounded-sm -z-[1]"
                    />
                  )}
                </motion.span>
              ))}
            </h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.42 }}
              className="font-sans text-[13.5px] leading-[1.65] text-[#6B6B6B] mb-8"
              style={{ maxWidth: 480 }}
            >
              From stunning websites to powerful web apps and AI solutions — we
              turn your ideas into high-performing digital products.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.44, delay: 0.52 }}
              className="relative flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-5"
            >
              <motion.a
                href="#contact"
                whileHover={{
                  y: -3,
                  x: -3,
                  boxShadow: "5px 5px 0 #111111",
                }}
                whileTap={{
                  y: 2,
                  x: 2,
                  boxShadow: "0px 0px 0 #111111",
                }}
                className="inline-flex items-center justify-center gap-[10px] font-sans font-bold text-[14px] tracking-[-0.01em] text-[#111111] bg-accent border-[1.5px] border-[#222222] rounded-none px-8 cursor-pointer select-none"
                style={{ height: 50, boxShadow: "2px 2px 0 #111111", transition: "background-color 0.18s ease" }}
              >
                <span>Start Your Project</span>
                <span className="font-black text-[16px]">&nbsp;→</span>
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{
                  y: -2,
                  backgroundColor: "rgba(34, 34, 34, 0.05)",
                }}
                whileTap={{
                  y: 0,
                  backgroundColor: "rgba(34, 34, 34, 0.1)",
                }}
                className="inline-flex items-center justify-center gap-[10px] font-sans font-bold text-[14px] tracking-[-0.01em] text-[#111111] bg-transparent border-[1.5px] border-[#222222] rounded-none px-8 cursor-pointer select-none"
                style={{ height: 50, transition: "background-color 0.15s ease, transform 0.15s ease" }}
              >
                <span>View Our Work</span>
                <span className="font-black text-[15px]">&#8599;</span>
              </motion.a>
            </motion.div>

            {/* Trust chips */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.48, delay: 0.64 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-[10px]"
            >
              {trustPoints.map((p) => <TrustChip key={p} label={p} />)}
            </motion.div>
          </div>

          {/* ── RIGHT — cols 6-12 ── */}
          <div className="col-span-12 lg:col-span-7 relative flex items-center justify-center">
            <div className="relative w-full" style={{ height: "clamp(360px, 50vh, 560px)" }}>

              {/* ── BROWSER (JSX) + DASHBOARD — central composition ── */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.2, ease: "easeOut" }}
                className="absolute z-[10]"
                style={{
                  left: "3%",
                  top: "10%",
                  width: "76%",
                  aspectRatio: "1.55 / 1",
                  transform: "rotate(-1.5deg)",
                }}
              >
                <BrowserFrame>
                  <Image
                    src="/images/hero/GWH_DASH_V2.png"
                    alt="Dashboard Preview"
                    fill
                    className="object-fill"
                    priority
                  />
                </BrowserFrame>
              </motion.div>

              {/* ── FLOATING CARDS — satellite orbit ── */}

              {/* Card 1 — Delivered, top-left */}
              <Float className="left-[-2%] top-[6%]" rotate={-6} floatDelay={0.1} floatDuration={5.4} fadeDelay={0.55}>
                <CardDelivered />
              </Float>

              {/* Card 2 — GitHub, top-right */}
              <Float className="right-[0%] top-[6%]" rotate={5} floatDelay={1.4} floatDuration={5.1} fadeDelay={0.70}>
                <CardGithub />
              </Float>

              {/* Card 3 — Performance, mid-right */}
              <Float className="right-[-1%] top-[50%]" rotate={4} floatDelay={2.0} floatDuration={4.6} fadeDelay={0.82}>
                <CardPerformance />
              </Float>

              {/* Card 4 — Rating, bottom-left */}
              <Float className="left-[-2%] bottom-[6%]" rotate={-5} floatDelay={0.8} floatDuration={5.8} fadeDelay={0.66}>
                <CardRating />
              </Float>

              {/* ── DOODLES — purposeful only ── */}

              {/* Arrow — directs eye toward browser */}
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 0.65 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="absolute z-[30] pointer-events-none hidden lg:block"
                style={{ left: "38%", bottom: "18%", width: 44, height: 44 }}
              >
                <Image
                  src="/images/hero/GWH_CARROEU.png" alt="" fill className="object-contain"
                  style={{ transform: "scaleX(-1) rotate(130deg)" }}
                />
              </motion.div>

              {/* Stars — 4, framing the scene */}
              {[
                { cls: "left-[30%] top-[1%]",     dur: 54, w: 18 },
                { cls: "right-[1%]  bottom-[38%]", dur: 42, w: 15, dir: -1 },
                { cls: "left-[4%]   bottom-[1%]",  dur: 60, w: 16 },
                { cls: "right-[40%] top-[32%]",    dur: 48, w: 13 },
              ].map(({ cls, dur, w, dir = 1 }, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 * dir }}
                  transition={{ duration: dur, repeat: Infinity, ease: "linear" }}
                  className={cn("absolute z-[20] pointer-events-none opacity-40", cls)}
                  style={{ width: w, height: w }}
                >
                  <Image src="/images/hero/GWH_STAR_TOODLE.png" alt="" fill className="object-contain" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── TRUSTED BRANDS ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.52, delay: 0.92 }}
          className="shrink-0 mb-4 border-[1.5px] border-[#222222] rounded-[16px] bg-white py-[14px] px-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ boxShadow: "0 2px 16px rgba(17,17,17,0.05)" }}
        >
          <div className="shrink-0 text-center sm:text-left">
            <p className="font-sans text-[9.5px] font-bold uppercase tracking-[0.14em] text-[#6B6B6B]">Trusted By</p>
            <p className="font-heading text-[12.5px] font-extrabold uppercase tracking-wide text-[#111111] border-b-[1.5px] border-primary pb-[2px]">
              Innovative Brands
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-10 gap-y-2 flex-1">
            {brands.map(({ name, cls }) => (
              <span
                key={name}
                className={cn(
                  "font-heading text-[16px] sm:text-[18px] tracking-tight hover:scale-105 transition-transform duration-200 cursor-default select-none",
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