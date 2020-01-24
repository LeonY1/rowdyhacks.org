import React from "react";
import { AboutTitle, AboutText } from "../SectionConstant";
import SectionBlock from "../../components/SectionDividers/SectionBlock";

const AboutSection: React.FC = () => {
  return (
    <SectionBlock sectionNumber={0}>
      {{
        title: AboutTitle,
        content: AboutText
      }}
    </SectionBlock>
  );
};

export default AboutSection;
