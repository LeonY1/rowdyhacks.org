import styled from "styled-components";

const DividerHeader = styled.div`
  width: 100%;
  background-image: linear-gradient(#ffffff, #333333);
  height: 12px;
  opacity: 50%;
`;

const DividerFooter = styled.img`
  width: 100%;
  z-index: 10;
`;

const DividerMargin = styled.div`
  display: flex;
  margin-top: ${props => props.theme.margin}px;
`;

const DividerContent = styled.div`
  display: flex;
  padding-top: calc(${props => props.theme.margin}px * -1);
  ${props => (props.theme.main ? `background:${props.theme.main};` : "")}
  ${props =>
    props.theme.mainImage ? `background-image: ${props.theme.mainImage};` : ""}
  z-index: ${props => props.theme.zindex};
  flex-direction: column;
  align-items: center;
`;

const WhiteDividerContent = styled.div`
  display: flex;
`;

const SectionTitle = styled.div`
  font-family: parisplus-std, sans-serif;
  font-style: normal;
  font-weight: 400;
`;

const SectionContent = styled.div`
  font-style: normal;
  font-weight: 400;
`;

const Divider = styled.section`
  display: flex;
  flex-direction: column;
`;

export {
  Divider,
  DividerHeader,
  DividerContent,
  DividerFooter,
  DividerMargin,
  SectionTitle,
  SectionContent,
  WhiteDividerContent
};
