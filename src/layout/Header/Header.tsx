import React, { useState } from "react";
import * as Style from "./Header.style";

const menu = ["Home", "Club", "Cards", "INFO"];

export function Header() {
  const [selected, setSelected] = useState("");
  return (
    <Style.Container>
      <Style.MenuHeader>
        {menu.map((m) => (
          <li
            className={m === selected ? "selected" : ""}
            onClick={() => setSelected(m)}
          >
            {m}
          </li>
        ))}
      </Style.MenuHeader>
    </Style.Container>
  );
}
