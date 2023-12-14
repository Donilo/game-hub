import { Alert, Box, SimpleGrid, Spinner } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

export default function GameGrid() {
  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const fetchGameCount =
    games?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

  if (error)
    return (
      <Box p="10px">
        <Alert borderRadius="7px" mt="9px" colorScheme="red">
          {error.message}
        </Alert>
      </Box>
    );

  return (
    <>
      <InfiniteScroll
        dataLength={fetchGameCount}
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
        loader={<Spinner mx={3} my={2} />}
      >
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing="30px"
          padding="10px"
        >
          {isLoading &&
            skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
          {games?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
}
