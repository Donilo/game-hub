import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function GameCardSkeleton() {
  return (
    <Card>
      <Skeleton
        height={{
          base: "350px",
          lg: "230px",
        }}
      />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}
