import React, { useState } from "react";
import { Box, Heading, Text, Image, Button, Stack, Flex, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight, FaPlay, FaPause } from "react-icons/fa";

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const images = ["https://images.unsplash.com/photo-1658071372366-8a658d8a9835?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzZCUyMHJlbmRlciUyMG9mJTIwYSUyMG1vZGVybiUyMGNoYWlyfGVufDB8fHx8MTcxMTQ4NTgyMHww&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1653242370243-5f7ca54b00db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzZCUyMHJlbmRlciUyMG9mJTIwYSUyMHN0eWxpc2glMjBzb2ZhfGVufDB8fHx8MTcxMTQ4NTgyMHww&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1645919462224-24da49b3d361?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzZCUyMHJlbmRlciUyMG9mJTIwYSUyMG1pbmltYWxpc3QlMjB0YWJsZXxlbnwwfHx8fDE3MTE0ODU4MjF8MA&ixlib=rb-4.0.3&q=80&w=1080"];

  const rotateImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const toggleRotation = () => {
    setIsRotating((prevState) => !prevState);
  };

  React.useEffect(() => {
    let interval = null;
    if (isRotating) {
      interval = setInterval(rotateImage, 2000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRotating]);

  return (
    <Flex minHeight="100vh" alignItems="center" justifyContent="center" bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Heading fontSize="4xl" textAlign="center">
          3D Furniture Viewer
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Explore our stunning furniture collection in 3D
        </Text>
        <Box rounded="lg" bg={useColorModeValue("white", "gray.700")} boxShadow="lg" p={8}>
          <Image src={images[currentImage]} alt="3D Furniture" />
          <Stack mt={6} direction="row" spacing={4} align="center">
            <IconButton aria-label="Previous" icon={<FaArrowLeft />} onClick={() => setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length)} />
            <Button leftIcon={isRotating ? <FaPause /> : <FaPlay />} onClick={toggleRotation}>
              {isRotating ? "Pause" : "Auto Rotate"}
            </Button>
            <IconButton aria-label="Next" icon={<FaArrowRight />} onClick={rotateImage} />
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Index;
