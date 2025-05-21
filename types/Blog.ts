export type Blog = {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  image?: string;
  publishedAt: string;
  readTime: number;
  status: BlogStatus;
  category: string;
};


export type BlogStatus = 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
