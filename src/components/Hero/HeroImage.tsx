import styled from "styled-components";
import heroImage from "../../static/website-background.png";
import React from "react";

const Image = styled.img`
  width: 100%;
  display: flex;
  z-index: -1;
`;

function HeroImage() {
  return <Image src={heroImage} alt="HeroImage" />;
}

export default HeroImage;
