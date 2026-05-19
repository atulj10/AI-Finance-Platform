"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  // Hook into the page scroll for dynamic effects (no ref needed!)
  const { scrollY } = useScroll();

  // Create smooth transformations based on scroll position (0px to 300px)
  const rotateX = useTransform(scrollY, [0, 300], [15, 0]);
  const scale = useTransform(scrollY, [0, 300], [0.95, 1]);
  const opacity = useTransform(scrollY, [0, 300], [0.8, 1]);

  // Entry animation variants for staggering the text and buttons
  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <section className="pt-32 md:pt-40 pb-20 px-4 relative overflow-hidden perspective-[1000px]">
      {/* Subtle background glow to highlight the hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-blue-500/10 blur-[120px] rounded-full -z-10" />

      <motion.div 
        className="container mx-auto text-center z-10 relative"
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          variants={fadeUpVariants}
          className="text-5xl md:text-7xl lg:text-[90px] font-extrabold tracking-tight pb-6 gradient-title bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600"
        >
          Manage Your Finances <br className="hidden md:block" /> with Intelligence
        </motion.h1>
        
        <motion.p 
          variants={fadeUpVariants}
          className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </motion.p>
        
        <motion.div 
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
        >
          <Link href="/dashboard" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all hover:-translate-y-1">
              Get Started
            </Button>
          </Link>
          <Link href="" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg rounded-full border-gray-300 hover:bg-gray-50 transition-all hover:-translate-y-1">
              Watch Demo
            </Button>
          </Link>
        </motion.div>

        {/* Dashboard Image with Scroll-Linked 3D Animation */}
        <motion.div 
          variants={fadeUpVariants}
          className="hero-image-wrapper mt-5 md:mt-12 relative max-w-5xl mx-auto"
          style={{ 
            rotateX, 
            scale, 
            opacity,
            transformStyle: "preserve-3d" 
          }}
        >
          {/* Subtle glow behind the dashboard image */}
          <div className="absolute inset-0 bg-blue-500/5 blur-[80px] -z-10 rounded-3xl" />
          
          <Image
            src="/banner.jpeg"
            width={1280}
            height={720}
            alt="Dashboard Preview"
            className="rounded-2xl md:rounded-[32px] shadow-2xl border border-gray-200/50 mx-auto w-full object-cover ring-1 ring-black/5"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;