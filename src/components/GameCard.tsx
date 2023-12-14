import {
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Image,
  List,
} from "@chakra-ui/react";
import Game from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import Metacritic from "./Metacritic";
import getCroppedImageUrl from "../services/imageUrl";
import { Link } from "react-router-dom";
import GameCardContainer from "./GameCardContainer";
import GameStars from "./GameStars";

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <GameCardContainer>
      <Link to={`/games/${game.slug}`}>
        <Image src={getCroppedImageUrl(game.background_image)} />
      </Link>

      <CardBody>
        <HStack mb="10px">
          <GameStars rating={game.rating_top} />
        </HStack>
        <Link to={`/games/${game.slug}`}>
          <Heading fontSize="2xl">{game.name}</Heading>
        </Link>
      </CardBody>

      <CardFooter justifyContent="space-between">
        <List>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </List>
        <Metacritic metacritic={game.metacritic} />
      </CardFooter>
    </GameCardContainer>
  );
}
