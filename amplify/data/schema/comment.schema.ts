
import { type ClientSchema, a, defineData } from "@aws-amplify/backend";



export const commentSchema = a.model({
    name: a.string().required(),
    bio: a.string(),
    email: a.email().required(),
    comment: a.string().required(),
    blogId: a.id().required(),
    blog: a.belongsTo("Blog", "blogId"),
    status: a.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]),
}).authorization((allow) => allow.publicApiKey());

