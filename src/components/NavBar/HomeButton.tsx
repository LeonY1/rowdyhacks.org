import React from "react";
import rowdyHacksLogo from "../../static/LogoVers2_1.png";
import { LogoImage, Home } from "./NavBarStyle";

function HomeButton() {
  return (
    <Home href="/">
      <LogoImage src={rowdyHacksLogo} alt="rowdyHacksLogo" />
    </Home>
  );
}

export default HomeButton;
