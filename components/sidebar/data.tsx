// components/sidebar/data.ts

import { Home, Newspaper, User } from 'lucide-react';

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
    name: 'Author',
    icon: User,
    href: '/dashboard/author',
  },
  {
    name: 'blog',
    icon: Newspaper,
    href: '/dashboard/blog',
  },
];
