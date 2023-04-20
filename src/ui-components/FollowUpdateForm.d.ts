/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Follow } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FollowUpdateFormInputValues = {
    following_user_id?: number;
    followed_user_id?: number;
    status?: string;
};
export declare type FollowUpdateFormValidationValues = {
    following_user_id?: ValidationFunction<number>;
    followed_user_id?: ValidationFunction<number>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FollowUpdateFormOverridesProps = {
    FollowUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    following_user_id?: PrimitiveOverrideProps<TextFieldProps>;
    followed_user_id?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type FollowUpdateFormProps = React.PropsWithChildren<{
    overrides?: FollowUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    follow?: Follow;
    onSubmit?: (fields: FollowUpdateFormInputValues) => FollowUpdateFormInputValues;
    onSuccess?: (fields: FollowUpdateFormInputValues) => void;
    onError?: (fields: FollowUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FollowUpdateFormInputValues) => FollowUpdateFormInputValues;
    onValidate?: FollowUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FollowUpdateForm(props: FollowUpdateFormProps): React.ReactElement;
