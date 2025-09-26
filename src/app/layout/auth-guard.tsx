import { SidebarInset, SidebarProvider } from "@/shared/components/ui/sidebar";

import { Outlet } from "@tanstack/react-router";
import { Header } from "./header";
import { AppSidebar } from "./sidebar";

export function AuthGuard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
