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
import useWindowWidth from "../../hooks/useWindowWidth";

function MissionSection() {
  return (
    <SectionBlock sectionNumber={1} id="tracks">
      {{
        content: MissionContent
      }}
    </SectionBlock>
  );
}

const MissionContent: React.FC = () => {
  const screenWidth = useWindowWidth();
  return (
    <MissionContentWrapper>
      {screenWidth >= 800 ? (
        <MissionImageWrapper src={MissionImage} alt="MissionImage" />
      ) : null}
      <MissionStatementWrapper>
        <MissionTitleWrapper>{MissionTitle}</MissionTitleWrapper>
        <MissionTextWrapper>{MissionText}</MissionTextWrapper>
      </MissionStatementWrapper>
      {screenWidth < 800 ? (
        <MissionImageWrapper src={MissionImage} alt="MissionImage" />
      ) : null}
    </MissionContentWrapper>
  );
};

export default MissionSection;
