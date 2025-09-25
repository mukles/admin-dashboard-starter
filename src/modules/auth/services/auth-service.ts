import apiClient from "@/shared/services/api-client";

export const authService = {
  login: (email: string, password: string) => {
    return apiClient.post("/auth/login", { email, password });
  },
  logout: () => {
    return apiClient.post("/auth/logout");
  },
};
