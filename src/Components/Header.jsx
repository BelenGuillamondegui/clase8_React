// Header.jsx
import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Header = () => (
  <Flex
    as="header"
    align="center"
    justify="space-between"
    p={4}
    bg="teal.500"
    color="white"
  >
    <Text>Mi galería de imágenes</Text>
  </Flex>
);

export default Header;
