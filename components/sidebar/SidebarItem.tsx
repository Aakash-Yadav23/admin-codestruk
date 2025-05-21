// components/sidebar/SidebarItem.tsx

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  item: {
    name: string;
    icon: React.ElementType;
    href: string;
  };
  isOpen: boolean;
};

export function SidebarItem({ item, isOpen }: Props) {
  return (
    <Button
      asChild
      variant="ghost"
      className="w-full justify-start text-left px-3 py-6"
    >
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-3 rounded-md p-2 text-sm font-medium transition-colors hover:bg-muted",
          !isOpen && "justify-center"
        )}
      >
        <item.icon className="h-5 w-5" />
        {isOpen && <span>{item.name}</span>}
      </Link>
    </Button>
  );
}