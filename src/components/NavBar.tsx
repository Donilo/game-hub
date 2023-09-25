import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

export default function NavBar() {
  return (
    <HStack justifyContent="space-between" padding={2} bg="blackAlpha.100">
      <HStack>
        <Image src={logo} boxSize={"60px"} />
        <Text fontSize={"3xl"}>GameHub</Text>
      </HStack>

      <ColorModeSwitch />
    </HStack>
  );
}
