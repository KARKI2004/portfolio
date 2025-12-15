import {
  Box,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { BLOGS } from "../blogs";

export default function Blog() {
  const navigate = useNavigate();

  const [dim, setDim] = useState(false);
  const [hovered, setHovered] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const onScroll = () => {
      setDim(window.scrollY > 120);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box
      minH="100vh"
      bgImage="url('/assets/Paper_bg.png')"
      bgSize="cover"
      bgRepeat="repeat"
      position="relative"
      px={{ base: 4, lg: 10, xl: 16 }}
      pt="120px"
      pb={{ base: "180px", md: "220px" }}
    >
      <Box
        as="button"
        onClick={() => navigate("/")}
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
          left="-38px"
          top="50%"
          transform="translateY(-50%)"
          width="39px"
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

      <VStack maxW="1200px" mx="auto" spacing={8} align="center">
        <Text fontSize="3xl" fontWeight="bold" color="#081933">
          My Blogs
        </Text>

        <Text fontStyle="italic" color="#081933">
          Reflections on code, design, and the craft of building thoughtful software.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={12} w="100%">
          {BLOGS.map((blog) => (
            <Box
              key={blog.slug}
              onClick={() => navigate(`/blog/${blog.slug}`)}
              cursor="pointer"
              bg="rgba(255,255,255,0.1)"
              backdropFilter="blur(6px)"
              border="1px solid rgba(0,12,102,0.45)"
              borderRadius="16px"
              overflow="hidden"
              transition="0.15s ease"
              _hover={{
                bg: "rgba(255,255,255,0.30)",
                borderColor: "#b10f30",
              }}
            >
              <Image
                src={blog.image}
                alt={blog.title}
                h="140px"
                w="100%"
                objectFit="cover"
              />

              <VStack align="flex-start" spacing={4} p={5}>
                <HStack w="100%" justify="space-between">
                  <Text fontSize="sm" color="#000C66" opacity={0.55}>
                    {blog.date}
                  </Text>
                  <Text
                    fontSize="sm"
                    fontWeight="semibold"
                    color="#000C66"
                    opacity={0.6}
                    letterSpacing="0.04em"
                  >
                    {blog.tag}
                  </Text>
                </HStack>

                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  color="#000C66"
                  textAlign="center"
                  w="100%"
                >
                  {blog.title}
                </Text>

                <Text fontSize="sm" color="#000C66">
                  {blog.blurb}
                </Text>

              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
      <Footer />
    </Box>
  );
}
