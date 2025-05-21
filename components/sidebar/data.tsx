// components/sidebar/data.ts

import { Home, Mail, Settings, User } from 'lucide-react';

export type SidebarNavItem = {
  name: string;
  icon: React.ElementType;
  href: string;
};

export const sidebarNavItems: SidebarNavItem[] = [
  {
    name: 'Dashboard',
    icon: Home,
    href: '/dashboard',
  },
  {
    name: 'Profile',
    icon: User,
    href: '/profile',
  },
  {
    name: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];
