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
      <a href={link}>
        <MenuItemContainer>
          <NavTextContainer theme={scrolledDown ? "#ffffff" : "#034872"}>
            {title}
          </NavTextContainer>
        </MenuItemContainer>
      </a>
    </UnstyledButton>
  );
}

export default MenuItem;
