// components/category/CategoryCard.tsx

'use client';

import { Button } from '@/components/ui/button';
import { Category } from '@/types/Category';
import { Pencil } from 'lucide-react';
import { useState } from 'react';
import { EditCategoryModal } from './EditCategoryModal';
import { updateCategoryFunction } from '@/lib/aws/category';
import { toast } from 'sonner';

export function CategoryCard({
  category,
  onSave,
}: {
  category: Category;
  onSave: (updatedData: Category) => void;
}) {
  const [editOpen, setEditOpen] = useState(false);



  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-card text-card-foreground">
      <div className="p-4 flex items-center space-x-4">
        <img
          src={category.image}
          alt={category.name}
          className="h-16 w-16 object-cover rounded"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold">{category.name}</h3>
          <p className="text-sm mt-1 line-clamp-2">{category.description}</p>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setEditOpen(true)}>
          <Pencil className="h-4 w-4" />
        </Button>
      </div>

      <EditCategoryModal
        category={category}
        open={editOpen}
        onOpenChange={setEditOpen}
        onSave={onSave}
      />
    </div>
  );
}
