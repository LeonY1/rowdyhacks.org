import React from "react";
import SectionBlock from "../../components/SectionDividers/SectionBlock";

function PartnerSection() {
  return (
    <SectionBlock sectionNumber={5}>
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

export default PartnerSection;
