import React from "react";
import {
  TitleWrapper,
  HeroTitleWrapper,
  TitleButton,
  DateWrapper,
  ButtonWrapper
} from "./HeroStyle";
import useWindowWidth from "../../hooks/useWindowWidth";

function HeroTitle() {
  const screenWidth = useWindowWidth();

  const middleScreenWidth = () => {
    const width = (screenWidth - (870 - (20 - letterSpacing()) * 9)) / 2;
    if (width < 0) return 0;
    return width;
  };

  const letterSpacing = () => {
    return (screenWidth * 20) / 1851;
  };

  const fontSize = (fontSize: number) => {
    if (screenWidth < 1100) return (fontSize * screenWidth) / 1100;
    else return fontSize;
  };

  return (
    <HeroTitleWrapper {...{ theme: { margin: middleScreenWidth() } }}>
      <TitleWrapper
        {...{
          theme: { letterSpacing: letterSpacing(), fontSize: fontSize(100) }
        }}
      >
        {"ROWDYHACKS"}
      </TitleWrapper>
      <DateWrapper {...{ theme: { fontSize: fontSize(30) } }}>
        {"March 28-29 2020 | NOW COMPLETELY ONLINE"}
      </DateWrapper>
      <ButtonWrapper>
        <TitleButton
          onClick={() => {
            window.location.href = "/day-of-event";
          }}
        >
          Day Of Event Information
        </TitleButton>
        <TitleButton
          onClick={() => {
            window.location.href = "https://rowdyhacks.typeform.com/to/ImTIU6";
          }}
        >
          Apply to be a volunteer/mentor!
        </TitleButton>
        <TitleButton
          onClick={() => {
            window.location.href = "https://apply.rowdyhacks.io/login.html";
          }}
        >
          Check your profile!
        </TitleButton>
      </ButtonWrapper>
    </HeroTitleWrapper>
  );
}
export default HeroTitle;
