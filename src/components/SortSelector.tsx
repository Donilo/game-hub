import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrdering: string) => void;
  selectedOrdering: string;
}

export default function SortSelector({
  onSelectSortOrder,
  selectedOrdering,
}: Props) {
  const sortOrdering = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentOrder = sortOrdering.find(
    (order) => order.value === selectedOrdering
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrdering.map((ordering) => (
          <MenuItem
            onClick={() => onSelectSortOrder(ordering.value)}
            key={ordering.value}
            value={ordering.value}
          >
            {ordering.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
