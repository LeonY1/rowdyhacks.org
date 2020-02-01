import React from "react";
import AnimationProps from "./Interfaces/AnimationProps";
import { RightAnimation, LeftAnimation } from "./HeroStyle";

const Animation: React.FC<AnimationProps> = props => {
  const { imageSrc, direction } = props;
  return (
    <>
      {direction === "right" ? (
        <RightAnimation
          src={require("../../static/Animation/" + imageSrc + ".png")}
          {...props}
        />
      ) : (
        <LeftAnimation
          src={require("../../static/Animation/" + imageSrc + ".png")}
          {...props}
        />
      )}
    </>
  );
};

export default Animation;
