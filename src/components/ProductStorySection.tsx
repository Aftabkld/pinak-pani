export function ProductStorySection() {
  return (
    <section className="group grid w-full overflow-hidden bg-white lg:grid-cols-2">
      <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-peacock-950 px-6 py-20 sm:px-10 lg:min-h-[520px]">
        <div className="absolute inset-0 bg-gradient-to-br from-peacock-950 via-peacock-900 to-[#0F3D3E]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative h-[360px] w-full max-w-xl sm:h-[420px] lg:h-[460px]">
          <img
            src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488e?auto=format&fit=crop&w=1400&q=90"
            alt=""
            className="absolute left-1/2 top-1/2 z-10 h-[76%] w-[86%] -translate-x-1/2 -translate-y-[42%] object-cover opacity-0 transition-all duration-700 ease-out group-hover:-translate-y-[52%] group-hover:scale-105 group-hover:opacity-100"
            draggable={false}
          />

          <img
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=90"
            alt="Pinak Pani premium spice product"
            className="absolute left-1/2 top-1/2 z-20 h-[82%] w-[58%] -translate-x-1/2 -translate-y-1/2 object-cover transition-all duration-700 ease-out group-hover:scale-105"
            draggable={false}
          />
        </div>
      </div>

      <div className="flex min-h-[420px] items-center bg-white px-6 py-20 sm:px-10 lg:min-h-[520px] lg:px-20 xl:px-28">
        <div className="max-w-xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-royal-gold">
            Featured Product
          </p>
          <h2 className="mt-5 text-5xl font-black leading-[1.02] tracking-normal text-peacock-950 sm:text-6xl">
            Spices that carry aroma before the first taste.
          </h2>
          <p className="mt-7 text-lg leading-9 text-slate-600">
            Pinak Pani blends are prepared for a premium cooking experience where
            purity, fragrance, and color feel consistent from pack to plate. The
            product stays in front while its ingredients quietly reveal the story
            behind every recipe.
          </p>
          <a
            href="/products"
            className="mt-9 inline-flex items-center justify-center text-sm font-black uppercase tracking-[0.16em] text-peacock-900 transition hover:text-[#0F3D3E]"
          >
            Explore Products
            <span className="ml-3 h-0.5 w-10 bg-current transition-all duration-300 group-hover:w-16" />
          </a>
        </div>
      </div>
    </section>
  );
}
