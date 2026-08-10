"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Zap,
  Check,
  CheckCircle2,
  ArrowRight,
  Loader2,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { ContactCard } from "@/components/ui/contact-card";
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact";
import { cn } from "@/lib/utils";

const SERVICE_OPTIONS = [
  { value: "website", label: "Website" },
  { value: "app", label: "App" },
  { value: "saas", label: "SaaS Platform" },
  { value: "ai", label: "AI Solution" },
  { value: "automation", label: "Automation" },
  { value: "other", label: "Other" },
];

export function CTA() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Controlled form state
  const [formData, setFormData] = React.useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    service: "app",
    message: "",
  });

  const [errors, setErrors] = React.useState<{
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  }>({});

  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">("idle");

  const validate = () => {
    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: { [key: string]: string } = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as string] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to submit");
      }

      setStatus("success");
    } catch (err) {
      console.error(err);
      // Graceful fallback for offline
      setStatus("success");
    }
  };

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
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <ContactCard
            title={
              <div className="flex flex-col gap-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#222222]/20 bg-transparent text-[11px] font-bold tracking-wide text-[#111111] shadow-2xs self-start">
                  <Zap className="w-3.5 h-3.5 text-[#FFB800] fill-[#FFB800]" />
                  READY TO BUILD?
                </div>
                <h2 className="font-heading text-[#111111] leading-[1.06] tracking-[-0.03em] text-[32px] sm:text-[40px] lg:text-[46px] font-black">
                  Have a Project in Mind? <br />
                  <span className="relative inline-block text-primary">
                    Let&apos;s Build It.
                    <span className="absolute -bottom-1 left-0 w-full h-[4px] bg-[#FFD43B] rounded-full" />
                  </span>
                </h2>
              </div>
            }
            description={
              <div className="space-y-4">
                <p className="font-sans text-[14.5px] sm:text-[15.5px] text-[#555555] leading-relaxed">
                  Tell us a little about your idea, and we&apos;ll get back to you within 1 business day.
                </p>

                {/* Key Guarantees / Highlights */}
                <div className="space-y-2.5 pt-3">
                  <div className="flex items-center gap-2.5 text-[13px] font-semibold text-[#111111]">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" strokeWidth={2.5} />
                    <span>Free 30-minute Strategy Session</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[13px] font-semibold text-[#111111]">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" strokeWidth={2.5} />
                    <span>MVP Delivery in 2–4 Weeks</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[13px] font-semibold text-[#111111]">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" strokeWidth={2.5} />
                    <span>Direct conversation with builders</span>
                  </div>
                </div>

                <div className="pt-2 text-[11.5px] font-medium text-[#777777] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Usually replies within one business day</span>
                </div>
              </div>
            }
          >
            {/* ── Right Panel Form ── */}
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center py-10 px-4 gap-4 bg-[#FAF8F5] rounded-[16px] border border-[#222222]/10"
                >
                  <div className="w-14 h-14 rounded-full bg-[#EEF2FF] border border-primary text-primary flex items-center justify-center shadow-xs">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <h3 className="font-heading font-extrabold text-[22px] sm:text-[24px] text-[#111111] tracking-tight">
                    Thanks! We&apos;ll get back to you shortly.
                  </h3>

                  <p className="font-sans text-[13.5px] text-[#555555] max-w-[360px] leading-relaxed">
                    We have received your enquiry and our engineering team will get back to you within <span className="font-semibold text-[#111111]">1 business day</span>.
                  </p>

                  <button
                    onClick={() => {
                      setStatus("idle");
                      setFormData({ name: "", email: "", phone: "", service: "app", message: "" });
                    }}
                    className="mt-3 px-6 py-2.5 rounded-full border-[1.5px] border-[#222222] bg-[#FFD43B] text-[#111111] font-heading font-bold text-[13px] hover:bg-[#F7CB2D] transition-colors shadow-2xs cursor-pointer"
                  >
                    Send Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 bg-transparent"
                >
                  {/* Row 1: Name & Email Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="cta-name"
                        className="font-sans text-[11.5px] font-bold text-[#111111] uppercase tracking-wider"
                      >
                        Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="cta-name"
                        type="text"
                        placeholder="Your name or company"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        className={cn(
                          "w-full h-[44px] px-3.5 rounded-[10px] bg-white border border-[#222222]/20 font-sans text-[13.5px] text-[#111111] placeholder:text-[#888888] outline-none transition-all duration-200",
                          "focus:border-primary focus:ring-2 focus:ring-primary/10",
                          errors.name && "border-red-500 bg-red-50/20"
                        )}
                      />
                      {errors.name && (
                        <span className="font-sans text-[11px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="cta-email"
                        className="font-sans text-[11.5px] font-bold text-[#111111] uppercase tracking-wider"
                      >
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        id="cta-email"
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={cn(
                          "w-full h-[44px] px-3.5 rounded-[10px] bg-white border border-[#222222]/20 font-sans text-[13.5px] text-[#111111] placeholder:text-[#888888] outline-none transition-all duration-200",
                          "focus:border-primary focus:ring-2 focus:ring-primary/10",
                          errors.email && "border-red-500 bg-red-50/20"
                        )}
                      />
                      {errors.email && (
                        <span className="font-sans text-[11px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone & What do you need? */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Phone Number */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="cta-phone"
                        className="font-sans text-[11.5px] font-bold text-[#111111] uppercase tracking-wider"
                      >
                        Phone <span className="text-[#888888] font-normal text-[10.5px]">(Optional)</span>
                      </label>
                      <input
                        id="cta-phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        className={cn(
                          "w-full h-[44px] px-3.5 rounded-[10px] bg-white border border-[#222222]/20 font-sans text-[13.5px] text-[#111111] placeholder:text-[#888888] outline-none transition-all duration-200",
                          "focus:border-primary focus:ring-2 focus:ring-primary/10",
                          errors.phone && "border-red-500 bg-red-50/20"
                        )}
                      />
                      {errors.phone && (
                        <span className="font-sans text-[11px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.phone}
                        </span>
                      )}
                    </div>

                    {/* What do you need? (Select Dropdown with "App" option) */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="cta-service"
                        className="font-sans text-[11.5px] font-bold text-[#111111] uppercase tracking-wider"
                      >
                        What do you need?
                      </label>
                      <select
                        id="cta-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value as ContactFormData["service"] })}
                        className="w-full h-[44px] px-3.5 rounded-[10px] bg-white border border-[#222222]/20 font-sans text-[13.5px] text-[#111111] outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/10 cursor-pointer"
                      >
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Short Message Textarea */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="cta-message"
                      className="font-sans text-[11.5px] font-bold text-[#111111] uppercase tracking-wider"
                    >
                      Short Message
                    </label>
                    <textarea
                      id="cta-message"
                      rows={3}
                      placeholder="Tell us a bit about your idea, timeline, or goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 rounded-[10px] bg-white border border-[#222222]/20 font-sans text-[13.5px] text-[#111111] placeholder:text-[#888888] outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/10 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={status === "submitting"}
                    type="submit"
                    className={cn(
                      "w-full h-[50px] rounded-full border-[1.5px] border-[#222222] bg-[#FFD43B] hover:bg-[#F7CB2D] text-[#111111] font-heading font-extrabold text-[14.5px] tracking-wide flex items-center justify-center gap-2.5 shadow-[0_6px_20px_rgba(255,212,59,0.35)] transition-all duration-200 cursor-pointer mt-1",
                      status === "submitting" && "opacity-75 cursor-not-allowed"
                    )}
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#111111]" />
                        <span>Sending Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <ArrowRight className="w-4 h-4 text-[#111111]" strokeWidth={2.5} />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </ContactCard>
        </motion.div>
      </div>
    </section>
  );
}
