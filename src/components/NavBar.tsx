import { HStack, Image, Show, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <HStack padding={2} bg="blackAlpha.100">
      <Link to="/">
        <Image src={logo} boxSize={"60px"} objectFit="cover" />
      </Link>
      <Show above="md">
        <Text fontSize="2xl">
          <Link to="/">GameHub</Link>
        </Text>
      </Show>

      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}
