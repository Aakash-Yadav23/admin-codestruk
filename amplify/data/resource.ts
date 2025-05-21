import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { authorSchema } from "./schema/author.schema";
import { blogSchema } from "./schema/blog.schema";
import { categorySchema } from "./schema/category.schema";
import { commentSchema } from "./schema/comment.schema";
import { featuredSchema } from "./schema/featured.schema";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/


const schema = a.schema({
  Author: authorSchema,
  Blog: blogSchema,
  Category: categorySchema,
  Comment: commentSchema,
  Featured: featuredSchema,
});



export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
