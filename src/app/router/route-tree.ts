import { loginRoute, registerRoute } from "@/modules/auth";
import { userDetailRoute, usersListRoute } from "@/modules/users";
import { rootRoute } from "./root-route";

const routeTree = rootRoute.addChildren([
  loginRoute,
  registerRoute,
  usersListRoute,
  userDetailRoute,
]);

export { routeTree };
