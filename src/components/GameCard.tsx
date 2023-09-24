import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import Metacritic from "./Metacritic";

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <Card overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="20px">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Metacritic metacritic={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}
