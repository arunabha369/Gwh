"use client";

import * as React from "react";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ContactInfoItem {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export interface ContactCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  contactInfo?: ContactInfoItem[];
  formSectionClassName?: string;
  children?: React.ReactNode;
}

export function ContactCard({
  title = "Get in touch",
  description = "If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.",
  contactInfo,
  formSectionClassName,
  className,
  children,
  ...props
}: ContactCardProps) {
  return (
    <div
      className={cn(
        "relative w-full max-w-[1280px] mx-auto bg-transparent border border-[#222222]/20 rounded-[20px] p-6 sm:p-10 lg:p-12",
        className
      )}
      {...props}
    >
      {/* ── Four Corner PlusIcon Decorations ── */}
      <PlusIcon
        className="absolute -top-3 -left-3 w-6 h-6 text-[#222222]/40 pointer-events-none"
        strokeWidth={1.5}
      />
      <PlusIcon
        className="absolute -top-3 -right-3 w-6 h-6 text-[#222222]/40 pointer-events-none"
        strokeWidth={1.5}
      />
      <PlusIcon
        className="absolute -bottom-3 -left-3 w-6 h-6 text-[#222222]/40 pointer-events-none"
        strokeWidth={1.5}
      />
      <PlusIcon
        className="absolute -bottom-3 -right-3 w-6 h-6 text-[#222222]/40 pointer-events-none"
        strokeWidth={1.5}
      />

      {/* ── Two Column Grid: Left Info Panel & Right Form Panel ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
        
        {/* Left Content / Info Panel */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
          <div className="space-y-4">
            <div className="text-[#111111]">{title}</div>
            <div className="text-[14px] sm:text-[15px] text-[#555555] leading-relaxed">
              {description}
            </div>
          </div>

          {/* Optional Contact Info Grid */}
          {contactInfo && contactInfo.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-[12px] bg-[#FAF8F5] border border-[#222222]/10"
                >
                  <div className="w-9 h-9 rounded-[8px] bg-white border border-[#222222]/15 flex items-center justify-center text-primary shrink-0 shadow-2xs">
                    {info.icon}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[11px] font-bold text-[#888888] uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="text-[13px] font-semibold text-[#111111] truncate">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Form Panel (Passed through children) */}
        <div
          className={cn(
            "lg:col-span-7 flex flex-col justify-center",
            formSectionClassName
          )}
        >
          {children}
        </div>

      </div>
    </div>
  );
}
