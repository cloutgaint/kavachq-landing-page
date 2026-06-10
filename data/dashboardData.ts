import {
  Radar,
  Database,
  AlertTriangle,
  Bug,
} from "lucide-react";

import type { Metric, Risk } from "../types/dashboard";

export const metrics: Metric[] = [
  {
    title: "Total Scans",
    value: "128",
    note: "+12 scans this week",
    icon: Radar,
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Assets Discovered",
    value: "2,460",
    note: "96 new assets found",
    icon: Database,
    color: "from-indigo-500 to-violet-500",
  },
  {
    title: "Critical QVS Alerts",
    value: "18",
    note: "Needs immediate action",
    icon: AlertTriangle,
    color: "from-rose-500 to-red-500",
  },
  {
    title: "Open Findings",
    value: "342",
    note: "42 pending review",
    icon: Bug,
    color: "from-amber-500 to-orange-400",
  },
];

export const riskData: Risk[] = [
  {
    label: "Critical",
    count: 18,
    style: "bg-red-50 text-red-700 border-red-200",
  },
  {
    label: "High",
    count: 64,
    style: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    label: "Medium",
    count: 142,
    style: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    label: "Low",
    count: 118,
    style: "bg-green-50 text-green-700 border-green-200",
  },
];