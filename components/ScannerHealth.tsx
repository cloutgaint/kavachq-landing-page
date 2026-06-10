import { Activity, Cpu, Server, type LucideIcon } from "lucide-react";

type HealthBoxProps = {
  icon: LucideIcon;
  title: string;
  value: string;
  color: "blue" | "green" | "violet";
};

function HealthBox({ icon: Icon, title, value, color }: HealthBoxProps) {
  const colorClass: Record<HealthBoxProps["color"], string> = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    violet: "bg-violet-100 text-violet-600",
  };

  return (
    <div className="rounded-2xl bg-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-md">
      <div
        className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl ${colorClass[color]}`}
      >
        <Icon />
      </div>

      <p className="text-sm text-slate-500">{title}</p>

      <h3 className="mt-1 text-xl font-bold text-slate-900">
        {value}
      </h3>
    </div>
  );
}

export default function ScannerHealth() {
  const scannerActive = true;

  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200 lg:col-span-2">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-900">
            Scanner Engine Health
          </h2>

          <p className="mt-1 text-slate-500">
            Scanner daemon and security engine monitoring.
          </p>
        </div>

        <span
          className={`inline-flex w-fit rounded-full px-4 py-2 text-sm font-semibold ${
            scannerActive
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {scannerActive ? "Scanner Active" : "Scanner Offline"}
        </span>
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-3">
        <HealthBox
          icon={Server}
          title="Node ID"
          value="KQ-NODE-01"
          color="blue"
        />

        <HealthBox
          icon={Activity}
          title="Status"
          value="Healthy"
          color="green"
        />

        <HealthBox
          icon={Cpu}
          title="Mode"
          value="Enterprise Scan"
          color="violet"
        />
      </div>
    </div>
  );
}