"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { ArrowRight, Plus, Minus, Building, Home, MapPin, Search, Mail, Phone, Instagram, Twitter, Facebook } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'

const Support = () => {
  // State for FAQ accordion
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // FAQ data
  const faqs = [
    {
      question: 'How long does the home buying process typically take?',
      answer: "The timeline varies depending on your situation and local market conditions. Generally, once you've found a property and had an offer accepted, closing can take 30-60 days. This includes time for home inspection, appraisal, securing financing, and finalizing paperwork. Working with our experienced agents can help streamline this process and address any issues that arise."
    },
    {
      question: 'What are the closing costs when buying a property?',
      answer: "Closing costs typically range from 2-5% of the purchase price. These may include loan origination fees, appraisal fees, title insurance, property taxes, homeowner's insurance, and attorney fees. As your real estate partner, we'll provide a detailed breakdown of expected closing costs early in the process so you can plan accordingly."
    },
    {
      question: 'Do I need a real estate agent to buy a home?',
      answer: "While not legally required, working with a professional real estate agent provides significant advantages. Our agents bring market expertise, negotiation skills, access to exclusive listings, and guidance through complex paperwork and procedures. Best of all, as a buyer, you typically don't pay for agent services as the seller generally covers this commission."
    },
    {
      question: 'How do I determine my budget for buying a home?',
      answer: 'We recommend starting with a pre-approval from a mortgage lender to understand your price range. Consider not just the purchase price, but also monthly payments including principal, interest, taxes, insurance, and possible HOA fees. Our financial advisors can help you analyze your financial situation to determine a comfortable budget that accounts for both upfront costs and ongoing expenses.'
    },
    {
      question: "What's the difference between a fixed-rate and adjustable-rate mortgage?",
      answer: 'A fixed-rate mortgage maintains the same interest rate throughout the entire loan term, providing stable, predictable monthly payments. An adjustable-rate mortgage (ARM) typically starts with a lower rate that can change periodically based on market conditions. ARMs might offer lower initial payments but carry the risk of increasing over time. Our mortgage specialists can help determine which option best suits your financial situation and goals.'
    },
    {
      question: 'How do I make an offer on a property?',
      answer: 'Making an offer involves submitting a formal purchase agreement that includes your proposed price, contingencies (like inspection and financing conditions), desired closing date, and earnest money deposit. Our agents will help you craft a competitive offer based on market analysis, advise on strategic negotiation tactics, and handle all necessary paperwork to present your offer professionally.'
    }
  ];

  // Property features info
  const propertyInfo = [
    {
      icon: <Building size={24} className="mb-4" />,
      title: 'Luxury Properties',
      description: 'Exclusive high-end properties in prime locations with premium amenities.'
    },
    {
      icon: <Home size={24} className="mb-4" />,
      title: 'Family Homes',
      description: 'Comfortable, spacious homes perfect for families in top school districts.'
    },
    {
      icon: <MapPin size={24} className="mb-4" />,
      title: 'Prime Locations',
      description: 'Properties in sought-after neighborhoods with excellent investment potential.'
    },
    {
      icon: <Search size={24} className="mb-4" />,
      title: 'Property Search',
      description: 'Advanced search tools to help you find your perfect property match.'
    }
  ];

  return (
    <main className="flex-1">
      <Header />

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
            className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white text-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Find Your Dream Home
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

      {/* Navigation */}
      <section className="py-12 px-4 sm:px-8 md:px-20 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <a href="#featured" className="px-4 py-2 text-gray-700 hover:text-black hover:underline transition-colors">
              Featured Properties
            </a>
            <a href="#services" className="px-4 py-2 text-gray-700 hover:text-black hover:underline transition-colors">
              Our Services
            </a>
            <a href="#faq" className="px-4 py-2 text-gray-700 hover:text-black hover:underline transition-colors">
              Buyer FAQ
            </a>
            <a href="#contact" className="px-4 py-2 text-gray-700 hover:text-black hover:underline transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 px-4 sm:px-8 md:px-20 bg-[#e8f0e4]">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl font-semibold mb-4 text-center"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>

          <motion.p 
            className="text-gray-600 text-center max-w-2xl mx-auto mb-16"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Comprehensive real estate solutions tailored to your needs
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {propertyInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm text-center"
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-center text-gray-800">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Link href="/services">
              <button className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors">
                <span className="mr-2">Explore Our Services</span>
                <ArrowRight size={16} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Buying Process Section */}
      <section id="process" className="py-16 sm:py-24 px-4 sm:px-8 md:px-20">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative h-[400px] md:order-2" 
              variants={fadeIn}
            >
              <Image 
                src="/c1.jpg" 
                alt="Home buying process" 
                fill 
                className="object-cover rounded-lg shadow-md"
              />
            </motion.div>

            <motion.div variants={fadeIn}>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-6">The Buying Process</h2>
              <p className="text-gray-700 mb-6">
                Our streamlined approach makes purchasing your dream property smooth and stress-free. We guide you through every step of the real estate journey.
              </p>
              <ul className="space-y-4 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-500  text-white text-sm mr-3 flex-shrink-0">1</span>
                  <span><strong>Consultation:</strong> We learn about your needs, preferences, and budget to establish search criteria.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-500  text-white text-sm mr-3 flex-shrink-0">2</span>
                  <span><strong>Property Search:</strong> Access exclusive listings matching your requirements through our network.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-500  text-white text-sm mr-3 flex-shrink-0">3</span>
                  <span><strong>Viewings & Selection:</strong> Tour properties with expert guidance to find your perfect match.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-500  text-white text-sm mr-3 flex-shrink-0">4</span>
                  <span><strong>Closing:</strong> Our team manages negotiations, paperwork, and closing details.</span>
                </li>
              </ul>
              <Link href="/buying-guide">
                <button className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors">
                  <span className="mr-2">Download Buyer&apos;s Guide</span>
                  <ArrowRight size={16} />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-24 px-4 sm:px-8 md:px-20 bg-[#e8f0e4]">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl font-semibold mb-4 text-center"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p 
            className="text-gray-600 text-center max-w-2xl mx-auto mb-16"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Common questions about buying real estate
          </motion.p>

          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
                variants={fadeIn}
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  {openFAQ === index ? (
                    <Minus size={20} className="flex-shrink-0 ml-4" />
                  ) : (
                    <Plus size={20} className="flex-shrink-0 ml-4" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6 text-gray-700">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-8 md:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl font-semibold mb-4 text-center"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Contact Our Agents
          </motion.h2>

          <motion.p 
            className="text-gray-600 text-center max-w-2xl mx-auto mb-16"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Our real estate experts are ready to help you find your dream property
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Phone className="mr-4 mt-1 text-gray-700" size={20} />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-500 text-sm">Available 7 days a week, 9am-7pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="mr-4 mt-1 text-gray-700" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@premierrealestate.com</p>
                    <p className="text-gray-500 text-sm">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="mr-4 mt-1 text-gray-700" size={20} />
                  <div>
                    <p className="font-medium">Visit Our Office</p>
                    <p className="text-gray-600">123 Luxury Lane</p>
                    <p className="text-gray-600">Beverly Hills, CA 90210</p>
                    <p className="text-gray-500 text-sm">Open Mon-Sat 10am-6pm</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-2 rounded-full border border-gray-200 hover:border-gray-400 transition-colors"
                >
                  <Instagram size={20} className="text-gray-600" />
                </motion.a>
                <motion.a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-2 rounded-full border border-gray-200 hover:border-gray-400 transition-colors"
                >
                  <Facebook size={20} className="text-gray-600" />
                </motion.a>
                <motion.a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-2 rounded-full border border-gray-200 hover:border-gray-400 transition-colors"
                >
                  <Twitter size={20} className="text-gray-600" />
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Request Property Information</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Interest
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20">
                    <option value="">Select Property Type</option>
                    <option value="luxury-home">Luxury Home</option>
                    <option value="apartment">Apartment/Condo</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="investment">Investment Property</option>
                    <option value="commercial">Commercial Property</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your property requirements or questions"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
                >
                  Contact Agent
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Support