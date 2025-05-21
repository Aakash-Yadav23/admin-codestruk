/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createComment = /* GraphQL */ `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCommentMutationVariables,
  APITypes.CreateCommentMutation
>;
export const updateComment = /* GraphQL */ `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCommentMutationVariables,
  APITypes.UpdateCommentMutation
>;
export const deleteComment = /* GraphQL */ `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
export const createAuthor = /* GraphQL */ `mutation CreateAuthor(
  $input: CreateAuthorInput!
  $condition: ModelAuthorConditionInput
) {
  createAuthor(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAuthorMutationVariables,
  APITypes.CreateAuthorMutation
>;
export const updateAuthor = /* GraphQL */ `mutation UpdateAuthor(
  $input: UpdateAuthorInput!
  $condition: ModelAuthorConditionInput
) {
  updateAuthor(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAuthorMutationVariables,
  APITypes.UpdateAuthorMutation
>;
export const deleteAuthor = /* GraphQL */ `mutation DeleteAuthor(
  $input: DeleteAuthorInput!
  $condition: ModelAuthorConditionInput
) {
  deleteAuthor(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAuthorMutationVariables,
  APITypes.DeleteAuthorMutation
>;
export const createBlog = /* GraphQL */ `mutation CreateBlog(
  $input: CreateBlogInput!
  $condition: ModelBlogConditionInput
) {
  createBlog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBlogMutationVariables,
  APITypes.CreateBlogMutation
>;
export const updateBlog = /* GraphQL */ `mutation UpdateBlog(
  $input: UpdateBlogInput!
  $condition: ModelBlogConditionInput
) {
  updateBlog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBlogMutationVariables,
  APITypes.UpdateBlogMutation
>;
export const deleteBlog = /* GraphQL */ `mutation DeleteBlog(
  $input: DeleteBlogInput!
  $condition: ModelBlogConditionInput
) {
  deleteBlog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBlogMutationVariables,
  APITypes.DeleteBlogMutation
>;
export const createCategory = /* GraphQL */ `mutation CreateCategory(
  $input: CreateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  createCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCategoryMutationVariables,
  APITypes.CreateCategoryMutation
>;
export const updateCategory = /* GraphQL */ `mutation UpdateCategory(
  $input: UpdateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  updateCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCategoryMutationVariables,
  APITypes.UpdateCategoryMutation
>;
export const deleteCategory = /* GraphQL */ `mutation DeleteCategory(
  $input: DeleteCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  deleteCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCategoryMutationVariables,
  APITypes.DeleteCategoryMutation
>;
export const createFeatured = /* GraphQL */ `mutation CreateFeatured(
  $input: CreateFeaturedInput!
  $condition: ModelFeaturedConditionInput
) {
  createFeatured(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFeaturedMutationVariables,
  APITypes.CreateFeaturedMutation
>;
export const updateFeatured = /* GraphQL */ `mutation UpdateFeatured(
  $input: UpdateFeaturedInput!
  $condition: ModelFeaturedConditionInput
) {
  updateFeatured(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFeaturedMutationVariables,
  APITypes.UpdateFeaturedMutation
>;
export const deleteFeatured = /* GraphQL */ `mutation DeleteFeatured(
  $input: DeleteFeaturedInput!
  $condition: ModelFeaturedConditionInput
) {
  deleteFeatured(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFeaturedMutationVariables,
  APITypes.DeleteFeaturedMutation
>;
