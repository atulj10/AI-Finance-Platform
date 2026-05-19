"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 -z-10" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-black-400 mb-6 tracking-tight">
          Ready to Take Control of Your Finances?
        </h2>
        <p className="text-black-200 mb-10 max-w-2xl mx-auto text-lg md:text-xl">
          Join thousands of users who are already managing their finances
          smarter with Welth. No credit card required.
        </p>
        <Link href="/dashboard">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Start Your Free Trial
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default CTASection;
