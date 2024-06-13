import React from "react";
import { useDisclosure } from "@nextui-org/react";
import * as Style from "./Header.style";
import { UserInfo } from "./UserInfo/UserInfo";
import { AvatarModal } from "./UserInfo/AvatarModal";

export function Header() {
  const {
    isOpen,
    onOpen,
    onOpenChange,
  } = useDisclosure();
  return (
    <Style.Container>
      <div className="title">CARD GAME</div>
      <UserInfo onAvatarClick={onOpen} />
      <AvatarModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </Style.Container>
  );
}
