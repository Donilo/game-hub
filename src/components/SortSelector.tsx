import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

export default function SortSelector() {
  const setOrderBy = useGameQueryStore((s) => s.setOrderBy);
  const orderBy = useGameQueryStore((s) => s.gameQuery.orderBy);

  const ordering = [
    { value: undefined, label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-metacritic", label: "Rating" },
    { value: "-rating", label: "Popularity" },
    { value: "-added", label: "Date added" },
    { value: "-created", label: "Date Created" },
    { value: "-released", label: "Date Released" },
  ];

  const currentOrder = ordering.find((order) => order.value === orderBy);

  return (
    <Menu>
      <MenuButton
        size={{
          base: "xs",
          md: "md",
        }}
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        Order by: {currentOrder?.label || "Relevance"}
      </MenuButton>

      <MenuList>
        {ordering.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => setOrderBy(order.value!)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
