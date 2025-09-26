import { Session } from "@/shared/services";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./route-tree";

export const router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
    context: { auth: Session | null };
  }
}
