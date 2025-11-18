import React from "react";
import Header from "../components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100 w-screen ">
      <Header />

      {children}
    </div>
  );
}
