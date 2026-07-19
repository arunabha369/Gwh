"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
