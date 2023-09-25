import { List, ListItem, SkeletonText } from "@chakra-ui/react";

export default function GenreListSkeleton() {
  return (
    <List>
      <ListItem paddingY={2}>
        <SkeletonText />
      </ListItem>
    </List>
  );
}
