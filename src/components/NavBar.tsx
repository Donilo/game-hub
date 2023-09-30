import { HStack, Image, Show, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

export default function NavBar({ onSearch }: Props) {
  return (
    <HStack padding={2} bg="blackAlpha.100">
      <Image src={logo} boxSize={"60px"} />
      <Show above="md">
        <Text fontSize="2xl">GameHub</Text>
      </Show>

      <SearchInput onSearch={onSearch} />

      <ColorModeSwitch />
    </HStack>
  );
}
