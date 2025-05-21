// app/dashboard/blog/[slug]/edit/page.tsx
'use client';

import { useParams } from 'next/navigation';

export default function EditBlogPage() {
  const { slug } = useParams();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Editing Blog: {slug}</h1>
      <div className="bg-muted p-4 rounded-md">
        <p>
          This is where the editor will go. You can use a rich text editor like
          TipTap or Quill here.
        </p>
      </div>
    </div>
  );
}
