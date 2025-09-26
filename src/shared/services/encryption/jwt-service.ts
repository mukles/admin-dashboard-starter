import { User } from "@/modules/auth";
import { jwtDecode } from "jwt-decode";
import { cookieService } from "../storage/cookie-service";
import { localStorageService } from "../storage/local-storage-service";

export interface Session extends User {}

export const decodeJwt = (token: string): Session | null => {
  try {
    // console.log("Decoding JWT:", token);
    return jwtDecode(token);
  } catch (error) {
    console.error(
      "JWT Decoding Error:",
      error instanceof Error ? error.message : error
    );
    return null;
  }
};

export const getSession = (): Session | null => {
  const accessToken =
    cookieService.getCookie("accessToken") ||
    localStorageService.getItem("accessToken");
  if (!accessToken) return null;
  return decodeJwt(accessToken);
};

export const isAuthenticated = (): boolean => {
  const session = getSession();
  if (!session) return false;
  return !!session.id;
};
