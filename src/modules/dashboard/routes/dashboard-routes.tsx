import { rootRoute } from "@/app/router/root-route";
import { createRoute } from "@tanstack/react-router";
import { DashboardPage } from "../pages/dashboard";

export const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: DashboardPage,
});
