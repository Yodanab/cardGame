import React from "react";
import * as Style from "./Menu.style";
import { menu } from "./menu-config";

export function Menu() {
  return (
    <Style.MenuContainer>
      {menu.map(({ Icon, path, title }) => {
        return (
          <div key={title}>
            <Icon />
          </div>
        );
      })}
    </Style.MenuContainer>
  );
}
