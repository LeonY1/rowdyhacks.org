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
        <div style={{ display: "flex", alignItems: "center" }}>
          <MissionImageWrapper src={MissionImage} alt="MissionImage" />
        </div>
      ) : null}
      <MissionStatementWrapper>
        <MissionTitleWrapper>{MissionTitle}</MissionTitleWrapper>
        {MissionText.map((text, index) => {
          return (
            <MissionTextWrapper key={"tracks" + index}>
              {index === 1 && <b>Cybersecurity Track: </b>}
              {index === 2 && <b>Learners Track: </b>}
              {index === 3 && <b>General Track: </b>}

              {text}
            </MissionTextWrapper>
          );
        })}
      </MissionStatementWrapper>
      {screenWidth < 800 ? (
        <div>
          <MissionImageWrapper src={MissionImage} alt="MissionImage" />
        </div>
      ) : null}
    </MissionContentWrapper>
  );
};

export default MissionSection;
