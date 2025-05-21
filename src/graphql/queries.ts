/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getComment = /* GraphQL */ `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    name
    bio
    email
    comment
    blogId
    blog {
      id
      title
      slug
      thumbnail
      authorId
      content
      excerpt
      tableOfContents
      seoTitle
      seoDescription
      seoKeywords
      views
      categoryId
      featuredId
      publishedAt
      status
      readTime
      createdAt
      updatedAt
      authorBlogsId
      categoryBlogsId
      featuredBlogsId
      __typename
    }
    status
    createdAt
    updatedAt
    blogCommentsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCommentQueryVariables,
  APITypes.GetCommentQuery
>;
export const listComments = /* GraphQL */ `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      bio
      email
      comment
      blogId
      status
      createdAt
      updatedAt
      blogCommentsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentsQueryVariables,
  APITypes.ListCommentsQuery
>;
export const getAuthor = /* GraphQL */ `query GetAuthor($id: ID!) {
  getAuthor(id: $id) {
    id
    name
    bio
    email
    image
    blogs {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetAuthorQueryVariables, APITypes.GetAuthorQuery>;
export const listAuthors = /* GraphQL */ `query ListAuthors(
  $filter: ModelAuthorFilterInput
  $limit: Int
  $nextToken: String
) {
  listAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      bio
      email
      image
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAuthorsQueryVariables,
  APITypes.ListAuthorsQuery
>;
export const getBlog = /* GraphQL */ `query GetBlog($id: ID!) {
  getBlog(id: $id) {
    id
    title
    slug
    thumbnail
    authorId
    author {
      id
      name
      bio
      email
      image
      createdAt
      updatedAt
      __typename
    }
    content
    excerpt
    tableOfContents
    seoTitle
    seoDescription
    seoKeywords
    views
    categoryId
    category {
      id
      name
      description
      image
      createdAt
      updatedAt
      __typename
    }
    featuredId
    featured {
      id
      title
      description
      image
      createdAt
      updatedAt
      __typename
    }
    publishedAt
    status
    comments {
      nextToken
      __typename
    }
    readTime
    createdAt
    updatedAt
    authorBlogsId
    categoryBlogsId
    featuredBlogsId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetBlogQueryVariables, APITypes.GetBlogQuery>;
export const listBlogs = /* GraphQL */ `query ListBlogs(
  $filter: ModelBlogFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      slug
      thumbnail
      authorId
      content
      excerpt
      tableOfContents
      seoTitle
      seoDescription
      seoKeywords
      views
      categoryId
      featuredId
      publishedAt
      status
      readTime
      createdAt
      updatedAt
      authorBlogsId
      categoryBlogsId
      featuredBlogsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListBlogsQueryVariables, APITypes.ListBlogsQuery>;
export const getCategory = /* GraphQL */ `query GetCategory($id: ID!) {
  getCategory(id: $id) {
    id
    name
    description
    image
    blogs {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCategoryQueryVariables,
  APITypes.GetCategoryQuery
>;
export const listCategories = /* GraphQL */ `query ListCategories(
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      image
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCategoriesQueryVariables,
  APITypes.ListCategoriesQuery
>;
export const getFeatured = /* GraphQL */ `query GetFeatured($id: ID!) {
  getFeatured(id: $id) {
    id
    title
    description
    image
    blogs {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFeaturedQueryVariables,
  APITypes.GetFeaturedQuery
>;
export const listFeatureds = /* GraphQL */ `query ListFeatureds(
  $filter: ModelFeaturedFilterInput
  $limit: Int
  $nextToken: String
) {
  listFeatureds(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      image
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFeaturedsQueryVariables,
  APITypes.ListFeaturedsQuery
>;
