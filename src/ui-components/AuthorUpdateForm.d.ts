/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Author } from "../API.ts";
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
export declare type AuthorUpdateFormInputValues = {
    name?: string;
    bio?: string;
    email?: string;
    image?: string;
};
export declare type AuthorUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    bio?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AuthorUpdateFormOverridesProps = {
    AuthorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    bio?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AuthorUpdateFormProps = React.PropsWithChildren<{
    overrides?: AuthorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    author?: Author;
    onSubmit?: (fields: AuthorUpdateFormInputValues) => AuthorUpdateFormInputValues;
    onSuccess?: (fields: AuthorUpdateFormInputValues) => void;
    onError?: (fields: AuthorUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AuthorUpdateFormInputValues) => AuthorUpdateFormInputValues;
    onValidate?: AuthorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AuthorUpdateForm(props: AuthorUpdateFormProps): React.ReactElement;
