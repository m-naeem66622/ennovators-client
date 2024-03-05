import React from "react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import Text from "../components/Text";
import Section from "../components/Section";

const Page404 = () => {
  return (
    <Section className="min-h-screen flex flex-col items-center justify-center">
      <Text as="h1" className="text-center mb-4">
        404 - Page Not Found
      </Text>
      <Text as="p">Oops! The page you are looking for does not exist.</Text>
      <Button
        as={Link}
        to="/"
        radius="sm"
        color="success"
        className="text-base font-bold px-10 py-7 mt-16"
      >
        Go Home
      </Button>
    </Section>
  );
};

export default Page404;
