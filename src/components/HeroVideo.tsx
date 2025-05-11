// src/components/HeroVideo.tsx
import React from 'react';

interface HeroVideoProps {
  src: string;
}

export default function HeroVideo({ src }: HeroVideoProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        src={src}
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        {/* Replace the text below with your preferred hero headline */}
        <h1 className="text-5xl font-heading text-white text-center px-4">
          Flavors You Can't Refuse
        </h1>
      </div>
    </div>
  );
}
