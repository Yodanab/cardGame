import React, { useState } from "react";
import * as Style from "./Header.style";

const menu = ["Home", "Club", "Cards", "INFO"];

export function Header() {
  // const [selected, setSelected] = useState("");
  return (
    <Style.Container>
      <div>{"<"}</div>
      <div className="title">CARD GAME</div>
    </Style.Container>
  );
}
