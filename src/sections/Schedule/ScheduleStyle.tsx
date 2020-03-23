import styled from "styled-components";

const ScheduleBlock = styled.div`
  display: flex;
  justify-content: center;
`;

const ScheduleDate = styled.h3`
  font-family: Arial-Black;
  color: #034872;
`;

const ScheduleEvent = styled.li`
  list-style-type: none;
  text-align: left;
  margin: 10px 5px;
  max-width: 350px;
  color: #034872;
  font-family: Helvetica;
`;

export { ScheduleBlock, ScheduleDate, ScheduleEvent };
