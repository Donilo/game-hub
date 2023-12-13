import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Image,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  image: string;
}

export default function ImageModalView({
  isOpen,
  onOpen,
  onClose,
  image,
}: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="5xl">
      <ModalOverlay />
      <ModalContent p={1}>
        <ModalHeader mb={2}></ModalHeader>
        <Image src={image} />
        <ModalCloseButton />
        <ModalFooter mt={2}></ModalFooter>
      </ModalContent>
    </Modal>
  );
}
