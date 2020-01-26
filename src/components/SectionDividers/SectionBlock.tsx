import React from "react";
import BlueSection from "../../static/website-background-4.png";
import GreenSection from "../../static/website-background-5.png";
import PinkSection from "../../static/website-background-6.png";

import {
  Divider,
  DividerHeader,
  DividerContent,
  DividerFooter,
  DividerMargin
} from "./DividerStyle";

interface sectionProps {
  sectionNumber: number;
  children: {
    title: React.FC;
    content: React.FC;
  };
}

const sectionColors = [
  { theme: { main: "#5faa86" } },
  { theme: { main: "white" } },
  { theme: { main: "#007380" } },
  { theme: { main: "white" } },
  { theme: { main: "#cc64b1" } },
  { theme: { main: "white" } }
];

function SectionBlock(props: sectionProps) {
  const { sectionNumber } = props;
  const { title, content } = props.children;

  return (
    <Divider>
      {sectionNumber % 2 === 0 && sectionNumber !== 0 ? (
        <DividerHeader />
      ) : null}
      <DividerContent {...sectionColors[sectionNumber % 6]}>
        {title({ children: null })}
        {content({ children: null })}
      </DividerContent>
      {(() => {
        switch (sectionNumber % 6) {
          case 0:
            return (
              <DividerFooter
                src={GreenSection}
                alt="greenSection"
              ></DividerFooter>
            );
          case 2:
            return (
              <DividerFooter
                src={BlueSection}
                alt="blueSection"
              ></DividerFooter>
            );
          case 4:
            return (
              <DividerFooter
                src={PinkSection}
                alt="pinkSection"
              ></DividerFooter>
            );
          default:
            return <DividerMargin />;
        }
      })()}
    </Divider>
  );
}
export default SectionBlock;
