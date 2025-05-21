import { type ClientSchema, a, defineData } from "@aws-amplify/backend";


export const featuredSchema = a.model({
    title: a.string().required(),
    description: a.string().required(),
    blogId: a.id().required(),
    image: a.string().required(),
    blog: a.hasMany("Blog", "featuredId"),
}).authorization((allow) => [
    allow.group("Admin").to(["create", "update", "delete", "read"]),
    allow.group("Author").to(["create", "update", "delete", "read"]),
    allow.publicApiKey().to(["read"]),
]);