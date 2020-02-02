import React from "react";
import {
  AboutTextBlock1,
  AboutTextBlock2,
  AboutTextBlock3
} from "../SectionConstant";
import SectionBlock from "../../components/SectionDividers/SectionBlock";
import {
  AboutTitleWrapper,
  AboutContentWrapper,
  AboutContentTabWrapper,
  AboutContentImage,
  AboutContentDivider,
  AboutContainer,
  AboutTextWrapper
} from "./AboutStyle";
import useWindowWidth from "../../hooks/useWindowWidth";

const AboutSection: React.FC = () => {
  return (
    <SectionBlock sectionNumber={0} id="about">
      {{
        content: AboutContent
      }}
    </SectionBlock>
  );
};

const AboutContent: React.FC = () => {
  const windowWidth = useWindowWidth();
  return (
    <AboutContainer>
      <AboutTitleWrapper>ABOUT</AboutTitleWrapper>
      <AboutContentWrapper>
        <AboutContentTab content={AboutTextBlock1} name={"Handshake"} />
        {windowWidth >= 760 ? <AboutContentDivider /> : null}
        <AboutContentTab content={AboutTextBlock2} name={"People"} />
        {windowWidth >= 760 ? <AboutContentDivider /> : null}
        <AboutContentTab content={AboutTextBlock3} name={"Circuit"} />
      </AboutContentWrapper>
    </AboutContainer>
  );
};

interface AboutDetails {
  content: string;
  name: string;
}

const AboutContentTab: React.FC<AboutDetails> = (props: {
  content: string;
  name: string;
}) => {
  const { content, name } = props;
  return (
    <AboutContentTabWrapper>
      <AboutContentImage
        src={require("../../static/" + name + ".png")}
        alt={name}
      />
      <AboutTextWrapper>{content}</AboutTextWrapper>
    </AboutContentTabWrapper>
  );
};
export default AboutSection;
