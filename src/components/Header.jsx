import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link as NextUI_Link,
  Button,
} from "@nextui-org/react";
import Logo from "../assets/Logo";
import { toKebabCase } from "../utils/case-converter";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["About", "Team", "The Mission", "Contact"];

  return (
    <Navbar
      classNames={{
        base: "sm:py-4",
        wrapper: "max-w-[1440px] md:px-[76px]",
      }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBordered
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="center">
        <NavbarBrand>
          <Logo className="w-32" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <Logo className="sm:w-40 md:w-52" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-7" justify="center">
        {menuItems.map((menuItem, index) => (
          <NavbarItem key={index}>
            <NextUI_Link
              as={Link}
              to={"/" + toKebabCase(menuItem)}
              className="text-dark-green"
            >
              {menuItem}
            </NextUI_Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            radius="sm"
            as={Link}
            to="/join"
            color="success"
            className="font-bold text-xs md:text-base px-4 py-3 md:px-9 md:py-6"
          >
            Join for Free
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((menuItem, index) => (
          <NavbarMenuItem key={index}>
            <NextUI_Link
              className="w-full text-dark-green"
              to={"/" + toKebabCase(menuItem)}
              size="lg"
            >
              {menuItem}
            </NextUI_Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;
