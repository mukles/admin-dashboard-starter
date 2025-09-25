import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export function AppLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white">
        {/* Sidebar content */}
      </aside>
      <main className="flex-1 p-8">
        <Outlet />
        <TanStackRouterDevtools />
      </main>
    </div>
  );
}
