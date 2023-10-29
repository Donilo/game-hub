import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding="5">
        <Heading fontSize="2xl">Ooops!</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "404. Seems this page does not exist."
            : "Sorry, An unexpected error occurred."}
        </Text>
      </Box>
    </>
  );
}
