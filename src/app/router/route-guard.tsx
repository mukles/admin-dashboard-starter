import { useAuth } from "@/modules/auth";
import { useRouter } from "@tanstack/react-router";

export function useRouteGuard() {
  const router = useRouter();
  const { user } = useAuth();

  if (!user) {
    router.navigate({ to: "/login" });
  }
}
