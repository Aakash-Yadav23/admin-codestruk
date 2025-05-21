// components/blog/BlogCard.tsx
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';
import { Blog } from '@/types/Blog';
import Image from 'next/image';

export function BlogCard({ blog }: { blog: Blog }) {
  const getStatusVariant = () => {
    switch (blog.status) {
      case 'PUBLISHED':
        return 'bg-green-500 hover:bg-green-600 text-white';
      case 'DRAFT':
        return 'bg-yellow-500 hover:bg-yellow-600 text-white';
      case 'ARCHIVED':
        return 'bg-gray-500 hover:bg-gray-600 text-white';
      default:
        return 'bg-gray-400 text-white';
    }
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-card">
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={blog.image || 'https://picsum.photos/200/300 '}
          alt={blog.title}
          className="h-full w-full object-cover"
          width={200}
          height={300}
        />
      </div>
      <div className="p-4">
        <Link href={`/dashboard/blog/${blog.slug}`}>
          <h3 className="text-lg font-semibold line-clamp-2 hover:text-primary">
            {blog.title}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {blog.excerpt}
        </p>

        <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />{' '}
            {new Date(blog.publishedAt).toLocaleDateString()}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> {blog.readTime} min read
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <Badge className={getStatusVariant()}>{blog.status}</Badge>
          <Button asChild variant="outline" size="sm">
            <Link href={`/dashboard/blog/${blog.slug}/`}>Edit</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
