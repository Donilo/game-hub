import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

export default function DefinitionItem({ term, children }: Props) {
  return (
    <Box marginY={5}>
      <Heading fontSize="md" color="gray.600" as="dt">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
}
