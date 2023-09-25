import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function GameCardContainer({ children }: Props) {
  return (
    <Box
      width={{
        base: "full",
        lg: "300px",
      }}
      margin="auto"
      borderRadius={5}
      overflow="hidden"
    >
      {children}
    </Box>
  );
}
