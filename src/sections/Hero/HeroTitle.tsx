import React from "react";
import {
  HeroTitleContainer,
  TitleWrapper,
  HeroTitleWrapper
} from "./HeroStyle";

function HeroTitle() {
  return (
    <HeroTitleWrapper>
      <TitleWrapper>{"R  o  w  d  y  H  a  c  k  s"}</TitleWrapper>
      <button>Apply to be a volunteer/mentor</button>
      <button>Apply to be a hacker</button>
    </HeroTitleWrapper>
  );
}

export default HeroTitle;
