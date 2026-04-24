"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  Sparkles,
  LineChart,
  Repeat,
  type LucideIcon,
} from "lucide-react";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
}

const features: Feature[] = [
  {
    icon: DollarSign,
    title: "Lower minimums",
    description:
      "Start from $500 instead of $250,000. Access the same underlying funds as institutional LPs.",
    accent: "from-cyan-400/30 to-blue-400/10",
  },
  {
    icon: Sparkles,
    title: "Curated opportunities",
    description:
      "Every deal is screened by a diligence framework covering manager track record, strategy fit, and terms.",
    accent: "from-emerald-400/30 to-teal-400/10",
  },
  {
    icon: LineChart,
    title: "Real-time dashboard",
    description:
      "Live NAV estimates, capital calls, distributions, and IRR, all in one clean interface.",
    accent: "from-violet-400/30 to-indigo-400/10",
  },
  {
    icon: Repeat,
    title: "Liquidity options",
    description:
      "A built-in secondary marketplace lets verified investors transfer positions before fund maturity.",
    accent: "from-amber-400/30 to-rose-400/10",
  },
];

export function Solution() {
  return (
    <Section id="solution">
      <SectionHeading
        eyebrow="The solution"
        title={
          <>
            EquiChain makes private markets{" "}
            <span className="text-gradient-accent">more accessible</span>.
          </>
        }
        description="A modern investing stack for a historically inaccessible asset class, without the gatekeepers."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.article
            key={f.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="card-glass group relative flex flex-col p-6 transition-all hover:-translate-y-0.5 hover:border-white/15"
          >
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${f.accent} ring-1 ring-white/10`}
            >
              <f.icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="mt-5 text-base font-semibold text-white">
              {f.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300/90">
              {f.description}
            </p>
            <div className="mt-6 flex items-center gap-1.5 text-xs text-slate-500 opacity-0 transition-opacity group-hover:opacity-100">
              <span>Learn more</span>
              <span aria-hidden>→</span>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
