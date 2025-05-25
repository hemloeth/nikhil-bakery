'use client';

import React, { useState, useCallback, memo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const MenuItem = memo(({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => (
  <motion.li
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="relative group"
  >
    <Link 
      href={href}
      onClick={onClick}
      className="text-gray-800 hover:text-pink-600 transition-colors duration-300 py-2 px-4"
    >
      {label}
      <motion.span
        className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 origin-left transform scale-x-0 transition-transform group-hover:scale-x-100"
        initial={false}
        transition={{ duration: 0.3 }}
      />
    </Link>
  </motion.li>
));

MenuItem.displayName = 'MenuItem';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="text-2xl font-playfair font-bold text-pink-600">
              Nikhil Bakery
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <MenuItem key={item.href} {...item} />
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-pink-50"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-pink-600" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-pink-600" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <ul className="px-4 py-2 space-y-2">
              {menuItems.map((item) => (
                <MenuItem key={item.href} {...item} onClick={closeMenu} />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default memo(Navbar); 