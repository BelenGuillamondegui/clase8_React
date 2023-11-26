import React, { useState, useEffect } from "react";
import { Input, Button, Flex, SimpleGrid } from "@chakra-ui/react";
import { fetchImages } from "./api";
import ImageCard from "./Components/ImageCard";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);

  const searchImages = async () => {
    try {
      const data = await fetchImages(query);
      setImages(data.results);
    } catch (error) {
      console.error("Error al cargar las imágenes", error);
    }
  };

  const handleSearchClick = () => {
    searchImages();
  };

  useEffect(() => {
    searchImages();
  }, []);

  return (
    <>
      <Flex direction="column" minHeight="95vh">
        <Header />

        <Flex direction="column" align="center" justify="center" p={4}>
          <Flex direction="column" align="center" mt={4}>
            <Input
              placeholder="Ingresá tu búsqueda..."
              mt={30}
              size="md"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              width="200px"
            />
            <Button
              colorScheme="teal"
              size="sm"
              mt={2}
              width="200px"
              onClick={handleSearchClick}
            >
              Buscar
            </Button>
          </Flex>

          <SimpleGrid columns={[1, 2, 3]} spacing={4}ml={300} mt={8} align="center" p={4} w="100%">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>

      <Footer />
    </>
  );
}

export default App;
