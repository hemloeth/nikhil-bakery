import React from 'react';
import type { Metadata } from "next";
import { Playfair_Display, Cormorant } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Nikhil Bakery - Delicious Cakes, Ice Creams & Pastries",
  description: "Indulge in our heavenly selection of freshly baked cakes, artisanal ice creams, and delicate pastries at Nikhil Bakery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${cormorant.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
        </main>
      </body>
    </html>
  );
} 