"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Zap, TrendingUp } from "lucide-react";

export function AboutHero() {
  const values = [
    {
      icon: Users,
      iconBg: "bg-[#EEF2FF] border-[#2457FF]/20 text-primary",
      title: "Founder First",
      desc: "We think like founders.",
    },
    {
      icon: Zap,
      iconBg: "bg-[#FFF9E6] border-[#FFD43B]/60 text-[#111111]",
      title: "Result Driven",
      desc: "We build for real business impact.",
    },
    {
      icon: TrendingUp,
      iconBg: "bg-[#EEF2FF] border-[#2457FF]/20 text-primary",
      title: "Long Term",
      desc: "We grow together, not just ship.",
    },
  ];

  return (
    <section className="relative w-full pt-1 sm:pt-2 lg:pt-3 pb-6 sm:pb-8 lg:pb-10">
      <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ── LEFT COLUMN: Copy & 3 Value Cards ── */}
          <div className="lg:col-span-6 flex flex-col justify-center max-w-[560px] w-full">
            
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-3.5 relative inline-block self-start"
            >
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#222222]/20 bg-white/60 font-sans text-[11px] font-bold tracking-wide text-[#111111] shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                ABOUT US
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.06 }}
              className="mb-3 sm:mb-4"
            >
              <h1 className="font-heading font-black text-[#111111] leading-[1.06] tracking-tight text-[28px] sm:text-[38px] lg:text-[46px] xl:text-[50px]">
                Building Digital <br className="hidden sm:inline" />
                Products That <br className="hidden sm:inline" />
                <span className="relative inline-block text-primary">
                  Create Real Impact.
                  <span className="absolute -bottom-1 left-0 w-full h-[4px] bg-[#FFD43B] rounded-full" />
                </span>
              </h1>
            </motion.div>

            {/* Subheadline description */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="font-sans text-[13.5px] sm:text-[15px] text-[#555555] leading-relaxed mb-5 sm:mb-6 max-w-[480px]"
            >
              At Grow With Hustler, we partner with founders and businesses to build scalable digital products that solve real problems and drive meaningful growth.
            </motion.p>

            {/* 3 Value Cards */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 w-full max-w-[520px]"
            >
              {values.map(({ icon: Icon, iconBg, title, desc }) => (
                <div
                  key={title}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/70 border border-[#222222]/12 shadow-2xs"
                >
                  <div className={`w-7.5 h-7.5 rounded-full border flex items-center justify-center shrink-0 ${iconBg}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading font-bold text-[12px] text-[#111111] leading-tight">{title}</h3>
                    <p className="font-sans text-[10px] text-[#666666] leading-tight mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* ── RIGHT COLUMN: Vector Illustration ── */}
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
            className="lg:col-span-6 flex justify-center lg:justify-end my-2 lg:my-auto"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[540px] xl:max-w-[620px] aspect-square select-none mx-auto lg:mr-0">
              <Image
                src="/images/about/about-hero-vector.png"
                alt="Grow With Hustler Team Building Digital Products"
                fill
                unoptimized
                quality={100}
                className="object-contain object-center lg:object-right"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
