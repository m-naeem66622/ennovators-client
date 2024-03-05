import { Button, Image } from "@nextui-org/react";
import Section from "../components/Section";
import React from "react";
import Text from "../components/Text";
import Image_1 from "../assets/boy_with_thumbsup.jpg";
import { Link } from "react-router-dom";

function Home() {
  const teamMembers = [
    {
      name: "John Doe",
      title: "CEO - Senior Web Developer",
      image: "https://gravatar.com/avatar/1?d=mp&s=400",
    },
    {
      name: "John Doe",
      title: "Senior Web Developer",
      image: "https://gravatar.com/avatar/1?d=mp&s=400",
    },
    {
      name: "John Doe",
      title: "Senior UI/UX Designer",
      image: "https://gravatar.com/avatar/1?d=mp&s=400",
    },
    {
      name: "John Doe",
      title: "Junior Web Developer",
      image: "https://gravatar.com/avatar/1?d=mp&s=400",
    },
  ];

  return (
    <>
      <Section className="py-8 text-center h-[450px] sm:h-[590px] flex flex-col justify-center items-center">
        <Text as="h1">
          A Platform where Individuals <br /> Become Innovators
        </Text>
        <Text as="p" className="mt-4 max-w-3xl">
          Magna egestas magna dis a felis adipiscing pulvinar convallis duis. A
          posuere ac tortor ut turpis pretium. Dui in facilisis turpis quis
          morbi a nisl morbi ut.
        </Text>
        <Button
          as={Link}
          to="/join"
          radius="sm"
          color="success"
          className="text-base font-bold px-10 py-7 mt-16"
        >
          Join for Free
        </Button>
      </Section>
      <Section className="max-md:!px-0 max-md:!mx-0 !ml-0 !pl-0 bg-white flex flex-wrap flex-col md:flex-row md:justify-center lg:justify-between">
        <Image
          className="w-full md:w-[46%] max-w-[660px]"
          alt="A boy with thumbs up"
          radius="none"
          src={Image_1}
          removeWrapper
        />
        <div className="flex flex-col justify-center items-start max-w-xl py-4 px-3">
          <Text as="h2" className="">
            Meet the Innovators from around the World
          </Text>
          <Text as="p" className="mt-4 max-w-3xl">
            Experience the joy and satisfaction of stepping into an expertly
            cleaned space. Revel in the peace of mind knowing that your property
            not only looks squeaky clean but was cleaned by professionals who
            take pride in doing their best to please you.
          </Text>
          <Button
            as={Link}
            to="/join"
            radius="sm"
            color="success"
            className="text-base font-bold px-10 py-7 mt-6"
          >
            Join Group
          </Button>
        </div>
      </Section>
      <Section className="py-24">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex flex-col">
            <Text as="h2" className="">
              Meet The Team
            </Text>
            <Text as="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </div>
          <Button
            radius="sm"
            color="success"
            variant="ghost"
            className="font-bold px-10 py-6 text-base"
          >
            View All
          </Button>
        </div>
        <div className="">
          <div className="flex flex-wrap justify-center items-center gap-4 mt-8 sm:mt-14">
            {teamMembers.map((teamMember, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <div className="rounded-t-full bg-[#F8F8F8] aspect-[37/39] px-10 flex items-end">
                  <Image
                    className="max-w-[185px] w-[185px]"
                    alt={teamMember.name}
                    src={teamMember.image}
                  />
                </div>
                <Text as="h3" className="text-center mt-6">
                  {teamMember.name}
                </Text>
                <Text as="p" className="text-center">
                  {teamMember.title}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

export default Home;
