import { Box, VStack, Heading, Text, Image, Link, Flex, Spacer } from "@chakra-ui/react";
import { FaMusic } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.900" minH="100vh" color="white">
      {/* Header */}
      <Flex align="center" py={4} px={8} borderBottomWidth={1} borderColor="gray.700">
        <Heading size="lg">
          <Flex align="center">
            <FaMusic />
            <Text ml={2}>My Music Player</Text>
          </Flex>
        </Heading>
        <Spacer />
        <Image src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHdhdmVzJTIwaWNvbnxlbnwwfHx8fDE3MTMwNzA3OTN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Music Icon" h={8} />
      </Flex>

      {/* Main Content */}
      <VStack spacing={8} py={12} px={8}>
        <Box>
          <Image src="https://images.unsplash.com/photo-1517343155053-3bc076e687b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHBsYXllciUyMGNvbnRyb2xzfGVufDB8fHx8MTcxMzA3MDc5M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Music Player" w="300px" rounded="md" shadow="md" />
          <Text mt={4} fontSize="xl" fontWeight="bold">
            Now Playing: Song Title
          </Text>
        </Box>

        <Box>
          <Heading size="md" mb={4}>
            Playlist
          </Heading>
          {/* Placeholder for playlist */}
          <Box bg="gray.800" rounded="md" p={4} w="300px" h="200px" />
        </Box>
      </VStack>

      {/* Footer */}
      <Flex align="center" justify="center" py={4} borderTopWidth={1} borderColor="gray.700">
        <Link href="#" color="blue.400">
          About
        </Link>
      </Flex>
    </Box>
  );
};

export default Index;
