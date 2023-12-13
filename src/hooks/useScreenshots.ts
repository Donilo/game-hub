import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchData } from "../services/apiClient";
import Screenshot from "../entities/Screenshot";

const useScreenshots = (gameId: number | string) => {
  const apiClient = new APIClient<FetchData<Screenshot>>(
    `/games/${gameId}/screenshots`
  );

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
