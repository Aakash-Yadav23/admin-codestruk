/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Blog } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BlogUpdateFormInputValues = {
    title?: string;
    slug?: string;
    thumbnail?: string;
    authorId?: string;
    content?: string;
    excerpt?: string;
    tableOfContents?: string;
    seoTitle?: string;
    seoDescription?: string;
    seoKeywords?: string;
    views?: number;
    categoryId?: string;
    featuredId?: string;
    publishedAt?: string;
    status?: string;
    readTime?: number;
};
export declare type BlogUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    slug?: ValidationFunction<string>;
    thumbnail?: ValidationFunction<string>;
    authorId?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    excerpt?: ValidationFunction<string>;
    tableOfContents?: ValidationFunction<string>;
    seoTitle?: ValidationFunction<string>;
    seoDescription?: ValidationFunction<string>;
    seoKeywords?: ValidationFunction<string>;
    views?: ValidationFunction<number>;
    categoryId?: ValidationFunction<string>;
    featuredId?: ValidationFunction<string>;
    publishedAt?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    readTime?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlogUpdateFormOverridesProps = {
    BlogUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    slug?: PrimitiveOverrideProps<TextFieldProps>;
    thumbnail?: PrimitiveOverrideProps<TextFieldProps>;
    authorId?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    excerpt?: PrimitiveOverrideProps<TextFieldProps>;
    tableOfContents?: PrimitiveOverrideProps<TextAreaFieldProps>;
    seoTitle?: PrimitiveOverrideProps<TextFieldProps>;
    seoDescription?: PrimitiveOverrideProps<TextFieldProps>;
    seoKeywords?: PrimitiveOverrideProps<TextFieldProps>;
    views?: PrimitiveOverrideProps<TextFieldProps>;
    categoryId?: PrimitiveOverrideProps<TextFieldProps>;
    featuredId?: PrimitiveOverrideProps<TextFieldProps>;
    publishedAt?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    readTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BlogUpdateFormProps = React.PropsWithChildren<{
    overrides?: BlogUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    blog?: Blog;
    onSubmit?: (fields: BlogUpdateFormInputValues) => BlogUpdateFormInputValues;
    onSuccess?: (fields: BlogUpdateFormInputValues) => void;
    onError?: (fields: BlogUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BlogUpdateFormInputValues) => BlogUpdateFormInputValues;
    onValidate?: BlogUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BlogUpdateForm(props: BlogUpdateFormProps): React.ReactElement;
