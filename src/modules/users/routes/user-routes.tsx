import { rootRoute } from "@/app/router/root-route";
import { createRoute } from "@tanstack/react-router";
import { UserDetailPage } from "../pages/user-detail";
import { UsersListPage } from "../pages/users-list";

export const usersListRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/users",
  component: UsersListPage,
});

export const userDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/users/$userId",
  component: UserDetailPage,
});
