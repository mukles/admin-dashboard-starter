import { createRootRoute } from '@tanstack/react-router';
import { AppLayout } from '@/app/layout';

export const rootRoute = createRootRoute({
  component: AppLayout,
});
