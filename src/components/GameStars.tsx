import one from "../assets/1gray.png";
import two from "../assets/2gray.png";
import three from "../assets/3gray.png";
import four from "../assets/4gray.png";
import five from "../assets/5gray.png";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

export default function GameStars({ rating }: Props) {
  const starMap: { [key: number]: ImageProps } = {
    1: { src: one, alt: "onestar" },
    2: { src: two, alt: "twostar" },
    3: { src: three, alt: "threestar" },
    4: { src: four, alt: "fourstar" },
    5: { src: five, alt: "fivestar" },
  };

  return <Image {...starMap[rating]} />;
}
