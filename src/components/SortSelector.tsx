import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSort: (orderBy: string) => void;
  selectedOrder: string;
}

export default function SortSelector({ onSelectSort, selectedOrder }: Props) {
  const orderBy = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-metacritic", label: "Rating" },
    { value: "-rating", label: "Popularity" },
    { value: "-added", label: "Date added" },
    { value: "-created", label: "Date Created" },
    { value: "-released", label: "Date Released" },
  ];

  const currentOrder = orderBy.find((order) => order.value === selectedOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentOrder?.label || "Relevance"}
      </MenuButton>

      <MenuList>
        {orderBy.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => onSelectSort(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
