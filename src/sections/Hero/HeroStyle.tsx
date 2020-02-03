import styled from "styled-components";

const RightAnimation = styled.img.attrs(props => ({
  style: {
    left: props.theme.dist + "px"
  }
}))`
  position: absolute;
  width: ${props => props.theme.width}px;
  top: ${props => props.theme.top}px;
  display: ${props => props.theme.display};
  margin-left: ${props => props.theme.margin}px;
`;

const LeftAnimation = styled.img.attrs(props => ({
  style: {
    right: props.theme.dist + "px"
  }
}))`
  position: absolute;
  width: ${props => props.theme.width}px;
  top: ${props => props.theme.top}px;
  display: ${props => props.theme.display};
  margin-right: ${props => props.theme.margin}px;
`;

const StillAnimation = styled.img`
  position: absolute;
  width: ${props => props.theme.width}px;
  top: ${props => props.theme.top}px;
  left: ${props => props.theme.dist}px;
  z-index: 12;
`;

const TurnedStillAnimation = styled.img`
  position: absolute;
  width: ${props => props.theme.width}px;
  top: ${props => props.theme.top}px;
  left: ${props => props.theme.dist}px;
  transform: scale(-1, 1);
  z-index: 12;
`;

const HeroBg = styled.img`
  width: 100%;
  display: flex;
  z-index: 10;
`;

const HeroContainer = styled.div`
  overflow: hidden;
  position: relative;
  @media (max-width: 800px) {
    background-color: ;
  }
`;

const TitleWrapper = styled.div`
  font-size: ${props => props.theme.fontSize}px;
  letter-spacing: ${props => props.theme.letterSpacing}px;
`;

const HeroTitleWrapper = styled.div`
  top: 55px;
  left: ${props => props.theme.margin}px;
  color: #cc64b1;
  position: absolute;
  z-index: 50;
  @media (max-width: 800px) {
    position: relative;
    padding-top: 120px;
    top: 0px;
    background-color: #cbebe8;
  }
`;

const HeroTitleContainer = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 50;
`;

const ButtonWrapper = styled.div`
  padding-left: 140px;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 0px;
  }
`;

const TitleButton = styled.button`
  margin: 10px 15px;
  background: #cc64b1;
  border-width: 0;
  border-radius: 30px;
  height: 48px;
  padding: 10px 10px;
  font-size: 14px;
  font-weight: 400;
  color: #fff6c2;
  max-width: 300px;
  cursor: pointer;
`;

const DateWrapper = styled.div`
  font-size: 20px;
`;

export {
  RightAnimation,
  LeftAnimation,
  StillAnimation,
  TurnedStillAnimation,
  HeroBg,
  HeroContainer,
  TitleWrapper,
  TitleButton,
  HeroTitleContainer,
  HeroTitleWrapper,
  DateWrapper,
  ButtonWrapper
};
