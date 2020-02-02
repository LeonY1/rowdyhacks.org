import React from "react";
import { MenuItemContainer, NavTextContainer } from "./NavBarStyle";

function MenuItem(props: {
  title: string;
  link: string;
  scrolledDown: boolean;
}) {
  const { title, link, scrolledDown } = props;

  return (
    <a href={link}>
      <MenuItemContainer>
        <NavTextContainer theme={scrolledDown ? "#ffffff" : "#034872"}>
          {title}
        </NavTextContainer>
      </MenuItemContainer>
    </a>
  );
}

export default MenuItem;
