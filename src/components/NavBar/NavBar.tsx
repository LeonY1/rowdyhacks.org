import React, { useState, useEffect } from "react";
import throttle from "lodash/throttle";
import MenuItem from "./MenuItem";
import HomeButton from "./HomeButton";
import { NavBarTheme, NavBarContainer, MenuList } from "./NavBarStyle";
import { MenuLink } from "./Interfaces/MenuLink";

function NavBar(props: { titles: Array<MenuLink> }) {
  const [scrolledDown, setScrolledDown] = useState(false);

  const checkOffset = () => {
    const { scrollY } = window;

    if (scrollY > 0) setScrolledDown(true);
    else setScrolledDown(false);
  };

  const throttleCheck = throttle(checkOffset, 200);

  useEffect(() => {
    window.addEventListener("scroll", throttleCheck);
    checkOffset();
    return () => window.removeEventListener("scroll", checkOffset);
  });

  return (
    <NavBarTheme scrolledDown={scrolledDown}>
      <NavBarContainer>
        <HomeButton></HomeButton>
        <MenuList>
          {props.titles.map(function(menuLink: MenuLink) {
            return (
              <MenuItem {...menuLink} scrolledDown={scrolledDown}></MenuItem>
            );
          })}
        </MenuList>
      </NavBarContainer>
    </NavBarTheme>
  );
}

export default NavBar;
