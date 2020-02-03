import heroImage from "../../static/website-background.png";
import React from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import useTimer from "../../hooks/useTimer";
import { animationObjects, stillObjects } from "./HeroConstants";
import {
  HeroBg,
  HeroContainer,
  StillAnimation,
  TurnedStillAnimation
} from "./HeroStyle";
import Animation from "./Animation";
import AnimationInput from "./Interfaces/AnimationInput";
import StillAnimationInput from "./Interfaces/StillAnimationInput";
import HeroTitle from "./HeroTitle";

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
      top: (top * (screenWidth - 15)) / 1836,
      margin: (margin * (screenWidth - 15)) / 1836,
      width: (width * (screenWidth - 15)) / 1836
    };
  };

  const stillScreenConversion = (object: StillAnimationInput) => {
    const { top, dist, width } = object;
    return {
      top: (top * (screenWidth - 15)) / 1836,
      dist: (dist * (screenWidth - 15)) / 1836,
      width: (width * (screenWidth - 15)) / 1836
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

  const stillLocations = stillObjects.map(object => {
    return {
      theme: {
        ...stillScreenConversion(object)
      }
    };
  });

  return (
    <>
      <HeroTitle />
      <HeroContainer>
        {animationObjects.map((object, index) => {
          return (
            <Animation
              key={"river-object-" + index}
              {...object}
              {...objectLocations[index]}
            />
          );
        })}
        {stillObjects.map((object, index) => {
          const { imageSrc, direction } = object;
          if (direction === "right")
            return (
              <StillAnimation
                key={"human-" + index}
                src={require("../../static/Animation/" + imageSrc + ".svg")}
                {...object}
                {...stillLocations[index]}
              />
            );
          else
            return (
              <TurnedStillAnimation
                key={"human-" + index}
                src={require("../../static/Animation/" + imageSrc + ".svg")}
                {...object}
                {...stillLocations[index]}
              />
            );
        })}
        <HeroBg src={heroImage} alt="HeroImage" />
      </HeroContainer>
    </>
  );
}

export default Hero;
