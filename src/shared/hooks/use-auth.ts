import { getSession, isAuthenticated } from "../services";

export function useAuth() {
  const status = isAuthenticated();
  const user = getSession();
  return { status, user };
}
