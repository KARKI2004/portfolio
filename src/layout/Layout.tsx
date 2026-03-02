import { Avatar, Box, HStack, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import Spine from "../components/Spine";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import { useEffect, useState, type MouseEvent } from "react";
import { useLocation } from "react-router-dom";


type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const [dimBlogBtn, setDimBlogBtn] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isProfileCollapsed, setIsProfileCollapsed] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const location = useLocation();
  const isBlogRoute = location.pathname.startsWith("/blog");
  const showFloatingResume = !isBlogRoute && (!isMobile || !isProfileCollapsed);
  const showFloatingBlogs = !isMobile || !isProfileCollapsed;
  const blogsOpacity = isMobile
    ? isProfileCollapsed
      ? 1
      : dimBlogBtn
        ? 0
        : 1
    : dimBlogBtn && !hovered
      ? 0.25
      : 1;
  const resumeOpacity = isMobile ? 1 : dimBlogBtn && !hovered ? 0.25 : 1;

  useEffect(() => {
    const onScroll = () => {
      setDimBlogBtn(window.scrollY > 120);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMobile || isBlogRoute) {
      setIsProfileCollapsed(false);
      return;
    }

    let rafId: number | null = null;
    const THRESHOLD = 68;

    const updateCollapsed = () => {
      const aboutEl = document.getElementById("about");
      if (!aboutEl) {
        setIsProfileCollapsed(false);
        return;
      }

      const rect = aboutEl.getBoundingClientRect();
      setIsProfileCollapsed(rect.bottom <= THRESHOLD);
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateCollapsed);
    };

    updateCollapsed();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isMobile, isBlogRoute]);

  return (
    <Box display="flex" overflowX="hidden" maxW="100vw">
      <Spine />
      {!isBlogRoute && (
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          h="68px"
          zIndex={6}
          display={{ base: "block", md: "none" }}
          opacity={isProfileCollapsed ? 1 : 0}
          transform={isProfileCollapsed ? "translateY(0)" : "translateY(-14px)"}
          transition="opacity 0.24s ease, transform 0.24s ease"
          pointerEvents={isProfileCollapsed ? "auto" : "none"}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          bgImage="url('/assets/Paper_bg.png')"
          bgSize="cover"
          bgRepeat="repeat"
          bgPosition="center"
          bgBlendMode="multiply"
          borderBottom="1px solid rgba(0,12,102,0.34)"
        >
          <Box
            h="100%"
            w="100%"
            display="grid"
            gridTemplateColumns="1fr auto 1fr"
            alignItems="center"
            px={2}
          >
            <Box display="flex" justifyContent="flex-start">
              <Box
                as="a"
                href="/assets/Suyog_Karki_Resume.pdf"
                download
                onClick={(e: MouseEvent) => e.stopPropagation()}
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="#b10f30"
                transform={isProfileCollapsed ? "scale(0.82)" : "scale(1)"}
                transformOrigin="left center"
                transition="transform 0.24s ease, opacity 0.24s ease"
              >
                <VStack spacing={0.75} lineHeight={1}>
                  <Box
                    w="28px"
                    h="28px"
                    borderRadius="7px"
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
                    <DownloadIcon boxSize="13px" color="#e0d3af" />
                  </Box>
                </VStack>
              </Box>
            </Box>

            <HStack
              justify="center"
              spacing={4}
              transform="scale(0.9)"
              transformOrigin="center center"
              transition="transform 0.24s ease"
            >
              <Avatar
                src="/assets/Profile.jpg"
                name="Suyog Karki"
                boxSize="38px"
                border="1.5px solid #000C66"
                borderRadius="full"
              />
              <Text fontSize="md" fontWeight="bold" color="#000C66" whiteSpace="nowrap">
                Suyog Karki
              </Text>
            </HStack>

            <Box display="flex" justifyContent="flex-end">
              <Box
              as="button"
              onClick={(e: MouseEvent) => {
                e.stopPropagation();
                window.location.href = "/blog";
              }}
                minW="44px"
                justifyContent="center"
                display="flex"
                alignItems="center"
                bg="#b10f30"
                color="white"
                fontWeight="semibold"
                px="7px"
                py="5px"
                fontSize="xs"
                borderRadius="6px"
                position="relative"
                transform={isProfileCollapsed ? "scale(0.86)" : "scale(1)"}
                transformOrigin="right center"
                transition="transform 0.24s ease, opacity 0.24s ease"
                sx={{
                  backgroundImage:
                    "url('https://www.transparenttextures.com/patterns/dark-denim-3.png')",
                  backgroundSize: "auto",
                }}
              >
                <span style={{ color: "#e0d3af" }}>Blogs</span>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      {showFloatingResume && (
        <Box
          as="a"
          href="/assets/Suyog_Karki_Resume.pdf"
          download
          position="fixed"
          top={{ base: isProfileCollapsed ? "30px" : "12px", md: "10px" }}
          left={{ base: isProfileCollapsed ? "8px" : "10px", md: "236px" }}
          zIndex={7}
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="#b10f30"
          opacity={resumeOpacity}
          pointerEvents="auto"
          transform={{ base: isProfileCollapsed ? "scale(0.78)" : "scale(1)", md: "scale(1)" }}
          transformOrigin="top left"
          transition="opacity 0.24s ease, transform 0.24s ease, top 0.24s ease, left 0.24s ease"
          _hover={{ transform: isMobile ? (isProfileCollapsed ? "scale(0.82)" : "scale(1.04)") : "scale(1)" }}
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
        top={{ base: isProfileCollapsed ? "38px" : "12px", md: "5px" }}
        right={{ base: isProfileCollapsed ? "8px" : "0", md: "0" }}
        zIndex={7}
        display="flex"
        alignItems="center"
        visibility={showFloatingBlogs ? "visible" : "hidden"}
        pr={{ base: "8px", md: "0" }}
        opacity={blogsOpacity}
        pointerEvents={isMobile && dimBlogBtn && !isProfileCollapsed ? "none" : "auto"}
        transform={{ base: isProfileCollapsed ? "scale(0.82)" : "scale(1)", md: "scale(1)" }}
        transformOrigin="top right"
        transition="opacity 0.24s ease, transform 0.24s ease, top 0.24s ease, right 0.24s ease"
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
          borderRadius={{ base: "6px", md: "2px" }}
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
            display={{ base: "none", md: "block" }}
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
