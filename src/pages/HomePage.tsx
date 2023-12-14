import { Grid, GridItem, Show, HStack, Box } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import ClearSelectedQueriesButton from "../components/ClearSelectedQueriesButton";
import DrawerGenres from "../components/DrawerGenres";

export default function HomePage() {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" pl={3}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main" overflow="hidden">
        <Box pl="10px">
          <GameHeading />
          <HStack marginY={3}>
            <Show below="lg">
              <DrawerGenres />
            </Show>
            <PlatformSelector />
            <SortSelector />
          </HStack>
          <ClearSelectedQueriesButton />
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}
