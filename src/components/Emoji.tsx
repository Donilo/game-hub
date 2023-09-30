import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import bullEyes from "../assets/bulls-eye.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

export default function Emoji({ rating }: Props) {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "24px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "20px" },
    5: { src: bullEyes, alt: "exceptional", boxSize: "34px" },
  };

  return <Image {...emojiMap[rating]} />;
}
