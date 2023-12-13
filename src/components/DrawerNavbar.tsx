import { useDisclosure, IconButton } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import { RxHamburgerMenu } from "react-icons/rx";
import DrawerMenu from "./DrawerMenu";

export default function DrawerNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label="Menu"
        icon={<RxHamburgerMenu />}
        colorScheme=""
        color="gray"
        fontSize="32px"
        onClick={onOpen}
      />

      <DrawerMenu
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        placement="right"
        header="Menu"
        footer="GameHub@2023"
      >
        <SearchInput />
      </DrawerMenu>
    </>
  );
}
