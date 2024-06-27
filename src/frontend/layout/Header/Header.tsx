import React, { FC } from "react";
import { useDisclosure } from "@nextui-org/react";
import * as Style from "./Header.style";
import { UserInfo } from "./UserInfo/UserInfo";
import { AvatarModal } from "./UserInfo/AvatarsModal/AvatarModal";
import { MobileMenu } from "../Menu/MobileMenu";

interface HeaderProps {
  width: number;
}

export const Header: FC<HeaderProps> = ({
  width,
}) => {
  const {
    isOpen,
    onOpen,
    onOpenChange,
  } = useDisclosure();
  return (
    <Style.Container>
      {width < 1200 && (
        <Style.MobileMenuWrap>
          <MobileMenu />
        </Style.MobileMenuWrap>
      )}
      <div className="title">CARD GAME</div>
      <Style.UserInfoWrap>
        <UserInfo onAvatarClick={onOpen} />
      </Style.UserInfoWrap>
      <AvatarModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </Style.Container>
  );
};
