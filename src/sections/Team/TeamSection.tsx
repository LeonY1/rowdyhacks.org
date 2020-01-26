import React from "react";
import SectionBlock from "../../components/SectionDividers/SectionBlock";

function TeamSection() {
  return (
    <SectionBlock sectionNumber={6}>
      {{
        title: () => {
          return <div></div>;
        },
        content: () => {
          return <div></div>;
        }
      }}
    </SectionBlock>
  );
}

export default TeamSection;
