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
            return (
              <>
                {index < FAQQuestions.length / 2 ? (
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
                ) : null}
              </>
            );
          })}
        </FAQColumn>
        <FAQColumn>
          {FAQQuestions.map((value, index) => {
            return (
              <>
                {index >= FAQQuestions.length / 2 ? (
                  <FAQCard
                    key={"Question" + index}
                    onClick={() => {
                      setOpenedArray(updateOpenedArray(index));
                    }}
                  >
                    <FAQQuestion question={value} opened={openedArray[index]} />
                    <FAQAnswerWrapper opened={openedArray[index]}>
                      {index === FAQQuestions.length - 1 ? (
                        <>
                          <span>
                            <span style={{ marginRight: "5px" }}>
                              Please email
                            </span>
                            <a
                              href="mailto:team@rowdyhacks.org"
                              onClick={e => {
                                e.stopPropagation();
                              }}
                            >
                              team@rowdyhacks.org
                            </a>
                            {FAQAnswers[index]}
                          </span>
                        </>
                      ) : (
                        <span>{FAQAnswers[index]}</span>
                      )}
                    </FAQAnswerWrapper>
                  </FAQCard>
                ) : null}
              </>
            );
          })}
        </FAQColumn>
      </FAQContentWrapper>
    </FAQContainer>
  );
};

export default FAQSection;
