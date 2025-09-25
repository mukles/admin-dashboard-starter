import { createRoute } from '@tanstack/react-router';
import { rootRoute } from '@/app/router/root-route';
import { UsersListPage } from '../pages/users-list';
import { UserDetailPage } from '../pages/user-detail';

export const usersListRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/users',
  component: UsersListPage,
});

export const userDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/users/$userId',
  component: UserDetailPage,
});