"use client";

import { MapPin, Mail, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section className="px-4 py-12 lg:px-8 lg:py-16 bg-white">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-10 text-center">
          <p className="text-sm font-bold tracking-[0.2em] text-royal-gold">
            CONTACT US
          </p>
          <h2 className="mt-2 text-2xl font-black text-gray-900 lg:text-3xl">
            Let’s Connect With Us
          </h2>
        </div>

        {/* GRID */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="grid gap-6">

            {/* ADDRESS */}
            <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition">
              <MapPin className="text-peacock-950" size={20} />
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-royal-gold">
                  ADDRESS
                </p>
                <p className="mt-1 text-sm text-gray-700">
                  Pinak Pani Enterprises, Industrial Area, Mumbai, Maharashtra, India
                </p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition">
              <Mail className="text-peacock-950" size={20} />
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-royal-gold">
                  EMAIL
                </p>
                <a
                  href="mailto:sales@pinakpani.com"
                  className="mt-1 block text-sm text-gray-700 hover:text-black"
                >
                  sales@pinakpani.com
                </a>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition">
              <Phone className="text-peacock-950" size={20} />
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-royal-gold">
                  PHONE
                </p>
                <a
                  href="tel:+919876543210"
                  className="mt-1 block text-sm text-gray-700 hover:text-black"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>

            {/* MAP */}
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <iframe
                src="https://www.google.com/maps?q=Pinak%20Pani%20Enterprises%20Mumbai&output=embed"
                className="h-[250px] w-full"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="rounded-xl border border-gray-200 p-6 shadow-sm">

            <p className="text-sm font-bold tracking-[0.2em] text-royal-gold">
              SEND MESSAGE
            </p>

            <form className="mt-5 grid gap-4">

              <input
                type="text"
                placeholder="Your Name"
                className="rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-peacock-950"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-peacock-950"
              />

              <input
                type="tel"
                placeholder="Your Phone"
                className="rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-peacock-950"
              />

              <textarea
                rows={4}
                placeholder="Your Message"
                className="rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-peacock-950"
              ></textarea>

              <button
                type="submit"
                className="mt-2 rounded bg-peacock-950 py-2 text-sm font-semibold text-white transition hover:bg-royal-gold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}