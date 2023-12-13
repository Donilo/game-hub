import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

export default function ExpandableText({ children }: Props) {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (children.length < limit) return <Text>{children}</Text>;

  const description = expanded
    ? children + " "
    : children.substring(0, limit) + "... ";

  return (
    <Text>
      {description}
      <Button
        onClick={() => setExpanded(!expanded)}
        colorScheme="yellow"
        size="xs"
        fontWeight="bold"
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
}
