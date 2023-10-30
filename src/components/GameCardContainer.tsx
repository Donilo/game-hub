import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function GameCardContainer({ children }: Props) {
  return (
    <Box
      _hover={{
        transform: "scale(1.02)",
        transition: "transform .15s ease-in",
      }}
    >
      {children}
    </Box>
  );
}
