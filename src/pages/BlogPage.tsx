import {
  Box,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { BLOG_CONTENT, BLOG_IMAGES, parseBlogPost } from "../blogs";

export default function BlogPage() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const [dim, setDim] = useState(false);
  const [hovered, setHovered] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const onScroll = () => setDim(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const raw = slug ? BLOG_CONTENT[slug as keyof typeof BLOG_CONTENT] : undefined;
  const blog = raw ? parseBlogPost(raw) : undefined;
  const image = slug ? BLOG_IMAGES[slug as keyof typeof BLOG_IMAGES] : undefined;
  const paragraphs =
    blog?.body
      .split(/\n\s*\n+/)
      .map((p) => p.trim())
      .filter(Boolean) ?? [];
  const splitIndex = Math.ceil(paragraphs.length / 2);
  const leftColumn = paragraphs.slice(0, splitIndex);
  const rightColumn = paragraphs.slice(splitIndex);

  return (
    <Box
      minH="100vh"
      mx="auto"
      maxW={{ base: "680px", md: "100%" }}
      bgImage="url('/assets/Paper_bg.png')"
      bgSize="cover"
      bgRepeat="repeat"
      position="relative"
      pb={{ base: "180px", md: "220px" }}
    >
      <Box
        position="fixed"
        top="0"
        left="0"
        zIndex={5}
        display={{ base: "none", md: "flex" }}
        flexDirection="column"
        alignItems="center"
      >
        <Box
          w="60px"
          h="180px"
          sx={{
            backgroundImage: `
              url('/assets/leatherSpine.png'),
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
        <Box
          w="60px"
          h="30px"
          sx={{
            backgroundImage: `
              url('/assets/leatherSpine.png'),
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
      <VStack
        maxW="1200px"
        mx="auto"
        pt={{ base: "160px", md: "120px" }}
        px={{ base: 4, md: 0 }}
        pl={{ md: "80px" }}
        pr={{ md: "40px" }}
        spacing={8}
        align="stretch"
      >
        {blog ? (
          <>
            <VStack align="center" spacing={5}>
              <Text
                fontSize="4xl"
                fontWeight="bold"
                color="#081933"
                lineHeight="1.15"
              >
                {blog.title}
              </Text>

              {blog.subtitle && (
                <Text fontStyle="italic" color="#081933">
                  {blog.subtitle}
                </Text>
              )}

              <HStack w="100%" justify="space-between">
                <Text fontSize="sm" color="#081933">
                  {blog.date}
                </Text>

                <Text fontSize="sm" color="#081933" letterSpacing="0.08em">
                  {blog.tag}
                </Text>
              </HStack>

              <Box mt={12} w="100%" h="0.1px" bg="#000C66" borderRadius="20px" />
            </VStack>

            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              spacing={10}
              alignItems="flex-start"
              minChildWidth="0"
            >
              <VStack align="flex-start" spacing={5}>
                {image && (
                  <Image
                    src={image}
                    alt={blog.title}
                    w="100%"
                    maxW="350px"
                    h="200px"
                    objectFit="cover"
                    border="1px solid #000C66"
                    borderRadius={7}
                  />
                )}
                {leftColumn.map((paragraph, index) => (
                  <Text key={`left-${index}`}>{paragraph}</Text>
                ))}
              </VStack>
              <VStack align="flex-start" spacing={5}>
                {rightColumn.map((paragraph, index) => (
                  <Text key={`right-${index}`}>{paragraph}</Text>
                ))}
              </VStack>
            </SimpleGrid>
          </>
        ) : (
          <VStack align="center" spacing={4}>
            <Text fontSize="3xl" fontWeight="bold" color="#081933">
              Blog not found
            </Text>
            <Text color="#081933">
              The blog you are looking for does not exist yet.
            </Text>
          </VStack>
        )}
      </VStack>
      <Footer />
    </Box>
  );
}
