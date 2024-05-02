import { Button } from "@nextui-org/react";
import React from "react";

const CloseButton = (props) => {
  const {
    handleOnClick,
    className = "",
    classNames = { base: "", svg: "" },
    color = "default",
  } = props;

  return (
    <Button
      aria-label="close"
      color={color}
      isIconOnly
      className={`text-red-500 ${className} ${classNames.base}`}
      onClick={handleOnClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`h-6 w-6 cursor-pointer ${classNames.svg}`}
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </Button>
  );
};

export default CloseButton;
