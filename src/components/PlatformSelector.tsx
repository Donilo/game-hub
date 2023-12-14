import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

export default function PlatformSelector() {
  const { data: platforms, error } = usePlatforms();
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton
        size={{
          base: "xs",
          md: "md",
        }}
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        {platform?.name || "Platforms"}
      </MenuButton>

      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem
            onClick={() => setPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
