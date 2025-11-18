import React from "react";
type Props = {
  label: string;
  status?: statusColor;
  icon?: string;
};
type statusColor = "success" | "warning" | "info" | "error";

export default function Badge({ label, status = "success" }: Props) {
  const statusOptions = {
    success: "bg-green-400",
    warning: "bg-red-400",
    info: "bg-yellow-400",
    error: "",
  };

  return (
    <h1
      className={`absolute left-1/2 ${statusOptions[status]} text-white text-xs font-bold px-2 py-1 rounded `}
    >
      {label}
    </h1>
  );
}
