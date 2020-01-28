import styled from "styled-components";

const LocationContainer = styled.div`
  display: flex;
  margin: 40px 0px;
  justify-content: space-between;
  width: 100%;
`;

const LocationWrapper = styled.div`
  color: #4d4d4d;
  text-align: center;
  width: 40vw;
  padding: 50px 50px 50px 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LocationTitleWrapper = styled.div`
  font-family: Helvetica;
  font-weight: 700;
  font-size: 50px;
  text-align: left;
`;

const LocationTitleDivider = styled.div`
  width: 200px;
  height: 5px;
  background: #4d4d4d;
  margin: 30px 0px;
`;

const LocationTextWrapper = styled.div`
  font-size: 20px;
  width: 350px;
  text-align: left;
`;

const LocationImageWrapper = styled.img`
  width: 50vw;
`;

export {
  LocationTitleWrapper,
  LocationTitleDivider,
  LocationTextWrapper,
  LocationImageWrapper,
  LocationContainer,
  LocationWrapper
};
