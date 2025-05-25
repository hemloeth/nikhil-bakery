'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';

const contactInfo = [
  {
    icon: MapPinIcon,
    title: 'Address',
    content: '123 Sweet Street, Dessert District, City, 12345',
  },
  {
    icon: PhoneIcon,
    title: 'Phone',
    content: '+1 (555) 123-4567',
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    content: 'hello@nikhilbakery.com',
  },
  {
    icon: ClockIcon,
    title: 'Hours',
    content: 'Mon-Sat: 8am - 8pm\nSunday: 9am - 6pm',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container-custom py-16">
        <motion.div
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="heading-1 text-center mb-12"
            variants={fadeInUp}
          >
            Get in Touch
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="heading-3 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-body text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-body text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-body text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <item.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-gray-900">
                      {item.title}
                    </h3>
                    <p className="font-body text-gray-600 whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}

              {/* Map */}
              <div className="mt-8">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.935242!3d40.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 