"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";

export function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 4000);
  }

  return (
    <section id="waitlist" className="w-full py-28 sm:py-32">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0b1326] via-[#080d1c] to-[#060914] p-10 sm:p-16 text-center"
        >
          {/* background flair */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(600px 300px at 50% 0%, rgba(96,165,250,0.25), transparent 60%), radial-gradient(500px 280px at 80% 100%, rgba(52,211,153,0.18), transparent 60%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, #000 20%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, #000 20%, transparent 75%)",
            }}
          />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d39980]" />
              Early access
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl text-balance text-[34px] sm:text-5xl md:text-[56px] font-semibold tracking-tight leading-[1.08] sm:leading-[1.05] text-white">
              Private markets should{" "}
              <span className="font-display italic text-gradient-accent inline-block pr-[0.1em]">
                not
              </span>{" "}
              stay private.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-pretty text-base sm:text-lg text-slate-300/90">
              Join the waitlist and be among the first to access EquiChain
              when we open beta to the public.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-9 flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-full border border-white/10 bg-white/[0.03] py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400/40 focus:bg-white/[0.05]"
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#070b16] shadow-[0_0_50px_-10px_rgba(96,165,250,0.8)] transition-all hover:shadow-[0_0_60px_-8px_rgba(96,165,250,0.95)] disabled:opacity-80"
              >
                {submitted ? (
                  <>
                    <Check className="h-4 w-4" />
                    You&apos;re on the list
                  </>
                ) : (
                  <>
                    Join the waitlist
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </form>

            <p className="mx-auto mt-4 max-w-md text-xs text-slate-500">
              No spam. No pitches. We&apos;ll email you once when beta opens.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
