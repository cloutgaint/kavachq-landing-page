"use client";

import { motion } from "framer-motion";
import { metrics } from "../data/dashboardData";

export default function MetricsGrid() {
  return (
    <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group rounded-3xl bg-white p-6 shadow-lg shadow-slate-200 transition hover:-translate-y-2 hover:shadow-2xl"
          >
            <div
              className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg transition group-hover:scale-110`}
            >
              <Icon size={26} />
            </div>

            <p className="text-sm font-medium text-slate-500">
              {item.title}
            </p>

            <h3 className="mt-2 text-4xl font-black text-slate-900">
              {item.value}
            </h3>

            <p className="mt-3 text-sm text-slate-500">{item.note}</p>
          </motion.div>
        );
      })}
    </section>
  );
}