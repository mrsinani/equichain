"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Info, GraduationCap } from "lucide-react";

export function Trust() {
  return (
    <section id="trust" className="w-full py-16">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="card-glass relative flex flex-col items-start gap-5 overflow-hidden p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-7"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/25 to-rose-400/10 ring-1 ring-white/10">
              <GraduationCap className="h-5 w-5 text-amber-200" />
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/5 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-amber-200">
              <ShieldCheck className="h-3 w-3" />
              Concept prototype
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-base font-semibold text-white">
              Educational use only, not financial advice.
            </h3>
            <p className="mt-1.5 flex items-start gap-2 text-sm leading-relaxed text-slate-300/90">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
              <span>
                EquiChain is a student concept prototype for educational
                purposes. This site does not offer securities or investment
                advice. Any figures, funds, or performance data shown are
                illustrative and do not represent real financial products.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
