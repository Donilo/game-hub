import { SimpleGrid, Image, useDisclosure } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";
import getCroppedImageUrl from "../services/imageUrl";
import ImageModalView from "./ImageModalView";
import { useState } from "react";

interface Props {
  gameId: number | string;
}

export default function GameScreenshots({ gameId }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [image, setImage] = useState<string>("");

  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
        }}
        spacing={2}
        my={5}
      >
        {data?.results.map((shot) => (
          <Image
            key={shot.id}
            src={getCroppedImageUrl(shot.image)}
            onClick={() => {
              setImage(shot.image);
              onOpen();
            }}
            _hover={{
              cursor: "pointer",
            }}
          />
        ))}
      </SimpleGrid>
      <ImageModalView
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        image={image}
      />
    </>
  );
}
