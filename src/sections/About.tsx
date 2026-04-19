import {
  Box,
  VStack,
  HStack,
  Avatar,
  Text,
  Icon,
  IconButton,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa";
import SocialIcons from "../components/SocialIcons";

export default function About() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      id="about"
      w="100%"
      px={0}
      pt={{ base: 2, lg: 0 }}
      pb={10}
      position="relative"
      top={{ base: 0, lg: -8 }}
    >

      <Box display={{ base: "block", lg: "none" }} px={{ base: 4 }}>
        <HStack align="flex-start" spacing={4} justify="space-between">
          <HStack spacing={4} align="flex-start">
            <Avatar
              src="/assets/Profile.jpg"
              name="Suyog Karki"
              boxSize={{ base: "86px", sm: "110px" }}
              border="2px solid #000C66"
              borderRadius="full"
            />
            <VStack align="flex-start" spacing={2}>
              <Text fontSize={{ base: "2xl", sm: "3xl" }} fontWeight="bold" color="#000C66">
                Suyog Karki
              </Text>
              <Text fontSize="sm" color="#000C66">
                Computer Science Student ~ Data Science.
              </Text>
            </VStack>
          </HStack>
          <IconButton
            aria-label="Toggle about details"
            icon={<ChevronDownIcon boxSize="24px" />}
            size="lg"
            variant="ghost"
            color="#b10f30"
            bg="rgba(255,255,255,0.10)"
            backdropFilter="blur(4px)"
            borderRadius="10px"
            _hover={{ bg: "rgba(255,255,255,0.22)" }}
            onClick={onToggle}
            transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
            transition="transform 0.2s ease"
          />
        </HStack>
        <Collapse in={isOpen} animateOpacity>
          <Box mt={4}>
            <VStack align="flex-start" spacing={4}>
              <SocialIcons />
              <VStack spacing={1} align="flex-start" color="#333" fontSize="sm">
                <HStack spacing={3}>
                  <Icon as={FaMapMarkerAlt} color="#b10f000C6630" />
                  <Text color="#000C66">Hammond, Louisiana</Text>
                </HStack>
                <HStack spacing={3}>
                  <Icon as={FaGraduationCap} color="#000C66" />
                  <HStack justify="space-between" w="100%" spacing={4}>
                    <Text color="#000C66">Southeastern Louisiana University</Text>
                    <Text color="rgba(0,12,102,0.68)" fontSize="xs">
                      May 2028
                    </Text>
                  </HStack>
                </HStack>
              </VStack>
              <Text
                fontSize="md"
                color="#000C66"
                lineHeight="1.65"
                textAlign="left"
                w="100%"
              >
                Greetings!
                <br />
                I am a Sophomore Computer Science student with Data Science concentration) with hands-on experience in full-stack development, machine learning, and data-driven systems. Passionate about applying a problem-solving mindset and practical reasoning to understand and address real-world challenges, and contributing to impactful technical work that benefits broader communities.
              </Text>
            </VStack>
          </Box>
        </Collapse>
      </Box>

      <HStack
        w="100%"
        align="flex-start"
        flexDirection="row"
        px={{ base: 4, lg: 10, xl: 16 }}
        spacing={{ base: 10, lg: 22, xl: 36 }}
        display={{ base: "none", lg: "flex" }}
      >
        <VStack
          align="center"
          spacing={4}
          minW={{ base: "auto", lg: "210px" }}
          ml={{ base: 0, lg: "-19px" }}
          mt={{ base: 0, lg: "-22px" }}
        >
          <Avatar
            src="/assets/Profile.jpg"
            name="Suyog Karki"
            boxSize={{ base: "180px", lg: "190px", xl: "180px" }}
            border="2px solid #000C66"
            borderRadius="full"
          />

          <SocialIcons />
        </VStack>
        <Box transform={{ lg: "translateY(26px)" }}>
          <VStack align="flex-start" spacing={4} maxW="700px" pt={{ base: 0, lg: 4 }}>
            <Text
              fontSize={{ base: "4xl", lg: "5xl", xl: "6xl" }}
              fontWeight="bold"
              color="#000C66"
            >
              Suyog Karki
            </Text>

            <VStack
              spacing={1}
              align="flex-start"
              color="#333"
              fontSize={{ base: "sm", md: "md" }}
              mb={{ base: 3, lg: 0 }}
            >
              <HStack spacing={3}>
                <Icon as={FaMapMarkerAlt} color="#b10f000C6630" />
                <Text color="#000C66">Hammond, Louisiana</Text>
              </HStack>
              <HStack spacing={3}>
                <Icon as={FaGraduationCap} color="#000C66" />
                <HStack justify="space-between" w="100%" spacing={4}>
                  <Text color="#000C66">Southeastern Louisiana University</Text>
                  <Text color="rgba(0,12,102,0.68)" fontSize={{ base: "sm", md: "sm" }}>
                    ~ May 2028
                  </Text>
                </HStack>
              </HStack>
            </VStack>
          </VStack>
        </Box>
      </HStack>

      <Box
        w="100%"
        px={{ base: 4, md: 10, lg: 10, xl: 16 }}
        mt={{ base: 2, lg: 4 }}
        display={{ base: "none", lg: "block" }}
      >
        <Text
          fontSize={{ base: "md", md: "md" }}
          color="#000C66"
          lineHeight="1.65"
          textAlign="left"
          w="100%"
        >
          Greetings!
          <br />
          I am a Sophomore Computer Science student with Data Science concentration) with hands-on experience in full-stack development, machine learning, and data-driven systems. Passionate about applying a problem-solving mindset and practical reasoning to understand and address real-world challenges, and contributing to impactful technical work that benefits broader communities.
        </Text>
      </Box>
      <Box
        mt={12}
        w="100%"
        h="2.2px"
        bg="#000C66"
        borderRadius="20px"
      />
    </Box>
  );
}
