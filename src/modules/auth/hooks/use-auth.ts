import { useStore } from '../stores';

export function useAuth() {
  const { user, login, logout } = useStore();

  return { user, login, logout };
}
