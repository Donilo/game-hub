import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";

export default function GameDetailPage() {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !data) throw error;

  return (
    <>
      <Heading>{data.name}</Heading>
      <Text color="gray.300">{data.description_raw}</Text>
    </>
  );
}
