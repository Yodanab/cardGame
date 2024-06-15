import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Image,
} from "@nextui-org/react";
import { AvatarsWrap } from "./AvatarsModal.style";

const avatars = [
  {
    id: 0,
    src: "/avatars/Alexander.png",
    title: "avatar",
  },
  {
    id: 1,
    src: "/avatars/Emma.png",
    title: "avatar",
  },
  {
    id: 2,
    src: "/avatars/Ethan.png",
    title: "avatar",
  },
  {
    id: 3,
    src: "/avatars/Isabella.png",
    title: "avatar",
  },
  {
    id: 4,
    src: "/avatars/Lucas.png",
    title: "avatar",
  },
  {
    id: 5,
    src: "/avatars/Sophia.png",
    title: "avatar",
  },
];

export const AvatarModal = ({
  isOpen,
  onOpenChange,
}) => {
  const [
    selectedAvatar,
    setSelectedAvatar,
  ] = useState(0);
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      className="dark"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1  text-gray-100">
              Chose Your Avatar
            </ModalHeader>
            <ModalBody className=" text-gray-100">
              <AvatarsWrap>
                {avatars.map(({ src, id }) => {
                  return (
                    <Image
                      width={100}
                      height={100}
                      alt="NextUI hero Image with delay"
                      src={src}
                      key={id}
                      onClick={() =>
                        setSelectedAvatar(id)
                      }
                      className={
                        selectedAvatar === id
                          ? "selected"
                          : ""
                      }
                    />
                  );
                })}
              </AvatarsWrap>
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="light"
                onPress={onClose}
              >
                Close
              </Button>
              <Button
                color="primary"
                onPress={onClose}
              >
                Submit
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
