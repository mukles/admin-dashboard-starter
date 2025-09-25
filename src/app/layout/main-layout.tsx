import { Outlet } from "@tanstack/react-router";

export function MainLayout() {
  return (
    <div className="p-8">
      <Outlet />
    </div>
  );
}
