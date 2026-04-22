"use client";

import { useEffect, useRef, useState } from "react";

type Category = {
  label: string;
  title: string;
  description: string;
  productImage: string;
  hoverImage: string;
  productAlt: string;
};

const categories: Category[] = [
  {
    label: "Pinak Pani Enterprises",
    title: "Blended Masala",
    description:
      "Balanced blends prepared for rich color, layered aroma, and dependable taste in daily Indian cooking.",
    productImage: "/images/mixmasala.png",
    hoverImage: "/images/mkm-back.png",
    productAlt: "Blended masala product box",
  },
  {
    label: "Pinak Pani Enterprises",
    title: "Whole Spices",
    description:
      "Handpicked whole spices selected for natural oils, bold fragrance, and authentic kitchen character.",
    productImage: "/images/1.png",
    hoverImage: "/images/hdm-back.png",
    productAlt: "Whole spices product box",
  },
  {
    label: "Pinak Pani Enterprises",
    title: "Ginger Garlic Paste",
    description:
      "Fresh, smooth, and kitchen-ready paste made for consistent flavor in home and commercial recipes.",
    productImage: "/images/gg.png",
    hoverImage: "/images/gg-back.png",
    productAlt: "Ginger garlic paste product box",
  },
];

export function CategorySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // responsive detect (FIXED)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // scroll-based active
  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      let closestIndex = 0;
      let closestDistance = Infinity;

      itemRefs.current.forEach((el, index) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const screenCenter = window.innerHeight / 2;

        const distance = Math.abs(screenCenter - center);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <section className="w-full bg-white py-6 sm:py-8 lg:py-10">

      {/* Heading */}
      <div className="text-center mb-6 sm:mb-8 lg:mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-peacock-950">
          Products You Will Love
        </h2>
      </div>

      {categories.map((category, index) => {
        const reverse = index % 2 === 1;
        const isActive = activeIndex === index;

        return (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className="
              mx-auto max-w-7xl
              grid items-center
              gap-6 sm:gap-8 lg:gap-10
              px-4 sm:px-6
              py-4 sm:py-6 lg:py-8
              lg:grid-cols-2
            "
          >
            {/* IMAGE */}
            <div className={`flex justify-center ${reverse ? "lg:order-2" : ""}`}>
              
              {/* 🔥 FIXED HEIGHT (MAIN FIX) */}
              <div className="
                group relative w-full
                max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
                h-[260px] sm:h-[320px] lg:h-[360px]
                overflow-hidden
              ">

                {/* Default */}
                <img
                  src={category.productImage}
                  alt={category.productAlt}
                  className={`
                    absolute inset-0 m-auto
                    max-h-full max-w-full
                    object-contain
                    transition duration-300
                    ${isActive ? "opacity-0" : "opacity-100"}
                    md:group-hover:opacity-0
                  `}
                />

                {/* Hover */}
                <img
                  src={category.hoverImage}
                  alt={category.productAlt}
                  className={`
                    absolute inset-0 m-auto
                    max-h-full max-w-full
                    object-contain
                    transition duration-300
                    ${isActive ? "opacity-100 scale-105" : "opacity-0"}
                    md:group-hover:opacity-100 md:group-hover:scale-105
                  `}
                />
              </div>
            </div>

            {/* TEXT */}
            <div
              className={`
                max-w-xl
                mx-auto lg:mx-0
                text-center lg:text-left
                ${reverse ? "lg:order-1" : ""}
              `}
            >
              <p className="text-xs sm:text-sm font-black uppercase tracking-[0.24em] text-royal-gold">
                {category.label}
              </p>

              <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl lg:text-4xl font-black text-peacock-950 leading-tight">
                {category.title}
              </h2>

              <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg leading-7 text-slate-600">
                {category.description}
              </p>

              <a
                href="/products"
                className="group mt-5 inline-flex items-center text-sm font-black uppercase tracking-[0.14em] text-peacock-900 transition hover:text-[#0F3D3E]"
              >
                View More
                <span className="ml-2 h-0.5 w-8 bg-current transition-all duration-300 group-hover:w-14" />
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
}