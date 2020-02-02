import styled from "styled-components";

const GoldPartnerImage = styled.img`
  max-height: 230px;
  max-width: 440px;
  margin: 10px;
  @media (max-width: 800px) {
    height: 85px;
  }
`;

const GoldPartnerContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

const SilverPartnerImage = styled.img`
  max-height: 160px;
  max-width: 300px;
  margin: 10px;
  @media (max-width: 800px) {
    height: 67.5px;
  }
`;

const SilverPartnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

const BronzePartnerImage = styled.img`
  max-height: 120px;
  min-width: 120px;
  margin: 10px;
  @media (max-width: 800px) {
    height: 42.5px;
  }
`;

const BronzePartnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const PartnerContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const PartnerTitleWrapper = styled.div`
  font-family: Helvetica;
  font-size: 55px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const OtherPartnerContainer = styled.div``;

const OtherPartnerImage = styled.img`
  max-height: 200px;
  margin: 10px;
  @media (max-width: 800px) {
    height: 67.5px;
  }
`;

export {
  GoldPartnerImage,
  SilverPartnerImage,
  BronzePartnerImage,
  OtherPartnerImage,
  PartnerContentWrapper,
  PartnerTitleWrapper,
  GoldPartnerContainer,
  SilverPartnerContainer,
  BronzePartnerContainer,
  OtherPartnerContainer
};
