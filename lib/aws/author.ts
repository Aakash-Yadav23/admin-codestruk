// authorService.ts or inside your component/page

import { generateClient } from 'aws-amplify/api';
import { listAuthors } from '@/src/graphql/queries';
import { createAuthor, deleteAuthor, updateAuthor } from '@/src/graphql/mutations';
import { CreateAuthorInput, UpdateAuthorInput } from '@/src/API';

const client = generateClient();



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

export const fetchAuthors = async (limit = 10, nextToken: string | null = null) => {
    try {
        const response = await client.graphql({
            query: listAuthors,
            variables: {
                limit,
                nextToken
            },
        });

        const data = response.data.listAuthors;
        console.log("data", data)
        return {
            authors: data.items,
            nextToken: data.nextToken
        };
    } catch (error) {
        console.error('Error fetching authors:', error);
        throw error;
    }
};

export const deleteAuthorFunction = async (id: string) => {
    try {
        await client.graphql({
            query: deleteAuthor,
            variables: {
                input: {
                    id
                }
            }
        });
    } catch (error) {
        console.error('Error deleting author:', error);
        throw error;
    }
};


export const updateAuthorFun = async (newData: UpdateAuthorInput) => {
    try {

        const response = await client.graphql({
            query: updateAuthor,
            variables: {
                input: {
                    id: newData.id,
                    name: newData.name,
                    email: newData.email,
                    bio: newData.bio,
                    image: newData.image
                }
            },


        }
        );
        console.log("All authors created successfully.");
        const data = response.data.updateAuthor
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