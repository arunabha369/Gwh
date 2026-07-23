"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  Clock,
  MessageSquare,
  Users,
  Check,
  Sparkles,
  ArrowRight,
  Zap,
  Lightbulb,
  Code2,
  Quote,
} from "lucide-react";

/* ─────────────────────────────────────────
   TRUST BULLETS & SLOTS DATA
───────────────────────────────────────── */
const TRUST_BULLETS = [
  {
    Icon: Calendar,
    title: "Free 30-minute Strategy Call",
  },
  {
    Icon: Clock,
    title: "MVP Delivery in 2–4 Weeks",
  },
  {
    Icon: MessageSquare,
    title: "Weekly Founder Updates",
  },
  {
    Icon: Users,
    title: "Long-term Product Partnership",
  },
];

const TIME_SLOTS = [
  { day: "Monday", time: "10:00 AM", selected: false },
  { day: "Tuesday", time: "2:30 PM", selected: false },
  { day: "Wednesday", time: "11:00 AM", selected: true },
  { day: "Thursday", time: "4:00 PM", selected: false },
];

const SIDE_BADGES = [
  { Icon: Check, label: "Founder Approved", iconColor: "text-emerald-600" },
  { Icon: Zap, label: "Fast Response", iconColor: "text-amber-500" },
  { label: "Available This Week", dotColor: "bg-emerald-500" },
  { Icon: Sparkles, label: "AI + Modern Stack", iconColor: "text-amber-500" },
];

const FOUNDER_AVATARS = [
  { name: "Rohit Kumar", bg: "bg-slate-900 text-white border-2 border-white", initials: "RK" },
  { name: "Aman Verma", bg: "bg-emerald-700 text-emerald-100 border-2 border-white", initials: "AV" },
  { name: "Arjun Mehta", bg: "bg-indigo-900 text-indigo-100 border-2 border-white", initials: "AM" },
];

/* ─────────────────────────────────────────
   MAIN CTA SECTION COMPONENT
───────────────────────────────────────── */
export function CTA() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="contact"
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
          <pattern id="bpGridCTA" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#2457FF" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bpGridCTA)" />
      </svg>

      {/* ── Decorative Sparkles ── */}
      <div className="absolute top-8 right-12 pointer-events-none opacity-50 z-[1]">
        <Sparkles className="w-4.5 h-4.5 text-[#FFD43B] fill-[#FFD43B]" />
      </div>
      <div className="absolute bottom-16 right-16 pointer-events-none opacity-40 z-[1]">
        <Sparkles className="w-4 h-4 text-[#FFD43B] fill-[#FFD43B]" />
      </div>

      {/* ══════════════════════════════
          MASTER CONTAINER (1280px)
      ══════════════════════════════ */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col gap-10 lg:gap-14">

        {/* ───────────────────────────────────
            ROW 1: TWO COLUMN CONVERSION LAYOUT
            Left (45%) & Right (55%)
        ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-center">

          {/* ── LEFT COLUMN (45% CONVERSION CONTENT) ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6 sm:gap-7"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border-[1.5px] border-[#222] bg-white text-[11px] font-semibold tracking-wide text-[#111] shadow-xs self-start">
              <Zap className="w-3.5 h-3.5 text-[#FFB800] fill-[#FFB800]" />
              READY TO BUILD?
            </div>

            {/* Large Bold Heading */}
            <div>
              <h2
                className="font-heading text-[#111] leading-[1.04] tracking-[-0.035em]"
                style={{ fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 800 }}
              >
                Let&apos;s Build Your Next{" "}
                <span className="relative inline-block text-primary">
                  Startup Together.
                  <span className="absolute -bottom-1 left-0 w-full h-[4px] bg-[#FFD43B] rounded-full" />
                </span>
              </h2>
            </div>

            {/* Paragraph (480-520px width, slightly higher line height) */}
            <p className="font-sans text-[14px] font-[450] text-[#555] leading-[1.7] max-w-[500px]">
              Whether you&apos;re validating an idea, launching an MVP, or scaling an existing product—we help founders move faster with modern engineering and AI-powered development.
            </p>

            {/* Trust Bullets (Clean Single Column Vertical List) */}
            <div className="flex flex-col gap-3.5 my-1">
              {TRUST_BULLETS.map(({ Icon, title }) => (
                <div key={title} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-[10px] bg-white border border-[#E2E2E2] flex items-center justify-center shrink-0 shadow-2xs">
                    <Icon className="w-4 h-4 text-[#111]" strokeWidth={2} />
                  </div>
                  <span className="font-sans text-[13.5px] font-semibold text-[#111]">
                    {title}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons (Wider primary, friendlier "Tell Us About Your Idea") */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 py-1">
              {/* Primary Button */}
              <motion.a
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href="https://cal.com"
                target="_blank"
                rel="noreferrer"
                className="h-[54px] sm:h-[56px] px-8 sm:px-9 rounded-full bg-[#FFD43B] border-[1.5px] border-[#111] text-[#111] font-heading font-bold text-[13.5px] sm:text-[14px] tracking-[0.01em] flex items-center justify-center gap-3 whitespace-nowrap shadow-[0_6px_20px_rgba(255,212,59,0.4)] hover:shadow-[0_10px_28px_rgba(255,212,59,0.5)] transition-all duration-250 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#111] shrink-0" strokeWidth={2.2} />
                <span className="whitespace-nowrap">Book Free Discovery Call</span>
                <ArrowRight className="w-4 h-4 text-[#111] shrink-0" strokeWidth={2.2} />
              </motion.a>

              {/* Secondary Button - "Tell Us About Your Idea" */}
              <motion.a
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="h-[54px] sm:h-[56px] px-7 rounded-full bg-white border-[1.5px] border-[#111] text-[#111] font-heading font-bold text-[13.5px] sm:text-[14px] tracking-[0.01em] flex items-center justify-center gap-2.5 whitespace-nowrap shadow-2xs hover:border-primary hover:text-primary transition-all duration-250 cursor-pointer"
              >
                <span className="whitespace-nowrap">Tell Us About Your Idea</span>
                <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2} />
              </motion.a>
            </div>

            {/* Refined Bottom Trust Line */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-[11.5px] font-medium text-[#666] pt-1">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" strokeWidth={2.5} />
                No obligation
              </span>
              <span className="hidden sm:inline text-[#CCC]">•</span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" strokeWidth={2.5} />
                Usually replies within one business day
              </span>
              <span className="hidden sm:inline text-[#CCC]">•</span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" strokeWidth={2.5} />
                Direct conversation with builders
              </span>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN (55% DISCOVERY CARD & FLOATING BADGES) ── */}
          <div className="relative flex items-center justify-center">

            {/* ── DISCOVERY SESSION CARD ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="relative z-10 w-full bg-white border-[1.5px] border-[#E2E2E2] rounded-[20px] p-7 sm:p-8 flex flex-col gap-6 transition-all duration-250"
              style={{ boxShadow: "0 8px 32px rgba(17,17,17,0.04)" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-3 border-b border-[#F1F5F9] pb-4.5">
                <div className="flex items-center gap-3">
                  {/* Realistic Founder Avatars */}
                  <div className="flex items-center -space-x-2.5">
                    {FOUNDER_AVATARS.map((av) => (
                      <div
                        key={av.name}
                        title={av.name}
                        className={`w-9 h-9 rounded-full ${av.bg} font-bold text-[11px] flex items-center justify-center shadow-xs shrink-0`}
                      >
                        {av.initials}
                      </div>
                    ))}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-[17px] text-[#111] leading-tight">
                      Book Your Discovery Call
                    </h3>
                    <p className="font-sans text-[11px] text-[#777] mt-0.5">
                      30-minute founder strategy session. No sales pitch. Just practical advice.
                    </p>
                  </div>
                </div>

                {/* Available Badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold shrink-0 self-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available This Week
                </div>
              </div>

              {/* Calendar Section */}
              <div className="flex flex-col gap-2.5">
                <span className="text-[10px] font-bold tracking-wider text-[#888] uppercase">
                  TYPICAL AVAILABILITY
                </span>

                {/* 4 Time Slots Grid (Softer blue glow with blue border for selected slot) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {TIME_SLOTS.map((slot) => (
                    <motion.div
                      key={slot.day}
                      whileHover={{ y: -2 }}
                      className={`relative flex flex-col items-center justify-center p-3.5 rounded-[16px] border-[1.5px] cursor-pointer transition-all duration-250 text-center ${
                        slot.selected
                          ? "bg-[#F0F4FF] border-2 border-primary text-primary shadow-[0_4px_16px_rgba(36,87,255,0.18)]"
                          : "bg-[#FAFAFA] border-[#E5E5E5] text-[#111] hover:border-primary/40"
                      }`}
                    >
                      {slot.selected && (
                        <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center">
                          <Check className="w-2.5 h-2.5" strokeWidth={3} />
                        </span>
                      )}
                      <Calendar className={`w-4 h-4 mb-1.5 ${slot.selected ? "text-primary" : "text-[#666]"}`} strokeWidth={2} />
                      <span className={`text-[11px] font-medium ${slot.selected ? "text-primary/90" : "text-[#777]"}`}>
                        {slot.day}
                      </span>
                      <span className={`text-[13px] font-bold ${slot.selected ? "text-primary" : "text-[#111]"}`}>
                        {slot.time}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 3 Equal Information Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="h-full p-4 rounded-[16px] bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col justify-between gap-1">
                  <div>
                    <div className="w-7.5 h-7.5 rounded-lg bg-blue-50 text-primary flex items-center justify-center mb-2">
                      <Clock className="w-4 h-4" strokeWidth={2.2} />
                    </div>
                    <h4 className="font-heading font-bold text-[13px] text-[#111]">30 Minutes</h4>
                  </div>
                  <p className="font-sans text-[11px] font-[450] text-[#666] leading-[1.5] mt-1">
                    Focused conversation to understand your product and goals.
                  </p>
                </div>

                <div className="h-full p-4 rounded-[16px] bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col justify-between gap-1">
                  <div>
                    <div className="w-7.5 h-7.5 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-2">
                      <Lightbulb className="w-4 h-4" strokeWidth={2.2} />
                    </div>
                    <h4 className="font-heading font-bold text-[13px] text-[#111]">Product Strategy</h4>
                  </div>
                  <p className="font-sans text-[11px] font-[450] text-[#666] leading-[1.5] mt-1">
                    We&apos;ll help validate your idea and align it with market opportunities.
                  </p>
                </div>

                <div className="h-full p-4 rounded-[16px] bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col justify-between gap-1">
                  <div>
                    <div className="w-7.5 h-7.5 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                      <Code2 className="w-4 h-4" strokeWidth={2.2} />
                    </div>
                    <h4 className="font-heading font-bold text-[13px] text-[#111]">Technical Roadmap</h4>
                  </div>
                  <p className="font-sans text-[11px] font-[450] text-[#666] leading-[1.5] mt-1">
                    Get a high-level technical plan and recommended approach.
                  </p>
                </div>
              </div>

              {/* Bottom Quote Box (Warmer bg, larger icon, exact quote text, refined signature) */}
              <div className="relative p-5 rounded-[16px] bg-[#FAF6EE] border border-[#E8E2D6] flex items-start gap-3.5">
                <div className="w-7.5 h-7.5 rounded-lg bg-primary text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <Quote className="w-4 h-4 fill-white" />
                </div>
                <div className="flex-1">
                  <p className="font-sans text-[11.5px] font-[450] text-[#2C3E50] leading-relaxed pr-10">
                    &ldquo;Every successful product starts with a conversation. We&apos;ll understand your goals, validate your idea and create a roadmap before writing a single line of code.&rdquo;
                  </p>
                  {/* Handwritten style signature bottom-right */}
                  <div className="text-right mt-2">
                    <span className="font-serif italic font-bold text-[12px] text-primary underline decoration-primary/40 decoration-1 underline-offset-2">
                      Grow With Hustler Team
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── FLOATING SIDE BADGES (15% SMALLER, OFFSET FAR RIGHT — ZERO OVERLAP) ── */}
            <div className="hidden lg:flex flex-col gap-3.5 absolute -right-16 xl:-right-20 z-20">
              {/* Connector line */}
              <div className="absolute top-4 bottom-4 left-3.5 w-[1px] border-l-[1.5px] border-dashed border-primary/30 -z-10" />

              {SIDE_BADGES.map((b, i) => (
                <motion.div
                  key={b.label}
                  animate={{ y: [0, -3.5, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, delay: i * 0.45, ease: "easeInOut" }}
                  className="bg-white border border-[#E2E2E2] rounded-full px-2.5 py-1 shadow-sm flex items-center gap-1.5 text-[8.5px] font-semibold text-[#333]"
                >
                  {b.Icon ? (
                    <b.Icon className={`w-2.5 h-2.5 ${b.iconColor}`} strokeWidth={2.5} />
                  ) : (
                    <span className={`w-1.5 h-1.5 rounded-full ${b.dotColor}`} />
                  )}
                  <span>{b.label}</span>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
