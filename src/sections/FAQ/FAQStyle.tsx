import styled from "styled-components";

const FAQTitleWrapper = styled.div`
  font-family: Helvetica;
  font-weight: 700;
  color: #ffffff;
  font-size: 48px;
  margin-bottom: 10px;
  @media (max-width: 760px) {
    font-size: 36px;
  }
`;

const FAQContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  font-size: 18px;
  font-family: Helvetica;
  @media (max-width: 800px) {
    width: 100vw;
    font-size: 14px;
    align-items: left;
    flex-direction: column;
  }
`;

const FAQQuestionWrapper = styled.div`
  color: #cc64b1;
  font-weight: 700;
  display: flex;
  text-align: left;
  @media (max-width: 760px) {
    width: 80vw;
  }
`;

interface AnswerProps {
  opened: boolean;
}

const FAQAnswerWrapper = styled.div<AnswerProps>`
  max-height: ${props => (props.opened ? "200" : "0")}px;
  display: ${props => (props.opened ? "flex" : "none")};
  color: black;
  text-align: left;
  font-size: 16px;
  transition: all 0.5s ease-out;
  margin: 10px 0px 0px 0px;
`;

const FAQContainer = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: left;
  width: 100%;
  margin-bottom: 30px;
`;

export {
  FAQTitleWrapper,
  FAQContentWrapper,
  FAQQuestionWrapper,
  FAQAnswerWrapper,
  FAQContainer
};
