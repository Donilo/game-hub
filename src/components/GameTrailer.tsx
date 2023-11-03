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
  ) : null;
}
