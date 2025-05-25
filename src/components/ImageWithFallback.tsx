'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageWithFallbackProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

const ImageWithFallback = ({
  src,
  fallbackSrc = '/images/placeholder.svg',
  alt,
  width,
  height,
  className = '',
  priority = false,
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
};

export default ImageWithFallback; 