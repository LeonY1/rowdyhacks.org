import React from "react";

import {
  Divider,
  DividerContent,
  DividerFooter,
  DividerMargin
} from "./DividerStyle";
import useWindowWidth from "../../hooks/useWindowWidth";

interface sectionProps {
  sectionNumber: number;
  id: string;
  children: {
    content: React.FC;
  };
}

function SectionBlock(props: sectionProps) {
  const { sectionNumber, id } = props;
  const { content } = props.children;
  const screenWidth = useWindowWidth();
  const sectionColors = [
    {
      theme: {
        main: "#5faa86",
        src: "banner-green",
        altName: "greenBanner",
        margin: 0,
        zindex: 4
      }
    },
    {
      theme: {
        main: "#027380",
        src: "banner-blue",
        altName: "blueBanner",
        margin: ((170 * screenWidth) / 1988) * -1,
        zindex: 3
      }
    },
    {
      theme: {
        main: "#cc64b1",
        src: "banner-pink",
        altName: "pinkBanner",
        margin: ((170 * screenWidth) / 1988) * -1,
        zindex: 2
      }
    },
    {
      theme: {
        main: "#fff6c2",
        src: "banner-yellow",
        altName: "yellowBanner",
        margin: ((170 * screenWidth) / 1988) * -1,
        zindex: 1
      }
    },
    {
      theme: {
        mainImage: "linear-gradient(to bottom, #cbebe8, #5faa86)",
        src: "banner-green",
        altName: "greenBanner",
        margin: 0,
        zindex: 4
      }
    },
    { theme: { main: "#5faa86" } },
    { theme: { main: "#ffffff" } },
    { theme: { main: "#fff6c2", margin: ((170 * screenWidth) / 1988) * -1 } },

    {
      theme: {
        main: "#5faa86",
        src: "banner-green",
        altName: "greenBanner",
        margin: ((170 * screenWidth) / 1988) * -1,
        zindex: 0
      }
    }
  ];

  const sectionTheme = sectionColors[sectionNumber];

  return (
    <Divider id={id} key={id + "-section-" + sectionNumber}>
      <DividerMargin {...sectionTheme} />
      <DividerContent {...sectionTheme}>
        {content({ children: null })}
      </DividerContent>
      {sectionTheme.theme.src === undefined ? (
        <DividerMargin />
      ) : (
        <DividerFooter
          src={require("../../static/" + sectionTheme.theme.src + ".png")}
          alt={sectionTheme.theme.altName}
        />
      )}
    </Divider>
  );
}
export default SectionBlock;
