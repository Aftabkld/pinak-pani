const galleryImages = [
  {
    src: "/images/about.png",
    alt: "Assorted premium spices in bowls",
  },
  {
    src: "/images/about2.webp",
    alt: "Whole spices and aromatic ingredients",
  },
  {
    src: "/images/about3.png",
    alt: "Fresh turmeric and spice ingredients",
  },
];

export function AboutSection() {
  return (
    <section className="section bg-white">
      <div className="mx-auto max-w-7xl grid items-center gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-[1.05fr_0.95fr]">

        {/* IMAGE GRID */}
        <div className="grid grid-cols-[2fr_1fr] gap-4 h-full">

          {/* BIG IMAGE */}
          <div className="group overflow-hidden rounded-xl bg-[var(--peacock-tint)] shadow-sm">
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* SIDE IMAGES */}
          <div className="grid grid-rows-2 gap-4">
            {galleryImages.slice(1).map((image, index) => (
              <div
                key={image.src}
                className="group overflow-hidden rounded-xl bg-[var(--peacock-tint)] shadow-sm"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`
                    w-full h-full object-cover transition duration-500 group-hover:scale-105
                    ${index === 1 ? "object-top" : "object-center"}
                  `}
                />
              </div>
            ))}
          </div>

        </div>

        {/* TEXT */}
        <div className="flex flex-col justify-center max-w-xl mx-auto lg:mx-0 text-center lg:text-left">

          <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--gold)]">
            About Pinak Pani
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--peacock-ink)] leading-tight">
            Pure spices, selected with care and packed for lasting aroma.
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600">
            Pinak Pani Enterprises brings carefully sourced Indian spices to homes,
            restaurants, and retail shelves with a promise of purity, freshness, and
            dependable flavor.
          </p>

          <p className="mt-3 text-base sm:text-lg leading-8 text-slate-600">
            From whole spices to signature masalas, our focus stays simple: honest
            ingredients, clean packaging, and quality that earns a place in every
            kitchen.
          </p>

          <a
            href="#"
            className="
              mt-6 w-fit mx-auto lg:mx-0
              px-6 py-3
              bg-[var(--peacock)]
              text-white
              text-sm font-black uppercase
              rounded
              transition
              hover:bg-[var(--peacock-dark)]
            "
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
}