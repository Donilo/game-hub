import { Box, Text } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

export default function GameTrailer({ gameId }: Props) {
  const { data, error, isLoading } = useTrailers(gameId);

  const firstObj = data?.results[0];

  if (isLoading) return null;

  if (error) throw error;

  return firstObj ? (
    <video src={firstObj.data[480]} poster={firstObj.preview} controls />
  ) : (
    <Box>
      <Text marginBottom={2}>No trailer is here to serve.</Text>
      <video controls />
    </Box>
  );
}
