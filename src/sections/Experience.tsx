import { Box, VStack, Text, UnorderedList, ListItem, HStack } from "@chakra-ui/react";

export default function ExperienceSection() {
  return (
    <>
      <Box
        id="experience"
        w="100%"
        pl={{ base: 4, lg: 10, xl: 16 }}
        pr={{ base: 4, lg: 10, xl: 16 }}
        mt={16}
        pb={16}
      >
        <VStack spacing={6} w="100%">

          <Box
            position="relative"
            bg="rgba(255,255,255,0.1)"
            backdropFilter="blur(6px)"
            border="1px solid rgba(0,12,102,0.45)"
            borderRadius="16px"
            p={7}
            w="100%"
            transition="0.15s ease"
            _hover={{
              bg: "rgba(255,255,255,0.30)",
              borderColor: "#000C66",
            }}
          >
            <HStack justify="space-between" align="flex-start" w="100%">
              <Text fontSize="lg" fontWeight="bold" color="#000C66">
                Research Assistant — Internet Resource Center
              </Text>

              <Box textAlign="right">
                <Text fontSize="sm" color="#000C66">
                  Southeastern Louisiana University · Hammond, Louisiana
                </Text>
                <Text fontSize="sm" color="#000C66">
                  Sept 2025 – Present
                </Text>
              </Box>
            </HStack>

            <UnorderedList spacing={1} fontSize="sm" color="#000C66" mt={2}>
              <ListItem>Researching Lovables AI-driven web/app dev tool.</ListItem>
              <ListItem>Testing capabilities, identifying limitations.</ListItem>
              <ListItem>Documenting findings in collaboration with faculty.</ListItem>
            </UnorderedList>
          </Box>

          <Box
            position="relative"
            bg="rgba(255,255,255,0.1)"
            backdropFilter="blur(6px)"
            border="1px solid rgba(0,12,102,0.45)"
            borderRadius="16px"
            p={7}
            w="100%"
            transition="0.15s ease"
            _hover={{
              bg: "rgba(255,255,255,0.30)",
              borderColor: "#000C66",
            }}
          >
            <HStack justify="space-between" align="flex-start" w="100%">
              <Text fontSize="lg" fontWeight="bold" color="#000C66">
                Software Intern — IT Nepal Solution
              </Text>

              <Box textAlign="right">
                <Text fontSize="sm" color="#000C66">Kathmandu, Nepal</Text>
                <Text fontSize="sm" color="#000C66">June 2025 – Present</Text>
              </Box>
            </HStack>

            <UnorderedList spacing={1} fontSize="sm" color="#000C66" mt={2}>
              <ListItem>Helped design NAC Global Express portfolio site.</ListItem>
              <ListItem>Participated in planning + requirement meetings.</ListItem>
              <ListItem>Implemented responsive features across devices.</ListItem>
            </UnorderedList>
          </Box>

          <Box
            position="relative"
            bg="rgba(255,255,255,0.1)"
            backdropFilter="blur(6px)"
            border="1px solid rgba(0,12,102,0.45)"
            borderRadius="16px"
            p={7}
            w="100%"
            transition="0.15s ease"
            _hover={{
              bg: "rgba(255,255,255,0.30)",
              borderColor: "#000C66",
            }}
          >
            <HStack justify="space-between" align="flex-start" w="100%">
              <Text fontSize="lg" fontWeight="bold" color="#000C66">
                Network Operator — University Network & Systems
              </Text>

              <Box textAlign="right">
                <Text fontSize="sm" color="#000C66">
                  Southeastern Louisiana University · Hammond, Louisiana
                </Text>
                <Text fontSize="sm" color="#000C66">
                  May 2025 – Aug 2025
                </Text>
              </Box>
            </HStack>

            <UnorderedList spacing={1} fontSize="sm" color="#000C66" mt={2}>
              <ListItem>Monitored and maintained campus network.</ListItem>
              <ListItem>Provided technical + server support.</ListItem>
              <ListItem>Ensured seamless IT operations campus-wide.</ListItem>
            </UnorderedList>
          </Box>

        </VStack>
      </Box>
      <Box w="100%" h="1.1px" bg="#000C66" borderRadius="20px" mt={0} />
    </>
  );
}
