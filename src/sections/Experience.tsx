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
import { useEffect, useRef, useState } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function ExperienceSection() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const autoDone = useRef(false);
  const [arrowPressed, setArrowPressed] = useState(false);

  const arrowPulse = keyframes`
    0% { opacity: 0.72; box-shadow: 0 0 0 rgba(224, 211, 175, 0.12); }
    50% { opacity: 1; box-shadow: 0 0 14px rgba(224, 211, 175, 0.30); }
    100% { opacity: 0.72; box-shadow: 0 0 0 rgba(224, 211, 175, 0.12); }
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

  const handleArrowClick = () => {
    const el = scrollRef.current;
    if (!el || !isMobile) return;

    autoDone.current = true;
    const cards = Array.from(el.children) as HTMLElement[];
    if (cards.length === 0) return;

    const viewportCenter = el.scrollLeft + el.clientWidth / 2;
    let currentIdx = 0;
    let minDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(cardCenter - viewportCenter);
      if (distance < minDistance) {
        minDistance = distance;
        currentIdx = idx;
      }
    });

    const nextIdx = Math.min(currentIdx + 1, cards.length - 1);
    const target = cards[nextIdx];
    if (!target) return;

    const rawLeft = target.offsetLeft - (el.clientWidth - target.clientWidth) / 2;
    const maxLeft = Math.max(0, el.scrollWidth - el.clientWidth);
    const targetLeft = Math.max(0, Math.min(rawLeft, maxLeft));

    el.scrollTo({ left: targetLeft, behavior: "smooth" });
  };

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
            scrollSnapType={{ base: "x mandatory", md: "none" }}
            pr={{ base: 0, md: 0 }}
            sx={{
              scrollPaddingInline: { base: "16px", md: "0" },
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            <Box
              position="relative"
              bg="rgba(255,255,255,0.1)"
              backdropFilter="blur(6px)"
              border="1px solid rgba(0,12,102,0.45)"
              borderRadius="16px"
              p={{ base: 5, md: 7 }}
              w={{ base: "calc(100vw - 64px)", md: "100%" }}
              minW={{ base: "calc(100vw - 64px)", md: "auto" }}
              scrollSnapAlign={{ base: "center", md: "initial" }}
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
                  Student web developer - Internet Resource Center
                </Text>

                <Box textAlign={{ base: "left", md: "right" }}>
                  <Text fontSize={{ base: "xs", md: "sm" }} color="#000C66">
                    Southeastern Louisiana University - Hammond, Louisiana
                  </Text>
                  <Text fontSize={{ base: "xs", md: "sm" }} color="#000C66">
                    Sept 2025 - Present
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
                <ListItem>Designed and implemented Gemini-powered AI systems for PDF-based Q&A and rubric-based grading, analyzing model behavior and improving response accuracy.</ListItem>
                <ListItem>Presented research on web development with AI at the University of Louisiana at Lafayette URC (2025).</ListItem>
              </UnorderedList>

              <Text
                position="absolute"
                bottom="14px"
                right="20px"
                fontSize="xs"
                color="rgba(0,12,102,0.68)"
                display="block"
              >
                Python - React - AI Systems
              </Text>
            </Box>

            <Box
              position="relative"
              bg="rgba(255,255,255,0.1)"
              backdropFilter="blur(6px)"
              border="1px solid rgba(0,12,102,0.45)"
              borderRadius="16px"
              p={{ base: 5, md: 7 }}
              w={{ base: "calc(100vw - 64px)", md: "100%" }}
              minW={{ base: "calc(100vw - 64px)", md: "auto" }}
              scrollSnapAlign={{ base: "center", md: "initial" }}
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
                  Software Intern - IT Nepal Solution
                </Text>

                <Box textAlign={{ base: "left", md: "right" }}>
                  <Text fontSize={{ base: "xs", md: "sm" }} color="#000C66">
                    Kathmandu, Nepal
                  </Text>
                  <Text fontSize={{ base: "xs", md: "sm" }} color="#000C66">
                    June 2025 - December 2025
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
                <ListItem>Developed frontend and backend features for the NAC Global Express portfolio site.</ListItem>
                <ListItem>Collaborated in requirement planning and feature implementation discussions.</ListItem>
                <ListItem>Implemented responsive components ensuring cross-device compatibility.</ListItem>
              </UnorderedList>

              <Text
                position="absolute"
                bottom="14px"
                right="20px"
                fontSize="xs"
                color="rgba(0,12,102,0.68)"
                display="block"
              >
                Django - React - REST APIs
              </Text>
            </Box>

            <Box
              position="relative"
              bg="rgba(255,255,255,0.1)"
              backdropFilter="blur(6px)"
              border="1px solid rgba(0,12,102,0.45)"
              borderRadius="16px"
              p={{ base: 5, md: 7 }}
              w={{ base: "calc(100vw - 64px)", md: "100%" }}
              minW={{ base: "calc(100vw - 64px)", md: "auto" }}
              scrollSnapAlign={{ base: "center", md: "initial" }}
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
                  Network Operator - University Network & Systems
                </Text>

                <Box textAlign={{ base: "left", md: "right" }}>
                  <Text fontSize={{ base: "xs", md: "sm" }} color="#000C66">
                    Southeastern Louisiana University - Hammond, Louisiana
                  </Text>
                  <Text fontSize={{ base: "xs", md: "sm" }} color="#000C66">
                    May 2025 - Aug 2025
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
            as="button"
            position="absolute"
            right="8px"
            top="50%"
            transform={arrowPressed ? "translateY(-50%) scale(0.93)" : "translateY(-50%) scale(1)"}
            pointerEvents="auto"
            color="#000C66"
            bg="rgba(255, 249, 232, 0.72)"
            backdropFilter="blur(4px)"
            borderRadius="10px"
            w="34px"
            h="34px"
            justifyContent="center"
            animation={`${arrowPulse} 1.6s ease-in-out infinite`}
            transition="transform 0.16s ease, opacity 0.16s ease"
            _hover={{ transform: "translateY(-50%) scale(1.06)", opacity: 0.95 }}
            _active={{ transform: "translateY(-50%) scale(0.93)", opacity: 0.88 }}
            onClick={handleArrowClick}
            onPointerDown={() => setArrowPressed(true)}
            onPointerUp={() => setArrowPressed(false)}
            onPointerLeave={() => setArrowPressed(false)}
            onPointerCancel={() => setArrowPressed(false)}
            display={{ base: "flex", md: "none" }}
            alignItems="center"
            cursor="pointer"
            aria-label="Show next experience"
          >
            <ChevronRightIcon boxSize="28px" />
          </Box>
        </Box>
      </Box>
      <Box w="100%" h="1.1px" bg="#000C66" borderRadius="20px" mt={0} />
    </>
  );
}
