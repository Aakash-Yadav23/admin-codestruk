// app/dashboard/blogs/page.tsx
'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationItem,
  PaginationContent,
} from '@/components/ui/pagination';
import { BlogCard } from '@/components/blog/BlogCard';
import { Blog } from '@/types/Blog';

// Sample data for demo purposes
const sampleBlogs: Blog[] = [
  {
    id: '1',
    title: 'Mastering TypeScript Generics',
    excerpt:
      'Learn how to write flexible and reusable code using TypeScript generics.',
    slug: 'typescript-generics',
    image: 'https://picsum.photos/id/10/200/300 ',
    publishedAt: '2024-10-01T08:00:00Z',
    readTime: 7,
    status: 'PUBLISHED',
    category: 'Development',
  },
  {
    id: '2',
    title: 'Getting Started with AWS Amplify',
    excerpt:
      'A beginner-friendly guide to building scalable apps with Amplify.',
    slug: 'aws-amplify-guide',
    publishedAt: '2024-10-05T10:00:00Z',
    readTime: 9,
    status: 'DRAFT',
    category: 'Cloud',
  },
  {
    id: '3',
    title: 'The Future of Web Development in 2025',
    excerpt: 'Explore upcoming trends and technologies shaping the web.',
    slug: 'web-dev-2025',
    publishedAt: '2024-10-07T12:00:00Z',
    readTime: 5,
    status: 'ARCHIVED',
    category: 'Trends',
  },
];

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Filter logic
  const filteredBlogs = sampleBlogs.filter((blog) => {
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus ? blog.status === filterStatus : true;
    return matchesSearch && matchesStatus;
  });

  // Pagination
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Blogs</h1>

      {/* Filters */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="PUBLISHED">Published</SelectItem>
            <SelectItem value="DRAFT">Draft</SelectItem>
            <SelectItem value="ARCHIVED">Archived</SelectItem>
          </SelectContent>
        </Select>

        <Button onClick={() => alert('Add new blog')}>+ New Blog</Button>
      </div>

      {/* Results */}
      {paginatedBlogs.length === 0 ? (
        <p className="text-center text-muted-foreground">No blogs found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
              </PaginationItem>

              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i + 1}>
                  <Button
                    variant={currentPage === i + 1 ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </Button>
                </PaginationItem>
              ))}

              <PaginationItem>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
