import React from "react";
import { MenuItemContainer, NavTextContainer } from "./NavBarStyle";

function MenuItem(props: { title: string; link: string }) {
  const { title, link } = props;

  return (
    <a href={link}>
      <MenuItemContainer>
        <NavTextContainer>{title}</NavTextContainer>
      </MenuItemContainer>
    </a>
  );
}

export default MenuItem;
