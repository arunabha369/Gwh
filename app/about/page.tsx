"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Rocket,
  Users,
  Zap,
  Heart,
  Target,
  Globe,
  Bot,
} from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

/* ─────────────────────────────────────────
   FOUNDER DATA
───────────────────────────────────────── */
const FOUNDERS = [
  {
    name: "Arunabha Banerjee",
    role: "Co-Founder & Lead Engineer",
    initials: "AB",
    image: "/images/about/arunabha.jpg",
    avatarBg: "bg-[#2457FF]",
    avatarText: "text-white",
    bio: "Full-stack engineer obsessed with building scalable, high-performance applications. Specializes in Next.js, TypeScript, and AI-powered workflows. Turns complex problems into elegant solutions that startups love.",
    highlights: [
      "Next.js & React Expert",
      "AI / ML Enthusiast",
      "System Architecture",
      "Open Source Contributor",
    ],
    socials: {
      github: "https://github.com/arunabha",
      linkedin: "https://linkedin.com/in/arunabha-banerjee",
      twitter: "https://x.com/arunabha",
      instagram: "https://instagram.com/arunabha",
    },
    accent: "#2457FF",
    quote: "Great software isn't just about code — it's about solving real problems for real people.",
  },
  {
    name: "Akarsh Jha",
    role: "Co-Founder & Product Lead",
    initials: "AJ",
    image: "/images/about/akarsh.jpg",
    avatarBg: "bg-[#111111]",
    avatarText: "text-white",
    bio: "Product-minded engineer with a sharp eye for design and user experience. Drives product strategy, client relationships, and ensures every pixel shipped meets the highest quality bar.",
    highlights: [
      "Product Strategy",
      "UI/UX Design",
      "Full-Stack Development",
      "Startup Growth",
    ],
    socials: {
      github: "https://github.com/akarshjha",
      linkedin: "https://linkedin.com/in/akarsh-jha",
      twitter: "https://x.com/akarshjha",
      instagram: "https://instagram.com/akarshjha",
    },
    accent: "#FFD43B",
    quote: "The best products are built when engineering meets empathy.",
  },
];

/* ─────────────────────────────────────────
   VALUES
───────────────────────────────────────── */
const VALUES = [
  {
    Icon: Rocket,
    title: "Ship Fast, Ship Right",
    desc: "We believe in speed without compromise. MVPs in weeks, not months — with clean, production-ready code.",
    iconBg: "bg-orange-50",
    iconBorder: "border-orange-200",
    iconColor: "text-orange-500",
  },
  {
    Icon: Heart,
    title: "Founder First",
    desc: "We treat every project like our own. Your vision drives our engineering — transparent, honest, always.",
    iconBg: "bg-rose-50",
    iconBorder: "border-rose-200",
    iconColor: "text-rose-500",
  },
  {
    Icon: Target,
    title: "Impact Obsessed",
    desc: "We don't just build features — we build outcomes. Every line of code is tied to real business value.",
    iconBg: "bg-blue-50",
    iconBorder: "border-blue-200",
    iconColor: "text-blue-500",
  },
  {
    Icon: Bot,
    title: "AI Native",
    desc: "AI isn't an afterthought — it's embedded into how we build. Smarter products, faster workflows.",
    iconBg: "bg-violet-50",
    iconBorder: "border-violet-200",
    iconColor: "text-violet-500",
  },
];

/* ─────────────────────────────────────────
   STATS
───────────────────────────────────────── */
const STATS = [
  { value: "10+", label: "Products Shipped" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "2-4", label: "Weeks to MVP" },
  { value: "24/7", label: "Communication" },
];

/* ─────────────────────────────────────────
   SOCIAL ICON COMPONENT
───────────────────────────────────────── */
function SocialLink({
  href,
  Icon,
  label,
}: {
  href: string;
  Icon: React.ElementType;
  label: string;
}) {
  return (
    <motion.a
      whileHover={{ y: -3, scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-[12px] bg-white border-[1.5px] border-[#E2E2E2] flex items-center justify-center text-[#555] hover:text-primary hover:border-primary hover:shadow-md transition-all duration-200 cursor-pointer"
    >
      <Icon className="w-4 h-4" strokeWidth={2} />
    </motion.a>
  );
}

/* ─────────────────────────────────────────
   FOUNDER CARD COMPONENT
───────────────────────────────────────── */
function FounderCard({
  founder,
  index,
}: {
  founder: (typeof FOUNDERS)[0];
  index: number;
}) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col w-full bg-white border-[1.5px] border-[#E2E2E2] rounded-[24px] p-6 sm:p-8 hover:border-primary/40 transition-all duration-300 overflow-hidden"
      style={{ boxShadow: "0 4px 20px rgba(17,17,17,0.03)" }}
    >
      {/* Subtle accent gradient at top */}
      <div
        className="absolute top-0 left-0 right-0 h-1 rounded-t-[24px]"
        style={{
          background: `linear-gradient(90deg, ${founder.accent}, ${founder.accent}80)`,
        }}
      />

      {/* ── HEADER: Avatar + Info ── */}
      <div className="flex items-start gap-4 sm:gap-5 mb-5">
        {/* Large Avatar */}
        <div
          className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-[16px] ${founder.avatarBg} ${founder.avatarText} font-heading font-black text-[22px] sm:text-[26px] flex items-center justify-center shrink-0 shadow-lg overflow-hidden`}
          style={{
            boxShadow: `0 8px 24px ${founder.accent}30`,
          }}
        >
          {founder.image ? (
            <Image src={founder.image} alt={founder.name} fill className="object-cover" />
          ) : (
            founder.initials
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-heading font-black text-[20px] sm:text-[22px] text-[#111] leading-tight tracking-tight">
            {founder.name}
          </h3>
          <p className="font-sans text-[12px] sm:text-[13px] font-semibold text-primary mt-0.5">
            {founder.role}
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-2 mt-3">
            <SocialLink
              href={founder.socials.github}
              Icon={GithubIcon}
              label={`${founder.name} GitHub`}
            />
            <SocialLink
              href={founder.socials.linkedin}
              Icon={LinkedinIcon}
              label={`${founder.name} LinkedIn`}
            />
            <SocialLink
              href={founder.socials.twitter}
              Icon={TwitterIcon}
              label={`${founder.name} X (Twitter)`}
            />
            <SocialLink
              href={founder.socials.instagram}
              Icon={InstagramIcon}
              label={`${founder.name} Instagram`}
            />
          </div>
        </div>
      </div>

      {/* ── BIO ── */}
      <p className="font-sans text-[13px] sm:text-[14px] font-[450] text-[#555] leading-[1.7] mb-5">
        {founder.bio}
      </p>

      {/* ── HIGHLIGHT TAGS ── */}
      <div className="flex flex-wrap gap-2 mb-5">
        {founder.highlights.map((h) => (
          <span
            key={h}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide border"
            style={{
              backgroundColor: `${founder.accent}10`,
              borderColor: `${founder.accent}30`,
              color: founder.accent,
            }}
          >
            <Code2 className="w-3 h-3" />
            {h}
          </span>
        ))}
      </div>

      {/* ── QUOTE ── */}
      <div className="mt-auto p-4 rounded-[14px] bg-[#FAF6EE] border border-[#E8E2D6]">
        <p className="font-sans text-[12px] sm:text-[13px] italic font-[450] text-[#333] leading-[1.6]">
          &ldquo;{founder.quote}&rdquo;
        </p>
        <p className="font-heading font-bold text-[11px] text-primary mt-2">
          — {founder.name.split(" ")[0]}
        </p>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   MAIN ABOUT PAGE
───────────────────────────────────────── */
export default function AboutPage() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 });

  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col bg-background">
        {/* ══════════════════════════════
            HERO SECTION
        ══════════════════════════════ */}
        <section className="relative w-full overflow-hidden pt-[80px] md:pt-[110px] pb-12 sm:pb-16 bg-background select-none">
          {/* Background texture */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.18]">
            <Image
              src="/images/hero/GWH_Background Texture.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Blueprint Grid */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04] z-0"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="bpGridAbout"
                width="32"
                height="32"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 32 0 L 0 0 0 32"
                  fill="none"
                  stroke="#2457FF"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#bpGridAbout)" />
          </svg>

          {/* Decorative sparkles */}
          <div className="absolute top-20 right-10 pointer-events-none opacity-50 z-[1]">
            <Sparkles className="w-5 h-5 text-[#FFD43B] fill-[#FFD43B]" />
          </div>

          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-4"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border-[1.5px] border-[#222222] bg-[#FFD43B] font-sans text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#111111] shadow-sm">
                <Users className="w-3.5 h-3.5" />
                <span>ABOUT US</span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mb-4"
            >
              <h1
                className="font-heading font-black text-[#111] leading-[1.0] tracking-tight"
                style={{
                  fontSize: "clamp(32px, 4vw, 56px)",
                }}
              >
                The Hustlers Behind <br />
                <span className="relative inline-block text-primary">
                  Grow With Hustler.
                  <span className="absolute -bottom-1 left-0 w-full h-[4.5px] bg-[#FFD43B] rounded-full" />
                </span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="font-sans text-[14px] sm:text-[15px] text-[#555] leading-[1.7] max-w-[580px] mb-8"
            >
              We&apos;re two founders who believe great software should be fast,
              beautiful, and built with real purpose. We partner with ambitious
              startups to turn bold ideas into products that people love.
            </motion.p>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="border-[1.5px] border-[#222222] rounded-[16px] bg-transparent px-4 sm:px-6 py-3"
              style={{ boxShadow: "2px 2px 0 rgba(17,17,17,0.04)" }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x sm:divide-[#222222]/15">
                {STATS.map(({ value, label }) => (
                  <div
                    key={label}
                    className="flex items-center justify-center gap-3 sm:px-4"
                  >
                    <p className="font-heading font-black text-[22px] sm:text-[26px] text-primary leading-none tracking-tight">
                      {value}
                    </p>
                    <p className="font-sans text-[11px] sm:text-[12px] font-semibold text-[#555] leading-tight">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════
            FOUNDERS SECTION
        ══════════════════════════════ */}
        <section
          ref={sectionRef}
          className="relative w-full bg-background overflow-hidden py-10 sm:py-16 select-none"
        >
          {/* Background texture */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.10]">
            <Image
              src="/images/hero/GWH_Background Texture.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="font-sans font-extrabold text-[10px] uppercase tracking-[0.14em] text-[#6B6B6B]">
                Meet The Founders
              </span>
            </motion.div>

            {/* Founders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {FOUNDERS.map((founder, i) => (
                <FounderCard key={founder.name} founder={founder} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            OUR VALUES SECTION
        ══════════════════════════════ */}
        <section className="relative w-full bg-background overflow-hidden py-10 sm:py-16 select-none">
          {/* Background texture */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.10]">
            <Image
              src="/images/hero/GWH_Background Texture.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 sm:mb-10"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border-[1.5px] border-[#222] bg-white text-[10.5px] font-semibold tracking-wide text-[#111] shadow-xs mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                OUR VALUES
              </div>
              <h2
                className="font-heading font-black text-[#111] leading-[1.06] tracking-tight"
                style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
              >
                What We Stand For.
              </h2>
            </motion.div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {VALUES.map(
                ({ Icon, title, desc, iconBg, iconBorder, iconColor }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -5 }}
                    className="bg-white border-[1.5px] border-[#E2E2E2] rounded-[20px] p-5 sm:p-6 flex flex-col cursor-pointer group hover:border-primary/40 transition-all duration-300"
                    style={{ boxShadow: "2px 3px 0 rgba(17,17,17,0.04)" }}
                  >
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-[14px] ${iconBg} border ${iconBorder} flex items-center justify-center mb-4 group-hover:scale-[1.08] group-hover:rotate-[4deg] transition-all duration-300`}
                    >
                      <Icon className={`w-5 h-5 ${iconColor}`} strokeWidth={1.8} />
                    </div>

                    <h3 className="font-heading font-bold text-[15px] text-[#111] leading-tight mb-2 group-hover:text-primary transition-colors">
                      {title}
                    </h3>
                    <p className="font-sans text-[12px] sm:text-[13px] font-[450] text-[#666] leading-[1.6]">
                      {desc}
                    </p>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            OUR STORY SECTION
        ══════════════════════════════ */}
        <section className="relative w-full bg-background overflow-hidden py-10 sm:py-16 select-none">
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.10]">
            <Image
              src="/images/hero/GWH_Background Texture.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">
              {/* Left — Story Text */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-5"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border-[1.5px] border-[#222] bg-white text-[10.5px] font-semibold tracking-wide text-[#111] shadow-xs self-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  OUR STORY
                </div>

                <h2
                  className="font-heading font-black text-[#111] leading-[1.06] tracking-tight"
                  style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
                >
                  From College Friends <br />
                  to{" "}
                  <span className="relative inline-block text-primary">
                    Product Partners.
                    <span className="absolute -bottom-0.5 left-0 w-full h-[3.5px] bg-[#FFD43B] rounded-full" />
                  </span>
                </h2>

                <p className="font-sans text-[13px] sm:text-[14px] font-[450] text-[#555] leading-[1.7]">
                  Grow With Hustler was born from a simple belief: startups
                  deserve world-class engineering without the enterprise price
                  tag. Arunabha and Akarsh joined forces to build a studio that
                  moves at startup speed — shipping real products that create
                  real impact.
                </p>

                <p className="font-sans text-[13px] sm:text-[14px] font-[450] text-[#555] leading-[1.7]">
                  Today, we&apos;ve helped multiple founders launch production-ready
                  platforms, from AI-powered nutrition apps to full-stack
                  dealership management systems — all built with modern tools,
                  clean code, and relentless attention to detail.
                </p>

                <Link
                  href="/#projects"
                  className="inline-flex items-center gap-2 font-heading font-bold text-[13px] text-primary mt-2 group"
                >
                  <span className="border-b border-primary/30 group-hover:border-primary transition-colors pb-0.5">
                    See What We&apos;ve Built
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Right — Visual Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-white border-[1.5px] border-[#E2E2E2] rounded-[24px] p-6 sm:p-8"
                style={{ boxShadow: "0 8px 32px rgba(17,17,17,0.04)" }}
              >
                {/* Terminal-style header */}
                <div className="flex items-center gap-1.5 mb-5 pb-3 border-b border-[#F0F0F0]">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                  <span className="font-mono text-[10px] text-[#999] ml-2">
                    growwithhustler.com/about
                  </span>
                </div>

                {/* Mission Code Block */}
                <div className="bg-[#0F172A] rounded-[14px] p-5 text-white mb-5">
                  <pre className="font-mono text-[11px] sm:text-[12px] leading-[1.7] whitespace-pre-wrap">
                    <code>
                      <span className="text-[#F472B6]">const</span>{" "}
                      <span className="text-[#60A5FA]">mission</span> ={" "}
                      {"{\n"}
                      {"  "}
                      <span className="text-[#FBBF24]">goal</span>:{" "}
                      <span className="text-[#34D399]">
                        &quot;Build software that grows businesses&quot;
                      </span>
                      ,{"\n"}
                      {"  "}
                      <span className="text-[#FBBF24]">approach</span>:{" "}
                      <span className="text-[#34D399]">
                        &quot;Fast, transparent, founder-friendly&quot;
                      </span>
                      ,{"\n"}
                      {"  "}
                      <span className="text-[#FBBF24]">stack</span>: [
                      <span className="text-[#34D399]">
                        &quot;Next.js&quot;
                      </span>
                      ,{" "}
                      <span className="text-[#34D399]">
                        &quot;TypeScript&quot;
                      </span>
                      ,{" "}
                      <span className="text-[#34D399]">&quot;AI&quot;</span>],
                      {"\n"}
                      {"  "}
                      <span className="text-[#FBBF24]">delivery</span>:{" "}
                      <span className="text-[#34D399]">
                        &quot;2-4 weeks MVP&quot;
                      </span>
                      {"\n"}
                      {"}"};
                    </code>
                  </pre>
                </div>

                {/* Bottom row */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#DEF7EC] border border-[#BEE3F8]/30 text-[#03543F] text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                    Currently Accepting Projects
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EEF2FF] border border-[#2457FF]/15 text-primary text-[10px] font-bold">
                    <Globe className="w-3 h-3" />
                    Made in India 🇮🇳
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            BOTTOM CTA STRIP
        ══════════════════════════════ */}
        <section className="relative w-full bg-background overflow-hidden py-10 sm:py-14 select-none">
          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#111111] border-[1.5px] border-[#333] rounded-[24px] p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6"
              style={{ boxShadow: "0 20px 48px rgba(0,0,0,0.15)" }}
            >
              <div className="flex-1 text-center lg:text-left">
                <h3 className="font-heading font-black text-[22px] sm:text-[28px] text-white leading-tight tracking-tight mb-2">
                  Ready to build something{" "}
                  <span className="text-[#FFD43B]">amazing</span>?
                </h3>
                <p className="font-sans text-[13px] sm:text-[14px] text-[#999] font-[450]">
                  Let&apos;s turn your idea into a product people love. Book a
                  free discovery call with us.
                </p>
              </div>

              <motion.a
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://cal.com"
                target="_blank"
                rel="noreferrer"
                className="h-[52px] sm:h-[56px] px-8 rounded-full bg-[#FFD43B] border-[1.5px] border-[#FFD43B] text-[#111] font-heading font-bold text-[14px] flex items-center gap-2.5 whitespace-nowrap shadow-[0_6px_20px_rgba(255,212,59,0.35)] hover:shadow-[0_10px_28px_rgba(255,212,59,0.5)] transition-all duration-250 cursor-pointer shrink-0"
              >
                Book Discovery Call
                <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
