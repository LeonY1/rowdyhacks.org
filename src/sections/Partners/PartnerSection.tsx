import React from "react";
import SectionBlock from "../../components/SectionDividers/SectionBlock";

function PartnerSection() {
  return (
    <SectionBlock sectionNumber={5}>
      {{
        content: PartnerContent
      }}
    </SectionBlock>
  );
}

const goldPartners = ["AFCS", "Frost Bank"];

const PartnerContent: React.FC = () => {
  return <div></div>;
};

export default PartnerSection;
