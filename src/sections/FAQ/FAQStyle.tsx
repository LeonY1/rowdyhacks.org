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
  margin: 0px 400px;
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

export {
  FAQTitleWrapper,
  FAQContentWrapper,
  FAQQuestionWrapper,
  FAQAnswerWrapper,
  FAQQuestionMargin
};
