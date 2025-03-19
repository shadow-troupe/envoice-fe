// Login.tsx
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Define schema for login form
const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

type AuthResponse = {
  accessToken: string;
  refreshToken: string;
  user?: {
    id: string;
    email: string;
    username?: string;
  };
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const onSubmit = async (data: LoginFormData) => {
    try {
      // Validate with zod
      loginSchema.parse(data);
      
      setErrorMessage("");
      
      // Connect to your API endpoint
      const response = await fetch("http://localhost:4567/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Invalid email or password");
        } else {
          const errorData = await response.json();
          throw new Error(errorData.message || "Login failed");
        }
      }

      // Parse the successful response
      const authData: AuthResponse = await response.json();
      
      // Store tokens in localStorage
      localStorage.setItem("accessToken", authData.accessToken);
      localStorage.setItem("refreshToken", authData.refreshToken);
      
      // Optional: Store user info if available
      if (authData.user) {
        localStorage.setItem("user", JSON.stringify(authData.user));
      }
      
      // Set authorization header for future requests
      // This could also be handled by an interceptor/middleware
      if (typeof window !== "undefined") {
        // Using sessionStorage for a more secure, session-based approach
        // or use an httpOnly cookie set from your backend for even better security
        sessionStorage.setItem("isAuthenticated", "true");
      }
      
      // Success - redirect to dashboard
      router.push("/dashboard");
      
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        const errors = error.errors.map(e => `${e.path}: ${e.message}`).join(', ');
        setErrorMessage(`Validation error: ${errors}`);
      } else {
        setErrorMessage(error.message || "An error occurred");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-black mb-6">Login</h2>

        {errorMessage && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
            <p>{errorMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-black mb-1">Email</label>
            <input 
              type="email" 
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address"
                }
              })} 
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md text-black bg-white" 
            />
            {errors.email && <p className="text-red-600 font-medium mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-lg font-medium text-black mb-1">Password</label>
            <input 
              type="password" 
              {...register("password", { 
                required: "Password is required"
              })} 
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md text-black bg-white" 
            />
            {errors.password && <p className="text-red-600 font-medium mt-1">{errors.password.message}</p>}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-green-600 hover:text-green-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting} 
            className="w-full bg-green-600 text-white py-3 px-4 rounded-md text-lg font-bold hover:bg-green-700 transition-colors disabled:bg-green-400"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Don't have an account?{" "}
            <Link href="/signup" className="text-green-600 font-semibold hover:text-green-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}