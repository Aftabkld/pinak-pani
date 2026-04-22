"use client";

import { useEffect, useRef, useState } from "react";

type Reason = {
  title: string;
  description: string;
  icon: "quality" | "sourcing" | "hygiene" | "delivery";
};

type Certificate = {
  title: string;
  subtitle: string;
  image: string;
};

const reasons: Reason[] = [
  {
    title: "Consistent Quality",
    description: "Batch-focused checks help maintain aroma, color, texture, and flavor across every pack.",
    icon: "quality"
  },
  {
    title: "Responsible Sourcing",
    description: "Spices are selected from trusted supply networks with attention to freshness and purity.",
    icon: "sourcing"
  },
  {
    title: "Hygienic Processing",
    description: "Clean handling, careful storage, and sealed packing keep the product kitchen-ready.",
    icon: "hygiene"
  },
  {
    title: "Business-Ready Supply",
    description: "Reliable packaging and fulfillment support homes, retailers, restaurants, and bulk buyers.",
    icon: "delivery"
  }
];

const certificates: Certificate[] = [
  {
    title: "Food Safety",
    subtitle: "Quality and hygiene compliance",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=90"
  },
  {
    title: "Quality Assurance",
    subtitle: "Product standard documentation",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=90"
  },
  {
    title: "Trade Compliance",
    subtitle: "Enterprise supply readiness",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=90"
  }
];

function TrustIcon({ icon }: { icon: Reason["icon"] }) {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill={icon === "quality" ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icon === "quality" && <path d="M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.9l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />}
      {icon === "sourcing" && (
        <>
          <path d="M12 21s7-4.5 7-11a7 7 0 0 0-14 0c0 6.5 7 11 7 11Z" />
          <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        </>
      )}
      {icon === "hygiene" && (
        <>
          <path d="M12 3 5 6v5c0 4.6 2.9 8.4 7 10 4.1-1.6 7-5.4 7-10V6l-7-3Z" />
          <path d="m9 12 2 2 4-5" />
        </>
      )}
      {icon === "delivery" && (
        <>
          <path d="M3 7h11v10H3V7Z" />
          <path d="M14 10h4l3 3v4h-7v-7Z" />
        </>
      )}
    </svg>
  );
}

export function TrustSections() {
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
    <section ref={sectionRef} className="section bg-[var(--peacock-tint)]">
      <div className="mx-auto max-w-7xl">

        {/* HEADING */}
        <div className={`section-heading text-center transition duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--gold)]">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--peacock-ink)]">
            Built for trust, purity, and dependable spice supply.
          </h2>
        </div>

        {/* REASONS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-5 shadow-sm border border-slate-100 transition duration-300 hover:shadow-xl hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="h-12 w-12 flex items-center justify-center rounded bg-[var(--peacock)] text-white">
                <TrustIcon icon={reason.icon} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-[var(--peacock-ink)]">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-6">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* CERTIFICATES */}
        <div className="mt-16">
          <div className="section-heading flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--gold)]">
                Certificate Gallery
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--peacock-ink)]">
                Compliance that builds trust.
              </h2>
            </div>
            <a
              href="#"
              className="px-5 py-2 border border-[var(--peacock)] text-[var(--peacock)] text-sm font-bold rounded hover:bg-[var(--peacock)] hover:text-white transition"
            >
              View Documents
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {certificates.map((c, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 transition duration-300 hover:shadow-xl ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="h-56 bg-[var(--peacock)] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[var(--peacock-ink)]">
                    {c.title}
                  </h3>
                  <p className="text-sm text-slate-600">{c.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}