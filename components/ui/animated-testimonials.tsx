"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Sparkles, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  category?: string;
  rating?: number;
  avatar?: string;
  initials?: string;
  avatarBg?: string;
  logoContent?: React.ReactNode;
}

export interface AnimatedTestimonialsProps {
  badgeText?: string;
  title?: React.ReactNode;
  subtitle?: string;
  testimonials: Testimonial[];
  autoRotateInterval?: number;
  className?: string;
}

export function AnimatedTestimonials({
  badgeText = "CLIENT LOVE",
  title = "Loved by Founders. Built on Trust.",
  subtitle = "We don't just deliver software. We become product partners, helping founders launch, improve and scale products with confidence.",
  testimonials,
  autoRotateInterval = 5500,
  className,
}: AnimatedTestimonialsProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const [direction, setDirection] = React.useState(1);

  // Auto rotation timer
  React.useEffect(() => {
    if (isHovered || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [isHovered, testimonials.length, autoRotateInterval]);

  const current = testimonials[currentIndex];

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const cardVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    }),
  };

  return (
    <div className={cn("w-full select-none", className)}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-14 items-center">
        
        {/* ── LEFT COLUMN: Heading, Subtitle & Interactive Navigation Dots ── */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-2 sm:space-y-3 lg:space-y-5">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 lg:px-3.5 py-1 lg:py-1.5 rounded-full border border-[#222222]/20 bg-white text-[10px] lg:text-[11.5px] font-bold tracking-wide text-[#111111] shadow-2xs self-start">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {badgeText}
          </div>

          {/* Heading */}
          <div>
            {typeof title === "string" ? (
              <h2 className="font-heading text-[#111111] leading-[1.08] tracking-[-0.03em] text-[32px] sm:text-[40px] lg:text-[46px] font-black">
                {title}
              </h2>
            ) : (
              title
            )}
          </div>

          {/* Subtitle */}
          <p className="font-sans text-[12px] sm:text-[13.5px] lg:text-[16px] text-[#555555] leading-snug lg:leading-relaxed max-w-[440px]">
            {subtitle}
          </p>

          {/* Navigation Dots Indicator */}
          <div className="flex items-center gap-2 lg:gap-2.5 pt-1 lg:pt-2">
            {testimonials.map((t, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => handleDotClick(idx)}
                  className="relative p-0.5 lg:p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full transition-all cursor-pointer"
                  aria-label={`Go to testimonial ${idx + 1}`}
                >
                  <motion.div
                    className={cn(
                      "h-2.5 lg:h-3 rounded-full transition-all duration-300",
                      isActive
                        ? "w-7 lg:w-9 bg-primary shadow-xs"
                        : "w-2.5 lg:w-3 bg-[#222222]/20 hover:bg-[#222222]/40"
                    )}
                    layoutId="activeDot"
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* ── RIGHT COLUMN: Active Testimonial Card ── */}
        <div
          className="lg:col-span-7 relative min-h-[220px] sm:min-h-[280px] lg:min-h-[320px] flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative w-full bg-white border-[1.5px] border-[#222222]/15 rounded-[18px] lg:rounded-[24px] p-4 sm:p-6 lg:p-9.5 shadow-[0_14px_40px_rgba(17,17,17,0.05)] flex flex-col justify-between"
            >
              {/* Decorative Corner Sparkle */}
              <div className="absolute top-4 right-4 lg:top-5 lg:right-5 opacity-25 pointer-events-none">
                <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
              </div>

              {/* Top Row: Stars & Quote Icon */}
              <div className="flex items-center justify-between mb-2.5 lg:mb-4">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-0.5 lg:gap-1">
                  {[...Array(current.rating || 5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 lg:w-5 lg:h-5 fill-[#FFD43B] text-[#FFD43B]"
                    />
                  ))}
                </div>

                {/* Blue Quote Icon */}
                <div className="w-7 h-7 lg:w-9 lg:h-9 rounded-full bg-[#EEF2FF] border border-primary/20 flex items-center justify-center text-primary shadow-2xs">
                  <Quote className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5 fill-primary" />
                </div>
              </div>

              {/* Quote Body */}
              <blockquote className="font-sans text-[13.5px] sm:text-[15px] lg:text-[19px] font-[450] text-[#1a1a1a] leading-snug lg:leading-relaxed mb-3 lg:mb-6">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Subtle Divider */}
              <hr className="border-[#222222]/10 mb-3 lg:mb-5" />

              {/* Author & Company Profile */}
              <div className="flex items-center justify-between gap-2.5 lg:gap-3.5 flex-wrap">
                <div className="flex items-center gap-2.5 lg:gap-3.5">
                  {/* Avatar */}
                  <div
                    className={cn(
                      "w-9 h-9 lg:w-12 lg:h-12 rounded-full flex items-center justify-center font-bold text-[11px] lg:text-[14px] text-white shadow-xs shrink-0 border-2 border-white",
                      current.avatarBg || "bg-[#1E293B]"
                    )}
                  >
                    {current.initials || current.name.slice(0, 2).toUpperCase()}
                  </div>

                  {/* Name & Role */}
                  <div>
                    <h3 className="font-heading font-extrabold text-[13.5px] lg:text-[17px] text-[#111111] leading-tight">
                      {current.name}
                    </h3>
                    <p className="font-sans text-[10.5px] lg:text-[12.5px] text-[#666666] leading-none mt-0.5 lg:mt-1">
                      {current.role}
                    </p>
                  </div>
                </div>

                {/* Company Tag / Category Pill */}
                {current.category && (
                  <span className="px-2.5 lg:px-3.5 py-1 lg:py-1.5 rounded-full bg-[#FAF8F5] border border-[#222222]/10 font-sans text-[10px] lg:text-[11.5px] font-bold text-[#444444] shadow-2xs">
                    {current.company} • {current.category}
                  </span>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
