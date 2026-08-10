"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { AnimatedUnderline } from "@/components/ui/animated-underline-text";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────
   MAIN HERO SECTION — fits exactly 1 viewport on all devices
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
    <section className="relative w-full h-dvh overflow-hidden flex flex-col bg-background select-none">

      {/* ── Background texture ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.20]">
        <Image
          src="/images/hero/GWH_Background Texture.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ── Blueprint grid background — right side (Desktop only) ── */}
      <div className="absolute right-0 top-0 h-full w-1/2 z-0 pointer-events-none opacity-[0.04] hidden lg:block">
        <Image
          src="/images/hero/GWH_Grid Background.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* ── Main content wrapper — fills remaining space after navbar ── */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 flex-1 flex flex-col pt-[72px] sm:pt-[108px] lg:pt-[118px] pb-2 sm:pb-6">

        {/* ── Desktop: side-by-side grid / Mobile: vertical stack ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[44fr_56fr] xl:grid-cols-[42fr_58fr] gap-0 lg:gap-8 items-center flex-1 min-h-0">

          {/* ─── LEFT COLUMN — Copy & CTAs ─── */}
          <div className="flex flex-col justify-center max-w-[540px] w-full">

            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-2 lg:mb-4 relative inline-block self-start"
            >
              <div className="inline-flex items-center gap-1.5 px-3.5 lg:px-4 py-1 lg:py-1.5 rounded-full border-[1.5px] border-[#222222] bg-white/40 font-sans text-[10px] lg:text-[11px] font-bold tracking-wider text-[#111111] uppercase">
                <span>DIGITAL PRODUCTS.</span>
                <span className="text-primary font-black">REAL IMPACT.</span>
              </div>
              {/* Arrow Doodle */}
              <div className="absolute -top-5 -right-5 w-7 h-7 pointer-events-none text-primary hidden sm:block">
                <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                  <path d="M 30 5 Q 15 8 10 25 M 10 25 L 18 20 M 10 25 L 14 30" stroke="#2457FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.06 }}
              className="mb-1.5 lg:mb-4"
            >
              <h1 className="font-heading font-black text-[#111111] leading-[0.95] tracking-tight text-[28px] sm:text-[38px] lg:text-[clamp(44px,4.6vw,64px)] uppercase">
                <span className="block text-[#111111]">WE BUILD</span>
                <span className="block text-primary">SOFTWARE</span>
                <motion.span className="relative inline-block text-[#111111] pb-0.5 lg:pb-1 cursor-default group" whileHover="hover">
                  THAT GROWS
                  <AnimatedUnderline strokeColor="#2457FF" strokeWidth={3.5} delay={0.35} />
                </motion.span>
                <span className="block text-primary pt-0.5">BUSINESSES.</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="font-sans text-[12px] sm:text-[13px] lg:text-[15.5px] text-[#555555] leading-snug lg:leading-relaxed mb-3 lg:mb-6 max-w-[460px]"
            >
              From stunning websites to powerful web apps and AI solutions — we turn your ideas into high-performing digital products.
            </motion.p>

            {/* CTA Buttons — stacked full-width on mobile, inline on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 lg:gap-4 mb-3 lg:mb-6 w-full"
            >
              <Link
                href="#contact"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "h-10 lg:h-[50px] text-[13px] lg:text-[14.5px] px-5 lg:px-7 font-bold shadow-md hover:translate-y-[-2px] transition-all bg-[#FFD43B] hover:bg-[#F7CB2D] text-[#111111] border-[1.5px] border-[#222222] rounded-xl w-full sm:w-auto justify-center"
                )}
              >
                <span>Start Your Project</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="#projects"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "h-10 lg:h-[50px] text-[13px] lg:text-[14.5px] px-5 lg:px-7 font-bold hover:translate-y-[-2px] transition-all bg-white hover:bg-[#F5F2EB] text-[#111111] border-[1.5px] border-[#222222] rounded-xl w-full sm:w-auto justify-center"
                )}
              >
                <span>View Our Work</span>
                <ArrowUpRight className="ml-1.5 w-4 h-4" />
              </Link>
            </motion.div>

            {/* Trust highlights — 2×2 grid on mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-1 lg:gap-y-2 pt-2.5 lg:pt-4 border-t border-[#EAEAEA]"
            >
              {["Fast Delivery", "Clean Code", "Scalable Architecture", "AI Powered"].map((t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-primary shrink-0" />
                  <span className="font-sans text-[11px] lg:text-[12px] font-bold text-[#111111]">{t}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ─── RIGHT COLUMN / ILLUSTRATION ─── */}
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
            className="relative w-full flex justify-center lg:justify-end flex-1 min-h-0 items-center"
          >
            {/* Mobile/Tablet — 90% width square illustration */}
            <div className="relative w-[90%] max-w-[420px] aspect-square select-none block lg:hidden mx-auto">
              <Image
                src="/images/hero/hero_illustration_mobile.png"
                alt="Grow With Hustler Engineering & Building Illustration"
                fill
                unoptimized
                quality={100}
                className="object-contain object-center"
                priority
              />
            </div>

            {/* Desktop — full team vector */}
            <div className="relative w-full max-w-[760px] lg:max-w-[900px] aspect-[1024/682] select-none hidden lg:block">
              <Image
                src="/images/hero/hero_team_vector.png"
                alt="Grow With Hustler Engineering & Building Team"
                fill
                unoptimized
                quality={100}
                className="object-contain object-right"
                priority
              />
            </div>
          </motion.div>

        </div>

        {/* ── TRUSTED BRANDS BAR — pinned to bottom ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="shrink-0 border-[1.5px] border-[#222222] rounded-xl lg:rounded-2xl bg-white/40 sm:bg-transparent py-1.5 lg:py-3 px-3 sm:px-6 flex flex-row items-center justify-between gap-3 sm:gap-4 mt-auto"
          style={{ boxShadow: "0 2px 14px rgba(17,17,17,0.04)" }}
        >
          <div className="shrink-0 text-left">
            <p className="font-sans text-[7px] sm:text-[9px] font-bold uppercase tracking-[0.1em] text-[#6B6B6B] leading-tight">Trusted By</p>
            <p className="font-heading text-[9.5px] sm:text-[12px] font-extrabold uppercase tracking-wide text-[#111111] border-b-[1.5px] border-primary pb-[1px] leading-tight whitespace-nowrap">
              Innovative Startups
            </p>
          </div>
          <div className="flex items-center justify-end gap-x-4 sm:gap-x-10 flex-1">
            {brands.map(({ name, cls }, i) => (
              <span
                key={name}
                className={cn(
                  "font-heading text-[12px] sm:text-[17px] tracking-tight hover:scale-105 transition-transform duration-200 cursor-default select-none whitespace-nowrap",
                  i >= 3 ? "hidden lg:inline" : "",
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