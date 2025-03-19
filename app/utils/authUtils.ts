// authUtils.ts
import { jwtDecode } from "jwt-decode";

// Type for decoded JWT token
interface DecodedToken {
  exp: number;
  // Add other fields from your JWT token here
  userId?: string;
  email?: string;
}

// Function to check if access token is expired
export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded = jwtDecode<DecodedToken>(token);
    const currentTime = Date.now() / 1000;
    
    return decoded.exp < currentTime;
  } catch (error) {
    // If token can't be decoded, consider it expired
    return true;
  }
};

// Function to refresh the access token
export const refreshAccessToken = async (): Promise<string | null> => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    
    if (!refreshToken) {
      return null;
    }
    
    const response = await fetch("http://localhost:4567/auth/refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });
    
    if (!response.ok) {
      throw new Error("Failed to refresh token");
    }
    
    const data = await response.json();
    
    // Update the stored tokens
    localStorage.setItem("accessToken", data.accessToken);
    if (data.refreshToken) {
      localStorage.setItem("refreshToken", data.refreshToken);
    }
    
    return data.accessToken;
  } catch (error) {
    console.error("Error refreshing token:", error);
    return null;
  }
};

// Function to get the current access token, refreshing if needed
export const getAccessToken = async (): Promise<string | null> => {
  const accessToken = localStorage.getItem("accessToken");
  
  if (!accessToken) {
    return null;
  }
  
  if (isTokenExpired(accessToken)) {
    return await refreshAccessToken();
  }
  
  return accessToken;
};

// Function to check if user is authenticated
export const isAuthenticated = async (): Promise<boolean> => {
  return await getAccessToken() !== null;
};

// Function to logout user
export const logout = (): void => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");
  sessionStorage.removeItem("isAuthenticated");
  
  // Redirect to login page
  window.location.href = "/login";
};