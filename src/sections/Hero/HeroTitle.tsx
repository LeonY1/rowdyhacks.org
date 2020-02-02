import React from "react";
import {
  TitleWrapper,
  HeroTitleWrapper,
  TitleButton,
  DateWrapper
} from "./HeroStyle";
import useWindowWidth from "../../hooks/useWindowWidth";

function HeroTitle() {
  const screenWidth = useWindowWidth();
  return (
    <HeroTitleWrapper>
      <TitleWrapper>{"ROWDYHACKS"}</TitleWrapper>
      <DateWrapper>{"March 28-29 2020 | UTSA MAIN"}</DateWrapper>
      <div style={{ paddingLeft: "50px" }}>
        <TitleButton
          onClick={() => {
            window.location.href = "https://rowdyhacks.typeform.com/to/ImTIU6";
          }}
        >
          Apply to be a volunteer/mentor!
        </TitleButton>
        <TitleButton
          onClick={() => {
            window.location.href = "https://apply.rowdyhacks.io";
          }}
        >
          Apply to be a hacker!
        </TitleButton>
      </div>
    </HeroTitleWrapper>
  );
}
export default HeroTitle;
