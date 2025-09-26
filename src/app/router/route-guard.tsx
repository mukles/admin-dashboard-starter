import { useAuth } from "@/modules/auth";

export function useRouteGuard() {
  const { status } = useAuth();
  return status === "authenticated";
}
