import React from "react";
import SectionBlock from "../../components/SectionDividers/SectionBlock";

function PartnerSection() {
  return (
    <SectionBlock sectionNumber={5}>
      {{
        content: () => {
          return <div></div>;
        }
      }}
    </SectionBlock>
  );
}

export default PartnerSection;
