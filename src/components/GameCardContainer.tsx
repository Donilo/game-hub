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
        md: "full",
        lg: "300px",
      }}
    >
      {children}
    </Box>
  );
}
