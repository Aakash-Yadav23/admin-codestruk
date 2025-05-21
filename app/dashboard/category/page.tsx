// pages/categories/page.tsx

'use client';

import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  createCategoryFunction,
  fetchCategories,
  updateCategoryFunction,
} from '@/lib/aws/category';
import { Category, CreateCategoryInput } from '@/types/Category';
import { CategoryCard } from '@/components/cateory/CategoryCard';
import { Button } from '@/components/ui/button';
import { CreateCategoryModal } from '@/components/cateory/CreateCategoryCard';
import { toast } from 'sonner';
import { Amplify } from 'aws-amplify';
import awsExports from '@/src/aws-exports';

Amplify.configure(awsExports);

export default function CategoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [createModalOpen, setCreateModalOpen] = useState(false);

  const [categories, setCategories] = useState<Category[]>([]);
  const [nextToken, setNextToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Reset state and load new search
  useEffect(() => {
    if (!isInitialLoad) {
      setCategories([]);
      setNextToken(null);
      setCurrentPage(1);
      setHasMore(true);
    }
  }, [searchTerm]);

  // Load authors
  const loadCategories = async () => {
    if (loading || (!hasMore && !isInitialLoad)) return;

    setLoading(true);
    try {
      const filter = searchTerm
        ? { name: { contains: searchTerm.toLowerCase() } }
        : {};

      const result = await fetchCategories(
        10,
        filter,
        nextToken ? nextToken : null
      );

      if (result.categories.length === 0 && currentPage === 1) {
        setCategories([]);
        setHasMore(false);
      } else {
        setCategories((prev) => [...prev, ...result.categories]);
        if (result.nextToken) {
          setNextToken(result.nextToken);
        }
        if (!result.nextToken) setHasMore(false);
      }

      setIsInitialLoad(false);
    } catch (err) {
      console.error('Failed to load categories');
    } finally {
      setLoading(false);
    }
  };

  const updateCategoryHandler = async (updatedData: Category) => {
    console.log('Saving updated category:', updatedData);
    try {
      const data = await updateCategoryFunction(updatedData);
      setCategories((prev) =>
        prev.map((category) =>
          category.id === updatedData.id ? updatedData : category
        )
      );
      toast('category updated successfully.');
    } catch (error: any) {
      console.log('Error updating category:', error);
      toast.error('Error updating category.', error.message);
    }
  };
  const handleCreate = async (newData: CreateCategoryInput) => {
    console.log('Creating:', newData);
    try {
      const createdCategory = await createCategoryFunction(newData);
      setCategories((prev) => [...prev, createdCategory]);
      toast('Category created successfully.');
    } catch (error: any) {
      toast.error('Error creating category.', error.message);
    }

    // Call Amplify create mutation
  };

  useEffect(() => {
    loadCategories();
  }, [searchTerm, currentPage]);

  const handleLoadMore = () => {
    if (hasMore) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold">Categories</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 my-4">
        <div className="w-full md:w-64">
          <Input
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button onClick={() => setCreateModalOpen(true)}>New Category</Button>
      </div>
      <CreateCategoryModal
        open={createModalOpen}
        onOpenChange={setCreateModalOpen}
        onCreate={handleCreate}
      />
      {/* Categories Grid */}
      {categories.length === 0 ? (
        <p className="text-center text-muted-foreground mt-8">
          No categories found matching your search.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onSave={updateCategoryHandler}
            />
          ))}
        </div>
      )}
      {/* Load More Button or Pagination */}
      {hasMore && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleLoadMore}
            disabled={loading}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
}
