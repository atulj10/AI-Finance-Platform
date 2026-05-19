"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import HeroSection from "@/components/hero-section/HeroSection";

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
      </motion.div>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {statsData.map((stat, index) => (
              <motion.div
                variants={fadeInUp}
                key={index}
                className="text-center group"
              >
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2 transition-transform duration-300 group-hover:scale-110">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Everything you need to manage your finances
            </h2>
            <p className="text-gray-600 text-lg">
              Powerful tools designed to give you total control over your
              financial future.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuresData.map((feature, index) => (
              <motion.div variants={fadeInUp} key={index}>
                <Card className="h-full p-6 border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white/50 backdrop-blur-sm">
                  <CardContent className="space-y-4 pt-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
          >
            How It Works
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
          >
            {/* Optional: Connecting line for desktop */}
            <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-[2px] bg-blue-100 -z-10" />

            {howItWorksData.map((step, index) => (
              <motion.div
                variants={fadeInUp}
                key={index}
                className="text-center relative z-10"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-200 transition-transform duration-300 hover:scale-110 hover:rotate-3">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
          >
            What Our Users Say
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonialsData.map((testimonial, index) => (
              <motion.div variants={fadeInUp} key={index}>
                <Card className="h-full p-6 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                  <CardContent className="pt-4 flex flex-col h-full justify-between">
                    <p className="text-gray-600 italic mb-8 relative">
                      <span className="text-4xl text-blue-200 absolute -top-4 -left-2">
                        {'"'}
                      </span>
                      <span className="relative z-10">{testimonial.quote}</span>
                    </p>
                    <div className="flex items-center mt-auto border-t border-gray-100 pt-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover ring-2 ring-blue-50"
                      />
                      <div className="ml-4">
                        <div className="font-semibold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-blue-600 font-medium">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Dynamic Background */}
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
    </div>
  );
};

export default LandingPage;
