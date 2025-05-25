'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const menuItems = [
  {
    category: "Cakes",
    items: [
      { name: "Chocolate Truffle", price: "₹2500", image: "/images/chocolate-cake.jpg" },
      { name: "Red Velvet", price: "₹2800", image: "/images/red-velvet.jpg" },
      { name: "Fruit Cake", price: "₹2200", image: "/images/fruit-cake.jpg" }
    ]
  },
  {
    category: "Ice Cream",
    items: [
      { name: "Vanilla Bean", price: "₹250", image: "/images/vanilla-ice-cream.jpg" },
      { name: "Dark Chocolate", price: "₹250", image: "/images/chocolate-ice-cream.jpg" },
      { name: "Strawberry", price: "₹250", image: "/images/strawberry-ice-cream.jpg" }
    ]
  },
  {
    category: "Pastries",
    items: [
      { name: "Butter Croissant", price: "₹180", image: "/images/croissant.jpg" },
      { name: "Chocolate Eclair", price: "₹200", image: "/images/eclair.jpg" },
      { name: "Danish Pastry", price: "₹180", image: "/images/danish.jpg" }
    ]
  }
];

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f6f7f8" offset="0%" />
      <stop stop-color="#edeef1" offset="20%" />
      <stop stop-color="#f6f7f8" offset="40%" />
      <stop stop-color="#f6f7f8" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f6f7f8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Delicious cakes display"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
          {/* Dark gradient overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
          
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-pink-500/10" />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto text-center"
          >
            {/* Title and Slogan */}
            <motion.div
              variants={fadeIn}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-8"
            >
              <div className="relative">
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-playfair font-bold text-white 
                             drop-shadow-lg tracking-tight leading-none relative z-10"
                >
                  <span className="bg-gradient-to-r from-pink-200 to-white text-transparent bg-clip-text">
                    Nikhil
                  </span>{" "}
                  <span className="bg-gradient-to-r from-white to-pink-200 text-transparent bg-clip-text">
                    Bakery
                  </span>
                </h1>
                {/* Decorative underline */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 
                              bg-gradient-to-r from-transparent via-pink-200 to-transparent opacity-70" />
              </div>

              <div className="flex flex-col items-center space-y-6">
                <div className="flex items-center w-full max-w-xs mx-auto">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
                  <div className="w-2 h-2 rounded-full bg-pink-200 mx-2" />
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
                </div>
                
                <p className="text-3xl md:text-4xl lg:text-5xl font-cormorant italic text-white drop-shadow-lg">
                  Love at first bite
                </p>
                
                <div className="flex items-center w-full max-w-xs mx-auto">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
                  <div className="w-2 h-2 rounded-full bg-pink-200 mx-2" />
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={fadeIn}
              transition={{ delay: 0.8 }}
              className="mt-12 space-x-6"
            >
              <Link
                href="/menu"
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full text-lg 
                         font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg 
                         inline-block backdrop-blur-sm"
              >
                View Menu
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full text-lg 
                         font-semibold transition-all duration-300 backdrop-blur-sm border-2 border-white/30 
                         hover:scale-105 hover:shadow-lg inline-block"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto mb-2 relative 
                       backdrop-blur-sm bg-white/10"
          >
            <div className="w-1.5 h-3 bg-white rounded-full mx-auto animate-bounce mt-2" />
          </div>
          <span className="text-sm font-light tracking-wider text-white/80">
            Scroll to explore
          </span>
        </motion.div>
      </section>

      {/* Featured Products Section */}
      <motion.section 
        className="py-20 bg-white"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-playfair font-bold text-center mb-12 text-gray-800"
            variants={fadeIn}
          >
            Our Signature Creations
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: '/images/signature-cake.jpg', title: 'Signature Cakes', desc: 'Handcrafted with love' },
              { src: '/images/ice-cream.jpg', title: 'Artisan Ice Cream', desc: 'Made fresh daily' },
              { src: '/images/pastries.jpg', title: 'French Pastries', desc: 'Authentic recipes' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg"
                variants={fadeIn}
              >
                <div className="relative h-80">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-75" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-playfair font-bold mb-2">{item.title}</h3>
                    <p className="text-lg font-cormorant">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-playfair font-bold mb-4 text-gray-800">Our Menu</h2>
            <p className="text-xl font-cormorant text-gray-600 max-w-2xl mx-auto">
              Discover our delightful selection of freshly baked goods and treats
            </p>
          </motion.div>

          <div className="space-y-16">
            {menuItems.map((category, idx) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <h3 className="text-3xl font-playfair font-bold mb-8 text-center text-gray-800">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="relative h-64">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-playfair font-bold mb-2">{item.name}</h4>
                        <p className="text-pink-600 font-semibold">{item.price}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/menu"
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 inline-block"
            >
              View Full Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-playfair font-bold mb-6 text-gray-800">
            Ready to Experience Our Delights?
          </h2>
          <p className="text-xl font-cormorant mb-8 text-gray-600 max-w-2xl mx-auto">
            Visit us today and discover why our customers keep coming back for more.
            Every creation is made with passion and the finest ingredients.
          </p>
          <Link 
            href="/contact"
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 inline-block"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </main>
  );
} 