import React, { ReactElement } from "react";
import BlueSection from "../../static/website-background-4.png";
import GreenSection from "../../static/website-background-5.png";

import {
  Divider,
  DividerHeader,
  DividerContent,
  DividerFooter,
  SectionTitle
} from "./DividerStyle";

interface sectionProps {
  sectionNumber: number;
  children: {
    title: string;
    content: string;
  };
}

const sectionColors = [
  { theme: { main: "green" } },
  { theme: { main: "white" } },
  { theme: { main: "#007380" } },
  { theme: { main: "white" } }
];

function SectionBlock(props: sectionProps) {
  const { sectionNumber } = props;
  const { title, content } = props.children;

  return (
    <Divider>
      <DividerContent {...sectionColors[sectionNumber % 4]}>
        <SectionTitle>{title}</SectionTitle>
      </DividerContent>
      {sectionNumber % 2 === 0 && sectionNumber != 0 ? <DividerHeader /> : null}
      {sectionNumber % 2 === 0 ? (
        sectionNumber % 4 === 0 ? (
          <DividerFooter src={GreenSection} alt="greenSection"></DividerFooter>
        ) : (
          <DividerFooter src={BlueSection} alt="blueSection"></DividerFooter>
        )
      ) : null}
    </Divider>
  );
}
export default SectionBlock;
