import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

export default function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          md: `"nav" "aside" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>

        <Show above="md">
          <GridItem area="aside">
            <GenreList />
          </GridItem>
        </Show>

        <GridItem
          area="main"
          padding={{
            base: 2,
            lg: 5,
          }}
        >
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}
