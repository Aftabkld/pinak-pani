"use client";

import { Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const footerLinks = [
  "Home",
  "About",
  "Products",
  "Recipes",
  "Blog",
  "Contact Us",
  "Career",
];

export function Footer() {
  return (
    <footer className="bg-peacock-950 px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded border border-white/20 bg-white text-peacock-950">
                <span className="text-lg font-black tracking-[0.08em]">PP</span>
              </span>

              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em]">
                  Pinak Pani
                </p>
                <p className="text-sm text-white/65">Enterprises</p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
              Premium Indian spices prepared for homes, restaurants, retailers, and
              bulk buyers who value purity, aroma, and dependable quality.
            </p>

            {/* NEWSLETTER */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-royal-gold uppercase tracking-wide">
                Subscribe Newsletter
              </p>

              <div className="mt-3 flex w-full max-w-md overflow-hidden rounded border border-white/20">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent px-3 py-2 text-sm outline-none placeholder:text-white/40"
                />
                <button className="flex items-center gap-1 bg-white px-4 text-sm font-semibold text-peacock-950 transition hover:bg-royal-gold">
                  <Mail size={16} /> Send
                </button>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex gap-4">
              <a className="rounded-full border border-white/20 p-2 transition hover:bg-white hover:text-peacock-950">
                <FaFacebookF size={16} />
              </a>

              <a className="rounded-full border border-white/20 p-2 transition hover:bg-white hover:text-peacock-950">
                <FaInstagram size={16} />
              </a>

              <a className="rounded-full border border-white/20 p-2 transition hover:bg-white hover:text-peacock-950">
                <FaYoutube size={16} />
              </a>
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-royal-gold">
              Navigation
            </p>

            <div className="mt-5 grid gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-white/70 transition hover:text-white hover:translate-x-1"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* BUSINESS */}
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-royal-gold">
              Business
            </p>

            <div className="mt-5 grid gap-3 text-sm text-white/70">
              <a href="mailto:sales@pinakpani.com" className="hover:text-white">
                sales@pinakpani.com
              </a>

              <a href="tel:+919876543210" className="hover:text-white">
                +91 98765 43210
              </a>

              <p>Mumbai, Maharashtra, India</p>
            </div>

            {/* TRUST BADGES */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-white/40">
                Trusted & Certified
              </p>

              <div className="mt-3 flex flex-wrap gap-3">
                <span className="rounded border border-white/20 px-3 py-1 text-xs">
                  ISO Certified
                </span>
                <span className="rounded border border-white/20 px-3 py-1 text-xs">
                  FSSAI Approved
                </span>
                <span className="rounded border border-white/20 px-3 py-1 text-xs">
                  100% Quality
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row sm:justify-between">
          <p>© 2026 Pinak Pani Enterprises. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}