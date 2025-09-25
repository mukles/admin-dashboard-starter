import { userDetailRoute, usersListRoute } from "@/modules/users";
import { rootRoute } from "./root-route";

const routeTree = rootRoute.addChildren([usersListRoute, userDetailRoute]);

export { routeTree };
