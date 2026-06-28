"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  duration?: number;
  className?: string;
  direction?: "left" | "right";
};

export default function Marquee({
  children,
  duration = 40,
  className = "",
  direction = "left",
}: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max"
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
