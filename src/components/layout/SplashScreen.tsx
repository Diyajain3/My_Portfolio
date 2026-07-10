"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react";
interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({
  onFinish,
}: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#06110A] text-green-400 font-mono"
        initial={{
          scale: 1,
          opacity: 1,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 1.5,
          opacity: 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <p className="mb-10 text-lg tracking-wide">
          &gt; Initializing Portfolio...
        </p>

        <h1 className="text-6xl font-bold text-white">
          Diya Jain
        </h1>

        <p className="mt-4 text-xl text-green-300">
          Full Stack Developer
        </p>

        <span className="mt-8 animate-pulse text-3xl">
          <Loader2 className="animate-spin" size={30} />
        </span>
      </motion.div>
    </AnimatePresence>
  );
}