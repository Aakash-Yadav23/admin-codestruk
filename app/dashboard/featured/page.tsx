// app/dashboard/featured/page.tsx

'use client';

import { useState, useEffect } from 'react';
import { FeaturedCard } from '@/components/featured/FeaturedCard';
import { FeaturedEditModal } from '@/components/featured/FeaturedEditModal';
import { CreateFeaturedInput, Featured } from '@/src/API';
import { Button } from '@/components/ui/button';
import {
  createFeaturedFunction,
  deleteFeaturedFunction,
  fetchFeateured,
  updateFeaturedFunction,
} from '@/lib/aws/featured';
import { Input } from '@/components/ui/input';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { toast } from 'sonner';
import { FeaturedCreateModal } from '@/components/featured/FeaturedCreateaModal';
import { Amplify } from 'aws-amplify';
import awsExports from '@/src/aws-exports';

Amplify.configure(awsExports);

export default function FeaturedPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const featuredPerPage = 6;
  const [featuredList, setFeaturedList] = useState<Featured[]>([]);
  const [nextToken, setNextToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedFeatured, setSelectedFeatured] = useState<Featured | null>(
    null
  );

  // Load featured items
  const loadFeatureds = async () => {
    if (loading || (!hasMore && featuredList.length > 0)) return;

    setLoading(true);
    try {
      const result = await fetchFeateured(
        featuredPerPage,
        { title: { contains: searchTerm.toLowerCase() } },
        nextToken ? nextToken : null
      );

      if (result.featureds.length === 0 && currentPage === 1) {
        setFeaturedList([]);
        setHasMore(false);
      } else {
        setFeaturedList((prev) => [...prev, ...result.featureds]);
        if (result.nextToken) {
          setNextToken(result.nextToken);
        }
        if (!result.nextToken) setHasMore(false);
      }
    } catch (err) {
      console.error('Failed to load featureds');
    } finally {
      setLoading(false);
    }
  };

  // Reset on new search
  useEffect(() => {
    setFeaturedList([]);
    setNextToken(null);
    setCurrentPage(1);
    setHasMore(true);
  }, [searchTerm]);

  // Load initial or next page
  useEffect(() => {
    loadFeatureds();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const filteredFeatured = featuredList.filter((f) =>
    f.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredFeatured.length / featuredPerPage);
  const paginatedFeatured = filteredFeatured.slice(
    (currentPage - 1) * featuredPerPage,
    currentPage * featuredPerPage
  );

  const handleCreate = async (newData: CreateFeaturedInput) => {
    try {
      const newFeatured = await createFeaturedFunction(newData);
      setFeaturedList((prev) => [newFeatured, ...prev]);
      toast.success('Featured created successfully.');
    } catch (error: any) {
      toast.error('Error creating featured.', error.message);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteFeaturedFunction(id);
      setFeaturedList((prev) => prev.filter((item) => item.id !== id));
      toast.success('Featured deleted successfully.');
    } catch (error: any) {
      toast.error('Error deleting featured.', error.message);
    }
  };

  const handleUpdate = async (updatedData: Featured) => {
    try {
      const updatedFeatured = await updateFeaturedFunction(updatedData);
      setFeaturedList((prev) =>
        prev.map((item) =>
          item.id === updatedData.id ? { ...item, ...updatedFeatured } : item
        )
      );
      toast.success('Featured updated successfully.');
    } catch (error: any) {
      toast.error('Error updating featured.', error.message);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold">Featured Items</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 my-4">
        <div className="w-full md:w-64">
          <Input
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button onClick={() => setCreateModalOpen(true)}>New Featured</Button>
      </div>
      {/* Featured Grid */}
      {paginatedFeatured.length === 0 ? (
        <p className="text-center text-muted-foreground mt-8">
          No featured items found matching your search.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedFeatured.map((featured) => (
            <FeaturedCard
              key={featured.id}
              featured={featured}
              onDelete={handleDelete}
              onEdit={(f) => {
                setSelectedFeatured(f);
                setEditModalOpen(true);
              }}
            />
          ))}
        </div>
      )}

      {/* Load More Button */}
      {hasMore && (
        <div className="mt-8 flex justify-center">
          <Button onClick={loadFeatureds} disabled={loading}>
            {loading ? 'Loading...' : 'Load More'}
          </Button>
        </div>
      )}

      {/* OR Pagination Links */}
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

      {/* Modals */}
      <FeaturedCreateModal
        open={createModalOpen}
        onOpenChange={setCreateModalOpen}
        onCreate={handleCreate}
      />

      {selectedFeatured && (
        <FeaturedEditModal
          featured={selectedFeatured}
          open={editModalOpen}
          onOpenChange={setEditModalOpen}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
}
