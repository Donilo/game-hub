import { Button, useColorMode } from "@chakra-ui/react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export default function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode} variant="disabled" fontSize="25px">
      {colorMode === "dark" ? (
        <BsFillSunFill color="white" />
      ) : (
        <BsFillMoonFill color="gray" />
      )}
    </Button>
  );
}
