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
    <section className="relative w-full bg-background overflow-hidden py-10 lg:py-12 min-h-[90vh] flex flex-col justify-center select-none">

      {/* Texture Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.14]">
        <Image src="/images/hero/GWH_Background Texture.png" alt="" fill className="object-cover" priority />
      </div>

      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[42fr_58fr] gap-6 lg:gap-8 xl:gap-10 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col justify-center max-w-[530px]">

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
            <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={0.14} className="font-sans text-[13px] text-[#6B6B6B] leading-relaxed mb-4 max-w-[440px]">
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

          {/* ── RIGHT COLUMN — HIGH-RES DASHBOARD ECOSYSTEM ILLUSTRATION ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.215, 0.61, 0.355, 1] }}
            whileHover={{ y: -4 }}
            className="w-full flex items-center justify-center relative py-1"
          >
            <div className="relative w-full max-w-[540px] lg:max-w-[600px] xl:max-w-[640px] aspect-square select-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/why-us/why_us_dashboard_transparent.png"
                alt="Grow With Hustler Product & Tech Dashboard"
                fill
                unoptimized
                quality={100}
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

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
            className="bg-transparent border-[1.5px] border-[#222222] rounded-[14px] px-4 sm:px-6 py-3 sm:py-2.5"
            style={{ boxShadow: "2px 2px 0 rgba(17,17,17,0.04)" }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-3 gap-x-4 sm:gap-0 sm:divide-x sm:divide-[#222222]/15">
              {benefits.map(({ Icon, stat, label }) => (
                <div key={label} className="flex items-start sm:items-center gap-2.5 sm:justify-center sm:px-3 sm:first:pl-0 sm:last:pr-0">
                  <div className="w-7 h-7 rounded-full border border-[#222222] bg-transparent flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
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