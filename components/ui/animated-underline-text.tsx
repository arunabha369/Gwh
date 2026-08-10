"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedUnderlineProps {
  className?: string;
  strokeColor?: string;
  strokeWidth?: number;
  duration?: number;
  delay?: number;
  path?: string;
  hoverPath?: string;
}

export function AnimatedUnderline({
  className,
  strokeColor = "#2457FF",
  strokeWidth = 3.8,
  duration = 1.2,
  delay = 0.35,
  path = "M 2,12 Q 75,2 150,12 Q 225,20 298,10",
  hoverPath = "M 2,10 Q 75,18 150,10 Q 225,2 298,12",
}: AnimatedUnderlineProps) {
  const pathVariants: Variants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hover: {
      d: hoverPath,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.svg
      width="100%"
      height="12"
      viewBox="0 0 300 20"
      preserveAspectRatio="none"
      className={cn(
        "absolute -bottom-0.5 left-0 w-full pointer-events-none overflow-visible",
        className
      )}
    >
      <motion.path
        d={path}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />
    </motion.svg>
  );
}
