"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const sparkPoints = [12, 14, 13, 16, 18, 17, 22, 24, 23, 27, 30, 34];

const opportunities = [
  {
    name: "Orbital AI",
    stage: "Series C",
    min: "$500",
    progress: 72,
    tag: "Venture",
    delta: "+18.4%",
  },
  {
    name: "Kestrel Bio",
    stage: "Growth",
    min: "$1,000",
    progress: 48,
    tag: "Growth",
    delta: "+9.1%",
  },
  {
    name: "Helios Energy",
    stage: "LBO",
    min: "$2,500",
    progress: 91,
    tag: "Buyout",
    delta: "+12.7%",
  },
];

function Sparkline() {
  const width = 520;
  const height = 120;
  const pad = 6;
  const max = Math.max(...sparkPoints);
  const min = Math.min(...sparkPoints);
  const range = max - min || 1;

  const coords = sparkPoints.map((p, i) => {
    const x = pad + (i * (width - pad * 2)) / (sparkPoints.length - 1);
    const y = height - pad - ((p - min) / range) * (height - pad * 2);
    return [x, y] as const;
  });

  // Smooth path using Catmull-Rom-like cubic
  let d = `M ${coords[0][0]} ${coords[0][1]}`;
  for (let i = 0; i < coords.length - 1; i++) {
    const [x0, y0] = coords[i];
    const [x1, y1] = coords[i + 1];
    const cx = (x0 + x1) / 2;
    d += ` C ${cx} ${y0}, ${cx} ${y1}, ${x1} ${y1}`;
  }

  const area = `${d} L ${coords[coords.length - 1][0]} ${height - pad} L ${coords[0][0]} ${height - pad} Z`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-full w-full"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#60a5fa" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#areaGrad)" />
      <motion.path
        d={d}
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth={2.25}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />
      {/* latest dot */}
      <motion.circle
        cx={coords[coords.length - 1][0]}
        cy={coords[coords.length - 1][1]}
        r={4}
        fill="#34d399"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.4, type: "spring", stiffness: 260 }}
      />
      <motion.circle
        cx={coords[coords.length - 1][0]}
        cy={coords[coords.length - 1][1]}
        r={8}
        fill="#34d399"
        opacity={0.25}
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.6, 1] }}
        transition={{ delay: 1.5, duration: 1.8, repeat: Infinity }}
      />
    </svg>
  );
}

function Donut() {
  const segments = [
    { label: "Venture", value: 42, color: "#60a5fa" },
    { label: "Growth", value: 28, color: "#34d399" },
    { label: "Buyout", value: 20, color: "#a78bfa" },
    { label: "Secondaries", value: 10, color: "#f472b6" },
  ];
  const total = 100;
  const radius = 36;
  const circ = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="flex items-center gap-4">
      <svg viewBox="0 0 100 100" className="h-24 w-24 -rotate-90">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="12"
        />
        {segments.map((s, i) => {
          const length = (s.value / total) * circ;
          const dasharray = `${length} ${circ - length}`;
          const dashoffset = -offset;
          offset += length;
          return (
            <motion.circle
              key={s.label}
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke={s.color}
              strokeWidth="12"
              strokeDasharray={dasharray}
              strokeDashoffset={dashoffset}
              strokeLinecap="butt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.4 }}
            />
          );
        })}
      </svg>
      <ul className="flex flex-col gap-1.5 text-xs">
        {segments.map((s) => (
          <li key={s.label} className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: s.color }}
            />
            <span className="text-slate-300">{s.label}</span>
            <span className="text-slate-500">{s.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function DashboardMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative"
    >
      {/* Soft glow behind */}
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-transparent to-emerald-500/20 blur-3xl"
      />

      <div className="card-glass p-5 sm:p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
        {/* Mock window chrome */}
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400">
            equichain.app / portfolio
          </span>
          <span className="h-2 w-12" />
        </div>

        {/* Portfolio header */}
        <div className="flex items-end justify-between gap-4 pt-1">
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
              Portfolio value
            </p>
            <div className="mt-1 flex items-baseline gap-3">
              <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-white tabular-nums">
                $48,230.17
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[11px] font-medium text-emerald-300">
                <TrendingUp className="h-3 w-3" />
                +14.2% YTD
              </span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-0.5 text-[11px] text-slate-300">
            {["1M", "3M", "YTD", "1Y", "All"].map((r, i) => (
              <span
                key={r}
                className={
                  i === 2
                    ? "rounded-full bg-white/10 px-2.5 py-1 text-white"
                    : "px-2.5 py-1"
                }
              >
                {r}
              </span>
            ))}
          </div>
        </div>

        {/* Sparkline */}
        <div className="mt-4 h-[120px] rounded-xl border border-white/5 bg-white/[0.015] p-2">
          <Sparkline />
        </div>

        {/* Opportunities + Allocation */}
        <div className="mt-5 grid gap-4 md:grid-cols-[1.2fr_1fr]">
          <div className="rounded-xl border border-white/5 bg-white/[0.015] p-4">
            <div className="flex items-center justify-between pb-3">
              <h4 className="text-sm font-medium text-white">
                Live opportunities
              </h4>
              <span className="text-[11px] text-slate-400">3 new today</span>
            </div>
            <ul className="flex flex-col gap-2.5">
              {opportunities.map((o, i) => (
                <motion.li
                  key={o.name}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400/30 to-emerald-400/20 text-[10px] font-semibold text-white ring-1 ring-white/10">
                    {o.name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="truncate text-sm font-medium text-white">
                        {o.name}
                      </p>
                      <span className="text-[11px] text-emerald-300">
                        {o.delta}
                      </span>
                    </div>
                    <div className="mt-0.5 flex items-center gap-2 text-[11px] text-slate-400">
                      <span>{o.stage}</span>
                      <span className="h-1 w-1 rounded-full bg-slate-600" />
                      <span>Min {o.min}</span>
                    </div>
                    <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${o.progress}%` }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                      />
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-500" />
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/[0.015] p-4">
            <div className="flex items-center justify-between pb-3">
              <h4 className="text-sm font-medium text-white">Allocation</h4>
              <span className="text-[11px] text-slate-400">4 classes</span>
            </div>
            <Donut />
          </div>
        </div>
      </div>

      {/* Floating accent cards */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="absolute -left-4 -top-4 hidden sm:block animate-floaty-slow"
      >
        <div className="card-glass px-3 py-2 text-[11px]">
          <span className="text-slate-400">IRR (net)</span>
          <span className="ml-2 font-semibold text-white">22.4%</span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute -right-4 bottom-8 hidden sm:block animate-floaty"
      >
        <div className="card-glass px-3 py-2 text-[11px]">
          <span className="text-slate-400">Next distribution</span>
          <span className="ml-2 font-semibold text-emerald-300">+$1,284</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
