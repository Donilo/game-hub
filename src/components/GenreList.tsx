import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Show,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";
import useGameQueryStore from "../store";
// import GenreListSkeleton from "./GenreListSkeleton";

export default function GenreList() {
  const { data: genres, error, isLoading } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  // const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  /* 
  // Leave these lines here for future implementation to fetch data from the server
  // if (error) return null;
  // if (isLoading)
  // return skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />); 
  */

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Show above="lg">
        <Heading fontSize="32px" fontWeight="300" mt="10px">
          Genres
        </Heading>
      </Show>
      <List>
        {genres?.results.map((genre) => (
          <ListItem key={genre.id} my={4}>
            <HStack>
              <Image
                boxSize="35px"
                borderRadius={8}
                objectFit="cover"
                onClick={() => setGenreId(genre.id)}
                src={getCroppedImageUrl(genre.image_background)}
                cursor="pointer"
              />
              <Button
                textAlign="left"
                whiteSpace="normal"
                variant="link"
                p={2}
                onClick={() => setGenreId(genre.id)}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                fontSize={genre.id === selectedGenreId ? "20px" : "14px"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}
