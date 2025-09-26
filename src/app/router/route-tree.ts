import { loginRoute, registerRoute } from "@/modules/auth";
import { dashboardRoute } from "@/modules/dashboard/routes/dashboard-routes";
import { protectedRoute } from "./protected-route";
import { publicRoute } from "./public-route";
import { rootRoute } from "./root-route";

const routeTree = rootRoute.addChildren([
  publicRoute.addChildren([loginRoute, registerRoute]),
  protectedRoute.addChildren([dashboardRoute]),
]);

export { routeTree };
