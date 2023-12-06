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

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["About", "Team", "The Mission", "Contact"];

  return (
    <Navbar
      classNames={{ base: "py-3 bg-transparent", wrapper: "max-w-[1440px]" }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Logo className="w-52" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <Logo className="w-52" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-7" justify="center">
        {menuItems.map((menuItem, index) => (
          <NavbarItem key={index}>
            <NextUI_Link
              className="text-dark-green"
              href={"/" + toKebabCase(menuItem)}
            >
              {menuItem}
            </NextUI_Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={NextUI_Link}
            href="/join"
            className="text-white bg-light-green font-bold px-9 py-6"
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
              // color="foreground"
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
