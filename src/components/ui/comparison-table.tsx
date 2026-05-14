import React from "react";
import { Check, X, Sparkles, Cloud, Database } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    name: "Pricing",
    us: "Free & Open Source",
    sagemaker: "Pay-per-use (Expensive)",
    vertex: "Pay-per-use (Expensive)",
  },
  {
    name: "Learning Curve",
    us: "Beginner-Friendly",
    sagemaker: "Steep (AWS Expert needed)",
    vertex: "Steep (GCP Expert needed)",
  },
  {
    name: "Visual Node Canvas",
    us: true,
    sagemaker: false,
    vertex: false,
  },
  {
    name: "Setup Time",
    us: "< 5 Minutes",
    sagemaker: "Days to Weeks",
    vertex: "Days to Weeks",
  },
  {
    name: "Local Execution",
    us: true,
    sagemaker: false,
    vertex: false,
  },
];

const renderValue = (value: boolean | string, isPrimary = false) => {
  if (typeof value === "boolean") {
    return value ? (
      <Check className={cn("w-5 h-5 mx-auto", isPrimary ? "text-emerald-500" : "text-emerald-500/70")} />
    ) : (
      <X className="w-5 h-5 mx-auto text-red-500/70" />
    );
  }
  return <span className={isPrimary ? "text-foreground font-medium" : ""}>{value}</span>;
};

export function ComparisonTable() {
  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-6 overflow-x-auto sm:overflow-visible">
      <div className="min-w-[800px] grid grid-cols-4 relative rounded-2xl border border-white/5 bg-surface/30 backdrop-blur-sm">
        
        {/* Highlighted Column Backdrop */}
        <div className="absolute -top-4 -bottom-4 left-[25%] w-[25%] border-2 border-primary/40 bg-primary/5 rounded-2xl z-0 pointer-events-none shadow-[0_0_30px_rgba(79,70,229,0.15)] ring-1 ring-primary/20" />

        {/* Header Row */}
        <div className="col-span-4 grid grid-cols-4 border-b border-white/10 p-6 z-10 items-end">
          <div className="text-left px-4 font-semibold text-xl text-foreground">Features</div>
          
          <div className="px-4 flex flex-col items-center gap-3 text-center">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg text-foreground tracking-tight">Our Platform</span>
          </div>

          <div className="px-4 flex flex-col items-center gap-3 text-center opacity-80">
            <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
              <Cloud className="w-5 h-5" />
            </div>
            <span className="font-semibold text-lg text-muted-foreground">SageMaker</span>
          </div>

          <div className="px-4 flex flex-col items-center gap-3 text-center opacity-80">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
              <Database className="w-5 h-5" />
            </div>
            <span className="font-semibold text-lg text-muted-foreground">Vertex AI</span>
          </div>
        </div>

        {/* Data Rows */}
        {features.map((feature, i) => (
          <div
            key={i}
            className="col-span-4 grid grid-cols-4 border-b border-white/5 last:border-0 p-6 z-10 items-center text-center transition-colors hover:bg-white/[0.02]"
          >
            <div className="text-left px-4 font-medium text-muted-foreground">{feature.name}</div>
            <div className="px-4 text-sm md:text-base">
              {renderValue(feature.us, true)}
            </div>
            <div className="px-4 text-sm text-muted-foreground">
              {renderValue(feature.sagemaker)}
            </div>
            <div className="px-4 text-sm text-muted-foreground">
              {renderValue(feature.vertex)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
