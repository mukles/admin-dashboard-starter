import { redirect } from "@tanstack/react-router";
import axios from "axios";
import { ENV } from "../constant";
import { RefreshTokenResponse } from "../types";
import { cookieService } from "./storage";

const apiClient = axios.create({
  baseURL: ENV.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = cookieService.getCookie("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const refreshToken = async (): Promise<string | null> => {
  try {
    const currentRefreshToken = cookieService.getCookie("refreshToken");
    if (!currentRefreshToken) {
      console.warn("No refresh token available");
      return null;
    }

    console.log("🔄 Attempting to refresh token...");

    // Use a separate axios instance to avoid interceptor conflicts
    const refreshResponse = await axios.post<RefreshTokenResponse>(
      `${import.meta.env.VITE_API_URL || "/api"}/auth/refresh-token`,
      { refreshToken: currentRefreshToken },
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000, // 10 second timeout
      }
    );

    const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
      refreshResponse.data;

    if (!newAccessToken || !newRefreshToken) {
      throw new Error("Invalid token response format");
    }

    // Update cookies with new tokens
    cookieService.setCookie("accessToken", newAccessToken);
    cookieService.setCookie("refreshToken", newRefreshToken);

    console.log("✅ Token refreshed successfully");
    return newAccessToken;
  } catch (error) {
    console.error("❌ Failed to refresh token:", error);

    // Clear invalid tokens
    cookieService.removeCookie("accessToken");
    cookieService.removeCookie("refreshToken");

    return null;
  }
};

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response ? error.response.status : null;

    if (status === 401) {
      // go for refresh token

      const newToken = await refreshToken();
      if (newToken) {
        error.config.headers.Authorization = `Bearer ${newToken}`;
        return apiClient.request(error.config);
      } else {
        redirect({ to: "/login" });
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
