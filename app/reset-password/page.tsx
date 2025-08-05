// /pages/reset-password.tsx
"use client";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ResetPassword() {
  const router = useRouter();
  const { token } = router.query;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!token) return;
    // Optional: Validate token on page load by calling backend
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      setIsSubmitting(false);
      return;
    }

    try {
        await axios.post(`/api/auth/reset-password/${token}`, {
            password,
          });
          
      setMessage("Password reset successfully!");
      router.push("/login");
    } catch (err: any) {
      setMessage(
        err?.response?.data?.message || "Something went wrong. Try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Reset Your Password
        </h2>

        {message && <p className="text-red-500 mb-4">{message}</p>}

        <div className="mb-4">
          <label className="block text-gray-700">New Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          {isSubmitting ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
}
