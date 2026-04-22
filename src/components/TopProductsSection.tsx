"use client";

import { useEffect, useRef, useState } from "react";

type Product = {
  name: string;
  slug: string;
  category: string;
  price: string;
  image: string;
  hoverImage: string;
  imageAlt: string;
};

const products: Product[] = [
  {
    name: "Kitchen King Masala",
    slug: "kitchen-king-masala",
    category: "Blended Masala",
    price: "Rs. 149",
    image: "/images/new kitchen.png",
    hoverImage: "/images/back-kitchen.png",
    imageAlt: "Kitchen King Masala",
  },
  {
    name: "Garam Masala",
    slug: "garam-masala",
    category: "Blended Masala",
    price: "Rs. 129",
    image: "/images/new garam.png",
    hoverImage: "/images/garam-masala-back.png",
    imageAlt: "Garam Masala",
  },
  {
    name: "Turmeric Powder",
    slug: "turmeric-powder",
    category: "Ground Spice",
    price: "Rs. 89",
    image: "/images/h.png",
    hoverImage: "/images/h-back.png",
    imageAlt: "Turmeric Powder",
  },
  {
    name: "Red Chilli Powder",
    slug: "red-chilli-powder",
    category: "Ground Spice",
    price: "Rs. 99",
    image: "/images/l.png",
    hoverImage: "/images/l-back.png",
    imageAlt: "Red Chilli Powder",
  },
  {
    name: "Meat Masala",
    slug: "meat-masala",
    category: "Blended Masala",
    price: "Rs. 179",
    image: "/images/mm.png",
    hoverImage: "/images/mm-back.png",
    imageAlt: "Meat Masala",
  },
  {
    name: "Fish Masala",
    slug: "fish-masala",
    category: "Blended Masala",
    price: "Rs. 199",
    image: "/images/m.png",
    hoverImage: "/images/f-back.png",
    imageAlt: "Fish Masala",
  },
  {
    name: "Coriander Powder",
    slug: "coriander-powder",
    category: "Ground Spice",
    price: "Rs. 79",
    image: "/images/d.png",
    hoverImage: "/images/d-back.png",
    imageAlt: "Coriander Powder",
  },
  {
    name: "Chicken Masala",
    slug: "chicken-masala",
    category: "Blended Masala",
    price: "Rs. 159",
    image: "/images/gos.png",
    hoverImage: "/images/cc-back.png",
    imageAlt: "Chicken Masala",
  },
];

export function TopProductsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // detect mobile
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // heading animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // scroll-based image change (mobile)
  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      let closestIndex = 0;
      let closestDistance = Infinity;

      itemRefs.current.forEach((el, index) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const screenCenter = window.innerHeight / 2;

        const distance = Math.abs(screenCenter - elementCenter);

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
    <section ref={sectionRef} className="bg-white px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* HEADING */}
        <div
          className={`mx-auto mb-16 max-w-3xl text-center transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-sm font-black uppercase tracking-[0.24em] text-yellow-600">
            Top Products
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight text-[#0A2F3F] sm:text-5xl">
            Customer favorites from the Pinak Pani pantry.
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-10">
          {products.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                ref={(el) => {
  itemRefs.current[index] = el;
}}
                className="group text-center"
              >
                {/* IMAGE */}
                <div
                  className="
                    relative flex justify-center mb-6 overflow-hidden
                    h-56
                    sm:h-72
                    lg:h-64
                    xl:h-72
                  "
                >
                  {/* Default */}
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className={`
                      absolute inset-0 m-auto
                      h-full w-full object-contain
                      transition duration-500
                      ${isActive ? "opacity-0" : "opacity-100"}
                      md:group-hover:opacity-0
                    `}
                  />

                  {/* Hover / Scroll */}
                  <img
                    src={item.hoverImage}
                    alt={item.imageAlt}
                    className={`
                      absolute inset-0 m-auto
                      h-full w-full object-contain
                      transition duration-500
                      ${isActive ? "opacity-100 scale-110" : "opacity-0"}
                      md:group-hover:opacity-100 md:group-hover:scale-110
                    `}
                  />
                </div>

                {/* TEXT */}
                <h3 className="text-[26px] font-semibold text-black transition duration-300 group-hover:text-[#004B6B]">
                  {item.name}
                </h3>

                <p className="text-gray-500 mt-2 text-[16px]">
                  {item.category}
                </p>

                <div className="mt-4 h-[2px] w-10 mx-auto bg-gray-300 transition-all duration-300 group-hover:w-20 group-hover:bg-[#004B6B]" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}