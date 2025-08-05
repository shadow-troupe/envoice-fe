"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "../components/ProtectedRoute";

const base_url = 'http://localhost:4567';

interface AuthUser {
  id: string;
  username: string;
  email: string;
}

export default function DashboardPage() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const res = await fetch(`${base_url}/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch user");

        const json = await res.json();
        setUser(json.data);
      } catch (error) {
        console.error("Error fetching current user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

          <div className="bg-white shadow-lg rounded-lg p-6">
            {loading ? (
              <p className="text-lg text-gray-700">Loading user data...</p>
            ) : (
              <p className="text-lg text-gray-700">
                Welcome {user?.username}! 
              </p>
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
