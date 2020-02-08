import styled from "styled-components";

const AboutTitleWrapper = styled.div`
  font-family: Arial-Black;
  font-weight: 400;
  color: #ffffff;
  font-size: 55px;
  margin-bottom: 20px;
  @media (max-width: 800px) {
    font-size: 42px;
    margin-bottom: 10px;
  }
`;

const AboutContentWrapper = styled.div`
  font-weight: 400;
  color: #ffffff;
  font-size: 21px;
  margin: 20px 30px 60px 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-family: Helvetica;
  @media (max-width: 1050px) {
    font-size: 14px;
  }
  @media (max-width: 630px) {
    flex-direction: column;
    padding: 10px 0px 0px 0px;
    margin: 10px 0px 30px 0px;
  }
`;

const AboutTextWrapper = styled.span`
  @media (max-width: 630px) {
    padding: 40px 0px;
    width: 200px;
  }
`;

const AboutContentTabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  line-height: 135%;
  padding: 10px 0px 0px 20px;

  @media (max-width: 1050px) {
    width: 150px;
  }
  @media (max-width: 630px) {
    padding: 0px;
    flex-direction: row;
    justify-content: space-evenly;
    width: 90vw;
  }
`;

const AboutContentImage = styled.img`
  height: 230px;
  width: 230px;
  @media (max-width: 1050px) {
    height: 150px;
    width: 150px;
  }
  margin-bottom: 20px;
`;

const AboutContentDivider = styled.div`
  background: #ffffff;
  height: 150px;
  width: 3px;
  margin: 150px 40px 0px 40px;
  display: flex;
  @media (max-width: 1050px) {
    margin: 100px 15px 0px 15px;
  }
`;

const AboutContainer = styled.div``;

export {
  AboutTitleWrapper,
  AboutContentWrapper,
  AboutContentTabWrapper,
  AboutContentImage,
  AboutContentDivider,
  AboutContainer,
  AboutTextWrapper
};
