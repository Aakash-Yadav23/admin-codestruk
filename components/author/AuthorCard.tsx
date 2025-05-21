// components/author/AuthorCard.tsx

'use client';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';
import { useState } from 'react';
import { EditAuthorModal } from './EditAuthorModal';
import { Author } from '@/types/Author';

export function AuthorCard({ author }: { author: Author }) {
  const [editOpen, setEditOpen] = useState(false);

  const handleSave = (updatedData: Partial<Author>) => {
    // Here you can integrate with AWS Amplify DataStore or API
    console.log('Saving updated author:', updatedData);
    // You'd use `updateAuthor` mutation here with Amplify API
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-card text-card-foreground">
      <div className="p-4 flex items-center space-x-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={author.image} alt={author.name} />
          <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold">{author.name}</h3>
          <p className="text-sm text-muted-foreground truncate">
            {author.email}
          </p>
          <p className="text-sm mt-1 line-clamp-2">{author.bio}</p>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setEditOpen(true)}>
          <Pencil className="h-4 w-4" />
        </Button>
      </div>

      <EditAuthorModal
        author={author}
        open={editOpen}
        onOpenChange={setEditOpen}
        onSave={handleSave}
      />
    </div>
  );
}
