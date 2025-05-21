/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCommentInput = {
  id?: string | null,
  name: string,
  bio?: string | null,
  email: string,
  comment: string,
  blogId: string,
  status: CommentStatus,
  blogCommentsId?: string | null,
};

export enum CommentStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
  ARCHIVED = "ARCHIVED",
}


export type ModelCommentConditionInput = {
  name?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  email?: ModelStringInput | null,
  comment?: ModelStringInput | null,
  blogId?: ModelIDInput | null,
  status?: ModelCommentStatusInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  blogCommentsId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelCommentStatusInput = {
  eq?: CommentStatus | null,
  ne?: CommentStatus | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  name: string,
  bio?: string | null,
  email: string,
  comment: string,
  blogId: string,
  blog?: Blog | null,
  status: CommentStatus,
  createdAt: string,
  updatedAt: string,
  blogCommentsId?: string | null,
};

export type Blog = {
  __typename: "Blog",
  id: string,
  title: string,
  slug: string,
  thumbnail: string,
  authorId: string,
  author?: Author | null,
  content: string,
  excerpt: string,
  tableOfContents: string,
  seoTitle: string,
  seoDescription: string,
  seoKeywords: string,
  views?: number | null,
  categoryId: string,
  category?: Category | null,
  featuredId?: string | null,
  featured?: Featured | null,
  publishedAt: string,
  status: BlogStatus,
  comments?: ModelCommentConnection | null,
  readTime?: number | null,
  createdAt: string,
  updatedAt: string,
  authorBlogsId?: string | null,
  categoryBlogsId?: string | null,
  featuredBlogsId?: string | null,
};

export type Author = {
  __typename: "Author",
  id: string,
  name: string,
  bio: string,
  email: string,
  image: string,
  blogs?: ModelBlogConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelBlogConnection = {
  __typename: "ModelBlogConnection",
  items:  Array<Blog | null >,
  nextToken?: string | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  name: string,
  description: string,
  image: string,
  blogs?: ModelBlogConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type Featured = {
  __typename: "Featured",
  id: string,
  title: string,
  description: string,
  image: string,
  blogs?: ModelBlogConnection | null,
  createdAt: string,
  updatedAt: string,
};

export enum BlogStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
  ARCHIVED = "ARCHIVED",
}


export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type UpdateCommentInput = {
  id: string,
  name?: string | null,
  bio?: string | null,
  email?: string | null,
  comment?: string | null,
  blogId?: string | null,
  status?: CommentStatus | null,
  blogCommentsId?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateAuthorInput = {
  id?: string | null,
  name: string,
  bio: string,
  email: string,
  image: string,
};

export type ModelAuthorConditionInput = {
  name?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  email?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelAuthorConditionInput | null > | null,
  or?: Array< ModelAuthorConditionInput | null > | null,
  not?: ModelAuthorConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateAuthorInput = {
  id: string,
  name?: string | null,
  bio?: string | null,
  email?: string | null,
  image?: string | null,
};

export type DeleteAuthorInput = {
  id: string,
};

export type CreateBlogInput = {
  id?: string | null,
  title: string,
  slug: string,
  thumbnail: string,
  authorId: string,
  content: string,
  excerpt: string,
  tableOfContents: string,
  seoTitle: string,
  seoDescription: string,
  seoKeywords: string,
  views?: number | null,
  categoryId: string,
  featuredId?: string | null,
  publishedAt: string,
  status: BlogStatus,
  readTime?: number | null,
  authorBlogsId?: string | null,
  categoryBlogsId?: string | null,
  featuredBlogsId?: string | null,
};

export type ModelBlogConditionInput = {
  title?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  thumbnail?: ModelStringInput | null,
  authorId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  excerpt?: ModelStringInput | null,
  tableOfContents?: ModelStringInput | null,
  seoTitle?: ModelStringInput | null,
  seoDescription?: ModelStringInput | null,
  seoKeywords?: ModelStringInput | null,
  views?: ModelIntInput | null,
  categoryId?: ModelIDInput | null,
  featuredId?: ModelIDInput | null,
  publishedAt?: ModelStringInput | null,
  status?: ModelBlogStatusInput | null,
  readTime?: ModelIntInput | null,
  and?: Array< ModelBlogConditionInput | null > | null,
  or?: Array< ModelBlogConditionInput | null > | null,
  not?: ModelBlogConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  authorBlogsId?: ModelIDInput | null,
  categoryBlogsId?: ModelIDInput | null,
  featuredBlogsId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBlogStatusInput = {
  eq?: BlogStatus | null,
  ne?: BlogStatus | null,
};

export type UpdateBlogInput = {
  id: string,
  title?: string | null,
  slug?: string | null,
  thumbnail?: string | null,
  authorId?: string | null,
  content?: string | null,
  excerpt?: string | null,
  tableOfContents?: string | null,
  seoTitle?: string | null,
  seoDescription?: string | null,
  seoKeywords?: string | null,
  views?: number | null,
  categoryId?: string | null,
  featuredId?: string | null,
  publishedAt?: string | null,
  status?: BlogStatus | null,
  readTime?: number | null,
  authorBlogsId?: string | null,
  categoryBlogsId?: string | null,
  featuredBlogsId?: string | null,
};

export type DeleteBlogInput = {
  id: string,
};

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
  description: string,
  image: string,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  image?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type CreateFeaturedInput = {
  id?: string | null,
  title: string,
  description: string,
  image: string,
};

export type ModelFeaturedConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelFeaturedConditionInput | null > | null,
  or?: Array< ModelFeaturedConditionInput | null > | null,
  not?: ModelFeaturedConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateFeaturedInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  image?: string | null,
};

export type DeleteFeaturedInput = {
  id: string,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  email?: ModelStringInput | null,
  comment?: ModelStringInput | null,
  blogId?: ModelIDInput | null,
  status?: ModelCommentStatusInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
  blogCommentsId?: ModelIDInput | null,
};

export type ModelAuthorFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  email?: ModelStringInput | null,
  image?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAuthorFilterInput | null > | null,
  or?: Array< ModelAuthorFilterInput | null > | null,
  not?: ModelAuthorFilterInput | null,
};

export type ModelAuthorConnection = {
  __typename: "ModelAuthorConnection",
  items:  Array<Author | null >,
  nextToken?: string | null,
};

export type ModelBlogFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  thumbnail?: ModelStringInput | null,
  authorId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  excerpt?: ModelStringInput | null,
  tableOfContents?: ModelStringInput | null,
  seoTitle?: ModelStringInput | null,
  seoDescription?: ModelStringInput | null,
  seoKeywords?: ModelStringInput | null,
  views?: ModelIntInput | null,
  categoryId?: ModelIDInput | null,
  featuredId?: ModelIDInput | null,
  publishedAt?: ModelStringInput | null,
  status?: ModelBlogStatusInput | null,
  readTime?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBlogFilterInput | null > | null,
  or?: Array< ModelBlogFilterInput | null > | null,
  not?: ModelBlogFilterInput | null,
  authorBlogsId?: ModelIDInput | null,
  categoryBlogsId?: ModelIDInput | null,
  featuredBlogsId?: ModelIDInput | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type ModelFeaturedFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFeaturedFilterInput | null > | null,
  or?: Array< ModelFeaturedFilterInput | null > | null,
  not?: ModelFeaturedFilterInput | null,
};

export type ModelFeaturedConnection = {
  __typename: "ModelFeaturedConnection",
  items:  Array<Featured | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  comment?: ModelSubscriptionStringInput | null,
  blogId?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionAuthorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAuthorFilterInput | null > | null,
  or?: Array< ModelSubscriptionAuthorFilterInput | null > | null,
  authorBlogsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionBlogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  slug?: ModelSubscriptionStringInput | null,
  thumbnail?: ModelSubscriptionStringInput | null,
  authorId?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  excerpt?: ModelSubscriptionStringInput | null,
  tableOfContents?: ModelSubscriptionStringInput | null,
  seoTitle?: ModelSubscriptionStringInput | null,
  seoDescription?: ModelSubscriptionStringInput | null,
  seoKeywords?: ModelSubscriptionStringInput | null,
  views?: ModelSubscriptionIntInput | null,
  categoryId?: ModelSubscriptionIDInput | null,
  featuredId?: ModelSubscriptionIDInput | null,
  publishedAt?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  readTime?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBlogFilterInput | null > | null,
  or?: Array< ModelSubscriptionBlogFilterInput | null > | null,
  blogCommentsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  categoryBlogsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionFeaturedFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFeaturedFilterInput | null > | null,
  or?: Array< ModelSubscriptionFeaturedFilterInput | null > | null,
  featuredBlogsId?: ModelSubscriptionIDInput | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    name: string,
    bio?: string | null,
    email: string,
    comment: string,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      title: string,
      slug: string,
      thumbnail: string,
      authorId: string,
      content: string,
      excerpt: string,
      tableOfContents: string,
      seoTitle: string,
      seoDescription: string,
      seoKeywords: string,
      views?: number | null,
      categoryId: string,
      featuredId?: string | null,
      publishedAt: string,
      status: BlogStatus,
      readTime?: number | null,
      createdAt: string,
      updatedAt: string,
      authorBlogsId?: string | null,
      categoryBlogsId?: string | null,
      featuredBlogsId?: string | null,
    } | null,
    status: CommentStatus,
    createdAt: string,
    updatedAt: string,
    blogCommentsId?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    name: string,
    bio?: string | null,
    email: string,
    comment: string,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      title: string,
      slug: string,
      thumbnail: string,
      authorId: string,
      content: string,
      excerpt: string,
      tableOfContents: string,
      seoTitle: string,
      seoDescription: string,
      seoKeywords: string,
      views?: number | null,
      categoryId: string,
      featuredId?: string | null,
      publishedAt: string,
      status: BlogStatus,
      readTime?: number | null,
      createdAt: string,
      updatedAt: string,
      authorBlogsId?: string | null,
      categoryBlogsId?: string | null,
      featuredBlogsId?: string | null,
    } | null,
    status: CommentStatus,
    createdAt: string,
    updatedAt: string,
    blogCommentsId?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    name: string,
    bio?: string | null,
    email: string,
    comment: string,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      title: string,
      slug: string,
      thumbnail: string,
      authorId: string,
      content: string,
      excerpt: string,
      tableOfContents: string,
      seoTitle: string,
      seoDescription: string,
      seoKeywords: string,
      views?: number | null,
      categoryId: string,
      featuredId?: string | null,
      publishedAt: string,
      status: BlogStatus,
      readTime?: number | null,
      createdAt: string,
      updatedAt: string,
      authorBlogsId?: string | null,
      categoryBlogsId?: string | null,
      featuredBlogsId?: string | null,
    } | null,
    status: CommentStatus,
    createdAt: string,
    updatedAt: string,
    blogCommentsId?: string | null,
  } | null,
};

export type CreateAuthorMutationVariables = {
  input: CreateAuthorInput,
  condition?: ModelAuthorConditionInput | null,
};

export type CreateAuthorMutation = {
  createAuthor?:  {
    __typename: "Author",
    id: string,
    name: string,
    bio: string,
    email: string,
    image: string,
    blogs?:  {
      __typename: "ModelBlogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAuthorMutationVariables = {
  input: UpdateAuthorInput,
  condition?: ModelAuthorConditionInput | null,
};

export type UpdateAuthorMutation = {
  updateAuthor?:  {
    __typename: "Author",
    id: string,
    name: string,
    bio: string,
    email: string,
    image: string,
    blogs?:  {
      __typename: "ModelBlogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAuthorMutationVariables = {
  input: DeleteAuthorInput,
  condition?: ModelAuthorConditionInput | null,
};

export type DeleteAuthorMutation = {
  deleteAuthor?:  {
    __typename: "Author",
    id: string,
    name: string,
    bio: string,
    email: string,
    image: string,
    blogs?:  {
      __typename: "ModelBlogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBlogMutationVariables = {
  input: CreateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type CreateBlogMutation = {
  createBlog?:  {
    __typename: "Blog",
    id: string,
    title: string,
    slug: string,
    thumbnail: string,
    authorId: string,
    author?:  {
      __typename: "Author",
      id: string,
      name: string,
      bio: string,
      email: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    excerpt: string,
    tableOfContents: string,
    seoTitle: string,
    seoDescription: string,
    seoKeywords: string,
    views?: number | null,
    categoryId: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      description: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    featuredId?: string | null,
    featured?:  {
      __typename: "Featured",
      id: string,
      title: string,
      description: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    publishedAt: string,
    status: BlogStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    readTime?: number | null,
    createdAt: string,
    updatedAt: string,
    authorBlogsId?: string | null,
    categoryBlogsId?: string | null,
    featuredBlogsId?: string | null,
  } | null,
};

export type UpdateBlogMutationVariables = {
  input: UpdateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type UpdateBlogMutation = {
  updateBlog?:  {
    __typename: "Blog",
    id: string,
    title: string,
    slug: string,
    thumbnail: string,
    authorId: string,
    author?:  {
      __typename: "Author",
      id: string,
      name: string,
      bio: string,
      email: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    excerpt: string,
    tableOfContents: string,
    seoTitle: string,
    seoDescription: string,
    seoKeywords: string,
    views?: number | null,
    categoryId: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      description: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    featuredId?: string | null,
    featured?:  {
      __typename: "Featured",
      id: string,
      title: string,
      description: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    publishedAt: string,
    status: BlogStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    readTime?: number | null,
    createdAt: string,
    updatedAt: string,
    authorBlogsId?: string | null,
    categoryBlogsId?: string | null,
    featuredBlogsId?: string | null,
  } | null,
};

export type DeleteBlogMutationVariables = {
  input: DeleteBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type DeleteBlogMutation = {
  deleteBlog?:  {
    __typename: "Blog",
    id: string,
    title: string,
    slug: string,
    thumbnail: string,
    authorId: string,
    author?:  {
      __typename: "Author",
      id: string,
      name: string,
      bio: string,
      email: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    excerpt: string,
    tableOfContents: string,
    seoTitle: string,
    seoDescription: string,
    seoKeywords: string,
    views?: number | null,
    categoryId: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      description: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    featuredId?: string | null,
    featured?:  {
      __typename: "Featured",
      id: string,
      title: string,
      description: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    publishedAt: string,
    status: BlogStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    readTime?: number | null,
    createdAt: string,
    updatedAt: string,
    authorBlogsId?: string | null,
    categoryBlogsId?: string | null,
    featuredBlogsId?: string | null,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description: string,
    image: string,
    blogs?:  {
      __typename: "ModelBlogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description: string,
    image: string,
    blogs?:  {
      __typename: "ModelBlogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description: string,
    image: string,
    blogs?:  {
      __typename: "ModelBlogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFeaturedMutationVariables = {
  input: CreateFeaturedInput,
  condition?: ModelFeaturedConditionInput | null,
};

export type CreateFeaturedMutation = {
  createFeatured?:  {
    __typename: "Featured",
    id: string,
    title: string,
    description: string,
    image: string,
    blogs?:  {
      __typename: "ModelBlogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFeaturedMutationVariables = {
  input: UpdateFeaturedInput,
  condition?: ModelFeaturedConditionInput | null,
};

export type UpdateFeaturedMutation = {
  updateFeatured?:  {
    __typename: "Featured",
    id: string,
    title: string,
    description: string,
    image: string,
    blogs?:  {
      __typename: "ModelBlogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFeaturedMutationVariables = {
  input: DeleteFeaturedInput,
  condition?: ModelFeaturedConditionInput | null,
};

export type DeleteFeaturedMutation = {
  deleteFeatured?:  {
    __typename: "Featured",
    id: string,
    title: string,
    description: string,
    image: string,
    blogs?:  {
      __typename: "ModelBlogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    name: string,
    bio?: string | null,
    email: string,
    comment: string,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      title: string,
      slug: string,
      thumbnail: string,
      authorId: string,
      content: string,
      excerpt: string,
      tableOfContents: string,
      seoTitle: string,
      seoDescription: string,
      seoKeywords: string,
      views?: number | null,
      categoryId: string,
      featuredId?: string | null,
      publishedAt: string,
      status: BlogStatus,
      readTime?: number | null,
      createdAt: string,
      updatedAt: string,
      authorBlogsId?: string | null,
      categoryBlogsId?: string | null,
      featuredBlogsId?: string | null,
    } | null,
    status: CommentStatus,
    createdAt: string,
    updatedAt: string,
    blogCommentsId?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      name: string,
      bio?: string | null,
      email: string,
      comment: string,
      blogId: string,
      status: CommentStatus,
      createdAt: string,
      updatedAt: string,
      blogCommentsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAuthorQueryVariables = {
  id: string,
};

export type GetAuthorQuery = {
  getAuthor?:  {
    __typename: "Author",
    id: string,
    name: string,
    bio: string,
    email: string,
    image: string,
    blogs?:  {
      __typename: "ModelBlogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAuthorsQueryVariables = {
  filter?: ModelAuthorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAuthorsQuery = {
  listAuthors?:  {
    __typename: "ModelAuthorConnection",
    items:  Array< {
      __typename: "Author",
      id: string,
      name: string,
      bio: string,
      email: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBlogQueryVariables = {
  id: string,
};

export type GetBlogQuery = {
  getBlog?:  {
    __typename: "Blog",
    id: string,
    title: string,
    slug: string,
    thumbnail: string,
    authorId: string,
    author?:  {
      __typename: "Author",
      id: string,
      name: string,
      bio: string,
      email: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    excerpt: string,
    tableOfContents: string,
    seoTitle: string,
    seoDescription: string,
    seoKeywords: string,
    views?: number | null,
    categoryId: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      description: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    featuredId?: string | null,
    featured?:  {
      __typename: "Featured",
      id: string,
      title: string,
      description: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    publishedAt: string,
    status: BlogStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    readTime?: number | null,
    createdAt: string,
    updatedAt: string,
    authorBlogsId?: string | null,
    categoryBlogsId?: string | null,
    featuredBlogsId?: string | null,
  } | null,
};

export type ListBlogsQueryVariables = {
  filter?: ModelBlogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlogsQuery = {
  listBlogs?:  {
    __typename: "ModelBlogConnection",
    items:  Array< {
      __typename: "Blog",
      id: string,
      title: string,
      slug: string,
      thumbnail: string,
      authorId: string,
      content: string,
      excerpt: string,
      tableOfContents: string,
      seoTitle: string,
      seoDescription: string,
      seoKeywords: string,
      views?: number | null,
      categoryId: string,
      featuredId?: string | null,
      publishedAt: string,
      status: BlogStatus,
      readTime?: number | null,
      createdAt: string,
      updatedAt: string,
      authorBlogsId?: string | null,
      categoryBlogsId?: string | null,
      featuredBlogsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description: string,
    image: string,
    blogs?:  {
      __typename: "ModelBlogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      description: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFeaturedQueryVariables = {
  id: string,
};

export type GetFeaturedQuery = {
  getFeatured?:  {
    __typename: "Featured",
    id: string,
    title: string,
    description: string,
    image: string,
    blogs?:  {
      __typename: "ModelBlogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFeaturedsQueryVariables = {
  filter?: ModelFeaturedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFeaturedsQuery = {
  listFeatureds?:  {
    __typename: "ModelFeaturedConnection",
    items:  Array< {
      __typename: "Featured",
      id: string,
      title: string,
      description: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    name: string,
    bio?: string | null,
    email: string,
    comment: string,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      title: string,
      slug: string,
      thumbnail: string,
      authorId: string,
      content: string,
      excerpt: string,
      tableOfContents: string,
      seoTitle: string,
      seoDescription: string,
      seoKeywords: string,
      views?: number | null,
      categoryId: string,
      featuredId?: string | null,
      publishedAt: string,
      status: BlogStatus,
      readTime?: number | null,
      createdAt: string,
      updatedAt: string,
      authorBlogsId?: string | null,
      categoryBlogsId?: string | null,
      featuredBlogsId?: string | null,
    } | null,
    status: CommentStatus,
    createdAt: string,
    updatedAt: string,
    blogCommentsId?: string | null,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    name: string,
    bio?: string | null,
    email: string,
    comment: string,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      title: string,
      slug: string,
      thumbnail: string,
      authorId: string,
      content: string,
      excerpt: string,
      tableOfContents: string,
      seoTitle: string,
      seoDescription: string,
      seoKeywords: string,
      views?: number | null,
      categoryId: string,
      featuredId?: string | null,
      publishedAt: string,
      status: BlogStatus,
      readTime?: number | null,
      createdAt: string,
      updatedAt: string,
      authorBlogsId?: string | null,
      categoryBlogsId?: string | null,
      featuredBlogsId?: string | null,
    } | null,
    status: CommentStatus,
    createdAt: string,
    updatedAt: string,
    blogCommentsId?: string | null,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    name: string,
    bio?: string | null,
    email: string,
    comment: string,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      title: string,
      slug: string,
      thumbnail: string,
      authorId: string,
      content: string,
      excerpt: string,
      tableOfContents: string,
      seoTitle: string,
      seoDescription: string,
      seoKeywords: string,
      views?: number | null,
      categoryId: string,
      featuredId?: string | null,
      publishedAt: string,
      status: BlogStatus,
      readTime?: number | null,
      createdAt: string,
      updatedAt: string,
      authorBlogsId?: string | null,
      categoryBlogsId?: string | null,
      featuredBlogsId?: string | null,
    } | null,
    status: CommentStatus,
    createdAt: string,
    updatedAt: string,
    blogCommentsId?: string | null,
  } | null,
};

export type OnCreateAuthorSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorFilterInput | null,
};

export type OnCreateAuthorSubscription = {
  onCreateAuthor?:  {
    __typename: "Author",
    id: string,
    name: string,
    bio: string,
    email: string,
    image: string,
    blogs?:  {
      __typename: "ModelBlogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAuthorSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorFilterInput | null,
};

export type OnUpdateAuthorSubscription = {
  onUpdateAuthor?:  {
    __typename: "Author",
    id: string,
    name: string,
    bio: string,
    email: string,
    image: string,
    blogs?:  {
      __typename: "ModelBlogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAuthorSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorFilterInput | null,
};

export type OnDeleteAuthorSubscription = {
  onDeleteAuthor?:  {
    __typename: "Author",
    id: string,
    name: string,
    bio: string,
    email: string,
    image: string,
    blogs?:  {
      __typename: "ModelBlogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnCreateBlogSubscription = {
  onCreateBlog?:  {
    __typename: "Blog",
    id: string,
    title: string,
    slug: string,
    thumbnail: string,
    authorId: string,
    author?:  {
      __typename: "Author",
      id: string,
      name: string,
      bio: string,
      email: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    excerpt: string,
    tableOfContents: string,
    seoTitle: string,
    seoDescription: string,
    seoKeywords: string,
    views?: number | null,
    categoryId: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      description: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    featuredId?: string | null,
    featured?:  {
      __typename: "Featured",
      id: string,
      title: string,
      description: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    publishedAt: string,
    status: BlogStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    readTime?: number | null,
    createdAt: string,
    updatedAt: string,
    authorBlogsId?: string | null,
    categoryBlogsId?: string | null,
    featuredBlogsId?: string | null,
  } | null,
};

export type OnUpdateBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnUpdateBlogSubscription = {
  onUpdateBlog?:  {
    __typename: "Blog",
    id: string,
    title: string,
    slug: string,
    thumbnail: string,
    authorId: string,
    author?:  {
      __typename: "Author",
      id: string,
      name: string,
      bio: string,
      email: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    excerpt: string,
    tableOfContents: string,
    seoTitle: string,
    seoDescription: string,
    seoKeywords: string,
    views?: number | null,
    categoryId: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      description: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    featuredId?: string | null,
    featured?:  {
      __typename: "Featured",
      id: string,
      title: string,
      description: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    publishedAt: string,
    status: BlogStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    readTime?: number | null,
    createdAt: string,
    updatedAt: string,
    authorBlogsId?: string | null,
    categoryBlogsId?: string | null,
    featuredBlogsId?: string | null,
  } | null,
};

export type OnDeleteBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnDeleteBlogSubscription = {
  onDeleteBlog?:  {
    __typename: "Blog",
    id: string,
    title: string,
    slug: string,
    thumbnail: string,
    authorId: string,
    author?:  {
      __typename: "Author",
      id: string,
      name: string,
      bio: string,
      email: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    excerpt: string,
    tableOfContents: string,
    seoTitle: string,
    seoDescription: string,
    seoKeywords: string,
    views?: number | null,
    categoryId: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      description: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    featuredId?: string | null,
    featured?:  {
      __typename: "Featured",
      id: string,
      title: string,
      description: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    publishedAt: string,
    status: BlogStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    readTime?: number | null,
    createdAt: string,
    updatedAt: string,
    authorBlogsId?: string | null,
    categoryBlogsId?: string | null,
    featuredBlogsId?: string | null,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description: string,
    image: string,
    blogs?:  {
      __typename: "ModelBlogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description: string,
    image: string,
    blogs?:  {
      __typename: "ModelBlogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description: string,
    image: string,
    blogs?:  {
      __typename: "ModelBlogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFeaturedSubscriptionVariables = {
  filter?: ModelSubscriptionFeaturedFilterInput | null,
};

export type OnCreateFeaturedSubscription = {
  onCreateFeatured?:  {
    __typename: "Featured",
    id: string,
    title: string,
    description: string,
    image: string,
    blogs?:  {
      __typename: "ModelBlogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFeaturedSubscriptionVariables = {
  filter?: ModelSubscriptionFeaturedFilterInput | null,
};

export type OnUpdateFeaturedSubscription = {
  onUpdateFeatured?:  {
    __typename: "Featured",
    id: string,
    title: string,
    description: string,
    image: string,
    blogs?:  {
      __typename: "ModelBlogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFeaturedSubscriptionVariables = {
  filter?: ModelSubscriptionFeaturedFilterInput | null,
};

export type OnDeleteFeaturedSubscription = {
  onDeleteFeatured?:  {
    __typename: "Featured",
    id: string,
    title: string,
    description: string,
    image: string,
    blogs?:  {
      __typename: "ModelBlogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
