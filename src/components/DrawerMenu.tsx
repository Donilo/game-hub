import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  Center,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  header: ReactNode;
  children: ReactNode | ReactNode[];
  footer?: ReactNode;
  placement: "top" | "right" | "bottom" | "left";
}

export default function DrawerMenu({
  isOpen,
  onClose,
  header,
  children,
  footer,
  placement,
}: Props) {
  return (
    <Drawer isOpen={isOpen} placement={placement} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Center>{header}</Center>
        </DrawerHeader>

        <DrawerBody>{children}</DrawerBody>

        {footer && <DrawerFooter color="gray.500">{footer}</DrawerFooter>}
      </DrawerContent>
    </Drawer>
  );
}
