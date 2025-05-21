// authorService.ts or inside your component/page

import { generateClient } from 'aws-amplify/api';
import { listFeatureds } from '@/src/graphql/queries';
import { createFeatured, deleteFeatured, updateFeatured } from '@/src/graphql/mutations';
import { CreateFeaturedInput, Featured, UpdateFeaturedInput } from '@/src/API';

const client = generateClient({
    authMode: "userPool"
});

export const fetchFeateured = async (limit = 10, filter = {}, nextToken: string | null) => {
    try {
        const response = await client.graphql({
            query: listFeatureds,
            variables: {
                limit,
                nextToken,
                filter
            },
        });

        const data = response.data.listFeatureds;
        console.log("data", data)
        return {
            featureds: data.items,
            nextToken: data.nextToken
        };
    } catch (error) {
        console.error('Error fetching featureds:', error);
        throw error;
    }
};



export const updateFeaturedFunction = async (formData: UpdateFeaturedInput) => {
    try {
        const response = await client.graphql({
            query: updateFeatured,
            variables: {
                input: {
                    id: formData.id,
                    title: formData.title,
                    description: formData.description,
                    image: formData.image,
                }
            }
        });

        const data = response.data.updateFeatured;
        console.log("data", data)
        return {
            id: data.id,
            title: data.title,
            description: data.description,
            image: data.image
        } as Featured;
    } catch (error) {
        console.error('Error fetching featured:', error);
        throw error;
    }
};



export const createFeaturedFunction = async (formData: CreateFeaturedInput): Promise<Featured> => {
    try {
        const response = await client.graphql({
            query: createFeatured,
            variables: {
                input: {
                    title: formData.title,
                    description: formData.description,
                    image: formData.image,
                }
            }
        });

        const data = response.data.createFeatured;
        console.log("data", data)
        return {
            id: data.id,
            title: data.title,
            description: data.description,
            image: data.image
        } as Featured;
    } catch (error) {
        console.error('Error create featured:', error);
        throw error;
    }
};


export const deleteFeaturedFunction = async (featuredId: string): Promise<void> => {
    try {
        await client.graphql({
            query: deleteFeatured,
            variables: {
                input: {
                    id: featuredId
                }
            }
        });
    } catch (error) {
        console.error('Error deleting featured:', error);
        throw error;
    }
};