import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import bullsEye from "../assets/bulls-eye.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

export default function Star({ rating }: Props) {
  const Emoji: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "Meh", boxSize: "20px" },
    4: { src: thumbsUp, alt: "ThumbsUp", boxSize: "20px" },
    5: { src: bullsEye, alt: "BullsEye", boxSize: "35px" },
  };

  return <Image {...Emoji[rating]} />;
}
