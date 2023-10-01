import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import Metacritic from "./Metacritic";
import getCroppedImageUrl from "../services/imageUrl";
import Star from "./Star";

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <Card overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={2}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Metacritic metacritic={game.metacritic} />
        </HStack>
        <Heading fontSize="20px">{game.name}</Heading>
        <Star rating={game.rating_top} />
      </CardBody>
    </Card>
  );
}
