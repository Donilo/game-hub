import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function GameCardSkeleton() {
  return (
    <Card overflow="hidden">
      <Skeleton height="230px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}
