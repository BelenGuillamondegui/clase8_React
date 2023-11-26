import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ImageCard = ({ image }) => {
  return (
    <MotionBox
      maxW="300px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image
        src={image.urls.regular}
        alt={image.alt_description}
        height="500px"
        objectFit="cover"
      />

      <Box p="6">
        <Text fontWeight="semibold" fontSize="lg" mb={2}>
          {image.user.username}
        </Text>
        <Text color="gray.500">{image.description || "Sin descripción"}</Text>
      </Box>
    </MotionBox>
  );
};

export default ImageCard;
