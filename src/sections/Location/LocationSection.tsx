import React from "react";
import SectionBlock from "../../components/SectionDividers/SectionBlock";
import { LocationTitleWrapper } from "./LocationStyle";

function LocationSection() {
  return (
    <SectionBlock sectionNumber={3}>
      {{
        content: () => {
          return <div></div>;
        }
      }}
    </SectionBlock>
  );
}

const LocationTitle: React.FC = () => {
  return <LocationTitleWrapper>Hello</LocationTitleWrapper>;
};

export default LocationSection;
