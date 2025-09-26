import { loginRoute, registerRoute } from "@/modules/auth";
import { dashboardRoute } from "@/modules/dashboard/routes/dashboard-routes";
import { userDetailRoute, usersListRoute } from "@/modules/users";
import { rootRoute } from "./root-route";

const routeTree = rootRoute.addChildren([
  dashboardRoute,
  loginRoute,
  registerRoute,
  usersListRoute,
  userDetailRoute,
]);

export { routeTree };
