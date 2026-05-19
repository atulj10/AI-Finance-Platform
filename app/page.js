"use client";
import React from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/hero-section/HeroSection";
import StatsSection from "@/components/stats-section/StatsSection";
import FeaturesSection from "@/components/features-section/FeaturesSection";
import HowItWorksSection from "@/components/how-it-works-section/HowItWorksSection";
import TestimonialsSection from "@/components/testimonials-section/TestimonialsSection";
import CTASection from "@/components/cta-section/CTASection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
      </motion.div>

      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default LandingPage;
