import React from "react";
import {
  Tooltip,
  Button,
} from "@nextui-org/react";
import * as Style from "./Menu.style";
import { menu } from "./menu-config";

export function Menu() {
  return (
    <Style.MenuContainer>
      {menu.map(({ Icon, path, title }) => {
        return (
          <Tooltip
            placement="right"
            content={title}
            offset={10}
          >
            <div key={title}>
              <Icon />
            </div>
          </Tooltip>
        );
      })}
    </Style.MenuContainer>
  );
}
