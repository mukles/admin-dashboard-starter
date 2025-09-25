import { rootRoute } from "@/app/router/root-route";
import { createRoute } from "@tanstack/react-router";
import { LoginPage, RegisterPage } from "../pages";

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

export const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: RegisterPage,
});
