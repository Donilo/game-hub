import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}

export default function Metacritic({ metacritic }: Props) {
  let color = metacritic > 79 ? "green" : metacritic > 65 ? "yellow" : "";
  return (
    <Badge fontSize="1xl" colorScheme={color}>
      {metacritic}
    </Badge>
  );
}
