import styled from "styled-components";

const MissionContentWrapper = styled.div`
  display: flex;
  margin: 40px 0px;
  justify-content: space-between;
  width: 100%;
`;

const MissionImageWrapper = styled.img`
  width: 50vw;
`;

const MissionStatementWrapper = styled.div`
  color: #4d4d4d;
  text-align: center;
  width: 40vw;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const MissionTextWrapper = styled.div`
  font-size: 20px;
  width: 20vw;
  font-weight: 400;
  line-height: 1.35;
`;

const MissionTitleWrapper = styled.div`
  font-size: 55px;
  font-weight: 700;
`;

export {
  MissionContentWrapper,
  MissionImageWrapper,
  MissionStatementWrapper,
  MissionTitleWrapper,
  MissionTextWrapper
};
