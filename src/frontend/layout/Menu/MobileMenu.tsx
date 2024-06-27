import React, { useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Divider,
} from "@nextui-org/react";
import { menu } from "./menu-config";
import { MobileMenuItem } from "./Menu.style";

export const MobileMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(
    false
  );

  const onMenuItemClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };
  return (
    <Navbar
      height="50px"
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="sm"
      isMenuOpen={isMenuOpen}
    >
      <NavbarMenuToggle
        aria-label={
          isMenuOpen ? "Close menu" : "Open menu"
        }
      />

      <NavbarMenu className="w-9/12 dark overflow-hidden">
        {menu.map(
          ({ Icon, path, title }, index) => (
            <NavbarMenuItem
              key={`${title}-${index}`}
            >
              <MobileMenuItem
                className={`w-full ${
                  location.pathname === path
                    ? "selected"
                    : ""
                } `}
                onClick={() =>
                  onMenuItemClick(path)
                }
              >
                <Icon />
                {title}
              </MobileMenuItem>
            </NavbarMenuItem>
          )
        )}
      </NavbarMenu>
    </Navbar>
  );
};
