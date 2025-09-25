import { useRouter } from '@tanstack/react-router';
import { useAuth } from '@/modules/auth';

export function useRouteGuard() {
  const router = useRouter();
  const { user } = useAuth();

  if (!user) {
    router.navigate({ to: '/login' });
  }
}