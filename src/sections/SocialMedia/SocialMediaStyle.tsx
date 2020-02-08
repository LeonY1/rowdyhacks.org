import styled from "styled-components";

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialMediaTitleWrapper = styled.div`
  font-size: 55px;
  font-family: Arial-Black;
  margin-bottom: 20px;
  color: #ffffff;
  @media (max-width: 800px) {
    font-size: 42px;
    margin-bottom: 0px;
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 20px;
`;

const CodeofConduct = styled.div`
  font-size: 18px;
  font-family: Helvetica;
  margin: 10px 0px;
  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

const Link = styled.a`
  margin: 10px;
`;

const SocialTextWrapper = styled.p`
  color: #ffffff;
  margin-bottom: 20px;
  font-size: 18px;
  font-family: Helvetica;
  @media (max-width: 800px) {
    font-size: 14px;
    width: 90vw;
  }
`;

const FooterContainer = styled.p`
  color: #ffffff;
  width: 40vw;
  font-size: 18px;
  font-family: Helvetica;
  @media (max-width: 800px) {
    width: 90vw;
    font-size: 14px;
  }
`;

const EmailLink = styled.a`
  color: #ffffff;
`;

export {
  SocialMediaWrapper,
  SocialMediaTitleWrapper,
  SocialTextWrapper,
  LogoContainer,
  CodeofConduct,
  FooterContainer,
  Link,
  EmailLink
};
