"use client";

import { motion } from "framer-motion";
import { Bitcoin, LineChart, PiggyBank, Quote } from "lucide-react";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

const holdings = [
  { label: "Stocks & ETFs", value: "58%", icon: LineChart },
  { label: "Crypto", value: "22%", icon: Bitcoin },
  { label: "Cash / HYSA", value: "20%", icon: PiggyBank },
];

export function Persona() {
  return (
    <Section id="persona">
      <SectionHeading
        eyebrow="Who it's for"
        title={
          <>
            Built for the next generation of{" "}
            <span className="text-gradient-accent">serious investors</span>.
          </>
        }
        description="Young professionals who already invest thoughtfully across public markets — and want real exposure to what comes next."
      />

      <div className="mt-14 grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Persona card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="card-glass relative overflow-hidden p-8"
        >
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-emerald-400 text-xl font-semibold text-[#070b16] shadow-[0_0_40px_-10px_rgba(96,165,250,0.8)]">
                JL
              </div>
              <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-[#070b16] bg-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Jasmine Lopez
              </h3>
              <p className="text-sm text-slate-400">
                25 · Product Designer · Austin, TX
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <Quote className="h-5 w-5 text-cyan-300" />
            <p className="mt-2 text-[15px] leading-relaxed text-slate-200">
              &ldquo;I already invest in stocks, ETFs, and crypto. I want
              access to the deals my boss invests in — without needing
              $100,000 and a wealth manager to get in.&rdquo;
            </p>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {holdings.map((h) => (
              <div
                key={h.label}
                className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-3"
              >
                <h.icon className="h-4 w-4 text-slate-400" />
                <div className="mt-1.5 text-lg font-semibold text-white tabular-nums">
                  {h.value}
                </div>
                <div className="text-[11px] text-slate-500">{h.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Journey panel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-5"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500">
                Before EquiChain
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Priced out of top-tier VC and PE funds. Reliant on public
                markets and a handful of crypto bets for upside. No visibility
                into the private deals shaping the next decade.
              </p>
            </div>
            <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.04] p-5">
              <p className="text-[11px] uppercase tracking-[0.14em] text-emerald-300">
                With EquiChain
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                $1,500 allocated across three vetted funds. Live tracking in
                her portfolio dashboard. A clear exit path via secondary
                transfer — all from her phone on a Sunday afternoon.
              </p>
            </div>
          </div>

          <div className="card-glass flex items-center gap-4 p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 ring-1 ring-white/10">
              <span className="text-lg font-semibold text-white">1.9M</span>
            </div>
            <div>
              <p className="text-sm font-medium text-white">
                Potential audience
              </p>
              <p className="text-xs text-slate-400">
                US millennials &amp; Gen Z with &gt;$50K invested but no PE
                access
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
