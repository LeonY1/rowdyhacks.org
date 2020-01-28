import React from "react";
import SectionBlock from "../../components/SectionDividers/SectionBlock";

function ScheduleSection() {
  return (
    <SectionBlock sectionNumber={4}>
      {{
        content: () => {
          return <div></div>;
        }
      }}
    </SectionBlock>
  );
}

export default ScheduleSection;
