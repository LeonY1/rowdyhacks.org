import React from "react";
import SectionBlock from "../../components/SectionDividers/SectionBlock";
import {
  FAQTitleWrapper,
  FAQContentWrapper,
  FAQQuestionWrapper,
  FAQAnswerWrapper,
  FAQQuestionMargin
} from "./FAQStyle";
import { FAQQuestions, FAQAnswers } from "../SectionConstant";

function FAQSection() {
  return (
    <SectionBlock sectionNumber={2}>
      {{
        title: FAQTitle,
        content: FAQContent
      }}
    </SectionBlock>
  );
}

const FAQTitle: React.FC = () => {
  return <FAQTitleWrapper>FAQ</FAQTitleWrapper>;
};

const FAQContent: React.FC = () => {
  return (
    <FAQContentWrapper>
      {FAQQuestions.map((value, index) => {
        return (
          <>
            <FAQQuestionWrapper>{value}</FAQQuestionWrapper>
            <FAQAnswerWrapper>{FAQAnswers[index]}</FAQAnswerWrapper>
            {index < FAQQuestions.length - 1 ? <FAQQuestionMargin /> : null}
          </>
        );
      })}
    </FAQContentWrapper>
  );
};

export default FAQSection;
