import React from "react";
import rowdyHacksLogo from "../../static/LogoVers2_1.png";
import { LogoImage, Home, NavTextContainer } from "./NavBarStyle";

const HomeButton: React.FC = (props: {}) => {
  return (
    <Home href="https://www.google.com">
      <LogoImage src={rowdyHacksLogo} alt="rowdyHacksLogo" />
      <NavTextContainer>RowdyHacks</NavTextContainer>
    </Home>
  );
};

export default HomeButton;
