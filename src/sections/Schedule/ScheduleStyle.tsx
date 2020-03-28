import styled from "styled-components";

const ScheduleTableDiv = styled.div`
  overflow: hidden auto;
  height: 632px;
  word-wrap: break-word;
  background-color: #444;
  border-radius: 2px;
  margin-bottom: 70px;
  border: 2px solid #444;
  width: inherit;
  @media (max-width: 800px) {
    margin: 0px 0px 30px;
  }
`;

const ScheduleBlock = styled.table`
  table-layout: auto;
  border-style: none;
  border-collapse: collapse;
  width: 1200px;
  @media (max-width: 800px) {
    width: auto;
  }
`;

const ScheduleDate = styled.tr`
  font-family: Arial-Black;
  color: #ffffff;
  max-width: 1200px;
  border-top: 1px solid #333333;
  height: 40px;
`;

const ScheduleEvent = styled.tr`
  text-align: left;
  margin: 10px 5px;
  max-width: 400px;
  color: #ffffff;
  background-color: #027380;
  font-family: Helvetica;
  border-top: 1px solid #333333;
  padding: 100px;
  height: 45px;
`;

const ScheduleEventTitle = styled.td``;

const ScheduleEventTime = styled.td`
  width: 150px;
  padding-left: 10px;
`;

const ScheduleEventLocation = styled.td`
  max-width: 300px;
  text-align: right;
  padding-right: 30px;
  @media (max-width: 800px) {
    padding-right: 10px;
  }
`;

interface ScheduleTitleProps {
  sectionNumber: number;
}

const ScheduleTitle = styled.div<ScheduleTitleProps>`
  font-size: 55px;
  font-family: Arial-Black;
  margin-bottom: 30px;
  color: ${props => (props.sectionNumber === 8 ? "#ffffff" : "#4d4d4d")};
`;

const ScheduleTableBody = styled.tbody`
  width: 1500px;
`;

export {
  ScheduleBlock,
  ScheduleDate,
  ScheduleEvent,
  ScheduleEventTitle,
  ScheduleEventTime,
  ScheduleEventLocation,
  ScheduleTitle,
  ScheduleTableDiv,
  ScheduleTableBody
};
