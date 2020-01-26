import styled from "styled-components";

const AboutTitleWrapper = styled.div`
  font-family: Helvetica;
  font-weight: 700;
  color: #ffffff;
  font-size: 48px;
  margin-bottom: 20px;
`;

const AboutContentWrapper = styled.div`
  font-family: Helvetica;
  font-weight: 400;
  color: #ffffff;
  font-size: 21px;
  margin: 20px 30px 60px 30px;
  display: flex;
  justify-content: center;
`;

const AboutContentTabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 230px;
  line-height: 135%;
  padding: 10px 20px 0px 20px;
`;

const AboutContentImage = styled.img`
  height: 230px;
  margin-bottom: 20px;
`;

const AboutContentDivider = styled.div`
  background: #ffffff;
  height: 150px;
  width: 3px;
  margin: 150px 40px 0px 40px;
  display: flex;
`;

export {
  AboutTitleWrapper,
  AboutContentWrapper,
  AboutContentTabWrapper,
  AboutContentImage,
  AboutContentDivider
};
