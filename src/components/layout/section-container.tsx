"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function SectionContainer({ children, className, delay = 0 }: SectionContainerProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={cn(
        "relative w-full max-w-7xl mx-auto rounded-3xl border border-border bg-surface overflow-hidden shadow-2xl",
        "p-6 md:p-12 lg:p-16",
        className
      )}
    >
      {children}
    </motion.section>
  );
}
