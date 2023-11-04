import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import APIClient, { FetchData } from "../services/apiClient";
import Platform from "../entities/Platform";

const apiClient = new APIClient<FetchData<Platform>>(
  "/platforms/lists/parents"
);

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
