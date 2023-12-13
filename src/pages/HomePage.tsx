import { Grid, GridItem, Show, HStack } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

export default function HomePage() {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        md: `"aside main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" pl={3}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main" overflow="hidden">
        <GameHeading />
        <HStack marginY={3} spacing={3}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}
