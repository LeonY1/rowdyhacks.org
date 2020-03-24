import React from "react";
import SectionBlock from "../../components/SectionDividers/SectionBlock";
import {
  LocationTitleWrapper,
  LocationTitleDivider,
  LocationTextWrapper,
  LocationContainer,
  LocationWrapper
} from "./LocationStyle";
import { LocationText } from "../SectionConstant";

interface LocationSectionProps {
  sectionNumber: number;
}

function LocationSection(props: LocationSectionProps) {
  const { sectionNumber } = props;
  return (
    <SectionBlock sectionNumber={sectionNumber} id="location">
      {{
        content: LocationContent
      }}
    </SectionBlock>
  );
}

const LocationContent: React.FC = () => {
  return (
    <LocationContainer>
      <LocationWrapper>
        <LocationTitleWrapper>LOCATION</LocationTitleWrapper>
        <LocationTitleDivider />
        <LocationTextWrapper>{LocationText}</LocationTextWrapper>
      </LocationWrapper>
    </LocationContainer>
  );
};

export default LocationSection;
