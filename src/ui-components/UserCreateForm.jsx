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
import { User } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UserCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    username: "",
    user_email: "",
    role: "",
    privacy_status: "",
    bio: "",
  };
  const [username, setUsername] = React.useState(initialValues.username);
  const [user_email, setUser_email] = React.useState(initialValues.user_email);
  const [role, setRole] = React.useState(initialValues.role);
  const [privacy_status, setPrivacy_status] = React.useState(
    initialValues.privacy_status
  );
  const [bio, setBio] = React.useState(initialValues.bio);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUsername(initialValues.username);
    setUser_email(initialValues.user_email);
    setRole(initialValues.role);
    setPrivacy_status(initialValues.privacy_status);
    setBio(initialValues.bio);
    setErrors({});
  };
  const validations = {
    username: [{ type: "Required" }],
    user_email: [{ type: "Required" }],
    role: [],
    privacy_status: [{ type: "Required" }],
    bio: [],
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
          username,
          user_email,
          role,
          privacy_status,
          bio,
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
          await DataStore.save(new User(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserCreateForm")}
      {...rest}
    >
      <TextField
        label="Username"
        isRequired={true}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username: value,
              user_email,
              role,
              privacy_status,
              bio,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <TextField
        label="User email"
        isRequired={true}
        isReadOnly={false}
        value={user_email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              user_email: value,
              role,
              privacy_status,
              bio,
            };
            const result = onChange(modelFields);
            value = result?.user_email ?? value;
          }
          if (errors.user_email?.hasError) {
            runValidationTasks("user_email", value);
          }
          setUser_email(value);
        }}
        onBlur={() => runValidationTasks("user_email", user_email)}
        errorMessage={errors.user_email?.errorMessage}
        hasError={errors.user_email?.hasError}
        {...getOverrideProps(overrides, "user_email")}
      ></TextField>
      <TextField
        label="Role"
        isRequired={false}
        isReadOnly={false}
        value={role}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              user_email,
              role: value,
              privacy_status,
              bio,
            };
            const result = onChange(modelFields);
            value = result?.role ?? value;
          }
          if (errors.role?.hasError) {
            runValidationTasks("role", value);
          }
          setRole(value);
        }}
        onBlur={() => runValidationTasks("role", role)}
        errorMessage={errors.role?.errorMessage}
        hasError={errors.role?.hasError}
        {...getOverrideProps(overrides, "role")}
      ></TextField>
      <SelectField
        label="Privacy status"
        placeholder="Please select an option"
        isDisabled={false}
        value={privacy_status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              user_email,
              role,
              privacy_status: value,
              bio,
            };
            const result = onChange(modelFields);
            value = result?.privacy_status ?? value;
          }
          if (errors.privacy_status?.hasError) {
            runValidationTasks("privacy_status", value);
          }
          setPrivacy_status(value);
        }}
        onBlur={() => runValidationTasks("privacy_status", privacy_status)}
        errorMessage={errors.privacy_status?.errorMessage}
        hasError={errors.privacy_status?.hasError}
        {...getOverrideProps(overrides, "privacy_status")}
      >
        <option
          children="Private"
          value="PRIVATE"
          {...getOverrideProps(overrides, "privacy_statusoption0")}
        ></option>
        <option
          children="Public"
          value="PUBLIC"
          {...getOverrideProps(overrides, "privacy_statusoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Bio"
        isRequired={false}
        isReadOnly={false}
        value={bio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              user_email,
              role,
              privacy_status,
              bio: value,
            };
            const result = onChange(modelFields);
            value = result?.bio ?? value;
          }
          if (errors.bio?.hasError) {
            runValidationTasks("bio", value);
          }
          setBio(value);
        }}
        onBlur={() => runValidationTasks("bio", bio)}
        errorMessage={errors.bio?.errorMessage}
        hasError={errors.bio?.hasError}
        {...getOverrideProps(overrides, "bio")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
