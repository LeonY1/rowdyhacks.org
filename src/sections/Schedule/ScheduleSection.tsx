import React from "react";
import SectionBlock from "../../components/SectionDividers/SectionBlock";
import { ScheduleConstants } from "../SectionConstant";
import { ScheduleBlock, ScheduleDate, ScheduleEvent } from "./ScheduleStyle";

function ScheduleSection() {
  return (
    <SectionBlock sectionNumber={4} id="schedule">
      {{
        content: () => {
          return (
            <div>
              <div>Schedule</div>
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
    <ScheduleBlock>
      {days.map(({ date, events }) => {
        return (
          <div>
            <ScheduleDate>{date}</ScheduleDate>

            <ul>
              {events.map(({ title, time, location }) => {
                return (
                  <ScheduleEvent>
                    <div>{title}</div>
                    <div>{time}</div>
                    <div>{location}</div>
                  </ScheduleEvent>
                );
              })}
            </ul>
          </div>
        );
      })}
    </ScheduleBlock>
  );
};

export default ScheduleSection;
