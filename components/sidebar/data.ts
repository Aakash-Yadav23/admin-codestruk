// components/sidebar/data.ts

import { IconHome, IconUser, IconSettings } from "lucide-react";

export type SidebarNavItem = {
  name: string;
  icon: React.ElementType;
  href: string;
};

export const sidebarNavItems: SidebarNavItem[] = [
  {
    name: "Dashboard",
    icon: IconHome,
    href: "/dashboard",
  },
  {
    name: "Profile",
    icon: IconUser,
    href: "/profile",
  },
  {
    name: "Settings",
    icon: IconSettings,
    href: "/settings",
  },
];