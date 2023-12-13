import { Box, Text } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

export default function GameTrailer({ gameId }: Props) {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first_trailer = data?.results[0];

  return first_trailer ? (
    <video
      src={first_trailer.data[480]}
      poster={first_trailer.preview}
      controls
    />
  ) : (
    <Box>
      <Text marginBottom={2}>No trailer is here to serve.</Text>
      <video controls />
    </Box>
  );
}
