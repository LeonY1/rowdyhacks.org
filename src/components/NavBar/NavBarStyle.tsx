import styled from "styled-components";

interface NavBarProps {
  scrolledDown: boolean;
}

const NavBarTheme = styled.nav<NavBarProps>`
  position: fixed;
  width: 100vw;
  max-height: 70px;
  transition: all 200ms ease;
  z-index: 100;
  background-color: ${({ scrolledDown }) =>
    scrolledDown ? "#034872" : "transparent"};
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
  @media (max-width: 800px) {
    margin-top: 5px;
  }
`;

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 50px;
  margin: 10px 0px;
  @media (max-width: 800px) {
    padding: 0px 10px 0px 20px;
  }
`;

const MenuList = styled.ul`
  display: flex;
  list-style-type: none;
  overflow: hidden;
  padding-right: 150px;
`;

const MenuItemContainer = styled.a`
  float: left;
  padding: 0px 10px;
  transition: opacity 250ms ease-in-out 0s;
  @media (max-width: 800px) {
    margin: 50px 0px;
  }
`;

const UnstyledButton = styled.button`
  background-color: transparent;
  border: 0px;
  font-size: 18px;
  display: flex;
`;

export {
  NavTextContainer,
  Home,
  NavBarTheme,
  LogoImage,
  NavBarContainer,
  NavBarMargin,
  MenuList,
  MenuItemContainer,
  UnstyledButton
};
