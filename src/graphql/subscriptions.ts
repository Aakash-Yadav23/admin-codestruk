/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateComment = /* GraphQL */ `subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
  onCreateComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommentSubscriptionVariables,
  APITypes.OnCreateCommentSubscription
>;
export const onUpdateComment = /* GraphQL */ `subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
  onUpdateComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommentSubscriptionVariables,
  APITypes.OnUpdateCommentSubscription
>;
export const onDeleteComment = /* GraphQL */ `subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
  onDeleteComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommentSubscriptionVariables,
  APITypes.OnDeleteCommentSubscription
>;
export const onCreateAuthor = /* GraphQL */ `subscription OnCreateAuthor($filter: ModelSubscriptionAuthorFilterInput) {
  onCreateAuthor(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAuthorSubscriptionVariables,
  APITypes.OnCreateAuthorSubscription
>;
export const onUpdateAuthor = /* GraphQL */ `subscription OnUpdateAuthor($filter: ModelSubscriptionAuthorFilterInput) {
  onUpdateAuthor(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAuthorSubscriptionVariables,
  APITypes.OnUpdateAuthorSubscription
>;
export const onDeleteAuthor = /* GraphQL */ `subscription OnDeleteAuthor($filter: ModelSubscriptionAuthorFilterInput) {
  onDeleteAuthor(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAuthorSubscriptionVariables,
  APITypes.OnDeleteAuthorSubscription
>;
export const onCreateBlog = /* GraphQL */ `subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
  onCreateBlog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBlogSubscriptionVariables,
  APITypes.OnCreateBlogSubscription
>;
export const onUpdateBlog = /* GraphQL */ `subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
  onUpdateBlog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBlogSubscriptionVariables,
  APITypes.OnUpdateBlogSubscription
>;
export const onDeleteBlog = /* GraphQL */ `subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
  onDeleteBlog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBlogSubscriptionVariables,
  APITypes.OnDeleteBlogSubscription
>;
export const onCreateCategory = /* GraphQL */ `subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onCreateCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCategorySubscriptionVariables,
  APITypes.OnCreateCategorySubscription
>;
export const onUpdateCategory = /* GraphQL */ `subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onUpdateCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCategorySubscriptionVariables,
  APITypes.OnUpdateCategorySubscription
>;
export const onDeleteCategory = /* GraphQL */ `subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onDeleteCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCategorySubscriptionVariables,
  APITypes.OnDeleteCategorySubscription
>;
export const onCreateFeatured = /* GraphQL */ `subscription OnCreateFeatured($filter: ModelSubscriptionFeaturedFilterInput) {
  onCreateFeatured(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFeaturedSubscriptionVariables,
  APITypes.OnCreateFeaturedSubscription
>;
export const onUpdateFeatured = /* GraphQL */ `subscription OnUpdateFeatured($filter: ModelSubscriptionFeaturedFilterInput) {
  onUpdateFeatured(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFeaturedSubscriptionVariables,
  APITypes.OnUpdateFeaturedSubscription
>;
export const onDeleteFeatured = /* GraphQL */ `subscription OnDeleteFeatured($filter: ModelSubscriptionFeaturedFilterInput) {
  onDeleteFeatured(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFeaturedSubscriptionVariables,
  APITypes.OnDeleteFeaturedSubscription
>;
