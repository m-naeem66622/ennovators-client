import { Select as NextUI_Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { Controller } from "react-hook-form";

const Select = ({
  name = "",
  placeholder = "",
  label = "",
  className = "",
  classNames = {},
  isRequired = false,
  selectItems = [],
  control,
  rules,
  error
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <NextUI_Select
          {...field}
          value={field.value || ""}
          className={`w-full sm:w-1/2 mb-6 sm:mb-0 ${className}`}
          classNames={{ input: "placeholder:text-[#ACACAA]", ...classNames }}
          isRequired={isRequired}
          isInvalid={error ? true : false}
          errorMessage={error}
          label={label}
          selectedKeys={[field.value]}
          selectionMode="single"
          variant="bordered"
          radius="sm"
          size="lg"
          labelPlacement="outside"
          placeholder={placeholder}
          disabledKeys={[""]}
        >
          {selectItems.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </NextUI_Select>
      )}
    />
  );
};

export default Select;
