// pages/authors/page.tsx or wherever you list authors
'use client';

import { useState } from 'react';
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

const sampleAuthors = [
  {
    id: '1',
    name: 'Jane Doe',
    email: 'jane@example.com',
    bio: 'A passionate tech writer with over 10 years of experience.',
    image: 'https://i.pravatar.cc/150?img=32 ',
  },
  {
    id: '2',
    name: 'John Smith',
    email: 'john@example.com',
    bio: 'Full-stack developer and open source contributor.',
    image: 'https://i.pravatar.cc/150?img=45 ',
  },
  {
    id: '3',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    bio: 'UI/UX designer focused on accessibility and user experience.',
    image: 'https://i.pravatar.cc/150?img=67 ',
  },
  {
    id: '4',
    name: 'Bob Anderson',
    email: 'bob@example.com',
    bio: 'Cloud architect and AWS Certified Solutions Architect.',
    image: 'https://i.pravatar.cc/150?img=12 ',
  },
  {
    id: '5',
    name: 'Charlie Davis',
    email: 'charlie@example.com',
    bio: 'Data scientist and machine learning engineer.',
    image: 'https://i.pravatar.cc/150?img=89 ',
  },
  {
    id: '6',
    name: 'Dana White',
    email: 'dana@example.com',
    bio: 'Editor-in-chief at TechToday Magazine.',
    image: 'https://i.pravatar.cc/150?img=23 ',
  },
  {
    id: '7',
    name: 'Ethan Hunt',
    email: 'ethan@example.com',
    bio: 'Cybersecurity expert and ethical hacker.',
    image: 'https://i.pravatar.cc/150?img=11 ',
  },
];

export default function AuthorPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const authorsPerPage = 6;

  // Filter logic
  const filteredAuthors = sampleAuthors.filter((author) =>
    author.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredAuthors.length / authorsPerPage);
  const paginatedAuthors = filteredAuthors.slice(
    (currentPage - 1) * authorsPerPage,
    currentPage * authorsPerPage
  );

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
            <AuthorCard key={author.id} author={author} />
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
