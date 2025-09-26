import { Toaster } from "@/shared/components/ui/sonner";
import { Outlet } from "@tanstack/react-router";

export function AppLayout() {
  return (
    <div>
      <Outlet />
      <Toaster />
    </div>
  );
}
