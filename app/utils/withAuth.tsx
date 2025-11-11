"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "./auth";

export function withAuth<P extends object>(Component: React.ComponentType<P>) {
  return function ProtectedRoute(props: P) {
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated()) {
        router.replace("/login");
      }
    }, []);

    if (!isAuthenticated()) return null;
    return <Component {...props} />;
  };
}
