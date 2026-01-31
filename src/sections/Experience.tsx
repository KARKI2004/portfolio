import {
  Box,
  VStack,
  Text,
  UnorderedList,
  ListItem,
  HStack,
  useBreakpointValue,
  keyframes,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function ExperienceSection() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const autoDone = useRef(false);

  const arrowPulse = keyframes`
    0% { transform: translateY(-50%) scale(1); opacity: 0.3; }
    50% { transform: translateY(-50%) scale(1.08); opacity: 0.6; }
    100% { transform: translateY(-50%) scale(1); opacity: 0.3; }
  `;

  useEffect(() => {
    if (!isMobile) return;
    const el = scrollRef.current;
    if (!el || autoDone.current) return;

    let rafId: number | null = null;
    let timeoutId: number | null = null;

    const stopAuto = () => {
      autoDone.current = true;
      if (rafId) cancelAnimationFrame(rafId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };

    const step = () => {
      if (!el || autoDone.current) return;
      el.scrollLeft += 0.4;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 2) {
        stopAuto();
        return;
      }
      rafId = requestAnimationFrame(step);
    };

    timeoutId = window.setTimeout(() => {
      rafId = requestAnimationFrame(step);
    }, 600);

    el.addEventListener("pointerdown", stopAuto, { passive: true });
    el.addEventListener("touchstart", stopAuto, { passive: true });
    el.addEventListener("wheel", stopAuto, { passive: true });

    return () => {
      stopAuto();
      el.removeEventListener("pointerdown", stopAuto);
      el.removeEventListener("touchstart", stopAuto);
      el.removeEventListener("wheel", stopAuto);
    };
  }, [isMobile]);

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
        <Box position="relative">
          <VStack
            ref={scrollRef}
            spacing={6}
            w="100%"
            flexDirection={{ base: "row", md: "column" }}
            align="stretch"
            overflowX={{ base: "auto", md: "visible" }}
            scrollSnapType={{ base: "x proximity", md: "none" }}
            pr={{ base: 6, md: 0 }}
            sx={{ scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}
          >

          <Box
            position="relative"
            bg="rgba(255,255,255,0.1)"
            backdropFilter="blur(6px)"
            border="1px solid rgba(0,12,102,0.45)"
            borderRadius="16px"
            p={{ base: 5, md: 7 }}
            w={{ base: "calc(100vw - 32px)", md: "100%" }}
            minW={{ base: "calc(100vw - 32px)", md: "auto" }}
            scrollSnapAlign={{ base: "start", md: "initial" }}
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
                Student web developer — Internet Resource Center
              </Text>

              <Box textAlign={{ base: "left", md: "right" }}>
                <Text fontSize={{ base: "xs", md: "sm" }} color="#000C66">
                  Southeastern Louisiana University · Hammond, Louisiana
                </Text>
                <Text fontSize={{ base: "xs", md: "sm" }} color="#000C66">
                  Sept 2025 – Present
                </Text>
              </Box>
            </HStack>

            <UnorderedList
              spacing={1}
              fontSize={{ base: "xs", md: "sm" }}
              color="#000C66"
              mt={2}
              display={{ base: "none", md: "block" }}
            >
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
            p={{ base: 5, md: 7 }}
            w={{ base: "calc(100vw - 32px)", md: "100%" }}
            minW={{ base: "calc(100vw - 32px)", md: "auto" }}
            scrollSnapAlign={{ base: "start", md: "initial" }}
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
                Software Intern — IT Nepal Solution
              </Text>

              <Box textAlign="right">
                <Text fontSize="sm" color="#000C66">Kathmandu, Nepal</Text>
                <Text fontSize="sm" color="#000C66">June 2025 – December 2025</Text>
              </Box>
            </HStack>

            <UnorderedList
              spacing={1}
              fontSize={{ base: "xs", md: "sm" }}
              color="#000C66"
              mt={2}
              display={{ base: "none", md: "block" }}
            >
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
            p={{ base: 5, md: 7 }}
            w={{ base: "calc(100vw - 32px)", md: "100%" }}
            minW={{ base: "calc(100vw - 32px)", md: "auto" }}
            scrollSnapAlign={{ base: "start", md: "initial" }}
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

            <UnorderedList
              spacing={1}
              fontSize={{ base: "xs", md: "sm" }}
              color="#000C66"
              mt={2}
              display={{ base: "none", md: "block" }}
            >
              <ListItem>Monitored and maintained campus network.</ListItem>
              <ListItem>Provided technical + server support.</ListItem>
              <ListItem>Ensured seamless IT operations campus-wide.</ListItem>
            </UnorderedList>
          </Box>

          </VStack>
          <Box
            position="absolute"
            right="6px"
            top="50%"
            transform="translateY(-50%)"
            pointerEvents="none"
            color="rgba(224, 211, 175, 0.8)"
            textShadow="0 0 10px rgba(224, 211, 175, 0.4)"
            animation={`${arrowPulse} 1.6s ease-in-out infinite`}
            display={{ base: "flex", md: "none" }}
            alignItems="center"
          >
            <ChevronRightIcon boxSize="24px" />
          </Box>
        </Box>
      </Box>
      <Box w="100%" h="1.1px" bg="#000C66" borderRadius="20px" mt={0} />
    </>
  );
}
