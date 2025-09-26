import { publicRoute } from "@/app/router";
import { createRoute } from "@tanstack/react-router";
import { LoginPage, RegisterPage } from "../pages";

export const loginRoute = createRoute({
  getParentRoute: () => publicRoute,
  path: "/login",
  component: LoginPage,
});

export const registerRoute = createRoute({
  getParentRoute: () => publicRoute,
  path: "/register",
  component: RegisterPage,
});
