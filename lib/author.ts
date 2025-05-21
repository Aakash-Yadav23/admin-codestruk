import { createAuthor } from "@/src/graphql/mutations";
import data from "./author.json";

import { generateClient } from 'aws-amplify/api';
import { CreateAuthorInput } from "@/src/API";
const client = generateClient({
    // apiKey: "da2-voqub2gkjrd7hb2i5fwwkwgvki",
    authMode: "userPool"
});


export const createAuthorFun = async (newData: CreateAuthorInput) => {
    try {

        const response = await client.graphql({
            query: createAuthor,
            variables: {
                input: {
                    name: newData.name,
                    email: newData.email,
                    bio: newData.bio,
                    image: newData.image
                }
            },


        }
        );
        console.log("All authors created successfully.");
        const data = response.data.createAuthor
        return {
            id: data.id,
            name: data.name,
            email: data.email,
            bio: data.bio,
            image: data.image
        };
    } catch (error) {
        throw error;
        console.error("Error creating authors:", error);
    }
};