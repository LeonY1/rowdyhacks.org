import React from "react";
import SectionBlock from "../../components/SectionDividers/SectionBlock";
import {
  FAQTitleWrapper,
  FAQContentWrapper,
  FAQQuestionWrapper,
  FAQAnswerWrapper,
  FAQQuestionMargin,
  FAQContainer
} from "./FAQStyle";
import { FAQQuestions, FAQAnswers } from "../SectionConstant";

function FAQSection() {
  return (
    <SectionBlock sectionNumber={2}>
      {{
        content: FAQContent
      }}
    </SectionBlock>
  );
}

const FAQContent: React.FC = () => {
  return (
    <FAQContainer>
      <FAQTitleWrapper>FAQ</FAQTitleWrapper>
      <FAQContentWrapper>
        {FAQQuestions.map((value, index) => {
          return (
            <div key={"Question" + index}>
              <FAQQuestionWrapper>{value}</FAQQuestionWrapper>
              <FAQAnswerWrapper>{FAQAnswers[index]}</FAQAnswerWrapper>
              <FAQQuestionMargin />
            </div>
          );
        })}
      </FAQContentWrapper>
    </FAQContainer>
  );
};

export default FAQSection;
