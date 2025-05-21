// pages/authors/page.tsx or wherever you list authors
'use client';

import { useEffect, useState } from 'react';
import { AuthorCard } from '@/components/author/AuthorCard';
import { Input } from '@/components/ui/input';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { createAuthorFun } from '@/lib/author';
import { currentAuthenticatedUser } from '@/lib/aws';
import { Author } from '@/types/Author';
import {
  deleteAuthorFunction,
  fetchAuthors,
  updateAuthorFun,
} from '@/lib/aws/author';
import awsExports from '@/src/aws-exports';
import { Amplify } from 'aws-amplify';
import { CreateAuthorInput, UpdateAuthorInput } from '@/src/API';
import { toast } from 'sonner';

Amplify.configure(awsExports);

export default function AuthorPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [authors, setAuthors] = useState<Author[]>([]);
  const authorsPerPage = 6;
  const [nextToken, setNextToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Filter logic
  const filteredAuthors = authors.filter((author) =>
    author.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredAuthors.length / authorsPerPage);
  const paginatedAuthors = filteredAuthors.slice(
    (currentPage - 1) * authorsPerPage,
    currentPage * authorsPerPage
  );

  const loadAuthors = async () => {
    if (loading || (!hasMore && authors.length > 0)) return;

    setLoading(true);
    try {
      const result = await fetchAuthors(authorsPerPage, nextToken);
      setAuthors((prev) => [...prev, ...result.authors]);
      // setNextToken(result.nextToken);
      if (!result.nextToken) setHasMore(false);
    } catch (err) {
      console.error('Failed to load authors');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (newData: CreateAuthorInput) => {
    try {
      const newFeatured = await createAuthorFun(newData);
      setAuthors((prev) => [newFeatured, ...prev]);
      toast.success('Author created successfully.');
    } catch (error: any) {
      toast.error('Error creating author.', error.message);
    }
  };

  const handleUpdate = async (updatedData: UpdateAuthorInput) => {
    try {
      const updatedFeatured = await updateAuthorFun(updatedData);
      setAuthors((prev) =>
        prev.map((item) =>
          item.id === updatedData.id ? { ...item, ...updatedFeatured } : item
        )
      );
      toast.success('Featured updated successfully.');
    } catch (error: any) {
      toast.error('Error updating featured.', error.message);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteAuthorFunction(id);
      setAuthors((prev) => prev.filter((item) => item.id !== id));
      toast.success('Author deleted successfully.');
    } catch (error: any) {
      toast.error('Error deleting author.', error.message);
    }
  };

  useEffect(() => {
    loadAuthors();
  }, []);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold">Authors</h1>
        <div className="w-full md:w-64">
          <Input
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Authors Grid */}
      {paginatedAuthors.length === 0 ? (
        <p className="text-center text-muted-foreground mt-8">
          No authors found matching your search.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedAuthors.map((author) => (
            <AuthorCard
              onDelete={handleDelete}
              onSave={handleUpdate}
              key={author.id}
              author={author}
            />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={
                    currentPage === 1 ? 'pointer-events-none opacity-50' : ''
                  }
                />
              </PaginationItem>

              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i + 1}>
                  <PaginationLink
                    isActive={currentPage === i + 1}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={
                    currentPage === totalPages
                      ? 'pointer-events-none opacity-50'
                      : ''
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
