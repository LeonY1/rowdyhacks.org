import React from "react";
import MenuItem from "./MenuItem";
import HomeButton from "./HomeButton";
import {
  NavBarTheme,
  NavBarContainer,
  MenuList,
  NavBarMargin
} from "./NavBarStyle";
import { MenuLink } from "./Interfaces/MenuLink";

function NavBar(props: { titles: Array<MenuLink> }) {
  return (
    <>
      <NavBarTheme>
        <NavBarContainer>
          <HomeButton></HomeButton>

          <MenuList>
            {props.titles.map(function(menuLink) {
              return <MenuItem {...menuLink}></MenuItem>;
            })}
          </MenuList>
        </NavBarContainer>
      </NavBarTheme>
      {/* <NavBarMargin /> */}
    </>
  );
}

export default NavBar;
