import React from "react";
import SectionBlock from "../../components/SectionDividers/SectionBlock";
import { FAQTitleWrapper } from "./FAQStyle";

function FAQSection() {
  return (
    <SectionBlock sectionNumber={2}>
      {{
        title: FAQTitle,
        content: () => {
          return <div></div>;
        }
      }}
    </SectionBlock>
  );
}

const FAQTitle: React.FC = () => {
  return <FAQTitleWrapper>Hello</FAQTitleWrapper>;
};

export default FAQSection;
