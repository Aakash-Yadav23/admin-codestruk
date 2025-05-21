// authorService.ts or inside your component/page

import { generateClient } from 'aws-amplify/api';
import { listCategories } from '@/src/graphql/queries';
import { Category } from '@/types/Category';
import { createCategory, updateCategory } from '@/src/graphql/mutations';
import { CreateCategoryInput, UpdateCategoryInput } from '@/src/API';

const client = generateClient({
    authMode: "userPool"
});

export const fetchCategories = async (limit = 10, filter = {}, nextToken: string | null) => {
    try {
        const response = await client.graphql({
            query: listCategories,
            variables: {
                limit,
                nextToken,
                filter
            },
        });

        const data = response.data.listCategories;
        console.log("data", data)
        return {
            categories: data.items,
            nextToken: data.nextToken
        };
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};



export const updateCategoryFunction = async (formData: UpdateCategoryInput) => {
    try {
        const response = await client.graphql({
            query: updateCategory,
            variables: {
                input: {
                    id: formData.id,
                    name: formData.name,
                    description: formData.description,
                    image: formData.image,
                }
            }
        });

        const data = response.data.updateCategory;
        console.log("data", data)
        return data
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};



export const createCategoryFunction = async (formData: CreateCategoryInput) => {
    try {
        const response = await client.graphql({
            query: createCategory,
            variables: {
                input: {
                    name: formData.name,
                    description: formData.description,
                    image: formData.image,
                }
            }
        });

        const data = response.data.createCategory;
        console.log("data", data)
        return data
    } catch (error) {
        console.error('Error create categories:', error);
        throw error;
    }
};