import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function GameCardContainer({ children }: Props) {
  return (
    <Card
      height="auto"
      borderRadius="10px"
      overflow="hidden"
      _hover={{
        transform: "scale(1.01)",
        transition: "transform .15s ease-in",
      }}
    >
      {children}
    </Card>
  );
}
