/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FollowCreateFormInputValues = {
    following_user_id?: number;
    followed_user_id?: number;
    status?: string;
};
export declare type FollowCreateFormValidationValues = {
    following_user_id?: ValidationFunction<number>;
    followed_user_id?: ValidationFunction<number>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FollowCreateFormOverridesProps = {
    FollowCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    following_user_id?: PrimitiveOverrideProps<TextFieldProps>;
    followed_user_id?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type FollowCreateFormProps = React.PropsWithChildren<{
    overrides?: FollowCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FollowCreateFormInputValues) => FollowCreateFormInputValues;
    onSuccess?: (fields: FollowCreateFormInputValues) => void;
    onError?: (fields: FollowCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FollowCreateFormInputValues) => FollowCreateFormInputValues;
    onValidate?: FollowCreateFormValidationValues;
} & React.CSSProperties>;
export default function FollowCreateForm(props: FollowCreateFormProps): React.ReactElement;
