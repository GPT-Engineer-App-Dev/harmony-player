import { Box, VStack, Heading, Text, Image, Link, Flex, Spacer, IconButton, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from "@chakra-ui/react";
import { FaMusic, FaBackward, FaPlay, FaForward, FaVolumeMute } from "react-icons/fa";

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
        <Flex direction={["column", "row"]} align="center" justify="center" w="full">
          <Box mr={[0, 8]} mb={[8, 0]}>
            <Image src="https://via.placeholder.com/150" alt="Album Art" rounded="md" shadow="md" />
            <Text mt={2} fontWeight="bold">
              Track Name
            </Text>
            <Text fontSize="sm" color="gray.400">
              Artist Name
            </Text>
          </Box>
          <Box>
            <Flex mb={4}>
              <IconButton icon={<FaBackward />} bg="gray.700" rounded="full" mx={2} _hover={{ bg: "gray.600" }} _focus={{ boxShadow: "outline" }} />
              <IconButton icon={<FaPlay />} bg="blue.500" rounded="full" size="lg" _hover={{ bg: "blue.600" }} _focus={{ boxShadow: "outline" }} />
              <IconButton icon={<FaForward />} bg="gray.700" rounded="full" mx={2} _hover={{ bg: "gray.600" }} _focus={{ boxShadow: "outline" }} />
            </Flex>

            <RangeSlider aria-label={["min", "max"]} defaultValue={[10, 30]} mb={6}>
              <RangeSliderTrack bg="gray.700">
                <RangeSliderFilledTrack bg="blue.500" />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>

            <Flex align="center">
              <IconButton icon={<FaVolumeMute />} bg="gray.700" rounded="full" mr={4} _hover={{ bg: "gray.600" }} _focus={{ boxShadow: "outline" }} />
              <RangeSlider aria-label={["min", "max"]} defaultValue={[10, 30]} width="150px">
                <RangeSliderTrack bg="gray.700">
                  <RangeSliderFilledTrack bg="blue.500" />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
            </Flex>
          </Box>
        </Flex>

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
