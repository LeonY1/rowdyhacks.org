import React from "react";
import SectionBlock from "../../components/SectionDividers/SectionBlock";
import { ScheduleConstants } from "../SectionConstant";
import {
  ScheduleBlock,
  ScheduleDate,
  ScheduleEvent,
  ScheduleEventTitle,
  ScheduleEventTime,
  ScheduleEventLocation,
  ScheduleTitle,
  ScheduleTableDiv,
  ScheduleTableBody
} from "./ScheduleStyle";
import Linkify from "linkifyjs/react";

interface ScheduleSectionProps {
  sectionNumber: number;
}

function ScheduleSection(props: ScheduleSectionProps) {
  const { sectionNumber } = props;
  return (
    <SectionBlock sectionNumber={sectionNumber} id="schedule">
      {{
        content: () => {
          return (
            <div style={{ width: "inherit" }}>
              <ScheduleTitle {...props}>SCHEDULE</ScheduleTitle>
              <Schedule />
            </div>
          );
        }
      }}
    </SectionBlock>
  );
}

const Schedule: React.FC = () => {
  const { days } = ScheduleConstants;
  return (
    <ScheduleTableDiv>
      <ScheduleBlock>
        <ScheduleTableBody>
          {days.map(({ date, dayOfWeek, events }) => {
            return (
              <>
                <ScheduleDate>
                  <td colSpan={3} style={{}}>
                    <span style={{ float: "left", paddingLeft: "5px" }}>
                      {date}
                    </span>
                    <span style={{ float: "right", paddingRight: "30px" }}>
                      {dayOfWeek}
                    </span>
                  </td>
                </ScheduleDate>

                {events.map(({ title, time, location }) => {
                  return (
                    <ScheduleEvent>
                      <ScheduleEventTime>{time}</ScheduleEventTime>
                      <ScheduleEventTitle>{title}</ScheduleEventTitle>
                      <ScheduleEventLocation>
                        <Linkify>{location}</Linkify>
                      </ScheduleEventLocation>
                    </ScheduleEvent>
                  );
                })}
              </>
            );
          })}
        </ScheduleTableBody>
      </ScheduleBlock>
    </ScheduleTableDiv>
  );
};

export default ScheduleSection;
