import React from "react";

function Section({ className, children, ...rest }) {
  return (
    <div className={`px-2 sm:px-[60px] mx-4 ${className || ""}`} {...rest}>
      {children}
    </div>
  );
}

export default Section;
