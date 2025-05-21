import { type ClientSchema, a, defineData } from "@aws-amplify/backend";




export const authorSchema = a.model({
    name: a.string().required(),
    bio: a.string().required(),
    email: a.email().required(),
    image: a.url().required(),
    blogs: a.hasMany("Blog", "authorId"),
}).authorization((allow) => [
    allow.group("Admin").to(["create", "update", "delete", "read"]),
    allow.group("Author").to(["create", "update", "delete", "read"]),
    allow.publicApiKey().to(["read"]),
]);