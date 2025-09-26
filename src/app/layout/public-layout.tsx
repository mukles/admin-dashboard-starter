import Logo from "@/shared/components/logo";
import { ModeToggle } from "@/shared/components/mode-toggle";
import { Outlet } from "@tanstack/react-router";

export function PublicLayout() {
  return (
    <div className="flex flex-1 flex-col min-h-svh">
      <header className="border-b border-border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-2">
            <ModeToggle />
          </div>
        </div>
      </header>
      <div className="flex-1 flex items-center justify-center p-4">
        <Outlet />
      </div>
    </div>
  );
}
