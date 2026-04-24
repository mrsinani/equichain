"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#persona", label: "For investors" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-[#070b16]/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-8">
        <Link href="#top" className="flex items-center gap-2.5 group">
          <span className="relative h-8 w-8 overflow-hidden rounded-lg ring-1 ring-white/15 shadow-[0_0_20px_-8px_#60a5fa]">
            <Image
              src="/equichain.jpg"
              alt="EquiChain"
              fill
              className="object-cover"
              sizes="32px"
              priority
            />
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-white">
            EquiChain
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#waitlist"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-white text-[#070b16] px-4 py-2 text-sm font-medium shadow-[0_0_30px_-10px_rgba(96,165,250,0.8)] hover:shadow-[0_0_30px_-4px_rgba(96,165,250,0.9)] transition-shadow"
          >
            Join waitlist
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden rounded-md p-2 text-slate-200 hover:bg-white/5"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#070b16]/95 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#waitlist"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-white px-3 py-2 text-center text-sm font-medium text-[#070b16]"
            >
              Join waitlist
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
