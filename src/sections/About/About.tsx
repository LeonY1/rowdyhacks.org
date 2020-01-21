import React from "react";
import { SectionWrapper, TitleWrapper, TextWrapper } from "../SectionStyle";
import { AboutTitle, AboutText } from "../SectionConstant";

const About: React.FC = () => {
  return (
    <SectionWrapper>
      <TitleWrapper>{AboutTitle}</TitleWrapper>
      <TextWrapper>{AboutText}</TextWrapper>
    </SectionWrapper>
  );
};

export default About;
