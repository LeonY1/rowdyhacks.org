import heroImage from "../../static/website-background.png";
import React from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import useTimer from "../../hooks/useTimer";
import { animationObjects, stillObjects } from "./HeroConstants";
import { HeroBg, StillAnimation, TurnedStillAnimation } from "./HeroStyle";
import Animation from "./Animation";
import AnimationInput from "./AnimationInput";

function Hero() {
  const screenWidth = useWindowWidth();
  const time = useTimer();

  const distConversion = (object: AnimationInput) => {
    const { startTime, endTime, margin } = object;
    if (startTime <= time && time <= endTime)
      return {
        dist:
          ((time - startTime) / (endTime - startTime)) * (screenWidth - margin),
        display: "block"
      };
    else return { dist: 0, display: "none" };
  };

  const screenConversion = (object: AnimationInput) => {
    const { top, margin, width } = object;
    return {
      top: (top * screenWidth) / 1836,
      margin: (margin * screenWidth) / 1836,
      width: (width * screenWidth) / 1836
    };
  };

  const objectLocations = animationObjects.map(object => {
    return {
      theme: {
        ...distConversion(object),
        ...screenConversion(object)
      }
    };
  });

  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      {animationObjects.map((object, index) => {
        return <Animation {...object} {...objectLocations[index]} />;
      })}
      {stillObjects.map(object => {
        const { imageSrc, direction } = object;
        if (direction === "right")
          return (
            <StillAnimation
              src={require("../../static/Animation/" + imageSrc + ".svg")}
              {...object}
            />
          );
        else
          return (
            <TurnedStillAnimation
              src={require("../../static/Animation/" + imageSrc + ".svg")}
              {...object}
            />
          );
      })}
      <HeroBg src={heroImage} alt="HeroImage" />
    </div>
  );
}

export default Hero;
