import React from "react";
import {
  MenuItemContainer,
  NavTextContainer,
  UnstyledButton
} from "./NavBarStyle";

function MenuItem(props: {
  title: string;
  link: string;
  scrolledDown: boolean;
  onClick: () => void;
}) {
  const { title, link, scrolledDown, onClick } = props;

  return (
    <UnstyledButton onClick={onClick}>
      <MenuItemContainer href={link}>
        <NavTextContainer theme={scrolledDown ? "#ffffff" : "#034872"}>
          {title}
        </NavTextContainer>
      </MenuItemContainer>
    </UnstyledButton>
  );
}

export default MenuItem;
