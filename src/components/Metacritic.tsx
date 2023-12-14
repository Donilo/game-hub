import { Badge, Box } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}

export default function Metacritic({ metacritic }: Props) {
  let color = metacritic > 79 ? "green" : metacritic > 65 ? "yellow" : "";
  return (
    <Box>
      <Badge fontSize="18px" colorScheme={color} borderRadius={5}>
        {metacritic}
      </Badge>
    </Box>
  );
}
