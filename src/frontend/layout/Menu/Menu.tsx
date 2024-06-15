import React from "react";
import { Tooltip } from "@nextui-org/react";
import * as Style from "./Menu.style";
import { menu } from "./menu-config";

export function Menu() {
  return (
    <Style.MenuContainer>
      {menu.map(({ Icon, path, title }) => {
        return (
          <Tooltip
            key={title}
            placement="right"
            content={title}
            offset={10}
          >
            <div>
              <Icon />
            </div>
          </Tooltip>
        );
      })}
    </Style.MenuContainer>
  );
}
