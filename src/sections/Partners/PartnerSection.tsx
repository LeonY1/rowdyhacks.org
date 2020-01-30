import React from "react";
import SectionBlock from "../../components/SectionDividers/SectionBlock";
import {
  GoldPartnerImage,
  SilverPartnerImage,
  BronzePartnerImage,
  PartnerContentWrapper,
  PartnerTitleWrapper,
  GoldPartnerContainer,
  SilverPartnerContainer,
  BronzePartnerContainer
} from "./PartnerStyle";

function PartnerSection() {
  return (
    <SectionBlock sectionNumber={3}>
      {{
        content: PartnerContent
      }}
    </SectionBlock>
  );
}

const goldPartners = [
  "FrostBank",
  "ManTech",
  "TechData",
  "AFCS",
  "iHeartMedia"
];

const silverPartners = ["UTSA_CS", "Accenture"];

const bronzePartners = [
  "CivTechSA",
  "Facebook",
  "Google",
  "UTSA_COS",
  "Valero"
];

const PartnerContent: React.FC = () => {
  return (
    <PartnerContentWrapper id="partners">
      <PartnerTitleWrapper>Our Partners</PartnerTitleWrapper>
      <GoldPartnerContainer>
        {goldPartners.map(value => {
          return (
            <div>
              <GoldPartnerImage
                key={value + "Image"}
                src={require("../../static/PartnerLogos/" + value + ".png")}
                alt={value}
              />
            </div>
          );
        })}
      </GoldPartnerContainer>
      <SilverPartnerContainer>
        {silverPartners.map(value => {
          return (
            <div>
              <SilverPartnerImage
                key={value + "Image"}
                src={require("../../static/PartnerLogos/" + value + ".png")}
                alt={value}
              />
            </div>
          );
        })}
      </SilverPartnerContainer>
      <BronzePartnerContainer>
        {bronzePartners.map(value => {
          return (
            <div>
              <BronzePartnerImage
                key={value + "Image"}
                src={require("../../static/PartnerLogos/" + value + ".png")}
                alt={value}
              />
            </div>
          );
        })}
      </BronzePartnerContainer>
    </PartnerContentWrapper>
  );
};

export default PartnerSection;
