import {
  BsPlaystation,
  BsXbox,
  BsWindows,
  BsAndroid,
  BsApple,
  BsGlobe,
  BsNintendoSwitch,
} from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { FaLinux } from "react-icons/fa";
import { SiSega, SiAtari } from "react-icons/si";
import { HStack, Icon } from "@chakra-ui/react";
import Platform from "../entities/Platform";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

export default function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: BsWindows,
    playstation: BsPlaystation,
    xbox: BsXbox,
    android: BsAndroid,
    mac: BsApple,
    web: BsGlobe,
    nintendo: BsNintendoSwitch,
    ios: MdPhoneIphone,
    linux: FaLinux,
    sega: SiSega,
    atari: SiAtari,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color="gray.500"
          fontSize="1xl"
        />
      ))}
    </HStack>
  );
}
