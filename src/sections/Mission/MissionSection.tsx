import React from "react";
import SectionBlock from "../../components/SectionDividers/SectionBlock";
import { MissionText, MissionTitle } from "../SectionConstant";

function MissionSection() {
  return (
    <SectionBlock sectionNumber={1}>
      {{
        title: MissionTitle,
        content: MissionText
      }}
    </SectionBlock>
  );
}

export default MissionSection;
