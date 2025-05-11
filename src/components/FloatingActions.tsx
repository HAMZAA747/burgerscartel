// src/components/FloatingActions.tsx
import React from 'react';

export default function FloatingActions() {
  // Scroll-to-top helper
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  // Placeholder handlers—you’ll wire these up later
  const openDeals = () => {
    const el = document.getElementById('cartel-deals');
    el?.scrollIntoView({ behavior: 'smooth' });
  };
  const openAbout = () => {
    const el = document.getElementById('about-us');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-4 z-50">
      {/* WhatsApp */}
      <a
        href="https://wa.me/923375561898"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-3 rounded-full shadow-lg hover:shadow-xl transition"
      >
        {/* Inline SVG for WhatsApp icon */}
        <svg width="24" height="24" /* … */>…</svg>
      </a>

      {/* Scroll-Up */}
      <button
        onClick={scrollToTop}
        className="bg-primary p-3 rounded-full shadow-lg hover:shadow-xl transition"
      >
        {/* Inline SVG for up-arrow */}
        <svg width="24" height="24" /* … */>…</svg>
      </button>

      {/* Deals Quick-Link */}
      <button
        onClick={openDeals}
        className="bg-primary p-3 rounded-full shadow-lg hover:shadow-xl transition"
      >
        {/* Inline SVG for money-bag or coins */}
        <svg width="24" height="24" /* … */>…</svg>
      </button>

      {/* Fedora “About” Button */}
      <button
        onClick={openAbout}
        className="bg-primary p-3 rounded-full shadow-lg hover:shadow-xl transition"
      >
        {/* Inline SVG for fedora hat */}
        <svg width="24" height="24" /* … */>…</svg>
      </button>
    </div>
  );
}
