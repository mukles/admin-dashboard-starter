import { protectedRoute } from "@/app/router/protected-route";
import { createRoute } from "@tanstack/react-router";
import { DashboardPage } from "../pages";

export const dashboardRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: "/",
  component: DashboardPage,
});
