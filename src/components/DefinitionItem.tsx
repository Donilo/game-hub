import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

export default function DefinitionItem({ term, children }: Props) {
  return (
    <Box my={5} as="dl">
      <Heading as="dt" fontSize="2xl" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
}
