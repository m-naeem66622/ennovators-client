import { Button, Link as NextUI_Link } from "@nextui-org/react";
import React from "react";

function Home() {
  return (
    <div className="max-w-[1440px] border-x-2 border-red-700 mx-auto">
      <div className="px-4 py-8 text-center h-[590px] flex flex-col justify-center items-center">
        <h1 className=" text-6xl font-bold">
          A Platform where Individuals <br /> Become Innovators
        </h1>
        <p className="text-lg font-normal mt-4 text-[#5D616F]">
          Magna egestas magna dis a felis adipiscing pulvinar convallis duis. A
          posuere ac tortor ut <br /> turpis pretium. Dui in facilisis turpis
          quis morbi a nisl morbi ut.
        </p>
        <Button
          as={NextUI_Link}
          href="/join"
          className="text-white bg-light-green font-bold px-9 py-6 mt-16"
        >
          Join for Free
        </Button>
      </div>
    </div>
  );
}

export default Home;
