// components/featured/FeaturedCard.tsx

'use client';

import { Button } from '@/components/ui/button';
import { Featured } from '@/src/API';
import { Pencil, Trash } from 'lucide-react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type Props = {
  featured: Featured;
  onEdit: (featured: Featured) => void;
  onDelete: (featured: string) => void;
};

export function FeaturedCard({ featured, onEdit, onDelete }: Props) {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => {
    onDelete(featured.id);
    setShowConfirm(false);
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <img
        src={featured.image}
        alt={featured.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{featured.title}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {featured.description}
        </p>
        <div className="flex justify-between mt-4">
          <Button variant="ghost" size="sm" onClick={() => onEdit(featured)}>
            <Pencil className="h-4 w-4 mr-1" />
            Edit
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="text-red-600 hover:text-red-800 hover:bg-red-50"
            onClick={() => setShowConfirm(true)}
          >
            <Trash className="h-4 w-4 mr-1" />
            Delete
          </Button>
        </div>
      </div>

      {/* Confirmation Modal */}
      <Dialog open={showConfirm} onOpenChange={setShowConfirm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete "{featured.title}"? This action
              cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirm(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
