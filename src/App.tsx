import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

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
          <GridItem area="aside">Aside</GridItem>
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
