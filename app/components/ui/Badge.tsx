import React from "react";
import { cn } from "@/app/utils/cn";

type Props = {
  label: string;
  status?: StatusColor;
  className?: string;
};

type StatusColor = "success" | "warning" | "info" | "error";

export default function Badge({ label, status = "success", className }: Props) {
  const statusOptions = {
    success: "bg-green-100 text-green-700 border border-green-200",
    warning: "bg-yellow-100 text-yellow-800 border border-yellow-200",
    info: "bg-blue-100 text-blue-700 border border-blue-200",
    error: "bg-red-100 text-red-700 border border-red-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wide",
        statusOptions[status],
        className
      )}
    >
      {label}
    </span>
  );
}

