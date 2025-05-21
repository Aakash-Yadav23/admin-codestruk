'use client';
// components/sidebar/Sidebar.tsx

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SidebarItem } from './SidebarItem';
import { sidebarNavItems } from './data';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`relative flex h-screen flex-col border-r bg-background transition-all duration-300 ease-in-out ${
        isOpen ? 'w-64' : 'w-16'
      }`}
    >
      {/* Toggle Button */}
      <div className="p-4 flex justify-between items-center">
        {isOpen ? (
          <h2 className="text-lg font-semibold">Codestruk</h2>
        ) : (
          <div className="w-full flex justify-center">
            <span className="text-xl font-bold">M</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 space-y-1 px-2 py-4">
        {sidebarNavItems.map((item) => (
          <SidebarItem key={item.href} item={item} isOpen={isOpen} />
        ))}
      </nav>
    </aside>
  );
}
