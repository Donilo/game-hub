import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (orderBy: string) => void;
  selectedOrdering: string;
}

export default function SortSelector({
  onSelectSortOrder,
  selectedOrdering,
}: Props) {
  const orderList = [
    { value: "", label: "Relevance" },
    { value: "-created", label: "Date created" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released date" },
    { value: "-metacritic", label: "Rating" },
    { value: "-rating", label: "Popularity" },
  ];

  const currentOrdering = orderList.find(
    (order) => order.value === selectedOrdering
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentOrdering?.label || "Relevance"}
      </MenuButton>

      <MenuList>
        {orderList.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => onSelectSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
