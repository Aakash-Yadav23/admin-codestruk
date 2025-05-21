/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type FeaturedCreateFormInputValues = {
    title?: string;
    description?: string;
    image?: string;
};
export declare type FeaturedCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeaturedCreateFormOverridesProps = {
    FeaturedCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FeaturedCreateFormProps = React.PropsWithChildren<{
    overrides?: FeaturedCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FeaturedCreateFormInputValues) => FeaturedCreateFormInputValues;
    onSuccess?: (fields: FeaturedCreateFormInputValues) => void;
    onError?: (fields: FeaturedCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FeaturedCreateFormInputValues) => FeaturedCreateFormInputValues;
    onValidate?: FeaturedCreateFormValidationValues;
} & React.CSSProperties>;
export default function FeaturedCreateForm(props: FeaturedCreateFormProps): React.ReactElement;
