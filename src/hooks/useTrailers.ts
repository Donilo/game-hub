import { useQuery } from "@tanstack/react-query";
import Trailer from "../entities/Trailer";
import APIClient, { FetchData } from "../services/apiClient";

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<FetchData<Trailer>>(
    `/games/${gameId}/movies`
  );

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
