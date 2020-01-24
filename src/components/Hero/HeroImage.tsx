import styled from "styled-components";
import heroImage from "../../static/website-background-main-2.png";
import React from "react";

const Image = styled.img`
  width: 100%;
  display: flex;
`;

function HeroImage() {
  return <Image src={heroImage} alt="HeroImage" />;
}

export default HeroImage;
