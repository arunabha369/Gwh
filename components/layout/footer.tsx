"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#FBF7EF] border-t border-[#EAE4D8] text-[#111] select-none">
      {/* ── Main Container (1280px) ── */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 py-10 lg:py-12 flex flex-col gap-10">

        {/* ── TOP SECTION (Left, Middle, Right) ── */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-6">

          {/* Left: Logo & Tagline */}
          <div className="flex flex-col gap-3 max-w-[380px]">
            <Link href="/" className="inline-block relative h-20 w-64 sm:h-24 sm:w-72">
              <Image
                src="/images/hero/GWH_LOGOU.png"
                alt="Grow With Hustler Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>
            <p className="font-sans text-[13px] font-[450] text-[#666] leading-[1.6]">
              Building modern websites, AI products and scalable software for ambitious startups.
            </p>
          </div>

          {/* Right: Email & CTA Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <a
              href="mailto:growwithhustler@gmail.com"
              className="font-sans text-[13px] font-semibold text-[#111] hover:text-primary transition-colors flex items-center gap-2"
            >
              growwithhustler@gmail.com
            </a>
            <a
              href="https://cal.com"
              target="_blank"
              rel="noreferrer"
              className="h-[44px] px-5 rounded-full bg-[#FFD43B] border-[1.5px] border-[#111] text-[#111] font-heading font-bold text-[13px] flex items-center gap-2 shadow-2xs hover:shadow-md transition-all duration-200"
            >
              Book Discovery Call
              <ArrowRight className="w-3.5 h-3.5 text-[#111]" strokeWidth={2.2} />
            </a>
          </div>

        </div>

        {/* ── BOTTOM DIVIDER & ROW ── */}
        <div className="pt-6 border-t border-[#EAE4D8] flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left: Copyright */}
          <p className="font-sans text-[11.5px] font-normal text-[#777]">
            © {new Date().getFullYear()} Grow With Hustler
          </p>

          {/* Right: Made in India */}
          <p className="font-sans text-[11.5px] font-medium text-[#555]">
            Made with ❤️ in India
          </p>
        </div>

      </div>
    </footer>
  );
}
