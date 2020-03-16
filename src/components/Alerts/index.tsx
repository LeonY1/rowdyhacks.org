import React, { useState } from "react";
import {
  AlertsTheme,
  AlertMessage,
  AlertLink,
  AlertButtonTheme,
  AlertButtonImage,
  AlertContent
} from "./AlertsStyle";
import Linkify from "linkifyjs/react";
import CloseIcon from "../../static/close-icon.svg";

const Alerts: React.FC = () => {
  const [show, setShow] = useState(true);

  function onClose() {
    setShow(false);
  }

  return (
    <AlertsTheme show={show}>
      <AlertContent>
        <AlertMessage>
          For more information regarding our changes in consideration of
          coronavirus(COVID-19), go to our updates page.
        </AlertMessage>
        <Linkify tagName={"div"}>
          <AlertLink href="/updates">Read Our Update Page</AlertLink>
        </Linkify>
      </AlertContent>
      <AlertButton clickHandler={onClose} />
    </AlertsTheme>
  );
};

interface AlertButtonProps {
  clickHandler: (event: any) => void;
}

const AlertButton: React.FC<AlertButtonProps> = ({ clickHandler }) => {
  return (
    <AlertButtonTheme onClick={clickHandler}>
      <AlertButtonImage src={CloseIcon} alt="close" />
    </AlertButtonTheme>
  );
};

export default Alerts;
