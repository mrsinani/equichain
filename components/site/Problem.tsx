"use client";

import { motion } from "framer-motion";
import { Lock, EyeOff, Coins } from "lucide-react";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

const pains = [
  {
    icon: Coins,
    title: "$100K+ minimums",
    description:
      "Most private funds gate entry at six-figure checks — effectively excluding anyone who isn't already wealthy.",
    stat: "$250K",
    statLabel: "typical PE fund minimum",
  },
  {
    icon: EyeOff,
    title: "Opaque performance",
    description:
      "Quarterly PDFs. Delayed marks. You learn what your capital is doing months after it already did it.",
    stat: "~90 days",
    statLabel: "average reporting lag",
  },
  {
    icon: Lock,
    title: "Locked for a decade",
    description:
      "Once committed, your capital is typically illiquid for 7–12 years — no exits, no flexibility, no secondary market.",
    stat: "10+ yrs",
    statLabel: "typical lock-up period",
  },
];

export function Problem() {
  return (
    <Section id="problem">
      <SectionHeading
        eyebrow="The problem"
        title={
          <>
            Private equity has been{" "}
            <span className="text-gradient">closed off</span> for too long.
          </>
        }
        description="The best-performing asset class of the last 30 years was built behind a velvet rope. Retail investors got the IPO leftovers."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {pains.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card-glass group relative overflow-hidden p-6 transition-transform hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-white/10 to-white/[0.02] ring-1 ring-white/10 text-slate-200">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-white">{p.title}</h3>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-300/90">
              {p.description}
            </p>

            <div className="mt-6 flex items-end justify-between border-t border-white/5 pt-4">
              <div>
                <div className="text-2xl font-semibold tracking-tight text-white tabular-nums">
                  {p.stat}
                </div>
                <div className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-slate-500">
                  {p.statLabel}
                </div>
              </div>
              <div className="h-8 w-12 overflow-hidden rounded bg-gradient-to-br from-rose-500/20 to-transparent">
                {/* subtle downward trend bar */}
                <svg viewBox="0 0 48 32" className="h-full w-full">
                  <path
                    d="M2 6 L12 14 L22 10 L32 22 L46 28"
                    fill="none"
                    stroke="#fb7185"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
