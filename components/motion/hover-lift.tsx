"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

interface HoverLiftProps extends HTMLMotionProps<"div"> {
  y?: number;
  scale?: number;
  duration?: number;
}

export function HoverLift({
  children,
  y = -4,
  scale = 1,
  duration = 0.2,
  ...props
}: HoverLiftProps) {
  return (
    <motion.div
      whileHover={{ y, scale }}
      transition={{ duration, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
