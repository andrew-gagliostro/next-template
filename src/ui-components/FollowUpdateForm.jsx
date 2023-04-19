/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Follow } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function FollowUpdateForm(props) {
  const {
    id: idProp,
    follow: followModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    following_user_id: "",
    followed_user_id: "",
    status: "",
  };
  const [following_user_id, setFollowing_user_id] = React.useState(
    initialValues.following_user_id
  );
  const [followed_user_id, setFollowed_user_id] = React.useState(
    initialValues.followed_user_id
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = followRecord
      ? { ...initialValues, ...followRecord }
      : initialValues;
    setFollowing_user_id(cleanValues.following_user_id);
    setFollowed_user_id(cleanValues.followed_user_id);
    setStatus(cleanValues.status);
    setErrors({});
  };
  const [followRecord, setFollowRecord] = React.useState(followModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Follow, idProp)
        : followModelProp;
      setFollowRecord(record);
    };
    queryData();
  }, [idProp, followModelProp]);
  React.useEffect(resetStateValues, [followRecord]);
  const validations = {
    following_user_id: [{ type: "Required" }],
    followed_user_id: [{ type: "Required" }],
    status: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          following_user_id,
          followed_user_id,
          status,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Follow.copyOf(followRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "FollowUpdateForm")}
      {...rest}
    >
      <TextField
        label="Following user id"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={following_user_id}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              following_user_id: value,
              followed_user_id,
              status,
            };
            const result = onChange(modelFields);
            value = result?.following_user_id ?? value;
          }
          if (errors.following_user_id?.hasError) {
            runValidationTasks("following_user_id", value);
          }
          setFollowing_user_id(value);
        }}
        onBlur={() =>
          runValidationTasks("following_user_id", following_user_id)
        }
        errorMessage={errors.following_user_id?.errorMessage}
        hasError={errors.following_user_id?.hasError}
        {...getOverrideProps(overrides, "following_user_id")}
      ></TextField>
      <TextField
        label="Followed user id"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={followed_user_id}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              following_user_id,
              followed_user_id: value,
              status,
            };
            const result = onChange(modelFields);
            value = result?.followed_user_id ?? value;
          }
          if (errors.followed_user_id?.hasError) {
            runValidationTasks("followed_user_id", value);
          }
          setFollowed_user_id(value);
        }}
        onBlur={() => runValidationTasks("followed_user_id", followed_user_id)}
        errorMessage={errors.followed_user_id?.errorMessage}
        hasError={errors.followed_user_id?.hasError}
        {...getOverrideProps(overrides, "followed_user_id")}
      ></TextField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              following_user_id,
              followed_user_id,
              status: value,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      >
        <option
          children="Pending"
          value="PENDING"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Accepted"
          value="ACCEPTED"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || followModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || followModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
