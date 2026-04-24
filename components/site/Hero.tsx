"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck } from "lucide-react";
import { DashboardMock } from "./DashboardMock";

export function Hero() {
  return (
    <section
      id="top"
      className="relative w-full pt-32 sm:pt-36 pb-20 sm:pb-24 overflow-hidden"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300 backdrop-blur"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
            <span>Private Markets. Public Access.</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-semibold tracking-tight text-white text-balance text-[40px] sm:text-6xl md:text-[68px] leading-[1.05] sm:leading-[1.02]"
          >
            Invest{" "}
            <span className="font-display italic text-gradient-accent inline-block pr-[0.12em]">
              beyond
            </span>{" "}
            public markets.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-pretty text-base sm:text-lg text-slate-300/90"
          >
            EquiChain opens access to curated private equity opportunities once
            reserved for institutions and high-net-worth investors. Lower
            minimums. Real-time visibility. Real ownership.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              href="#solution"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#070b16] shadow-[0_0_50px_-10px_rgba(96,165,250,0.8)] hover:shadow-[0_0_60px_-8px_rgba(96,165,250,0.95)] transition-shadow"
            >
              Explore opportunities
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#how-it-works"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-5 py-3 text-sm font-medium text-white hover:bg-white/[0.05] transition-colors"
            >
              <PlayCircle className="h-4 w-4 text-slate-300 group-hover:text-white" />
              How it works
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-slate-400"
          >
            <div>
              <span className="block text-[11px] uppercase tracking-[0.14em] text-slate-500">
                Minimums from
              </span>
              <span className="mt-1 block text-xl font-semibold text-white tabular-nums">
                $500
              </span>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <span className="block text-[11px] uppercase tracking-[0.14em] text-slate-500">
                Vetted funds
              </span>
              <span className="mt-1 block text-xl font-semibold text-white tabular-nums">
                40+
              </span>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <span className="block text-[11px] uppercase tracking-[0.14em] text-slate-500">
                Avg. net IRR*
              </span>
              <span className="mt-1 block text-xl font-semibold text-white tabular-nums">
                18.6%
              </span>
            </div>
          </motion.div>
        </div>

        <div className="lg:pl-4">
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}
