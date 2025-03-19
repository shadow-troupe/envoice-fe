// EmailConfirmation.tsx
"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function EmailConfirmation() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="mb-6">
          <div className="bg-green-100 h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-12 w-12 text-green-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" 
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Check your email</h2>
          <p className="text-xl text-gray-600">
            We've sent a confirmation link to:
          </p>
          <p className="text-xl font-medium text-blue-600 mb-4">
            {email || "your email address"}
          </p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <p className="text-gray-800 mb-4">
            Please click the link in that email to verify your account. If you don't see the email, check your spam folder.
          </p>
          <div className="flex items-center justify-center text-gray-500">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <p>Link expires in {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <button 
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"
            onClick={() => setTimeLeft(60)}
          >
            Resend Email
          </button>
          
          <Link href="/login" className="block w-full text-center py-3 px-4 border-2 border-gray-300 rounded-md text-lg font-medium text-gray-600 hover:bg-gray-50 transition-colors">
            Back to Login
          </Link>
        </div>
        
        <div className="mt-8 text-gray-500">
          <p>Need help? <a href="#" className="text-blue-600 hover:underline">Contact Support</a></p>
        </div>
      </div>
    </div>
  );
}