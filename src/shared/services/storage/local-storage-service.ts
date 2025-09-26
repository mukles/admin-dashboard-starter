import { encryptionService } from "../encryption/encryption-service";

type Keys = "accessToken" | "refreshToken" | "user";

export const localStorageService = {
  setItem(key: Keys, value: any): void {
    const encryptedValue = encryptionService.encrypt(value);
    localStorage.setItem(key, encryptedValue);
  },

  getItem(key: Keys): any {
    const encryptedValue = localStorage.getItem(key);
    if (!encryptedValue) return null;
    return encryptionService.decrypt(encryptedValue);
  },

  removeItem(key: Keys): void {
    localStorage.removeItem(key);
  },
};
