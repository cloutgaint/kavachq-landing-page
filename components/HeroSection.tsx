
"use client";

import { motion } from "framer-motion";
import { Activity, RefreshCcw, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl md:p-10">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
      <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/10 px-4 py-2 text-sm text-cyan-100 backdrop-blur">
            <ShieldCheck size={16} />
            Kavach-Q Quantum Security Platform
          </div>

          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            Quantum Security Dashboard
          </h1>

          <p className="mt-4 max-w-2xl text-base text-slate-300 md:text-lg">
            Monitor scans, assets, QVS risks, scanner health, and cyber posture.
          </p>

          <button className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-1 hover:shadow-xl">
            <RefreshCcw size={18} />
            Refresh Dashboard
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, rotateX: 25, rotateY: -20 }}
          animate={{ opacity: 1, rotateX: 0, rotateY: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-[0_25px_80px_rgba(59,130,246,0.35)] backdrop-blur-xl lg:w-[360px]"
        >
          <div className="rounded-[1.5rem] bg-slate-900 p-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-400">Cyber Posture</p>
              <Activity className="text-cyan-300" />
            </div>

            <h2 className="mt-5 text-6xl font-black">82%</h2>

            <p className="mt-2 text-cyan-300">
              Protected but needs QVS review
            </p>

            <div className="mt-6 space-y-3">
              <div className="h-3 rounded-full bg-slate-700">
                <div className="h-3 w-[82%] rounded-full bg-linear-to-r from-blue-500 to-cyan-400" />
              </div>

              <div className="grid grid-cols-3 gap-3 text-center text-sm">
                <div className="rounded-xl bg-white/10 p-3">
                  <p className="text-slate-400">Scans</p>
                  <p className="font-bold">128</p>
                </div>

                <div className="rounded-xl bg-white/10 p-3">
                  <p className="text-slate-400">QVS</p>
                  <p className="font-bold text-red-300">18</p>
                </div>

                <div className="rounded-xl bg-white/10 p-3">
                  <p className="text-slate-400">Assets</p>
                  <p className="font-bold">2.4K</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}