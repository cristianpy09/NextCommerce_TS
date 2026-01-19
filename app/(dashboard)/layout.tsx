

import React from "react";
import Header from "@/app/components/features/layout/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen  w-screen ">
      <Header />

      {children}
    </div>
  );
}
