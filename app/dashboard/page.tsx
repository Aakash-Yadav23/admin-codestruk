// app/dashboard/page.tsx

'use client';

import { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import {
  listBlogs,
  listCategories,
  listAuthors,
  listFeatureds,
} from '@/src/graphql/queries';
import { Category } from '@/types/Category';
import { Author } from '@/types/Author';
import { Featured } from '@/types/Featured';
import { DashboardCard } from '@/components/dashboard/dashboardCard';
import awsExports from '@/src/aws-exports';
import { Amplify } from 'aws-amplify';
import { Blog } from '@/src/API';

Amplify.configure(awsExports);
const client = generateClient({
  authMode: 'userPool',
});

export default function DashboardPage() {
  const [totalBlogs, setTotalBlogs] = useState<number>(0);
  const [totalCategories, setTotalCategories] = useState<number>(0);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [featured, setFeatured] = useState<Featured | null>(null);
  const [popularBlogs, setPopularBlogs] = useState<Blog[]>([]);

  const fetchData = async () => {
    try {
      const [blogRes, categoryRes, authorRes, featuredRes, popularRes] =
        await Promise.all([
          client.graphql({ query: listBlogs, variables: { limit: 1000 } }),
          client.graphql({ query: listCategories, variables: { limit: 1000 } }),
          client.graphql({ query: listAuthors, variables: { limit: 1000 } }),
          client.graphql({ query: listFeatureds, variables: { limit: 1000 } }),
          client.graphql({ query: listBlogs, variables: { limit: 1000 } }),
        ]);

      setTotalBlogs(blogRes.data?.listBlogs?.items?.length || 0);
      setTotalCategories(categoryRes.data?.listCategories?.items?.length || 0);
      setTotalUsers(authorRes.data?.listAuthors?.items?.length || 0);
      setFeatured(featuredRes.data?.listFeatureds?.items?.[0] || null);
      // setPopularBlogs(popularRes.data?.listBlogs?.items || []);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard title="Total Blogs" value={totalBlogs} />
        <DashboardCard title="Total Categories" value={totalCategories} />
        <DashboardCard title="Total Author" value={totalUsers} />
      </div>

      {/* Featured Image */}
      {featured && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Featured Content</h2>
          <div className="border rounded-lg overflow-hidden shadow-md">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{featured.title}</h3>
            </div>
          </div>
        </section>
      )}

      {/* Most Viewed Blogs */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Most Viewed Blogs</h2>
        <div className="space-y-4">
          {popularBlogs.length > 0 ? (
            popularBlogs.map((blog) => (
              <div
                key={blog.id}
                className="flex justify-between items-center border p-4 rounded-lg hover:bg-muted transition"
              >
                <span>{blog.title}</span>
                <span className="text-muted-foreground">
                  {blog.views} views
                </span>
              </div>
            ))
          ) : (
            <p>No blogs found.</p>
          )}
        </div>
      </section>
    </div>
  );
}
