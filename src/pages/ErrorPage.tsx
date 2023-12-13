import { Box, Center, Heading, Icon, Text } from "@chakra-ui/react";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";
import { BsHouseFill } from "react-icons/bs";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <Center textAlign="center" mt="200px">
        {isRouteErrorResponse(error) ? (
          <Box>
            <Heading>404.</Heading>
            <Text>Sorry, This page doesn't exists.</Text>
          </Box>
        ) : (
          <Box>
            <Heading>Ooops,</Heading>
            <Text>Sorry, an unexpected error occured.</Text>
          </Box>
        )}
      </Center>
      <Center mt="15px" color="gray">
        <Link to="/">
          <Text>
            <Icon mr={1} as={BsHouseFill} />
            Go back home
          </Text>
        </Link>
      </Center>
    </>
  );
}
