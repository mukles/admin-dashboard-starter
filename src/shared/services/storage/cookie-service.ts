import Cookies from "js-cookie";
import { encryptionService } from "../encryption/encryption-service";

type Keys = "accessToken" | "refreshToken";

interface CookieOptions {
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: "Lax" | "Strict" | "None";
}

export const cookieService = {
  setCookie(name: Keys, value: any, options?: CookieOptions): void {
    const encryptedValue = encryptionService.encrypt(value);
    Cookies.set(name, encryptedValue, options);
  },

  getCookie(name: Keys): any {
    const encryptedValue = Cookies.get(name);
    if (!encryptedValue) return null;
    return encryptionService.decrypt(encryptedValue);
  },

  removeCookie(name: Keys): void {
    Cookies.remove(name);
  },
};
