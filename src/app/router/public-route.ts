import { isAuthenticated } from "@/shared/services";
import { createRoute, redirect } from "@tanstack/react-router";
import { PublicLayout } from "../layout";
import { rootRoute } from "./root-route";

export const publicRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "public",
  component: PublicLayout,
  beforeLoad: () => {
    if (!!isAuthenticated()) {
      return redirect({ to: "/" });
    }
  },
});
