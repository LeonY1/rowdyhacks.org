import styled from "styled-components";

const GoldPartnerImage = styled.img`
  max-height: 230px;
  max-width: 440px;
  margin: 10px 30px;
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
  margin-bottom: 10px;
  @media (max-width: 800px) {
    margin-bottom: 15px;
  }
`;

const SilverPartnerImage = styled.img`
  max-height: 190px;
  max-width: 370px;
  margin: 40px 20px 10px;
  @media (max-width: 800px) {
    margin: 15px 10px;
    max-height: 80px;
    max-width: 180px;
  }
`;

const SilverPartnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1550px;
  @media (max-width: 800px) {
    margin: 0px 10px 15px;
  }
`;

const BronzePartnerImage = styled.img`
  max-height: 120px;
  min-height: 30px;
  min-width: 120px;
  max-width: 320px;
  margin: 25px 5px 5px;
  background-color: ${props => props.theme.backgroundColor};
  padding: 5px;
  @media (max-width: 800px) {
    max-height: 60px;
    max-width: 140px;
    min-height: 20px;
    min-width: 0px;
    margin: 10px 5px;
  }
`;

const BronzePartnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 50px 10px 10px;
  max-width: 1550px;
  @media (max-width: 800px) {
    margin: 15px;
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

const OtherPartnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0px 10px 30px;
  max-width: 1500px;
  @media (max-width: 800px) {
    margin: 15px;
  }
`;

const OtherPartnerImage = styled.img`
  max-height: 120px;
  max-width: 370px;
  margin: 20px 20px;
  padding: 5px;
  background-color: ${props => props.theme.backgroundColor};
  @media (max-width: 800px) {
    margin: 15px 10px;
    max-height: 80px;
    max-width: 180px;
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
