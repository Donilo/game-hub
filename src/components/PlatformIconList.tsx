import {
  FaWindows,
  FaLinux,
  FaAndroid,
  FaApple,
  FaPlaystation,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendoswitch } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface PlatformIconListProps {
  platforms: Platform[];
}

export default function PlatformIconList({ platforms }: PlatformIconListProps) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendoswitch,
    android: FaAndroid,
    ios: MdPhoneIphone,
    mac: FaApple,
    linux: FaLinux,
    web: BsGlobe,
  };

  return (
    <HStack marginY="10px">
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
}
