import { type ClientSchema, a, defineData } from "@aws-amplify/backend";



export const categorySchema = a.model({
    name: a.string().required(),
    description: a.string().required(),
    image: a.url().required(),
    blogs: a.hasMany("Blog", "categoryId"),
}).authorization((allow) => [
    allow.group("Admin").to(["create", "update", "delete", "read"]),
    allow.group("Author").to(["create", "update", "delete", "read"]),
    allow.publicApiKey().to(["read"])
]);