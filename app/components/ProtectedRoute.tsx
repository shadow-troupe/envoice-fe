// components/ProtectedRoute.tsx
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "../utils/authUtils";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await isAuthenticated();
      
      if (!authenticated) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    };
    
    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return <>{children}</>;
}