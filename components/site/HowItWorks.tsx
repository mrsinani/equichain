"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  Search,
  Banknote,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: UserPlus,
    title: "Create an account",
    description:
      "Verify your identity and accreditation in minutes. Bank-grade KYC, no paperwork marathon.",
  },
  {
    icon: Search,
    title: "Browse vetted opportunities",
    description:
      "Filter by strategy, vintage, manager, and minimum. Every deck is pre-screened by our diligence team.",
  },
  {
    icon: Banknote,
    title: "Invest with lower minimums",
    description:
      "Commit from $500. Funding, subscription docs, and capital calls handled end-to-end in-app.",
  },
  {
    icon: BarChart3,
    title: "Track and manage",
    description:
      "Live portfolio view, distributions, IRR, and an optional secondary transfer flow when you want out.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <SectionHeading
        eyebrow="How it works"
        title={
          <>
            From sign-up to first investment in{" "}
            <span className="text-gradient">under 10 minutes</span>.
          </>
        }
        description="A four-step journey designed to feel as familiar as opening a brokerage account."
      />

      <div className="relative mt-16">
        {/* Connecting line (desktop) */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:block"
        />

        <ol className="grid gap-8 md:grid-cols-4 md:gap-6">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col"
            >
              {/* Numbered node */}
              <div className="relative flex items-center">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#070b16] shadow-[0_0_30px_-10px_rgba(96,165,250,0.8)]">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/20 to-emerald-400/10">
                    <s.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <span className="ml-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-5 text-base font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300/90">
                {s.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
