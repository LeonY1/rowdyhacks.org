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
import styled from "styled-components";

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
      <IFrameWrapper src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4432.013774283184!2d-98.62240864889898!3d29.583008347088565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c6661682edebd%3A0xf423f4a98141d9e6!2sUTSA%20Student%20Union!5e1!3m2!1sen!2sus!4v1580693515538!5m2!1sen!2sus" />{" "}
    </LocationContainer>
  );
};

const IFrameWrapper = styled.iframe`
  border: 0;
  width: 50vw;
  min-height: 30vw;
  height: 30vh;
  @media (max-width: 800px) {
    width: 90vw;
  }
`;

export default LocationSection;
