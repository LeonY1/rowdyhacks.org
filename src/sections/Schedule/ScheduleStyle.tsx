import styled from "styled-components";

const ScheduleTableDiv = styled.div`
  overflow: hidden auto;
  height: 632px;
  word-wrap: break-word;
  background-color: #444;
  border-radius: 2px;
  margin-bottom: 70px;
  border: 2px solid #444;
`;

const ScheduleBlock = styled.table`
  table-layout: auto;
  border-style: none;
  border-collapse: collapse;
`;

const ScheduleDate = styled.tr`
  font-family: Arial-Black;
  color: #ffffff;
  width: parent;
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
  width: 100px;
  padding-left: 10px;
`;

const ScheduleEventLocation = styled.td`
  max-width: 300px;
  text-align: right;
`;

const ScheduleTitle = styled.div`
  font-size: 55px;
  font-family: Arial-Black;
  margin-bottom: 30px;
  color: #4d4d4d;
`;
export {
  ScheduleBlock,
  ScheduleDate,
  ScheduleEvent,
  ScheduleEventTitle,
  ScheduleEventTime,
  ScheduleEventLocation,
  ScheduleTitle,
  ScheduleTableDiv
};
