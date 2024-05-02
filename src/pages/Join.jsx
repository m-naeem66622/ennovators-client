import "react-phone-input-2/lib/style.css";
import React, { useEffect, useState } from "react";
import Section from "../components/Section";
import Text from "../components/Text";
import { Controller, useForm } from "react-hook-form";
import { Button, Divider, Textarea } from "@nextui-org/react";
import axios from "axios";
import { genders } from "../staticData";
import InputPhoneNumber from "../components/InputPhoneNumber";
import Input from "../components/Input";
import Select from "../components/Select";
import CloseButton from "../components/CloseButton";
import { SUBMISSIONS_URL } from "../constants";
import { toTitleCase } from "../utils/case-converter";
import { notify } from "../utils/notify";

const defaultValues = {
  firstName: "",
  lastName: "",
  dob: "",
  gender: "",
  email: "",
  phoneNumber: {
    countryCode: "",
    dialCode: "",
    number: "",
    format: "",
    value: "",
  },
  country: "",
  state: "",
  city: "",
  university: "",
  experience: [
    {
      key: 1,
      company: "",
      role: "",
      startDate: "",
      endDate: "",
      technologies: "",
      description: "",
    },
  ],
};

const Join = () => {
  const {
    handleSubmit,
    watch,
    formState: { errors },
    control,
    getValues,
    setValue,
    setError,
  } = useForm({ defaultValues });

  watch("experience");

  const [isRolling, setIsRolling] = useState(false);
  const [ipData, setIpData] = useState({});

  const handleRemoveExperience = (e, key) => {
    e.preventDefault();
    const experience = getValues("experience").filter((exp) => exp.key !== key);
    setValue("experience", experience);
  };

  const handleAddExperience = () => {
    const experience = getValues("experience");
    const key = experience[experience.length - 1].key + 1;
    setValue("experience", [
      ...experience,
      {
        key,
        company: "",
        role: "",
        startDate: "",
        endDate: "",
        technologies: "",
        description: "",
      },
    ]);
  };

  const onSubmit = async (data) => {
    setIsRolling(true);

    const formattedData = {
      ...data,
      experience: data.experience.filter(Boolean).map((exp) => {
        const obj = {
          ...exp,
          technologies: exp.technologies.split(",").filter(Boolean),
        };
        if (obj.startDate === "") delete obj.startDate;
        if (obj.endDate === "") delete obj.endDate;
        if (obj.description === "") delete obj.description;
        delete obj.key;
        return obj;
      }),
    };

    delete formattedData.phoneNumber.value;

    try {
      const response = await axios.post(SUBMISSIONS_URL, formattedData);
    } catch (error) {
      let message;
      // Check if the error is not from the server
      if (!error.response) message = error.message;
      else if (error.response.status !== 400)
        message = toTitleCase(error.response.data.message);

      if (error.response.status === 400) {
        message = error.response.data.message;
        for (const key in error.response.data.errors) {
          message = error.response.data.message;
          const value = error.response.data.errors[key];
          setError(key, { type: "manual", message: value });
        }
      }

      notify("error", message);
    }
    setIsRolling(false);
  };

  useEffect(() => {
    axios.get("https://freeipapi.com/api/json").then((res) => {
      setIpData(res.data);
    });
  }, []);

  return (
    <>
      <Section className="py-8">
        <Text as="h1" className="text-center">
          Be a part of Ennovators <br /> growing community!
        </Text>
        <Text as="p" className="mt-8 max-w-3xl text-center mx-auto">
          Join us and be part of a community of innovators, creators, and
          entrepreneurs. We are a community of like-minded individuals who are
          passionate about creating and innovating.
        </Text>
        <Text as="h3" className="text-center mt-12">
          Fill the form below to join
        </Text>
      </Section>
      <Section className="mb-8 mx-3">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-8 bg-white rounded-xl max-w-screen-lg flex flex-col gap-y-4 mx-auto"
        >
          <Text as="h4" className="text-center">
            Personal Information
          </Text>
          <div className="bordered border-2 border-default rounded-md p-4 flex flex-col gap-y-6 ">
            <div className="flex flex-col sm:flex-row gap-x-3">
              <Input
                name="firstName"
                placeholder="John"
                label="First Name"
                isRequired
                control={control}
                rules={{ required: "First name is required" }}
                error={errors.firstName?.message}
              />
              <Input
                name="lastName"
                placeholder="Doe"
                label="Last Name"
                isRequired
                control={control}
                rules={{ required: "Last name is required" }}
                error={errors.lastName?.message}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-x-3">
              <Input
                name="dob"
                placeholder="Enter your date of birth"
                label="Date of Birth"
                type="date"
                control={control}
                rules={{
                  required: "Date of birth is required",
                  validate: {
                    futureDate: (value) =>
                      new Date(value) < new Date() ||
                      "Date of birth cannot be a future date",
                  },
                }}
                error={errors.dob?.message}
              />
              <Select
                name="gender"
                placeholder="Select Gender"
                label="Gender"
                isRequired
                selectItems={genders}
                control={control}
                rules={{ required: "Gender is required" }}
                error={errors.gender?.message}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-x-3">
              <Input
                name="email"
                placeholder="example@email.com"
                label="Email"
                type="email"
                isRequired
                control={control}
                rules={{ required: "Email is required" }}
                error={errors.email?.message}
              />
              <InputPhoneNumber
                isRequired
                control={control}
                countryCode={ipData.countryCode}
                setValue={setValue}
                error={errors.phoneNumber?.message}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-x-3">
              <Input
                name="country"
                placeholder="e.g. Pakistan"
                label="Country"
                type="text"
                isRequired
                control={control}
                rules={{ required: "Country is required" }}
                error={errors.country?.message}
              />
              <Input
                name="state"
                placeholder="e.g. Punjab"
                label="State/Province"
                type="text"
                isRequired
                control={control}
                rules={{ required: "State/Province is required" }}
                error={errors.state?.message}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-x-3">
              <Input
                name="city"
                placeholder="e.g. Gujranwala"
                label="City"
                type="text"
                isRequired
                control={control}
                rules={{ required: "City is required" }}
                error={errors.city?.message}
              />
              <Input
                name="university"
                placeholder="e.g. University of Gujrat"
                label="University"
                type="text"
                control={control}
                error={errors.university?.message}
              />
            </div>
          </div>
          <Divider className="" />
          <Text as="h4" className="text-center">
            Experience
          </Text>
          {getValues("experience").map((elem, index, arr) => (
            <div
              className="relative bordered border-2 border-default rounded-md p-4 flex flex-col gap-y-6"
              key={elem.key}
            >
              {arr.length > 1 && (
                <CloseButton
                  className="self-end"
                  handleOnClick={(e) => handleRemoveExperience(e, elem.key)}
                />
              )}
              <div className="flex flex-col sm:flex-row gap-x-3">
                <Input
                  name={`experience.${index}.company`}
                  placeholder="e.g. DevSinc, Brackets"
                  label="Company/Institute"
                  isRequired
                  control={control}
                  rules={{ required: "Company/Institute is required" }}
                  error={errors.experience?.[index]?.company?.message}
                />
                <Input
                  name={`experience.${index}.role`}
                  placeholder="e.g. UI/UX Designer"
                  label="Role"
                  isRequired
                  control={control}
                  rules={{ required: "Role is required" }}
                  error={errors.experience?.[index]?.role?.message}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-x-3">
                <Input
                  name={`experience.${index}.startDate`}
                  placeholder="Enter your experience start date"
                  label="Start date"
                  type="date"
                  control={control}
                  rules={{
                    validate: {
                      // if start date is not given but end date is given then start date is required
                      required: (value) => {
                        if (!value && getValues(`experience.${index}.endDate`))
                          return "Start date is required with end date";
                        return true;
                      },
                      futureDate: (value) => {
                        if (value && new Date(value) > new Date())
                          return "Start date cannot be a future date";
                        return true;
                      },
                    },
                  }}
                  error={errors.experience?.[index]?.startDate?.message}
                />
                <Input
                  name={`experience.${index}.endDate`}
                  placeholder="Enter your experience end date"
                  label="End date"
                  type="date"
                  control={control}
                  rules={{
                    validate: {
                      match: (value) => {
                        const startDate = getValues(
                          `experience.${index}.startDate`
                        );
                        if (new Date(value) < new Date(startDate))
                          return "End date must be after start date";
                      },
                    },
                  }}
                  error={errors.experience?.[index]?.endDate?.message}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-x-3">
                <Input
                  name={`experience.${index}.technologies`}
                  defaultValue={[]}
                  placeholder="e.g. Javascript, Python"
                  label="Technologies"
                  className="sm:w-full"
                  isRequired
                  control={control}
                  rules={{ required: "Technologies are required" }}
                  error={errors.experience?.[index]?.technologies?.message}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-x-3">
                <Controller
                  name={`experience.${index}.description`}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Textarea
                      {...field}
                      className="mb-6 sm:mb-0"
                      classNames={{ input: "placeholder:text-[#ACACAA]" }}
                      type="text"
                      minRows={3}
                      label="Description"
                      variant="bordered"
                      radius="sm"
                      size="lg"
                      labelPlacement="outside"
                      placeholder="Briefly describe your past experience"
                      isInvalid={
                        errors.experience?.[index]?.description?.message
                      }
                      errorMessage={
                        errors.experience?.[index]?.description?.message
                      }
                    />
                  )}
                />
              </div>
            </div>
          ))}
          <Button
            radius="full"
            color="default"
            type="button"
            onClick={handleAddExperience}
          >
            Add Experience
          </Button>

          <Button
            isLoading={isRolling}
            radius="full"
            color="success"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Section>
    </>
  );
};

export default Join;
