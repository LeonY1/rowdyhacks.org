import styled from "styled-components";

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialMediaTitleWrapper = styled.div`
  font-size: 55px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #ffffff;
`;

const LogoContainer = styled.div`
  margin-bottom: 20px;
`;

const CodeofConduct = styled.div`
  font-size: 18px;
  margin: 10px 0px;
`;

const Link = styled.a`
  margin: 10px;
`;

const SocialTextWrapper = styled.p`
  color: #ffffff;
  margin-bottom: 20px;
  font-size: 18px;
`;

const FooterContainer = styled.p`
  color: #ffffff;
  width: 40vw;
  font-size: 18px;
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
