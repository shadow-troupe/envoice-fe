// Signup.tsx
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

// Define schema based on your UserSignUpDto
const signupSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  country: z.string().optional(),
});

type SignupFormData = z.infer<typeof signupSchema>;

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>();

  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const onSubmit = async (data: SignupFormData) => {
    try {
      // Validate with zod
      signupSchema.parse(data);
      
      setErrorMessage("");
      
      // Connect to your API endpoint
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (!response.ok) {
        if (response.status === 409) {
          throw new Error("Email or username already taken");
        } else if (response.status === 403) {
          throw new Error("Credentials already taken");
        } else {
          throw new Error(result.message || "Registration failed");
        }
      }

      // Success - redirect to confirmation page with email
      router.push(`/email-confirmation?email=${encodeURIComponent(data.email)}`);
      
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
        <h2 className="text-3xl font-bold text-center text-black mb-6">Sign Up</h2>

        {errorMessage && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
            <p>{errorMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-black mb-1">Username</label>
            <input 
              {...register("username", { required: "Username is required" })} 
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md text-black bg-white" 
            />
            {errors.username && <p className="text-red-600 font-medium mt-1">{errors.username.message}</p>}
          </div>

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
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long"
                }
              })} 
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md text-black bg-white" 
            />
            {errors.password && <p className="text-red-600 font-medium mt-1">{errors.password.message}</p>}
          </div>

          <div>
            <label className="block text-lg font-medium text-black mb-1">Country (Optional)</label>
            <input 
              {...register("country")} 
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md text-black bg-white" 
            />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting} 
            className="w-full bg-green-600 text-white py-3 px-4 rounded-md text-lg font-bold hover:bg-green-700 transition-colors disabled:bg-green-400"
          >
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}