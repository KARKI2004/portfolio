import { Box, Text, VStack, HStack, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const navigate = useNavigate();

  // fade/disappear logic
  const [dim, setDim] = useState(false);
  const [hovered, setHovered] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const onScroll = () => setDim(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box
      minH="100vh"
      bgImage="url('/src/assets/Paper_bg.png')"
      bgSize="cover"
      bgRepeat="repeat"
      position="relative"
      pb={{ base: "180px", md: "220px" }}
    >
      {/* Navy leather bookmark strip */}
      <Box
        position="fixed"
        top="0"
        left="0"
        zIndex={5}
        display={{ base: "none", md: "flex" }}
        flexDirection="column"
        alignItems="center"
      >
        {/* Rectangle */}
        <Box
          w="60px"
          h="180px"
          sx={{
            backgroundImage: `
              url('/src/assets/leatherSpine.png'),
              url('https://www.transparenttextures.com/patterns/dark-denim-3.png')
            `,
            backgroundSize: "450px 450px, 300px 300px",
            backgroundRepeat: "no-repeat, repeat",
            backgroundPosition: "center, center",
            boxShadow: "2px 2px 6px rgba(0,0,0,0.35)",
            borderTopLeftRadius: "1px",
            borderTopRightRadius: "2px",
          }}
        />

        {/* Triangle */}
        <Box
          w="60px"
          h="30px"
          sx={{
            backgroundImage: `
              url('/src/assets/leatherSpine.png'),
              url('https://www.transparenttextures.com/patterns/dark-denim-3.png')
            `,
            backgroundSize: "450px 450px, 300px 300px",
            backgroundRepeat: "no-repeat, repeat",
            backgroundPosition: "center, center",
            clipPath: "polygon(0 0, 50% 100%, 100% 0)",
            boxShadow: "2px 2px 6px rgba(0,0,0,0.35)",
          }}
        />
      </Box>

      {/* Back button */}
      <Box
        as="button"
        onClick={() => navigate("/blog")}
        position="fixed"
        top={{ base: "12px", md: "5px" }}
        right="0"
        minW="85px"
        justifyContent="center"
        zIndex={10}
        display="flex"
        alignItems="center"
        bg="#b10f30"
        px="15px"
        py="14px"
        fontSize="lg"
        fontWeight="semibold"
        color="#e0d3af"
        sx={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/dark-denim-3.png')",
        }}
        opacity={
          isMobile
            ? dim
              ? 0
              : 1
            : dim && !hovered
            ? 0.35
            : 1
        }
        pointerEvents={isMobile && dim ? "none" : "auto"}
        transition="opacity 0.25s ease"
        onMouseEnter={() => {
          setHovered(true);
          setTimeout(() => setHovered(false), 3000);
        }}
      >
        <Box
          position="absolute"
          left="-39px"
          top="50%"
          transform="translateY(-50%)"
          width="40px"
          height="56px"
          sx={{
            backgroundColor: "#b10f30",
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/dark-denim-3.png')",
            clipPath: "polygon(0 50%, 100% 0, 100% 100%)",
          }}
        />
        Back
      </Box>

      {/* ARTICLE CONTENT */}
      <VStack
        maxW="1200px"
        mx="auto"
        pt={{ base: "160px", md: "120px" }}
        pl={{ base: "24px", md: "80px" }}
        pr={{ base: "2px", md: "40px" }}
        spacing={8}
        align="stretch"
      >
        {/* Header */}
        <VStack align="center" spacing={5}>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            color="#081933"
            lineHeight="1.15"
          >
            Embracing Constraints
          </Text>

          <HStack w="100%" justify="space-between">
            <Text fontSize="sm" color="#081933">
              November 22, 2025
            </Text>

            <Text fontSize="sm" color="#081933" letterSpacing="0.08em">
              DESIGN
            </Text>
          </HStack>

          <Box mt={12} w="100%" h="0.1px" bg="#000C66" borderRadius="20px" />
        </VStack>

        {/* Body */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="flex-start">
          {/* Left column */}
          <VStack align="flex-start" spacing={5}>
            {/* image */}
            <Box
              w="350px"
              h="200px"
              bg="gray.300"
              border="1px solid #000C66"
              borderRadius={7}
            />

            <Text>
              Some of my best work has come from projects with the tightest
              constraints. Here’s why limitations are not obstacles, but
              opportunities.
            </Text>

            <Text>
              Constraints force clarity. They strip away excess and push us
              toward decisions that matter. In both design and engineering,
              boundaries sharpen intent.
            </Text>
          </VStack>

          {/* Right column */}
          <VStack align="flex-start" spacing={5}>
            <Text>
              When everything is possible, nothing is urgent. Constraints
              introduce pressure, and pressure reveals priorities.
              When everything is possible, nothing is urgent. Constraints
              introduce pressure, and pressure reveals priorities.
              When everything is possible, nothing is urgent. Constraints
              introduce pressure, and pressure reveals priorities.
              When everything is possible, nothing is urgent. Constraints
              introduce pressure, and pressure reveals priorities.
              When everything is possible, nothing is urgent. Constraints
              introduce pressure, and pressure reveals priorities.
              When everything is possible, nothing is urgent. Constraints
              introduce pressure, and pressure reveals priorities.
            </Text>

            <Text>
              Over time, I’ve learned that strong constraints don’t reduce
              creativity—they channel it. They turn vague ideas into focused,
              deliberate execution.
            </Text>
          </VStack>
        </SimpleGrid>
      </VStack>
      <Footer />
    </Box>
  );
}