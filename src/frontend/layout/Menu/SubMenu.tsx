import React, { useState } from "react";
import * as Style from "./Menu.style";

const menu = ["Home", "Club", "Cards", "INFO"];

export function SubMenu() {
  const [selected, setSelected] = useState("");
  return (
    <Style.SubMenuHeader>
      {menu.map((m) => (
        <li
          className={m === selected ? "selected" : ""}
          onClick={() => setSelected(m)}
        >
          {m}
        </li>
      ))}
    </Style.SubMenuHeader>
  );
}
