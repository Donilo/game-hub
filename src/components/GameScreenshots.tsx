import { SimpleGrid, Image } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";
import getCroppedImageUrl from "../services/imageUrl";

interface Props {
  gameId: number;
}

export default function GameScreenshots({ gameId }: Props) {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
        lg: 3,
      }}
      spacing={5}
      marginY={6}
    >
      {data?.results.map((s) => (
        <Image key={s.id} src={getCroppedImageUrl(s.image)} />
      ))}
    </SimpleGrid>
  );
}
