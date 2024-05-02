import { Input as NextUI_Input } from "@nextui-org/react";
import React from "react";
import { Controller } from "react-hook-form";

const Input = ({
  name = "",
  defaultValue = "",
  placeholder = "",
  label = "",
  type = "text",
  className = "",
  classNames = {},
  isRequired = false,
  control,
  rules,
  error,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field }) => (
        <NextUI_Input
          {...field}
          className={`w-full sm:w-1/2 mb-6 sm:mb-0 ${className}`}
          classNames={{ input: "placeholder:text-[#ACACAA]", ...classNames }}
          type={type}
          isRequired={isRequired}
          label={label}
          isInvalid={error ? true : false}
          errorMessage={error}
          variant="bordered"
          radius="sm"
          size="lg"
          labelPlacement="outside"
          placeholder={placeholder}
        />
      )}
    />
  );
};

export default Input;
