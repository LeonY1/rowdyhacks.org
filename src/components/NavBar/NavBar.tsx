import React, { useState } from "react";
import MenuItem from "./MenuItem";
import HomeButton from "./HomeButton";
import {
  NavBarTheme,
  NavBarContainer,
  MenuList,
  UnstyledButton
} from "./NavBarStyle";
import { MenuLink } from "./Interfaces/MenuLink";
import useWindowWidth from "../../hooks/useWindowWidth";
import useScrolledDown from "../../hooks/useScrolledDown";
import styled from "styled-components";
import CloseIcon from "../../static/close-icon.svg";

function NavBar(props: { titles: Array<MenuLink> }) {
  const screenWidth = useWindowWidth();
  const scrolledDown = useScrolledDown();
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
    if (open) {
      document.getElementById("mlh-trust-badge").style.visibility = "visible";
    } else {
      document.getElementById("mlh-trust-badge").style.visibility = "hidden";
    }
  };

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
                <MenuItem
                  key={menuLink.title + "-nav"}
                  {...menuLink}
                  scrolledDown={scrolledDown}
                  onClick={() => {}}
                ></MenuItem>
              );
            })}
          </MenuList>
        ) : (
          <UnstyledButton onClick={toggleOpen}>
            <Hamburger bgColor={bgColor()} />
          </UnstyledButton>
        )}
        {open ? <MobileMenu {...props} toggleOpen={toggleOpen} /> : null}
      </NavBarContainer>
    </NavBarTheme>
  );
}

interface MobileMenuProps {
  titles: Array<MenuLink>;
  toggleOpen: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = props => {
  const { titles, toggleOpen } = props;
  return (
    <MobileMenuWrapper>
      <ExitWrapper>
        <UnstyledButton onClick={toggleOpen}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Exit />
          </div>
        </UnstyledButton>
      </ExitWrapper>
      <MobileTabs>
        {titles.map(function(menuLink: MenuLink) {
          return (
            <MenuItem {...menuLink} scrolledDown={true} onClick={toggleOpen} />
          );
        })}
      </MobileTabs>
    </MobileMenuWrapper>
  );
};
interface HamburgerProps {
  bgColor: string;
}

const Exit = () => {
  return (
    <img
      src={CloseIcon}
      style={{ height: "30px", width: "30px" }}
      alt="ExitButton"
    />
  );
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
  cursor: pointer;
`;

const Line = styled.div`
  width: 30px;
  height: 3px;
  background-color: ${props => props.theme.bgColor};
  margin: 3px;
  transform: rotateX(${props => props.theme.rotation}deg);
`;

const MobileMenuWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #034872;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const MobileTabs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evely;
  align-items: center;
`;

const ExitWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

export default NavBar;
