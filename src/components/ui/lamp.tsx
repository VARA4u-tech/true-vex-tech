"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background w-full rounded-md z-0",
        className,
      )}
    >
      <div className="relative flex w-full flex-1 items-start justify-center isolate z-0 pt-20">
        {/* Right Cone */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "35rem" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-[35rem] overflow-visible w-[35rem] bg-gradient-conic from-primary/80 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-background h-64 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Left Cone */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "35rem" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-[35rem] w-[35rem] bg-gradient-conic from-transparent via-transparent to-primary/80 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-background h-64 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Base line hiding div */}
        <div className="absolute top-[35rem] h-48 w-full bg-background blur-2xl"></div>

        {/* Static Central Blur (Reduced to prevent the "round blob" look) */}
        <div className="absolute inset-auto z-50 h-64 w-[40rem] rounded-full bg-primary opacity-20 blur-[100px]"></div>

        {/* Animated Inner Core Blur */}
        <motion.div
          initial={{ width: "10rem" }}
          whileInView={{ width: "20rem" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-32 w-[20rem] rounded-full bg-primary opacity-60 blur-3xl"
        ></motion.div>

        {/* The crisp lamp line */}
        <motion.div
          initial={{ width: "30rem" }}
          whileInView={{ width: "70rem" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-1 w-[70rem] bg-primary rounded-full shadow-[0_0_20px_var(--primary)]"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[15rem] bg-background"></div>
      </div>

      <div className="relative z-50 flex translate-y-10 flex-col items-center px-5 w-full">
        {children}
      </div>
    </div>
  );
};
