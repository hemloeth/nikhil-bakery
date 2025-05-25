'use client';

import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <Link href="/" className={`block ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Nikhil Bakery Logo"
        width={150}
        height={150}
        priority
        className="w-auto h-auto"
      />
    </Link>
  );
};

export default Logo; 