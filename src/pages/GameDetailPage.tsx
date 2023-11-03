import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";

export default function GameDetailPage() {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !data) throw error;

  return (
    <>
      <Heading marginBottom={3}>{data.name}</Heading>
      <ExpandableText>{data.description_raw}</ExpandableText>
      <GameAttributes game={data} />
      <GameTrailer gameId={data.id} />
    </>
  );
}
