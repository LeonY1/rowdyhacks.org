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
import { SocialMediaText, FooterText } from "../SectionConstant";

function SocialMediaSection() {
  return (
    <SectionBlock sectionNumber={6}>
      {{
        content: SocialMediaContent
      }}
    </SectionBlock>
  );
}

interface SocialLogo {
  link: string;
  src: string;
  altName: string;
}

const socialLogos: Array<SocialLogo> = [
  {
    link: "https://twitter.com/rowdyhacks",
    src: "twitter",
    altName: "Twitter"
  },
  {
    link: "https://facebook.com/rowdyhacks",
    src: "facebook",
    altName: "Facebook"
  },
  {
    link: "https://www.linkedin.com/company/51637167",
    src: "linkedin",
    altName: "Linkedin"
  },
  {
    link: "https://www.instagram.com/rowdyhack",
    src: "instagram",
    altName: "Instagram"
  }
];

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
        >
          MLH Code of Conduct
        </a>
      </CodeofConduct>
    </SocialMediaWrapper>
  );
};

export default SocialMediaSection;
