import React from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Tooltip } from "@nextui-org/react";
import * as Style from "./Menu.style";
import { menu } from "./menu-config";

export function Menu() {
  const location = useLocation();
  const navigate = useNavigate();
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
            <div
              className={
                location.pathname === path
                  ? "selected"
                  : ""
              }
              onClick={() => navigate(path)}
            >
              <Icon />
            </div>
          </Tooltip>
        );
      })}
    </Style.MenuContainer>
  );
}
