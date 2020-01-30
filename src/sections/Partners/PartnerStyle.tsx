import styled from "styled-components";

const GoldPartnerImage = styled.img`
  height: 200px;
  margin: 10px;
`;

const GoldPartnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const SilverPartnerImage = styled.img`
  height: 125px;
  margin: 10px;
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
  height: 85px;
  margin: 10px;
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

export {
  GoldPartnerImage,
  SilverPartnerImage,
  BronzePartnerImage,
  PartnerContentWrapper,
  PartnerTitleWrapper,
  GoldPartnerContainer,
  SilverPartnerContainer,
  BronzePartnerContainer
};
