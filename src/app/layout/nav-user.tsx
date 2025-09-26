import {
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/shared/components/ui/sidebar";
import UserDropdown from "@/shared/components/user-dropdown";
import { getSession } from "@/shared/services";

export function NavUser() {
  const user = getSession();
  const { isMobile } = useSidebar();

  if (!user) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <UserDropdown
          side={isMobile ? "bottom" : "right"}
          align="end"
          sideOffset={4}
        />
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
