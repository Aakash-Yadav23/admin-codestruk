/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Featured } from "../API.ts";
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
export declare type FeaturedUpdateFormInputValues = {
    title?: string;
    description?: string;
    image?: string;
};
export declare type FeaturedUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeaturedUpdateFormOverridesProps = {
    FeaturedUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FeaturedUpdateFormProps = React.PropsWithChildren<{
    overrides?: FeaturedUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    featured?: Featured;
    onSubmit?: (fields: FeaturedUpdateFormInputValues) => FeaturedUpdateFormInputValues;
    onSuccess?: (fields: FeaturedUpdateFormInputValues) => void;
    onError?: (fields: FeaturedUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FeaturedUpdateFormInputValues) => FeaturedUpdateFormInputValues;
    onValidate?: FeaturedUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FeaturedUpdateForm(props: FeaturedUpdateFormProps): React.ReactElement;
