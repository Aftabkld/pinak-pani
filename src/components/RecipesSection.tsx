"use client";

import { useEffect, useRef, useState } from "react";

type Recipe = {
  title: string;
  slug: string;
  type: "Recipe" | "Video";
  time: string;
  image: string;
  imageAlt: string;
};

const recipes: Recipe[] = [
  {
    title: "Royal Paneer Masala",
    slug: "royal-paneer-masala",
    type: "Video",
    time: "18 min",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1000&q=90",
    imageAlt: "Paneer masala recipe"
  },
  {
    title: "Homestyle Chole",
    slug: "homestyle-chole",
    type: "Recipe",
    time: "30 min",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=90",
    imageAlt: "Chole recipe bowl"
  },
  {
    title: "Tandoori Veg Skewers",
    slug: "tandoori-veg-skewers",
    type: "Video",
    time: "22 min",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1000&q=90",
    imageAlt: "Tandoori vegetable skewers"
  },
  {
    title: "Masala Rice Bowl",
    slug: "masala-rice-bowl",
    type: "Recipe",
    time: "20 min",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=90",
    imageAlt: "Masala rice recipe"
  }
];

function PlayIcon() {
  return (
    <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-[var(--peacock-ink)] shadow-lg transition group-hover:scale-110">
      <svg className="h-5 w-5 translate-x-0.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7L8 5Z" />
      </svg>
    </span>
  );
}

export function RecipesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section ref={sectionRef} className="section bg-white">
      <div className="mx-auto max-w-7xl">

        {/* HEADING */}
        <div className={`section-heading flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between transition duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--gold)]">
              Recipes
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--peacock-ink)] leading-tight">
              Cook richer meals with Pinak Pani spices.
            </h2>
          </div>

          <a
            href="/recipes"
            className="
              w-fit px-5 py-2
              border border-[var(--peacock)]
              text-[var(--peacock)]
              text-sm font-black uppercase
              rounded
              transition
              hover:bg-[var(--peacock)]
              hover:text-white
            "
          >
            View All
          </a>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {recipes.map((recipe, index) => (
            <a
              key={recipe.slug}
              href={`/recipes/${recipe.slug}`}
              className={`group rounded-xl overflow-hidden bg-white border border-slate-100 shadow-sm transition duration-300 hover:shadow-xl hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[var(--peacock)]">
                <img
                  src={recipe.image}
                  alt={recipe.imageAlt}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {recipe.type === "Video" && (
                  <div className="absolute inset-0 grid place-items-center">
                    <PlayIcon />
                  </div>
                )}

                <div className="absolute left-3 top-3 bg-white px-3 py-1 text-xs font-bold uppercase text-[var(--peacock-ink)] rounded">
                  {recipe.type}
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-xs text-white/80 font-semibold uppercase">
                    {recipe.time}
                  </p>

                  <h3 className="mt-1 text-lg sm:text-xl font-bold text-white leading-tight">
                    {recipe.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}