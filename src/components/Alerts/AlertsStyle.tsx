import styled from "styled-components";

interface AlertsThemeProps {
  show: boolean;
}

const AlertsTheme = styled.div<AlertsThemeProps>`
  min-height: 20px;
  background-color: #034872;
  color: white;
  position: relative;
  margin: 0px;
  display: ${props => (props.show ? "flex" : "none")};
  padding: 10px 5px 10px 50px;
  justify-content: space-between;
  border-bottom: 1px solid #cbebe8;
  @media (max-width: 800px) {
    padding: 10px 5px 10px 5px;
  }
`;

const AlertMessage = styled.div`
  text-align: left;
  font-family: Helvetica;
  padding-right: 20px;
  @media (max-width: 800px) {
    font-size: 12px;
    margin-right: 60px;
  }
`;

const AlertLink = styled.a`
  color: white;
  font-family: Helvetica;
  @media (max-width: 800px) {
    font-size: 12px;
    text-align: left;
  }
`;

const AlertButtonTheme = styled.button`
  border: none;
  background: none;
  color: inherit;
`;

const AlertButtonImage = styled.img`
  max-height: 20px;
`;

const AlertContent = styled.div`
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: left;
  }
`;

export {
  AlertsTheme,
  AlertMessage,
  AlertLink,
  AlertButtonTheme,
  AlertButtonImage,
  AlertContent
};
