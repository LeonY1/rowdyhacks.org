import React from "react";
import SectionBlock from "../../components/SectionDividers/SectionBlock";
import {
  LocationTitleWrapper,
  LocationTitleDivider,
  LocationTextWrapper,
  LocationImageWrapper,
  LocationContainer,
  LocationWrapper
} from "./LocationStyle";
import { LocationText } from "../SectionConstant";
import LocationImage from "../../static/MainCampusMapsV2.png";

function LocationSection() {
  return (
    <SectionBlock sectionNumber={3} id="location">
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
      <LocationImageWrapper src={LocationImage} alt="LocationImage" />
    </LocationContainer>
  );
};

export default LocationSection;
