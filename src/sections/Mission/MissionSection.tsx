import React from "react";
import SectionBlock from "../../components/SectionDividers/SectionBlock";
import { MissionText, MissionTitle } from "../SectionConstant";
import {
  MissionContentWrapper,
  MissionImageWrapper,
  MissionStatementWrapper,
  MissionTitleWrapper,
  MissionTextWrapper
} from "./MissionStyle";
import MissionImage from "../../static/MissionImage.png";

function MissionSection() {
  return (
    <SectionBlock sectionNumber={1}>
      {{
        content: MissionContent
      }}
    </SectionBlock>
  );
}

const MissionContent: React.FC = () => {
  return (
    <MissionContentWrapper>
      <MissionImageWrapper src={MissionImage} alt="MissionImage" />
      <MissionStatementWrapper>
        <MissionTitleWrapper>{MissionTitle}</MissionTitleWrapper>
        <MissionTextWrapper>{MissionText}</MissionTextWrapper>
      </MissionStatementWrapper>
    </MissionContentWrapper>
  );
};

export default MissionSection;
