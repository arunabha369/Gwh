"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Globe, ExternalLink } from "lucide-react";

export function AboutFounders() {
  const founders = [
    {
      name: "Arunabha Banerjee",
      role: "Co-Founder & Product Architect",
      bio: "Arunabha is a full-stack developer and product architect passionate about building scalable web solutions and beautiful user experiences.",
      domain: "arunabha.dev",
      url: "https://arunabha.dev",
      accentBorder: "border-l-[#FFD43B]",
    },
    {
      name: "Akarsh Kumar",
      role: "Co-Founder & Full Stack Developer",
      bio: "Akarsh loves turning ideas into real products. He focuses on clean code, AI integrations, and creating solutions that deliver real impact.",
      domain: "akarshjha.dev",
      url: "https://akarshjha.dev",
      accentBorder: "border-l-primary",
    },
  ];

  return (
    <section className="relative w-full pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-20">
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="text-center max-w-[620px] mx-auto mb-8 sm:mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#222222]/20 bg-white/60 text-[11px] font-bold tracking-wide text-[#111111] shadow-2xs mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            THE FOUNDERS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="font-heading font-black text-[#111111] leading-[1.08] text-[28px] sm:text-[36px] lg:text-[42px] mb-3"
          >
            The People Behind{" "}
            <span className="relative inline-block text-primary">
              Grow With Hustler
              <span className="absolute -bottom-1 left-0 w-full h-[4px] bg-[#FFD43B] rounded-full" />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="font-sans text-[13.5px] sm:text-[15px] text-[#555555] leading-relaxed"
          >
            We&apos;re not just developers — we&apos;re builders, problem solvers, and entrepreneurs. Together, we bring ideas to life.
          </motion.p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              className={`bg-white border-[1.5px] border-[#222222]/15 rounded-[22px] p-6 sm:p-8 shadow-[0_4px_24px_rgba(17,17,17,0.03)] flex flex-col justify-between border-l-[5px] ${founder.accentBorder}`}
            >
              {/* Founder Information */}
              <div>
                <h3 className="font-heading font-extrabold text-[20px] sm:text-[22px] text-[#111111] leading-tight mb-1">
                  {founder.name}
                </h3>
                <p className="font-sans font-bold text-[13.5px] text-primary mb-3">
                  {founder.role}
                </p>
                <p className="font-sans text-[13.5px] sm:text-[14px] text-[#555555] leading-relaxed mb-6">
                  {founder.bio}
                </p>
              </div>

              <div>
                <a
                  href={founder.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#EEF2FF] border border-[#2457FF]/20 font-sans text-[12.5px] font-bold text-primary hover:bg-primary hover:text-white transition-all duration-200 shadow-2xs group"
                >
                  <Globe className="w-3.5 h-3.5 shrink-0" />
                  <span>{founder.domain}</span>
                  <ExternalLink className="w-3 h-3 shrink-0 ml-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
