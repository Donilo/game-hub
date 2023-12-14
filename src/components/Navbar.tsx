import { HStack, Show, Heading, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import DrawerNavbar from "./DrawerNavbar";
import SearchInput from "./SearchInput";
import ColorMode from "./ColorMode";
import logo from "../assets/logo.webp";

export default function Navbar() {
  return (
    <HStack justifyContent={{ base: "space-between" }} p={3}>
      <Link to="/">
        <Image w={[14, 70, 75]} src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <Show above="md">
        <Link to="/">
          <Heading fontSize="2xl">GameHub</Heading>
        </Link>
      </Show>
      <Show above="sm">
        <SearchInput />
      </Show>
      <Box>
        <ColorMode />
        <Show below="sm">
          <DrawerNavbar />
        </Show>
      </Box>
    </HStack>
  );
}
