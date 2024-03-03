import React from "react";
import Logo from "../assets/Logo";
import Text from "./Text";
import { Link as NextUI_Link } from "@nextui-org/react";
import { Link } from "react-router-dom";

function Footer() {
  const menuItems = [
    { title: "Business Hours", items: ["8AM - 9PM", "Monday - Friday"] },
    {
      title: "Company Info",
      items: [
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
        { name: "Payment", link: "/payment" },
        { name: "FAQ", link: "/faq" },
      ],
    },
    {
      title: "Get Connected",
      items: [
        { name: "Facebook", link: "https://www.facebook.com" },
        { name: "Instagram", link: "https://www.instagram.com" },
        { name: "LinkedIn", link: "https://www.linkedin.com" },
        { name: "Twitter", link: "https://www.twitter.com" },
        { name: "YouTube", link: "https://www.youtube.com" },
      ],
    },
  ];

  return (
    <footer className="bg-white">
      <div className="px-[76px] py-16 max-w-[1440px] mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center">
            <Logo className="sm:w-40 md:w-52" />
          </a>
          <div className="text-sm text-gray-500 mt-11">
            <NextUI_Link
              href="tel:(202) 718 4822"
              className="text-base font-normal font-trap-regular leading-relaxed text-neutral-400"
            >
              (202) 718 4822 (call/text)
            </NextUI_Link>
            <NextUI_Link
              href="mailto:info@ennovators.com"
              className="text-base font-normal font-trap-regular leading-relaxed text-neutral-400"
            >
              support@ennovators.com
            </NextUI_Link>
          </div>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <Text as="h4" className="">
              {menuItems[0].title}
            </Text>
            <nav className="list-none mb-10">
              {menuItems[0].items.map((item, index) => (
                <li key={index}>
                  <Text as="p" className="!text-base !text-neutral-400">
                    {item}
                  </Text>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <Text as="h4" className="">
              {menuItems[1].title}
            </Text>
            <nav className="list-none mb-10">
              {menuItems[1].items.map((item, index) => (
                <li key={index}>
                  <NextUI_Link
                    href={item.link}
                    className="text-base font-normal font-trap-regular leading-relaxed text-neutral-400"
                  >
                    {item.name}
                  </NextUI_Link>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <Text as="h4" className="">
              {menuItems[2].title}
            </Text>
            <nav className="list-none mb-10">
              {menuItems[2].items.map((item, index) => (
                <li key={index}>
                  <NextUI_Link
                    href={item.link}
                    className="text-base font-normal font-trap-regular leading-relaxed text-neutral-400"
                  >
                    {item.name}
                  </NextUI_Link>
                </li>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-dark-green">
        <div className="px-[76px] py-4 max-w-[1440px] mx-auto flex flex-wrap flex-col sm:flex-row">
          <div className="w-1/2">
            <p className="text-neutral-400 text-sm text-center sm:text-left">
              © 2022 Ennovators Inc. All Rights Reserved.
            </p>
          </div>
          <div className="w-1/3 flex gap-x-4">
            <NextUI_Link
              href="/terms-conditions"
              className="text-neutral-400 text-sm text-center"
            >
              Terms & Conditions
            </NextUI_Link>
            <NextUI_Link
              href="/privacy"
              className="text-neutral-400 text-sm text-center"
            >
              Privacy Policy
            </NextUI_Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
