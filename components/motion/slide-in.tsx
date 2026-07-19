"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

interface SlideInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

export function SlideIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 24,
  ...props
}: SlideInProps) {
  const getInitialOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      default:
        return { y: distance, x: 0 };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...getInitialOffset() }}
      animate={{ opacity: 1, x: 0, y: 0 }}
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
