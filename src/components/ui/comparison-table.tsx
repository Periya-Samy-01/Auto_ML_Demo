import React from "react";
import { Check, X, Sparkles, Cloud, Database } from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureCell = {
  main: string;
  sub: string;
  status: "success" | "fail" | "check" | "cross";
};

type FeatureRow = {
  feature: string;
  nodeforge: FeatureCell;
  sagemaker: FeatureCell;
  vertexai: FeatureCell;
};

const features: FeatureRow[] = [
  {
    feature: "Pricing",
    nodeforge: {
      main: "100% Free & Open Source",
      sub: "No credit card or surprise bills.",
      status: "success"
    },
    sagemaker: {
      main: "Pay-Per-Use Billing",
      sub: "Prone to massive idle instance costs.",
      status: "fail"
    },
    vertexai: {
      main: "Enterprise Premium",
      sub: "Expensive per-node hour rates.",
      status: "fail"
    }
  },
  {
    feature: "Learning Curve",
    nodeforge: {
      main: "Zero-Config / Beginner-Friendly",
      sub: "Learn ML concepts visually, not boilerplate.",
      status: "success"
    },
    sagemaker: {
      main: "Extremely Steep",
      sub: "Requires deep AWS Cloud & IAM expertise.",
      status: "fail"
    },
    vertexai: {
      main: "Complex Cloud Ecosystem",
      sub: "Built for seasoned enterprise engineers.",
      status: "fail"
    }
  },
  {
    feature: "Visual Node Canvas",
    nodeforge: {
      main: "Interactive Graph UI",
      sub: "Connect data to models with fluid nodes.",
      status: "check"
    },
    sagemaker: {
      main: "Tabular / Wizard Only",
      sub: "Hidden behind deeply nested menus.",
      status: "cross"
    },
    vertexai: {
      main: "Form-Based Interfaces",
      sub: "Lacks an intuitive pipeline map.",
      status: "cross"
    }
  },
  {
    feature: "Setup Time",
    nodeforge: {
      main: "Instant (< 5 Minutes)",
      sub: "Clone, launch, and train immediately.",
      status: "success"
    },
    sagemaker: {
      main: "Days to Weeks",
      sub: "Requires provisioning VPCs, S3, and roles.",
      status: "fail"
    },
    vertexai: {
      main: "Hours to Days",
      sub: "Tangled in complex GCP cloud configurations.",
      status: "fail"
    }
  },
  {
    feature: "Local Execution",
    nodeforge: {
      main: "Native Local Run",
      sub: "Process sensitive data right on your hardware.",
      status: "check"
    },
    sagemaker: {
      main: "Cloud-Locked Only",
      sub: "Data must be uploaded to AWS infrastructure.",
      status: "cross"
    },
    vertexai: {
      main: "Cloud-Locked Only",
      sub: "Strictly dependent on Google Cloud compute.",
      status: "cross"
    }
  }
];

const renderValue = (cell: FeatureCell, isPrimary = false) => {
  return (
    <div className="flex flex-col gap-1 items-center text-center">
      <div className="flex flex-col md:flex-row items-center gap-1 md:gap-1.5">
        {(cell.status === "check" || cell.status === "success") && <Check className={cn("w-3 h-3 md:w-4 md:h-4 shrink-0", isPrimary ? "text-emerald-500" : "text-emerald-500/70")} />}
        {(cell.status === "cross" || cell.status === "fail") && <X className="w-3 h-3 md:w-4 md:h-4 shrink-0 text-red-500/70" />}
        <span className={cn("font-semibold text-[10px] md:text-sm leading-tight", isPrimary ? "text-zinc-100" : "text-zinc-300")}>{cell.main}</span>
      </div>
      <span className={cn("hidden md:block text-xs max-w-[200px] text-balance", isPrimary ? "text-zinc-400" : "text-zinc-500")}>{cell.sub}</span>
    </div>
  );
};

export function ComparisonTable() {
  return (
    <div className="w-full max-w-5xl mx-auto py-8 md:py-12 px-2 md:px-6">
      <div className="w-full grid grid-cols-4 relative rounded-2xl border border-white/5 bg-surface/30 backdrop-blur-sm overflow-hidden">
        
        {/* Highlighted Column Backdrop */}
        <div className="absolute inset-y-0 left-[25%] w-[25%] bg-primary/10 z-0 pointer-events-none" />

        {/* Header Row */}
        <div className="col-span-4 grid grid-cols-4 border-b border-white/10 p-3 md:p-6 z-10 items-end">
          <div className="text-left px-1 md:px-4 font-semibold text-[10px] md:text-xl text-foreground">Features</div>
          
          <div className="px-1 md:px-4 flex flex-col items-center gap-1 md:gap-3 text-center">
            <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <Sparkles className="w-3 h-3 md:w-5 md:h-5" />
            </div>
            <span className="font-bold text-[10px] md:text-lg text-foreground tracking-tight leading-tight">NodeForge</span>
          </div>

          <div className="px-1 md:px-4 flex flex-col items-center gap-1 md:gap-3 text-center opacity-80">
            <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
              <Cloud className="w-3 h-3 md:w-5 md:h-5" />
            </div>
            <span className="font-semibold text-[10px] md:text-lg text-muted-foreground tracking-tight leading-tight">SageMaker</span>
          </div>

          <div className="px-1 md:px-4 flex flex-col items-center gap-1 md:gap-3 text-center opacity-80">
            <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
              <Database className="w-3 h-3 md:w-5 md:h-5" />
            </div>
            <span className="font-semibold text-[10px] md:text-lg text-muted-foreground tracking-tight leading-tight">Vertex AI</span>
          </div>
        </div>

        {/* Data Rows */}
        {features.map((item, i) => (
          <div
            key={i}
            className="col-span-4 grid grid-cols-4 border-b border-white/5 last:border-0 p-3 py-4 md:p-6 md:py-8 z-10 items-center text-center transition-colors hover:bg-white/[0.02]"
          >
            <div className="text-left px-1 md:px-4 font-medium text-muted-foreground text-[10px] md:text-lg leading-tight">{item.feature}</div>
            <div className="px-1 md:px-4 flex justify-center">
              {renderValue(item.nodeforge, true)}
            </div>
            <div className="px-1 md:px-4 flex justify-center">
              {renderValue(item.sagemaker)}
            </div>
            <div className="px-1 md:px-4 flex justify-center">
              {renderValue(item.vertexai)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
