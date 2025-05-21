import { createAuthor, createCategory } from "@/src/graphql/mutations";
import data from "./category.json";

import { generateClient } from 'aws-amplify/api';
const client = generateClient({
    // apiKey: "da2-voqub2gkjrd7hb2i5fwwkwgvki",
    authMode: "userPool"
});


export const createCategoryFun = async () => {
    try {

        for (const category of data) {
            const input = {
                name: category.name,
                description: category.description,
                image: category.image
            };
            const response = await client.graphql({
                query: createCategory,
                variables: {
                    input
                },


            }
            );
            console.log("category created:", response.data.createCategory);
        }



        console.log("All category created successfully.");
    } catch (error) {
        console.error("Error creating category:", error);
    }
};