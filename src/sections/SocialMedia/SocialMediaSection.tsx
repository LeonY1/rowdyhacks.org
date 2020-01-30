import React from "react";
import SectionBlock from "../../components/SectionDividers/SectionBlock";
import { SocialMediaWrapper } from "./SocialMediaStyle";

function SocialMediaSection() {
  return (
    <SectionBlock sectionNumber={6}>
      {{
        content: SocialMediaContent
      }}
    </SectionBlock>
  );
}

const SocialMediaContent: React.FC = () => {
  return (
    <SocialMediaWrapper>
      {/* <img src={require("../../static/linkedin.png")} alt="LinkedIn" /> */}
    </SocialMediaWrapper>
  );
};

export default SocialMediaSection;
