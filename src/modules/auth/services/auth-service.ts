import apiClient from "@/shared/services/api-client";
import { User } from "../types";

const dummyUser: User = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  accessToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30",
  refreshToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30",
};

export const authService = {
  login: async (email: string, password: string) => {
    console.log("Logging in with", email, password);
    return new Promise<User>((resolve) => {
      setTimeout(() => {
        resolve(dummyUser);
      }, 1000);
      // return apiClient.post("/auth/login", { email, password });
    });
  },
  logout: () => {
    return apiClient.post("/auth/logout");
  },
};
