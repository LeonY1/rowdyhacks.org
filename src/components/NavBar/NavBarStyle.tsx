import styled from "styled-components";

interface NavBarProps {
  scrolledDown: boolean;
  hidden: boolean;
}

const NavBarTheme = styled.nav<NavBarProps>`
  position: fixed;
  width: 100vw;
  max-height: 70px;
  transition: all 200ms ease;
  z-index: 100;
  background-color: ${({ scrolledDown, theme }) =>
    scrolledDown ? "#034872" : "transparent"};
  transform: ${({ hidden }) =>
    hidden ? "translateY(-70px)" : "translateY(0)"};
`;

const NavBarMargin = styled.div`
  display: flex;
  height: 70px;
  background: #cbebe8;
`;

const NavTextContainer = styled.span`
  color: ${props => props.theme};
`;

const Home = styled.a`
  text-decoration: none;
  font-size: 40px;
  display: flex;
`;

const LogoImage = styled.img`
  max-width: 50px;
  max-height: 50px;
`;

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 70px;
  margin: 10px 0px;
`;

const MenuList = styled.ul`
  list-style-type: none;
  overflow: hidden;
`;

const MenuItemContainer = styled.a`
  float: left;
  padding: 0px 10px;

  transition: opacity 250ms ease-in-out 0s;
`;

export {
  NavTextContainer,
  Home,
  NavBarTheme,
  LogoImage,
  NavBarContainer,
  NavBarMargin,
  MenuList,
  MenuItemContainer
};
