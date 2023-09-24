import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}

export default function Metacritic({ metacritic }: Props) {
  let color = metacritic > 80 ? "green" : metacritic > 60 ? "yellow" : "";

  return <Badge colorScheme={color}>{metacritic}</Badge>;
}
