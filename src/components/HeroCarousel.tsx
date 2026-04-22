"use client";

import { useEffect, useState } from "react";

const slides = [
  { image: "/images/a.webp" },
  { image: "/images/abc.png" },
   { image: "/images/def.png" },
 
];

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // thoda slow for premium feel

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover bg-white"
          />
        </div>
      ))}

      {/* subtle gradient for premium look */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
    </section>
  );
}
