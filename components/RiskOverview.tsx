import { riskData } from "../data/dashboardData";

export default function RiskOverview() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200">
      <h2 className="text-2xl font-black text-slate-900">
        Risk Overview
      </h2>

      <p className="mt-1 text-slate-500">
        Severity-wise vulnerability distribution.
      </p>

      <div className="mt-7 space-y-4">
        {riskData.map((risk) => (
          <div
            key={risk.label}
            className={`flex items-center justify-between rounded-2xl border px-5 py-4 transition hover:-translate-y-1 ${risk.style}`}
          >
            <span className="font-semibold">{risk.label}</span>
            <span className="text-2xl font-black">{risk.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}