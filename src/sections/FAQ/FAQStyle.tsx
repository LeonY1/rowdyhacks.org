import styled from "styled-components";

const FAQTitleWrapper = styled.div`
  font-family: Helvetica;
  font-weight: 700;
  color: #ffffff;
  font-size: 48px;
  margin-bottom: 30px;
`;

const FAQContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-evenly;
  width: 986px;
  font-size: 18px;
  font-family: Helvetica;
`;

const FAQQuestionWrapper = styled.div`
  color: #fcf89c;
`;

const FAQAnswerWrapper = styled.div`
  color: #ffffff;
  text-align: left;
  margin-bottom: 20px;
`;

const FAQQuestionMargin = styled.div`
  height: 20px;
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
