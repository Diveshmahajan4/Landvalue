"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Building, Users, TrendingUp, Award, CheckCircle } from "lucide-react";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AboutPage() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        
        {/* Hero Section */}
        <section className="relative h-[45vh] sm:h-[55vh] overflow-hidden">
          <Image
            src="/h2.jpg"
            alt="Luxury Real Estate"
            fill
            priority
            className="object-cover object-center brightness-75"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white text-center mb-6 md:w-1/2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              We&apos;re making real estate investing accessible to everyone
            </motion.h1>
            <motion.p
              className="text-xl text-white text-center max-w-2xl px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Discover exceptional properties tailored to your lifestyle
            </motion.p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600">
                Landvalue was founded with a simple mission: to democratize
                access to real estate investments and create wealth-building
                opportunities for all.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div
                className="bg-[#f0f7ed] p-8 rounded-lg"
                variants={scaleIn}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <Building className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">The Problem</h3>
                <p className="text-gray-600">
                  Real estate has historically been inaccessible to average
                  investors due to high capital requirements, complex processes,
                  and limited market knowledge.
                </p>
              </motion.div>

              <motion.div
                className="bg-[#f0f7ed] p-8 rounded-lg"
                variants={scaleIn}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Our Solution</h3>
                <p className="text-gray-600">
                  We built a platform that allows investors to participate in
                  real estate with lower minimums, transparent information, and
                  professional management.
                </p>
              </motion.div>

              <motion.div
                className="bg-[#f0f7ed] p-8 rounded-lg"
                variants={scaleIn}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">The Impact</h3>
                <p className="text-gray-600">
                  Today, thousands of investors use Livest to build wealth
                  through real estate, with over $100M in property investments
                  facilitated through our platform.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-[#f0f7ed]">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Values
              </h2>
              <p className="text-lg text-gray-600">
                These core principles guide everything we do at Livest, from
                product development to customer service.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                {
                  title: "Accessibility",
                  description:
                    "We believe everyone deserves access to quality real estate investments, regardless of their wealth or background.",
                },
                {
                  title: "Transparency",
                  description:
                    "We provide clear, honest information about every investment opportunity, including risks and potential returns.",
                },
                {
                  title: "Education",
                  description:
                    "We empower our users with knowledge and tools to make informed investment decisions.",
                },
                {
                  title: "Innovation",
                  description:
                    "We continuously improve our platform to provide the best possible experience for our investors.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-lg flex"
                  variants={fadeIn}
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                >
                  <div className="mr-4">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet Our Leadership Team
              </h2>
              <p className="text-lg text-gray-600">
                Our diverse team brings together expertise in real estate,
                finance, technology, and customer experience.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                {
                  name: "Jane Doe",
                  title: "Chief Executive Officer",
                  experience:
                    "15+ years of experience in real estate investment and property development.",
                },
                {
                  name: "John Smith",
                  title: "Chief Technology Officer",
                  experience:
                    "12+ years building scalable fintech platforms and digital solutions.",
                },
                {
                  name: "Sarah Johnson",
                  title: "Chief Investment Officer",
                  experience:
                    "20+ years of experience in portfolio management and real estate analytics.",
                },
              ].map((member, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  variants={scaleIn}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Image
                        src={`/p${i + 1}.jpg`}
                        alt={`Team member ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-green-600 mb-2">{member.title}</p>
                  <p className="text-gray-600 text-sm">{member.experience}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Awards Section */}
        {/* <section className="py-16 md:py-24 bg-[#f0f7ed]">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Awards & Recognition
              </h2>
              <p className="text-lg text-gray-600">
                We&apos;re proud to be recognized for our innovation and impact
                in the real estate investment industry.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                { award: "Best FinTech Solution", year: "2023" },
                { award: "Top 10 Startups", year: "2022" },
                { award: "Innovation Award", year: "2022" },
                { award: "Best User Experience", year: "2021" },
              ].map((award, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  variants={scaleIn}
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                >
                  <motion.div
                    className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                    whileHover={{ rotate: 15, transition: { duration: 0.3 } }}
                  >
                    <Award className="h-8 w-8 text-green-600" />
                  </motion.div>
                  <h3 className="text-lg font-bold">{award.award}</h3>
                  <p className="text-gray-600 text-sm">{award.year}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section> */}

        <CTA />
      </main>

      <Footer />
    </div>
  );
}
