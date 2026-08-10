"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────
   21st.dev MacBook Pro Mockup (adapted from designali-in/macbook-pro)
────────────────────────────────────────────────────────────── */
interface MacbookProProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  className?: string;
  children?: React.ReactNode;
}

export function MacbookProMockup({
  src = "/swapno-fe.png",
  alt = "Swapno Motors MacBook Pro Showcase",
  className,
  children,
  ...props
}: MacbookProProps) {
  return (
    <div className={cn("relative w-full select-none", className)} {...props}>
      {/* Outer Aluminum Display Shell */}
      <div className="relative bg-[#1A1C23] rounded-t-[18px] sm:rounded-t-[22px] p-[8px] sm:p-[11px] pb-[12px] sm:pb-[14px] border-[2px] border-[#222222] shadow-[0_20px_50px_rgba(0,0,0,0.22)]">
        
        {/* Top Center Camera Notch & Sensor */}
        <div className="absolute top-[4px] sm:top-[5px] left-1/2 -translate-x-1/2 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#0B0C10] border border-[#2B2D38] z-20 flex items-center justify-center">
          <span className="w-1 h-1 rounded-full bg-[#1A4268]" />
        </div>

        {/* Screen Display Container (1.76:1 ratio matching high-res web screenshot) */}
        <div className="relative w-full aspect-[1.76/1] bg-[#07090E] rounded-[8px] sm:rounded-[10px] overflow-hidden border border-[#252834]">
          {children || (
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-top"
              priority
            />
          )}
        </div>
      </div>

      {/* MacBook Aluminum Bottom Base / Keyboard Lip */}
      <div className="relative w-[108%] -left-[4%] h-[14px] sm:h-[16px] bg-gradient-to-b from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8] rounded-b-[14px] sm:rounded-b-[16px] border-x-[2px] border-b-[2px] border-[#222222] flex justify-center items-center shadow-md">
        {/* Thumb Opening Notch */}
        <div className="w-[14%] h-[4px] sm:h-[5px] bg-[#64748B] rounded-b-[4px] border-t border-[#475569]" />
      </div>

      {/* Soft Ground Elevation Blur */}
      <div className="w-[92%] h-[14px] mx-auto bg-black/25 rounded-full blur-md mt-1 pointer-events-none" />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   21st.dev iPhone 15 Pro Mockup (adapted from magicui/dillionverma)
────────────────────────────────────────────────────────────── */
interface IPhoneMockupProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  className?: string;
  children?: React.ReactNode;
}

export function IPhoneMockup({
  src = "/swapno-fe-mobile.png",
  alt = "Swapno Motors iPhone Showcase",
  className,
  children,
  ...props
}: IPhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative select-none shadow-[0_24px_48px_rgba(0,0,0,0.3)]",
        className
      )}
      {...props}
    >
      {/* Outer Titanium Frame */}
      <div className="relative w-full h-full bg-[#181920] border-[2px] border-[#222222] rounded-[28px] sm:rounded-[32px] p-[5px] sm:p-[6px] flex flex-col">
        
        {/* Screen Display Container */}
        <div className="relative flex-1 w-full bg-[#05070B] rounded-[22px] sm:rounded-[26px] overflow-hidden border border-[#262936]">
          
          {/* Dynamic Island Notch Pill */}
          <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[34%] h-[12px] bg-[#000000] rounded-full z-20 flex items-center justify-between px-1.5 border border-[#1E202A]/80">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0E243A]" />
            <span className="w-1 h-1 rounded-full bg-[#064E3B]" />
          </div>

          {/* Screen Content */}
          {children || (
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-top"
              priority
            />
          )}
        </div>
      </div>
    </div>
  );
}
