import { type ClientSchema, a, defineData } from "@aws-amplify/backend";


export const blogSchema = a.model({
    title: a.string().required(),
    slug: a.string().required(),
    authorId: a.id().required(),
    author: a.belongsTo("Author", "authorId"),
    content: a.string().required(),
    excerpt: a.string().required(),
    tableOfContents: a.json().required(),
    seoTitle: a.string().required(),
    seoDescription: a.string().required(),
    seoKeywords: a.string().required(),
    views: a.integer().default(0),

    categoryId: a.id().required(),
    category: a.belongsTo("Category", "categoryId"),
    featuredId: a.id(),
    featured: a.belongsTo("Featured", "featuredId"),
    publishedAt: a.datetime().required(),
    status: a.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]),
    comments: a.hasMany("Comment", "blogId"),
    readTime: a.integer(),

}).authorization((allow) => [
    allow.group("Admin").to(["create", "update", "delete", "read"]),
    allow.group("Author").to(["create", "update", "delete", "read"]),
    allow.publicApiKey().to(["read"]),
]);