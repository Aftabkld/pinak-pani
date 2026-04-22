"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Products", href: "/products" },
  { label: "Recipes", href: "/recipes" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/#contact" }
];

function LoginIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 21a8 8 0 0 0-16 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M7.5 8.5h13l-1.4 7.2a2 2 0 0 1-2 1.6H9.2a2 2 0 0 1-2-1.7L5.8 5.8H3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9.5 21a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z" fill="currentColor" />
      <path d="M17.5 21a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z" fill="currentColor" />
    </svg>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 py-3 text-peacock-950 shadow-lg shadow-peacock-950/10 backdrop-blur-xl"
          : "bg-transparent py-5 text-white"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="Pinak Pani Enterprises home">
          <span
            className={`grid h-11 w-11 place-items-center rounded border transition-colors duration-300 ${
              isScrolled
                ? "border-peacock-900 bg-peacock-900 text-white"
                : "border-white/50 bg-white/10 text-white backdrop-blur"
            }`}
          >
            <span className="text-lg font-black tracking-[0.08em]">PP</span>
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-black uppercase tracking-[0.18em]">Pinak Pani</span>
            <span className={`block text-xs ${isScrolled ? "text-peacock-700" : "text-white/75"}`}>
              Enterprises
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 xl:gap-9 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`group/link relative py-2 text-[14px] font-black uppercase tracking-[0.1em] transition-colors duration-300 xl:text-[15px] ${
                isScrolled ? "text-slate-700 hover:text-[#0F3D3E]" : "text-white/90 hover:text-[#d9f3ff]"
              }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-current transition-all duration-300 group-hover/link:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            className={`grid h-10 w-10 place-items-center rounded border transition-all duration-200 ${
              isScrolled
                ? "border-peacock-100 bg-white text-peacock-900 hover:border-peacock-300 hover:bg-peacock-50"
                : "border-white/35 bg-white/10 text-white backdrop-blur hover:bg-white/20"
            }`}
            aria-label="Login"
          >
            <LoginIcon />
          </button>
          <button
            className={`relative grid h-10 w-10 place-items-center rounded border transition-all duration-200 ${
              isScrolled
                ? "border-peacock-100 bg-peacock-900 text-white hover:bg-peacock-700"
                : "border-white/35 bg-white text-peacock-900 hover:bg-peacock-50"
            }`}
            aria-label="Cart"
          >
            <CartIcon />
            <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded bg-royal-gold px-1 text-[11px] font-black text-peacock-950">
              0
            </span>
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className={`grid h-10 w-10 place-items-center rounded border transition-colors duration-200 lg:hidden ${
              isScrolled
                ? "border-peacock-100 text-peacock-950 hover:border-peacock-300"
                : "border-white/35 text-white backdrop-blur"
            }`}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
          >
            <span className="grid gap-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-peacock-950/35 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
      <aside
        className={`fixed bottom-0 right-0 top-0 z-50 w-[82%] max-w-sm bg-white px-7 py-7 text-peacock-950 shadow-[0_24px_80px_rgba(0,63,92,0.22)] transition-transform duration-300 ease-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-3"
            aria-label="Pinak Pani Enterprises home"
          >
            <span className="grid h-11 w-11 place-items-center rounded bg-peacock-900 text-white">
              <span className="text-lg font-black tracking-[0.08em]">PP</span>
            </span>
            <span>
              <span className="block text-sm font-black uppercase tracking-[0.18em]">Pinak Pani</span>
              <span className="block text-xs text-peacock-700">Enterprises</span>
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="grid h-10 w-10 place-items-center rounded border border-peacock-100 text-peacock-950 transition hover:border-peacock-300"
            aria-label="Close menu"
          >
            <span className="relative h-5 w-5">
              <span className="absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rotate-45 bg-current" />
              <span className="absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 -rotate-45 bg-current" />
            </span>
          </button>
        </div>

        <div className="mt-12 grid gap-7">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="group/link relative w-fit pb-2 text-2xl font-black tracking-normal text-slate-800 transition-colors duration-300 hover:text-[#0F3D3E]"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-current transition-all duration-300 group-hover/link:w-full" />
            </Link>
          ))}
        </div>
      </aside>
    </header>
  );
}
