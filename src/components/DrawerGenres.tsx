import { Button, useDisclosure } from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import GenreList from "./GenreList";
import DrawerMenu from "./DrawerMenu";

export default function DrawerGenres() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        size={{
          base: "xs",
          md: "md",
        }}
        rightIcon={<BsThreeDotsVertical />}
        onClick={onOpen}
      >
        Genres
      </Button>

      <DrawerMenu
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        placement="left"
        header="Genres"
      >
        <GenreList />
      </DrawerMenu>
    </>
  );
}
