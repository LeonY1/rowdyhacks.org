import React from "react";
import SectionBlock from "../../components/SectionDividers/SectionBlock";
import {
  SocialMediaWrapper,
  SocialMediaTitleWrapper,
  SocialTextWrapper,
  LogoContainer,
  Link,
  FooterContainer,
  EmailLink,
  CodeofConduct
} from "./SocialMediaStyle";
import { SocialMediaText, FooterText, socialLogos } from "../SectionConstant";

function SocialMediaSection() {
  return (
    <SectionBlock sectionNumber={5}>
      {{
        content: SocialMediaContent
      }}
    </SectionBlock>
  );
}

const SocialMediaContent: React.FC = () => {
  return (
    <SocialMediaWrapper>
      <SocialMediaTitleWrapper>SOCIAL MEDIA</SocialMediaTitleWrapper>
      <SocialTextWrapper>{SocialMediaText}</SocialTextWrapper>
      <LogoContainer>
        {socialLogos.map(logo => {
          return (
            <Link
              href={logo.link}
              target={"_blank"}
              key={logo.altName + "Social"}
            >
              <img
                src={require("../../static/SocialMedia/" + logo.src + ".webp")}
                alt={logo.altName}
              />
            </Link>
          );
        })}
      </LogoContainer>
      <FooterContainer>
        {FooterText}
        <EmailLink href="mailto:team@rowdyhacks.org" target="_blank">
          team@rowdyhacks.org
        </EmailLink>
      </FooterContainer>
      <CodeofConduct>
        <a
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          MLH Code of Conduct
        </a>
      </CodeofConduct>
    </SocialMediaWrapper>
  );
};

export default SocialMediaSection;
