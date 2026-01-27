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
import { PhoneIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { FaMapMarkerAlt } from "react-icons/fa";
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
            icon={<ChevronDownIcon />}
            size="sm"
            variant="ghost"
            color="#000C66"
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
                  <Icon as={PhoneIcon} color="#000C66" />
                  <Text color="#000C66">(985) 510-0129</Text>
                </HStack>
                <HStack spacing={3}>
                  <Icon as={FaMapMarkerAlt} color="#b10f000C6630" />
                  <Text color="#000C66">Hammond, Louisiana</Text>
                </HStack>
              </VStack>
              <Text
                fontSize="md"
                color="#000C66"
                lineHeight="1.65"
                textAlign="left"
                w="100%"
              >
                Sophomore CS student at Southeastern Louisiana University (Data Science concentration) with hands-on experience in full-stack development, database systems, and UI engineering.
                Passionate about building clean, responsive UIs, secure backend systems, and exploring practical machine-learning applications.
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
                <Icon as={PhoneIcon} color="#000C66" />
                <Text color="#000C66">(985) 510-0129</Text>
              </HStack>

              <HStack spacing={3}>
                <Icon as={FaMapMarkerAlt} color="#b10f000C6630" />
                <Text color="#000C66">Hammond, Louisiana</Text>
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
          Sophomore CS student at Southeastern Louisiana University (Data Science concentration) with hands-on experience in full-stack development, database systems, and UI engineering.
          Passionate about building clean, responsive UIs, secure backend systems, and exploring practical machine-learning applications.
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
