import { ENV } from "@/shared/constant";
import CryptoJS from "crypto-js";

export const encryptionService = {
  encrypt(data: Record<string, any>): string {
    const stringData: string = JSON.stringify(data);
    return CryptoJS.AES.encrypt(stringData, ENV.JWT_SECRET_KEY).toString();
  },

  decrypt(cipherText: string): any {
    try {
      const bytes = CryptoJS.AES.decrypt(cipherText, ENV.JWT_SECRET_KEY);
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (error) {
      console.error("Decryption failed:", error);
      return null;
    }
  },
};
