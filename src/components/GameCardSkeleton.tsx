import { CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

export default function GameCardSkeleton() {
  return (
    <GameCardContainer>
      <Skeleton height="250px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </GameCardContainer>
  );
}
