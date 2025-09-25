const TOKEN_KEY = "jwtToken";

export const storage = {
  getToken: () => {
    return localStorage.getItem(TOKEN_KEY);
  },
  setToken: (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
  },
  clearToken: () => {
    localStorage.removeItem(TOKEN_KEY);
  },
};
