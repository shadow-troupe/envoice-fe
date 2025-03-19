// app/dashboard/page.tsx
"use client";
import ProtectedRoute from "../components/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
          
          {/* Your dashboard content here */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-lg text-gray-700">
              Welcome to your dashboard! This page is protected and only accessible to authenticated users.
            </p>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}