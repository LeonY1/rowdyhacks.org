import React, { useState } from "react";
import SectionBlock from "../../components/SectionDividers/SectionBlock";
import {
  FAQTitleWrapper,
  FAQContentWrapper,
  FAQQuestionWrapper,
  FAQAnswerWrapper,
  FAQContainer
} from "./FAQStyle";
import { FAQQuestions, FAQAnswers } from "../SectionConstant";
import styled from "styled-components";

function FAQSection() {
  return (
    <SectionBlock id="faq" sectionNumber={2}>
      {{
        content: FAQContent
      }}
    </SectionBlock>
  );
}

const FaqCol = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px;
  width: 40vw;
  @media (max-width: 800px) {
    width: 100vw;
  }
`;

const FaqCard = styled.div`
  margin: 10px 20px 10px 20px;
  border-radius: 25px;
  background: #ffffff;
  padding: 15px 15px;
`;

const FAQContent: React.FC = () => {
  const [openedId, setOpenedId] = useState(-1);

  return (
    <FAQContainer>
      <FAQTitleWrapper>FAQ</FAQTitleWrapper>
      <FAQContentWrapper>
        <FaqCol>
          {FAQQuestions.map((value, index) => {
            return (
              <div key={"question-" + index}>
                {index < FAQQuestions.length / 2 ? (
                  <FaqCard
                    key={"Question" + index}
                    onClick={() => {
                      if (openedId !== index) setOpenedId(index);
                      else setOpenedId(-1);
                    }}
                  >
                    <FAQQuestionWrapper>{value}</FAQQuestionWrapper>
                    <FAQAnswerWrapper opened={openedId === index}>
                      {FAQAnswers[index]}
                    </FAQAnswerWrapper>
                  </FaqCard>
                ) : null}
              </div>
            );
          })}
        </FaqCol>
        <FaqCol>
          {FAQQuestions.map((value, index) => {
            return (
              <div key={"question-" + index}>
                {index >= FAQQuestions.length / 2 ? (
                  <FaqCard
                    key={"Question" + index}
                    onClick={() => {
                      if (openedId !== index) setOpenedId(index);
                      else setOpenedId(-1);
                    }}
                  >
                    <FAQQuestionWrapper>{value}</FAQQuestionWrapper>
                    <FAQAnswerWrapper opened={openedId === index}>
                      {index === FAQQuestions.length - 1 ? (
                        <>
                          <span>
                            <span style={{ marginRight: "5px" }}>
                              Please email
                            </span>
                            <a href="mailto:team@rowdyhacks.org">
                              team@rowdyhacks.org
                            </a>
                            {FAQAnswers[index]}
                          </span>
                        </>
                      ) : (
                        <span>{FAQAnswers[index]}</span>
                      )}
                    </FAQAnswerWrapper>
                  </FaqCard>
                ) : null}
              </div>
            );
          })}
        </FaqCol>
      </FAQContentWrapper>
    </FAQContainer>
  );
};

export default FAQSection;
