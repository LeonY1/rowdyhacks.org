import React, { useState } from "react";
import SectionBlock from "../../components/SectionDividers/SectionBlock";
import {
  FAQTitleWrapper,
  FAQContentWrapper,
  FAQQuestionWrapper,
  FAQAnswerWrapper,
  FAQContainer,
  FAQColumn,
  FAQCard,
  QuestionArrow
} from "./FAQStyle";
import { FAQQuestions, FAQAnswers } from "../SectionConstant";
import FAQLink from "./FAQLink";

function FAQSection() {
  return (
    <SectionBlock id="faq" sectionNumber={2}>
      {{
        content: FAQContent
      }}
    </SectionBlock>
  );
}

interface Question extends Openable {
  question: string;
}

interface Openable {
  opened: boolean;
}

const FAQQuestion: React.FC<Question> = ({ question, opened }) => {
  return (
    <FAQQuestionWrapper>
      <div>{question}</div>
      <QuestionArrow opened={opened} />
    </FAQQuestionWrapper>
  );
};

const FAQContent: React.FC = () => {
  const [openedArray, setOpenedArray] = useState(
    new Array(FAQQuestions.length).fill(false)
  );

  const updateOpenedArray = (index: number) => {
    return openedArray.map((value, arrayIndex) =>
      index === arrayIndex ? !value : value
    );
  };

  return (
    <FAQContainer>
      <FAQTitleWrapper>FAQ</FAQTitleWrapper>
      <FAQContentWrapper>
        <FAQColumn>
          {FAQQuestions.map((value, index) => {
            if (index >= FAQQuestions.length / 2) return null;
            return (
              <FAQCard
                key={"Question" + index}
                onClick={() => {
                  setOpenedArray(updateOpenedArray(index));
                }}
              >
                <FAQQuestion question={value} opened={openedArray[index]} />
                <FAQAnswerWrapper opened={openedArray[index]}>
                  {FAQAnswers[index]}
                </FAQAnswerWrapper>
              </FAQCard>
            );
          })}
        </FAQColumn>
        <FAQColumn>
          {FAQQuestions.map((value, index) => {
            if (index < FAQQuestions.length / 2) return null;
            return (
              <FAQCard
                key={"Question" + index}
                onClick={() => {
                  setOpenedArray(updateOpenedArray(index));
                }}
              >
                <FAQQuestion question={value} opened={openedArray[index]} />
                <FAQAnswerWrapper opened={openedArray[index]}>
                  <FAQLink message={FAQAnswers[index]} />
                </FAQAnswerWrapper>
              </FAQCard>
            );
          })}
        </FAQColumn>
      </FAQContentWrapper>
    </FAQContainer>
  );
};

export default FAQSection;
