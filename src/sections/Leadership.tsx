import { Box, VStack, Text, HStack } from "@chakra-ui/react";

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
              flexDirection={{ base: "column", md: "row" }}
              spacing={{ base: 2, md: 0 }}
            >
              <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color="#000C66">
                Secretary - Google Developer Group (GDG)
              </Text>

              <Box textAlign={{ base: "left", md: "right" }}>
                <Text fontSize={{ base: "xs", md: "sm" }} color="#000C66">
                  Southeastern Louisiana University · Hammond, Louisiana
                </Text>
                <Text fontSize={{ base: "xs", md: "sm" }} color="#000C66">
                  2026 - Present
                </Text>
              </Box>
            </HStack>

            <VStack align="stretch" spacing={1.25} mt={2.5}>
              <Text fontSize={{ base: "xs", md: "sm" }} color="#000C66" lineHeight="1.45">
                • Documented and distributed official GDG communications.
              </Text>
              <Text fontSize={{ base: "xs", md: "sm" }} color="#000C66" lineHeight="1.45">
                • Assisted in organizing workshops and campus tech events.
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Box>
      <Box w="100%" h="1.1px" bg="#000C66" borderRadius="20px" mt={0} />
    </>
  );
}
