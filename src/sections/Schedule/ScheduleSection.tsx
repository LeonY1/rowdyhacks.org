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
  ScheduleTableDiv
} from "./ScheduleStyle";

function ScheduleSection() {
  return (
    <SectionBlock sectionNumber={4} id="schedule">
      {{
        content: Schedule
      }}
    </SectionBlock>
  );
}

const Schedule: React.FC = () => {
  const { days } = ScheduleConstants;
  return (
    <div>
      <ScheduleTitle>Schedule</ScheduleTitle>
      <ScheduleTableDiv>
        <ScheduleBlock>
          <tbody>
            {days.map(({ date, dayOfWeek, events }) => {
              return (
                <>
                  <ScheduleDate>
                    <td colSpan={3} style={{}}>
                      <span style={{ float: "left", paddingLeft: "5px" }}>
                        {date}
                      </span>
                      <span style={{ float: "right", paddingRight: "5px" }}>
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
                          {location}
                        </ScheduleEventLocation>
                      </ScheduleEvent>
                    );
                  })}
                </>
              );
            })}
          </tbody>
        </ScheduleBlock>
      </ScheduleTableDiv>
    </div>
  );
};

export default ScheduleSection;
