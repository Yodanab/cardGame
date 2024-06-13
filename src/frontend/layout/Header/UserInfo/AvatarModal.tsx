import React from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

export const AvatarModal = ({
  isOpen,
  onOpenChange,
}) => {
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
              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                Nullam pulvinar risus non risus
                hendrerit venenatis. Pellentesque
                sit amet hendrerit risus, sed
                porttitor quam.
              </p>
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
