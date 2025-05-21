// types/Category.ts

export type Category = {
  id: string;
  name: string;
  description: string;
  image: string; // AWSURL maps to string in client
};


export type CreateCategoryInput = {
  name: string;
  description: string;
  image: string; // AWSURL maps to string in client
};