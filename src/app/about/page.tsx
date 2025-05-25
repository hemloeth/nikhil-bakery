'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const values = [
  {
    title: 'Quality',
    description: 'We use only the finest ingredients to create our delectable treats',
    icon: '🌟'
  },
  {
    title: 'Tradition',
    description: 'Our recipes have been perfected over generations',
    icon: '📖'
  },
  {
    title: 'Innovation',
    description: 'We constantly explore new flavors while respecting classic techniques',
    icon: '🔬'
  },
  {
    title: 'Community',
    description: 'We take pride in being part of our local community',
    icon: '🤝'
  }
];

const timeline = [
  {
    year: '2010',
    title: 'Our Beginning',
    description: 'Started as a small family bakery with a passion for quality desserts'
  },
  {
    year: '2015',
    title: 'Expansion',
    description: 'Opened our current location with expanded menu and seating area'
  },
  {
    year: '2018',
    title: 'Award Winning',
    description: 'Recognized as one of the top bakeries in the region'
  },
  {
    year: '2023',
    title: 'Innovation',
    description: 'Launched our signature dessert collection and custom order service'
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bakery-interior.jpg"
            alt="Nikhil Bakery Interior"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <motion.div 
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl font-cormorant max-w-2xl mx-auto">
            A journey of passion, tradition, and sweet innovations
          </p>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-playfair font-bold mb-6 text-gray-800">
              Our Values
            </h2>
            <p className="text-xl font-cormorant text-gray-600 max-w-2xl mx-auto">
              What makes us different is our commitment to excellence in every detail
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-pink-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-playfair font-bold mb-4 text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600 font-cormorant text-lg">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-playfair font-bold mb-6 text-gray-800">
              Our Journey
            </h2>
            <p className="text-xl font-cormorant text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to becoming a beloved local institution
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center gap-8 mb-12"
              >
                <div className="w-24 h-24 flex-shrink-0 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-playfair font-bold text-pink-600">
                    {item.year}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-bold mb-2 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-cormorant text-lg">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px]"
            >
              <Image
                src="/images/baking-process.jpg"
                alt="Our baking process"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-playfair font-bold mb-6 text-gray-800">
                Our Process
              </h2>
              <p className="text-xl font-cormorant text-gray-600 mb-6">
                Every creation at Nikhil Bakery is crafted with meticulous attention to detail. 
                We begin each day before dawn, preparing fresh batches of pastries and breads 
                using traditional methods and the finest ingredients.
              </p>
              <p className="text-xl font-cormorant text-gray-600 mb-6">
                Our team of skilled bakers combines years of experience with innovative 
                techniques to create desserts that not only look beautiful but taste 
                extraordinary.
              </p>
              <p className="text-xl font-cormorant text-gray-600">
                We believe in sustainable practices and source our ingredients from local 
                suppliers whenever possible, ensuring the freshest flavors while supporting 
                our community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 