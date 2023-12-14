import { HStack, Tag, TagCloseButton, TagLabel, Text } from "@chakra-ui/react";
import useGameQueryStore from "../store";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

export default function ClearSelectedQueriesButton() {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const unsetGenreId = useGameQueryStore((s) => s.unsetGenreId);
  const unsetPlatformId = useGameQueryStore((s) => s.unsetPlatformId);

  const genre = useGenre(selectedGenreId);
  const platform = usePlatform(selectedPlatformId);

  return (
    <HStack>
      {selectedGenreId && (
        <>
          <Text fontWeight="500">Genre: </Text>
          <Tag pl="12px" py="2px" borderRadius="5px">
            <TagLabel fontSize="14px">{genre?.name}</TagLabel>
            <TagCloseButton onClick={() => unsetGenreId()} />
          </Tag>
        </>
      )}

      {selectedPlatformId && (
        <>
          <Text fontWeight="500">Platform: </Text>
          <Tag pl="12px" py="1px" borderRadius="5px">
            <TagLabel fontSize="14px">{platform?.name}</TagLabel>
            <TagCloseButton onClick={() => unsetPlatformId()} />
          </Tag>
        </>
      )}
    </HStack>
  );
}
