import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  User,
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  ListboxItem,
  Listbox,
} from "@nextui-org/react";
import { Pig } from "frontend/core/icons/Pig";

const user = {
  userName: "Yodan Abadi",
  email: "yodana@radware.com",
  coins: 70,
};

export const UserInfo = ({ onAvatarClick }) => {
  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <User
          as="button"
          name={user.userName}
          description={`${user.coins} P`}
          className="transition-transform"
          avatarProps={{
            src:
              "https://www.w3schools.com/howto/img_avatar.png",
          }}
        />
      </PopoverTrigger>
      <PopoverContent className="dark p-1">
        <UserCard
          userName={user.userName}
          email={user.email}
          coins={user.coins}
          onAvatarClick={onAvatarClick}
        />
      </PopoverContent>
    </Popover>
  );
};

const UserCard = ({
  userName,
  email,
  coins,
  onAvatarClick,
}) => {
  return (
    <>
      <Card
        shadow="none"
        className="max-w-[300px] border-none bg-transparent"
      >
        <CardHeader className="justify-between flex gap-3">
          <div className="flex gap-3">
            <Avatar
              onClick={onAvatarClick}
              as="button"
              radius="full"
              size="md"
              src="https://www.w3schools.com/howto/img_avatar.png"
            />

            <div className="flex flex-col items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                {userName}
              </h4>
              <h5 className="text-small tracking-tight text-default-500">
                {email}
              </h5>
            </div>
          </div>
          <Button
            color="primary"
            radius="full"
            size="sm"
          >
            Log Out
          </Button>
        </CardHeader>
        <CardBody className="px-0 py-0">
          <Listbox>
            <ListboxItem>My Cards</ListboxItem>
            <ListboxItem>My Packs</ListboxItem>
          </Listbox>
        </CardBody>
        <CardFooter className="gap-3 flex">
          <div className="flex items-center gap-3">
            <Pig />
            <p className="font-semibold text-default-600 text-small">
              {coins} P
            </p>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};
