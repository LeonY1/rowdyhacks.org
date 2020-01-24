import React from "react";
import SectionBlock from "../../components/SectionDividers/SectionBlock";
import { FAQTitle, FAQText } from "../SectionConstant";

function FAQSection() {
  return (
    <SectionBlock sectionNumber={2}>
      {{
        title: FAQTitle,
        content: FAQText
      }}
    </SectionBlock>
  );
}

export default FAQSection;
