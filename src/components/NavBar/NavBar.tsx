import React, { useState } from "react";
import MenuItem from "./MenuItem";
import HomeButton from "./HomeButton";
import { NavBarTheme, NavBarContainer, MenuList } from "./NavBarStyle";
import { MenuLink } from "./Interfaces/MenuLink";
import useWindowWidth from "../../hooks/useWindowWidth";
import useScrolledDown from "../../hooks/useScrolledDown";
import styled from "styled-components";

function NavBar(props: { titles: Array<MenuLink> }) {
  const screenWidth = useWindowWidth();
  const scrolledDown = useScrolledDown();
  const [open, setOpen] = useState(false);

  const bgColor = () => {
    if (scrolledDown) return "#ffffff";
    return "#034872";
  };

  return (
    <NavBarTheme scrolledDown={scrolledDown}>
      <NavBarContainer>
        <HomeButton />
        {screenWidth >= 800 ? (
          <MenuList>
            {props.titles.map(function(menuLink: MenuLink) {
              return (
                <MenuItem {...menuLink} scrolledDown={scrolledDown}></MenuItem>
              );
            })}
          </MenuList>
        ) : (
          <Hamburger
            bgColor={bgColor()}
            onClick={() => {
              setOpen(!open);
            }}
          />
        )}
        {open && <MobileMenu></MobileMenu>}
      </NavBarContainer>
    </NavBarTheme>
  );
}

interface HamburgerProps {
  bgColor: string;
  onClick(): void;
}

const MobileMenu: React.FC = () => {
  return <div style={{ position: "fixed", right: 1 }}></div>;
};

const Hamburger: React.FC<HamburgerProps> = props => {
  const { bgColor } = props;
  return (
    <HamburgerWrapper>
      <Line theme={{ bgColor: bgColor }} />
      <Line theme={{ bgColor: bgColor }} />
      <Line theme={{ bgColor: bgColor }} />
    </HamburgerWrapper>
  );
};

const HamburgerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Line = styled.div`
  width: 30px;
  height: 3px;
  background-color: ${props => props.theme.bgColor};
  margin: 3px;
`;

export default NavBar;
