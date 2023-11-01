import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

export default function ExpandableText({ children }: Props) {
  const [expanded, setExpanded] = useState(false);

  if (children.length < 300) return <Text>{children}</Text>;

  const description = expanded ? children : children.substring(0, 300) + "...";

  return (
    <Text>
      {description}
      <Button
        onClick={() => setExpanded(!expanded)}
        colorScheme="yellow"
        color="black"
        size="xs"
        fontWeight="bold"
        marginX={2}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
}
