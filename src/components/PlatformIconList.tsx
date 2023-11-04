import {
  FaWindows,
  FaApple,
  FaPlaystation,
  FaXbox,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo3Ds } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import Platform from "../entities/Platform";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

export default function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    linux: FaLinux,
    mac: FaApple,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo3Ds,
    web: BsGlobe,
  };

  return (
    <HStack marginY={2}>
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
