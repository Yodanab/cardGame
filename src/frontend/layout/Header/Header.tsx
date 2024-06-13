import React, { useState } from "react";
import * as Style from "./Header.style";
import { UserInfo } from "./UserInfo/UserInfo";

export function Header() {
  return (
    <Style.Container>
      <div className="title">CARD GAME</div>
      <UserInfo />
    </Style.Container>
  );
}
