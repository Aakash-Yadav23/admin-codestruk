// components/sidebar/data.ts

import { Home, Newspaper, List, User } from 'lucide-react';

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
    name: 'Featured',
    icon: List,
    href: '/dashboard/featured',
  },
  {
    name: 'Author',
    icon: User,
    href: '/dashboard/author',
  },
  {
    name: 'Category',
    icon: List,
    href: '/dashboard/category',
  },
  {
    name: 'blog',
    icon: Newspaper,
    href: '/dashboard/blog',
  },
];
