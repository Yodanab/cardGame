import React from "react";
import * as Style from "./Menu.style";
import { Home } from "core/icons/Home";
import { BarChart } from "core/icons/BarChart";

export function Menu() {
  return (
    <Style.MenuContainer>
      <div>
        <Home />
      </div>
      <div>
        <BarChart />
      </div>
    </Style.MenuContainer>
  );
}
