import { Box, VStack, Text, HStack, UnorderedList, ListItem } from "@chakra-ui/react";

export default function LeadershipSection() {
  return (
    <>
      <Box
        id="leadership"
        w="100%"
        pl={{ base: 4, lg: 10, xl: 16 }}
        pr={{ base: 4, lg: 10, xl: 16 }}
        mt={16}
        pb={16}
      >
        <VStack spacing={6} w="100%" align="stretch">
          <Box
            position="relative"
            bg="rgba(255,255,255,0.1)"
            backdropFilter="blur(6px)"
            border="1px solid rgba(0,12,102,0.45)"
            borderRadius="16px"
            p={{ base: 5, md: 7 }}
            w="100%"
            transition="0.15s ease"
            _hover={{
              bg: "rgba(255,255,255,0.30)",
              borderColor: "#000C66",
            }}
          >
            <HStack
              justify="space-between"
              align="flex-start"
              w="100%"
            >
              <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color="#000C66">
                Secretary - Google Developer Group (GDG)
              </Text>
            </HStack>

            <HStack justify="space-between" align="flex-start" w="100%" mt={1}>
              <Text fontSize={{ base: "xs", md: "sm" }} color="#000C66" pr={2}>
                Southeastern Louisiana University - Hammond, Louisiana
              </Text>
              <Text
                fontSize={{ base: "2xs", md: "sm" }}
                color="#000C66"
                textAlign="right"
                whiteSpace="nowrap"
                lineHeight="1"
                flexShrink={0}
              >
                2026 - Present
              </Text>
            </HStack>

            <UnorderedList
              mt={2.5}
              spacing={1.25}
              pl={4}
              fontSize={{ base: "xs", md: "sm" }}
              color="#000C66"
              lineHeight="1.45"
            >
              <ListItem>Documented and distributed official GDG communications.</ListItem>
              <ListItem>Assisted in organizing workshops and campus tech events.</ListItem>
            </UnorderedList>
          </Box>
        </VStack>
      </Box>
      <Box w="100%" h="1.1px" bg="#000C66" borderRadius="20px" mt={0} />
    </>
  );
}
