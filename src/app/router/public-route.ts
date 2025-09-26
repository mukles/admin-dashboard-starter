import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./root-route";

export const publicRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "public",
  beforeLoad: (ctx) => {
    const { auth } = ctx.context;
    // if (!!auth) {
    //   return redirect({ to: "/" });
    // }
  },
});
