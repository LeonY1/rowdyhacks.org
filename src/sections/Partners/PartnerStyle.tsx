import styled from "styled-components";

const GoldPartnerImage = styled.img`
  max-height: 230px;
  max-width: 440px;
  margin: 10px;
  margin-top: 50px;
  padding-top: ${props => props.theme.padding}px;
  @media (max-width: 800px) {
    max-height: 115px;
    max-width: 220px;
    margin: 10px;
    padding-top: ${props => {
      return props.theme.padding / 2;
    }}px;
  }
`;

const GoldPartnerContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
  @media (max-width: 800px) {
    margin-bottom: 15px;
  }
`;

const SilverPartnerImage = styled.img`
  max-height: 160px;
  max-width: 300px;
  margin: 10px;
  margin-top: 50px;
  @media (max-width: 800px) {
    max-height: 80px;
    max-width: 150px;
  }
`;

const SilverPartnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    margin-bottom: 15px;
  }
`;

const BronzePartnerImage = styled.img`
  max-height: 120px;
  min-width: 120px;
  margin: 10px;
  margin-top: 50px;
  @media (max-width: 800px) {
    max-height: 80px;
    max-width: 120px;
    min-width: 0;
    margin: 0px 15px;
  }
`;

const BronzePartnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 50px 10px 10px;
  max-width: 1500px;
  @media (max-width: 800px) {
    margin: 10px;
  }
`;

const PartnerContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const PartnerTitleWrapper = styled.div`
  font-size: 55px;
  font-weight: 400;
  font-family: Arial-Black;
  margin-bottom: 30px;
  @media (max-width: 800px) {
    font-size: 42px;
  }
`;

const OtherPartnerContainer = styled.div``;

const OtherPartnerImage = styled.img`
  max-height: 200px;
  margin: 10px;
  @media (max-width: 800px) {
    max-height: 100px;
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
