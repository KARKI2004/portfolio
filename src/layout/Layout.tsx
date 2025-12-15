import { Box, useBreakpointValue } from "@chakra-ui/react";
import Spine from "../components/Spine";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";


type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const [dimBlogBtn, setDimBlogBtn] = useState(false);
  const [hovered, setHovered] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

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
      <Box
        as="button"
        onClick={() => (window.location.href = "/blog")}
        position="fixed"
        top={{ base: "12px", md: "5px" }}
        right="0"
        minW="85px"
        justifyContent="center"
        zIndex={4}
        display="flex"
        alignItems="center"
        bg="#b10f30"
        color="white"
        fontWeight="semibold"
        px="15px"
        py="14px"
        fontSize="lg"
        borderRadius="2px"
        sx={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/dark-denim-3.png')",
          backgroundSize: "auto",
        }}
        opacity={
          isMobile
            ? dimBlogBtn ? 0 : 1
            : dimBlogBtn && !hovered ? 0.25 : 1
        }
        pointerEvents={isMobile && dimBlogBtn ? "none" : "auto"}
        transition="opacity 0.25s ease"
        onMouseEnter={() => {
          setHovered(true);
          setTimeout(() => setHovered(false), 3000);
        }}
      >
        <Box
          position="absolute"
          left={{ base: "-38px", md: "-39px" }}
          top="50%"
          transform="translateY(-50%)"
          width="41px"
          height="56px"
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
    </Box>
  );
}
