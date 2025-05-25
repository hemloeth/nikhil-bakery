'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const menuCategories = [
  {
    name: 'Signature Cakes',
    description: 'Our handcrafted cakes are perfect for any special occasion',
    items: [
      {
        name: 'Chocolate Truffle Cake',
        description: 'Rich chocolate layers with dark chocolate ganache',
        price: '₹2500',
        image: '/images/chocolate-cake.jpg',
        popular: true
      },
      {
        name: 'Red Velvet Dream',
        description: 'Classic red velvet with cream cheese frosting',
        price: '₹2800',
        image: '/images/red-velvet.jpg'
      },
      {
        name: 'Fresh Fruit Cake',
        description: 'Light sponge cake with seasonal fresh fruits',
        price: '₹2200',
        image: '/images/fruit-cake.jpg'
      }
    ]
  },
  {
    name: 'Premium Ice Cream',
    description: 'Handmade ice cream using the finest ingredients',
    items: [
      {
        name: 'Madagascar Vanilla Bean',
        description: 'Pure vanilla bean ice cream',
        price: '₹250',
        image: '/images/vanilla-ice-cream.jpg',
        popular: true
      },
      {
        name: 'Belgian Dark Chocolate',
        description: 'Rich and creamy chocolate ice cream',
        price: '₹250',
        image: '/images/chocolate-ice-cream.jpg'
      },
      {
        name: 'Fresh Strawberry',
        description: 'Made with real strawberries',
        price: '₹250',
        image: '/images/strawberry-ice-cream.jpg'
      }
    ]
  },
  {
    name: 'French Pastries',
    description: 'Authentic French pastries baked fresh daily',
    items: [
      {
        name: 'Butter Croissant',
        description: 'Flaky, buttery, and delicate',
        price: '₹180',
        image: '/images/croissant.jpg',
        popular: true
      },
      {
        name: 'Chocolate Eclair',
        description: 'Filled with vanilla cream and topped with chocolate',
        price: '₹200',
        image: '/images/eclair.jpg'
      },
      {
        name: 'Danish Pastry',
        description: 'Light and crispy with sweet filling',
        price: '₹180',
        image: '/images/danish.jpg'
      }
    ]
  }
];

export default function MenuPage() {
  return (
    <main className="min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <section className="bg-pink-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-playfair font-bold mb-6 text-gray-800">
              Our Menu
            </h1>
            <p className="text-xl font-cormorant text-gray-600 max-w-2xl mx-auto">
              Discover our delightful selection of handcrafted desserts, made with love and the finest ingredients
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {menuCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <h2 className="text-4xl font-playfair font-bold mb-4 text-gray-800">
                    {category.name}
                  </h2>
                  <p className="text-xl font-cormorant text-gray-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.1 }}
                      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="relative h-64">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                        {item.popular && (
                          <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Popular
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-playfair font-bold text-gray-800">
                            {item.name}
                          </h3>
                          <span className="text-pink-600 font-semibold">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-gray-600 font-cormorant text-lg">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Orders Section */}
      <section className="bg-pink-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-playfair font-bold mb-6 text-gray-800">
              Special Orders
            </h2>
            <p className="text-xl font-cormorant text-gray-600 mb-8">
              Planning a special event? We offer custom orders for birthdays, weddings, 
              and other celebrations. Contact us to discuss your requirements.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300"
              onClick={() => window.location.href = '/contact'}
            >
              Inquire About Custom Orders
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 