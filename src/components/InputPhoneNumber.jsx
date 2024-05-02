import React from "react";
import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";

const InputPhoneNumber = (props) => {
  const {
    name = "phoneNumber",
    label = "Phone Number",
    defaultValue = "",
    countryCode,
    setValue,
    control,
    isRequired = false,
    error,
  } = props;

  const validator = {
    required: (value) => {
      if (isRequired) {
        if (
          !value?.countryCode ||
          !value?.dialCode ||
          !value?.number ||
          !value?.format
        ) {
          return "Phone number is required";
        }
      }
      return true;
    },
    validity: (value) => {
      if (value?.format) {
        const format = value.format;
        const phoneNumber = value.value;
        const phoneNumberLength = phoneNumber.length;
        const formatLength = format.split(".").length - 1;

        if (phoneNumberLength !== formatLength) {
          return `Phone number must be ${formatLength} digits long`;
        }
      }
      return true;
    },
  };

  const isRequiredStyle = isRequired
    ? "after:content-['*'] after:text-danger after:ml-0.5"
    : "";

  return (
    <Controller
      name="phoneNumber"
      control={control}
      rules={{ validate: validator }}
      defaultValue={defaultValue}
      render={({ field }) => (
        <div className="flex flex-col w-full sm:w-1/2 mb-6 sm:mb-0">
          <label className={`${isRequiredStyle}${error ? " text-danger" : ""}`}>
            {label}
          </label>
          <PhoneInput
            name={field.name}
            inputProps={{ name, ref: field.ref, onBlur: field.onBlur }}
            enableSearch={true}
            onChange={(value, country, e, formattedValue) =>
              setValue("phoneNumber", {
                countryCode: country.countryCode,
                dialCode: country.dialCode,
                number: value.replace(country.dialCode, ""),
                format: country.format,
                value,
              })
            }
            value={field.value.value}
            inputStyle={{
              fontSize: "1rem",
              width: "100%",
              height: "3rem",
              paddingLeft: "55px",
            }}
            country={countryCode?.toLowerCase()}
            searchClass=""
            inputClass={`placeholder:text-[#ACACAA]${
              error ? " text-danger !border-[#f31260]" : ""
            }`}
            containerClass="bg-transparent h-12 z-30"
            buttonClass={`bg-blue-700${error ? " !border-[#f31260]" : ""}`}
          />
          {error && <div className="text-tiny text-danger mt-1">{error}</div>}
        </div>
      )}
    />
  );
};

export default InputPhoneNumber;
