import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

function Offer({
  title,
  desc,
  src,
  ...rest
}: {
  title: string;
  desc: string;
  src: string;
}) {
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <Flex>
        <Box w="200px">
          <Image src={src} />
        </Box>

        <Box pl={5}>
          <Heading fontSize="xl">{title}</Heading>
          <Text mt={4}>{desc}</Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Offer;
