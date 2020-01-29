import styled from "styled-components";

const FAQTitleWrapper = styled.div`
  font-family: Helvetica;
  font-weight: 700;
  color: #ffffff;
  font-size: 48px;
  margin-bottom: 30px;
  @media (max-width: 760px) {
    font-size: 36px;
  }
`;

const FAQContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-evenly;
  width: 760px;
  font-size: 18px;
  font-family: Helvetica;
  @media (max-width: 760px) {
    width: 90vw;
    font-size: 14px;
    align-items: left;
  }
`;

const FAQQuestionWrapper = styled.div`
  color: #fcf89c;
  display: flex;
  text-align: left;
  @media (max-width: 760px) {
    width: 80vw;
  }
`;

const FAQAnswerWrapper = styled.div`
  color: #ffffff;
  text-align: left;
  margin-bottom: 20px;
  display: flex;
`;

const FAQQuestionMargin = styled.div`
  height: 20px;
  @media (max-width: 760px) {
    height: 10px;
  }
`;
const FAQContainer = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: left;
`;

export {
  FAQTitleWrapper,
  FAQContentWrapper,
  FAQQuestionWrapper,
  FAQAnswerWrapper,
  FAQQuestionMargin,
  FAQContainer
};
