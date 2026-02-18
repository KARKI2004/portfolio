import { Box, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import Spine from "../components/Spine";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const [dimBlogBtn, setDimBlogBtn] = useState(false);
  const [hovered, setHovered] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const location = useLocation();
  const isBlogRoute = location.pathname.startsWith("/blog");
  const blogsOpacity = isMobile ? (dimBlogBtn ? 0 : 1) : dimBlogBtn && !hovered ? 0.25 : 1;
  const resumeOpacity = 1;

  useEffect(() => {
    const onScroll = () => {
      setDimBlogBtn(window.scrollY > 120);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box display="flex" overflowX="hidden" maxW="100vw">
      <Spine />
      {!isBlogRoute && (
        <Box
          as="a"
          href="/assets/Suyog_Karki_Resume.pdf"
          download
          position="fixed"
          top={{ base: "12px", md: "10px" }}
          left={{ base: "10px", md: "236px" }}
          zIndex={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="#b10f30"
          opacity={resumeOpacity}
          pointerEvents="auto"
          transition="opacity 0.25s ease, transform 0.15s ease"
          _hover={{ transform: "scale(1.04)" }}
          onMouseEnter={() => {
            setHovered(true);
            setTimeout(() => setHovered(false), 3000);
          }}
        >
          <VStack spacing={1.5} lineHeight={1}>
            <Box
              w="34px"
              h="36px"
              borderRadius="8px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                backgroundColor: "#b10f30",
                backgroundImage:
                  "url('https://www.transparenttextures.com/patterns/dark-denim-3.png')",
                backgroundSize: "auto",
              }}
            >
              <DownloadIcon boxSize="16px" color="#e0d3af" />
            </Box>
            <Text fontSize="xs" fontWeight="semibold" color="#000C66">
              Resume
            </Text>
          </VStack>
        </Box>
      )}
      <Box
        position="fixed"
        top={{ base: "12px", md: "5px" }}
        right="0"
        zIndex={4}
        display="flex"
        alignItems="center"
        pr={{ base: "8px", md: "0" }}
        opacity={blogsOpacity}
        pointerEvents={isMobile && dimBlogBtn ? "none" : "auto"}
        transition="opacity 0.25s ease"
        onMouseEnter={() => {
          setHovered(true);
          setTimeout(() => setHovered(false), 3000);
        }}
      >
        <Box
          as="button"
          onClick={() => (window.location.href = "/blog")}
          minW="48px"
          justifyContent="center"
          display="flex"
          alignItems="center"
          bg="#b10f30"
          color="white"
          fontWeight="semibold"
          px="8px"
          py="7px"
          fontSize="sm"
          borderRadius="2px"
          position="relative"
          sx={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/dark-denim-3.png')",
            backgroundSize: "auto",
          }}
        >
          <Box
            position="absolute"
            left={{ base: "-18px", md: "-18px" }}
            top="50%"
            transform="translateY(-50%)"
            width="18px"
            height="100%"
            overflow="hidden"
            zIndex={5}
            sx={{
              backgroundColor: "#b10f30",
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/dark-denim-3.png')",
              backgroundSize: "auto",
              clipPath: "polygon(0 50%, 100% 0, 100% 100%)",
            }}
          />
          <span style={{ color: "#e0d3af" }}>Blogs</span>
        </Box>
      </Box>
      <Box
        flex="1"
        ml={{ base: "0", md: "225px" }}
        minW={0}
        display="flex"
        flexDirection="column"
        bgImage="url('/assets/Paper_bg.png')"
        bgSize="cover"
        bgRepeat="repeat"
        bgPosition="center"
        bgBlendMode="multiply"
      >
        <Box
          as="main"
          px={{ base: 4, sm: 6, md: 16 }}
          pt="24"
pb={{ base: "220px", md: "180px" }}
          w="100%"
          minH="100%"
          bgImage="url('/assets/Paper_bg.png')"
          bgSize="cover"
          bgRepeat="repeat"
          bgPosition="center"
          bgBlendMode="multiply"
        >
          {children}
        </Box>
        <Footer />
      </Box>
      <MobileNav />
    </Box>
  );
}
