import {
  Box,
  VStack,
  Text,
  UnorderedList,
  ListItem,
  HStack,
  useBreakpointValue,
  keyframes,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";

type ExperienceKey = "irc" | "itn" | "net";

export default function ExperienceSection() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const autoDone = useRef(false);
  const [arrowPressed, setArrowPressed] = useState(false);
  const [activeExperience, setActiveExperience] = useState<ExperienceKey | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const experienceDetails: Record<
    ExperienceKey,
    {
      role: string;
      org: string;
      date: string;
      bullets: string[];
      tech?: string;
    }
  > = {
    irc: {
      role: "Student web developer - Internet Resource Center",
      org: "Southeastern Louisiana University - Hammond, Louisiana",
      date: "Sept 2025 - Present",
      bullets: [
        "Designed and implemented Gemini-powered AI systems for PDF-based Q&A and rubric-based grading, analyzing model behavior and improving response accuracy.",
        "Presented research on web development with AI at the University of Louisiana at Lafayette URC (2025).",
      ],
      tech: "Python - React - AI Systems",
    },
    itn: {
      role: "Software Intern - IT Nepal Solution",
      org: "Kathmandu, Nepal",
      date: "June 2025 - December 2025",
      bullets: [
        "Developed frontend and backend features for the NAC Global Express portfolio site.",
        "Collaborated in requirement planning and feature implementation discussions.",
        "Implemented responsive components ensuring cross-device compatibility.",
      ],
      tech: "Django - React - REST APIs",
    },
    net: {
      role: "Network Operator - University Network & Systems",
      org: "Southeastern Louisiana University - Hammond, Louisiana",
      date: "May 2025 - Aug 2025",
      bullets: [
        "Monitored and maintained campus network.",
        "Provided technical + server support.",
        "Ensured seamless IT operations campus-wide.",
      ],
    },
  };

  const openExperienceDetails = (key: ExperienceKey) => {
    setActiveExperience(key);
    onOpen();
  };

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
              cursor={{ base: "pointer", md: "default" }}
              onClick={() => isMobile && openExperienceDetails("irc")}
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
                spacing={{ base: 1, md: 1 }}
                fontSize={{ base: "xs", md: "sm" }}
                color="#000C66"
                mt={2}
                display={{ base: "none", md: "block" }}
              >
                <ListItem>Designed and implemented Gemini-powered AI systems for PDF-based Q&A and rubric-based grading, analyzing model behavior and improving response accuracy.</ListItem>
                <ListItem>Presented research on web development with AI at the University of Louisiana at Lafayette URC (2025).</ListItem>
              </UnorderedList>

              <Text
                position={{ base: "static", md: "absolute" }}
                bottom={{ base: "auto", md: "14px" }}
                right="20px"
                fontSize="xs"
                color="rgba(0,12,102,0.68)"
                display="block"
                mt={{ base: 2, md: 0 }}
                textAlign={{ base: "right", md: "initial" }}
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
              cursor={{ base: "pointer", md: "default" }}
              onClick={() => isMobile && openExperienceDetails("itn")}
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
                spacing={{ base: 1, md: 1 }}
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
                position={{ base: "static", md: "absolute" }}
                bottom={{ base: "auto", md: "14px" }}
                right="20px"
                fontSize="xs"
                color="rgba(0,12,102,0.68)"
                display="block"
                mt={{ base: 2, md: 0 }}
                textAlign={{ base: "right", md: "initial" }}
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
              cursor={{ base: "pointer", md: "default" }}
              onClick={() => isMobile && openExperienceDetails("net")}
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
                spacing={{ base: 1, md: 1 }}
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
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="scale"
        blockScrollOnMount
        isCentered
      >
        <ModalOverlay bg="rgba(8,25,51,0.42)" backdropFilter="blur(6px)" />
        <ModalContent
          mx={4}
          bg="rgba(255,255,255,0.95)"
          border="1px solid rgba(0,12,102,0.35)"
          borderRadius="14px"
        >
          <ModalHeader fontSize="md" color="#000C66" pr={12}>
            {activeExperience ? experienceDetails[activeExperience].role : ""}
          </ModalHeader>
          <ModalCloseButton color="#b10f30" />
          <ModalBody pb={5}>
            {activeExperience && (
              <VStack align="stretch" spacing={3}>
                <HStack justify="space-between" align="flex-start" spacing={3}>
                  <Text fontSize="xs" color="#000C66">
                    {experienceDetails[activeExperience].org}
                  </Text>
                  <VStack align="flex-end" spacing={0.5}>
                    <Text fontSize="xs" color="#000C66" textAlign="right" whiteSpace="nowrap">
                      {experienceDetails[activeExperience].date}
                    </Text>
                    {experienceDetails[activeExperience].tech && (
                      <Text
                        fontSize="xs"
                        color="rgba(0,12,102,0.76)"
                        textAlign="right"
                        whiteSpace="nowrap"
                      >
                        {experienceDetails[activeExperience].tech}
                      </Text>
                    )}
                  </VStack>
                </HStack>
                <UnorderedList spacing={2} fontSize="xs" color="#000C66" pl={4}>
                  {experienceDetails[activeExperience].bullets.map((item) => (
                    <ListItem key={item}>{item}</ListItem>
                  ))}
                </UnorderedList>
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box w="100%" h="1.1px" bg="#000C66" borderRadius="20px" mt={0} />
    </>
  );
}
