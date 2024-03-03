import React from "react";

const Text = ({ as, className, children }) => {
  const Component = as || "p";

  const textClasses = {
    h1: "text-xl xs:text-3xl sm:text-5xl md:text-6xl font-bold font-trap-bold text-[#173C30]",
    h2: "text-xl xs:text-2xl sm:text-4xl md:text-5xl font-bold font-trap-bold text-[#173C30]",
    h3: 'text-2xl font-bold font-trap-bold text-[#173C30]',
    h4: 'text-lg font-bold font-trap-bold text-[#173C30]',
    p: "text-base sm:text-lg font-normal font-trap-regular leading-relaxed text-[#5D616F]",
  };

  return (
    <Component className={`${textClasses[Component]} ${className || ""}`}>
      {children}
    </Component>
  );
};

export default Text;
