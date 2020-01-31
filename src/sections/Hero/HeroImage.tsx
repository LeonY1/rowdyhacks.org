import heroImage from "../../static/website-background.png";
import React from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import useTimer from "../../hooks/useTimer";
import { animationObjects } from "./HeroConstants";
import { HeroBg } from "./HeroStyle";
import Animation from "./Animation";
import AnimationInput from "./AnimationInput";

function Hero() {
  const screenWidth = useWindowWidth();
  const time = useTimer();

  const distConversion = (object: AnimationInput, time: number) => {
    const { startTime, endTime, margin } = object;
    if (startTime <= time && time <= endTime)
      return (
        ((time - startTime) / (endTime - startTime)) * (screenWidth - margin)
      );
    else return 0;
  };

  const objectLocations = animationObjects.map(object => {
    const { top, margin, width, startTime, endTime } = object;
    return {
      theme: {
        top: top,
        dist: distConversion(object, time),
        display: startTime < time && time < endTime ? "block" : "none",
        margin: margin,
        width: width
      }
    };
  });

  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      {animationObjects.map((object, index) => {
        return <Animation {...object} {...objectLocations[index]} />;
      })}
      <HeroBg src={heroImage} alt="HeroImage" />
    </div>
  );
}

export default Hero;
