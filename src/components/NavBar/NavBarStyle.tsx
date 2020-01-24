import styled from "styled-components";

const NavBarTheme = styled.nav`
  position: fixed;
  width: 100vw;
  background-color: #33ccff;
  max-height: 70px;
  z-index: 10000;
`;

const NavBarMargin = styled.div`
  display: flex;
  height: 70px;
`;

const NavTextContainer = styled.span`
  color: #ffffff;
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
