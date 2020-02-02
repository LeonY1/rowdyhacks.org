import React from "react";
import SectionBlock from "../../components/SectionDividers/SectionBlock";

function TeamSection() {
  return (
    <SectionBlock sectionNumber={6} id="team">
      {{
        content: () => {
          return <div></div>;
        }
      }}
    </SectionBlock>
  );
}

export default TeamSection;
