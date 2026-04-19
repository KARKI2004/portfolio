import {
  Box,
  SimpleGrid,
  VStack,
  Text,
  HStack,
  IconButton,
  useBreakpointValue,
  keyframes,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const CHAT_APP_URL = "https://chatbox-61u8.onrender.com/";
const CLIPDROP_URL =
  "https://chromewebstore.google.com/detail/clipdrop/iidcfkmndhkjhanfcbelgglmciaemgei";
const CMPS3400_URL = "https://cmps3400project-j6nnrxvmd6rqskkgp5gejm.streamlit.app/";


export default function Projects() {
  const [showHint, setShowHint] = useState(false);
  const [showChatHint, setShowChatHint] = useState(false);
  const [showClipHint, setShowClipHint] = useState(false);
  const [showCmpsHint, setShowCmpsHint] = useState(false);
  const [showProject5Hint, setShowProject5Hint] = useState(false);
  const [arrowPressed, setArrowPressed] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const autoDone = useRef(false);

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
        id="projects"
        w="100%"
        mx="auto"
        maxW={{ base: "680px", md: "100%" }}
        pl={{ base: 4, lg: 10, xl: 16 }}
        pr={{ base: 4, lg: 10, xl: 16 }}
        mt={16}
        pb={16}
      >
        <Box position="relative">
          <SimpleGrid
            ref={scrollRef}
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 0, md: 6 }}
            w="100%"
            display={{ base: "flex", md: "grid" }}
            flexDirection={{ base: "row", md: "initial" }}
            gap={{ base: 4, md: 6 }}
            alignItems={{ base: "stretch", md: "initial" }}
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
            role="group"
            onClick={() => window.open(CHAT_APP_URL, "_blank", "noopener,noreferrer")}
            onMouseEnter={() => {
              setShowChatHint(true);
              setTimeout(() => setShowChatHint(false), 1500);
            }}
            bg="rgba(255,255,255,0.1)"
            backdropFilter="blur(6px)"
            border="1px solid rgba(0,12,102,0.45)"
            borderRadius="16px"
            p={{ base: 4, md: 5 }}
            minH={{ base: "240px", md: "320px" }}
            w={{ base: "calc(100vw - 64px)", md: "100%" }}
            flex={{ base: "0 0 auto", md: "initial" }}
            transition="0.15s ease"
            _hover={{
              bg: "rgba(255,255,255,0.30)",
              borderColor: "#000C66",
            }}
            cursor="pointer"
            display="flex"
            position="relative"
            scrollSnapAlign={{ base: "center", md: "initial" }}
          >
            <VStack w="100%" h="100%" justify="space-between" spacing={4}>
              <VStack w="100%" spacing={6}>
                <Text fontSize="xl" fontWeight="bold" color="#000C66" textAlign="center">
                  LLM Document Assistant
                </Text>
                <Text fontSize="sm" color="#000C66" textAlign="left" w="100%" lineHeight="1.55">
                  Built a retrieval-based AI system to extract answers from academic course materials, focusing on prompt design and grounded handling of non-retrieval queries.
                </Text>
              </VStack>

              <Box w="100%">
                <HStack w="100%" justify="space-between" align="flex-start">
                  <VStack align="flex-start" spacing={1}>
                    <Text fontSize="sm" fontWeight="semibold" color="#000C66">Core:</Text>
                    <Text fontSize="sm" color="#000C66">Python</Text>
                    <Text fontSize="sm" color="#000C66">React</Text>
                    <Text fontSize="sm" color="#000C66">Gemini API</Text>
                  </VStack>
                  <VStack align="flex-start" spacing={1}>
                    <Text fontSize="sm" fontWeight="semibold" color="#081933">Focus:</Text>
                    <Text fontSize="sm" color="#000C66">Retrieval</Text>
                    <Text fontSize="sm" color="#000C66">Prompt Design</Text>
                    <Text fontSize="sm" color="#000C66">QA Grounding</Text>
                  </VStack>
                </HStack>
              </Box>
            </VStack>

            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              px={5}
              py={2}
              bg="rgba(255,255,255,0.65)"
              border="1px solid #000C66"
              borderRadius="999px"
              fontSize="sm"
              fontWeight="medium"
              color="#000C66"
              opacity={showChatHint ? 1 : 0}
              transition="opacity 0.75s ease"
              pointerEvents="none"
              display={{ base: "none", md: "block" }}
            >
              Click to view
            </Box>

            <IconButton
              as="a"
              href="https://github.com/KARKI2004/chatapp.git"
              aria-label="GitHub Repo"
              icon={<FaGithub />}
              variant="ghost"
              color="#b10f30"
              fontSize="22px"
              position="absolute"
              bottom="0"
              left="50%"
              transform="translateX(-50%)"
              _hover={{ color: "#000C66", transform: "translateX(-50%) scale(1.3)" }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          </Box>

          <Box
            role="group"
            onClick={() => window.open(CMPS3400_URL, "_blank", "noopener,noreferrer")}
            onMouseEnter={() => {
              setShowCmpsHint(true);
              setTimeout(() => setShowCmpsHint(false), 1500);
            }}
            bg="rgba(255,255,255,0.1)"
            backdropFilter="blur(6px)"
            border="1px solid rgba(0,12,102,0.45)"
            borderRadius="16px"
            p={{ base: 4, md: 5 }}
            minH={{ base: "240px", md: "320px" }}
            w={{ base: "calc(100vw - 64px)", md: "100%" }}
            flex={{ base: "0 0 auto", md: "initial" }}
            transition="0.15s ease"
            _hover={{
              bg: "rgba(255,255,255,0.30)",
              borderColor: "#000C66",
            }}
            cursor="pointer"
            display="flex"
            position="relative"
            scrollSnapAlign={{ base: "center", md: "initial" }}
          >
            <VStack w="100%" h="100%" justify="space-between" spacing={4}>
              <VStack w="100%" spacing={6}>
                <Text fontSize="xl" fontWeight="bold" color="#000C66" textAlign="center">
                  Koine Greek AI Tutor
                </Text>
                <Text fontSize="sm" color="#000C66" textAlign="left" w="100%" lineHeight="1.55">
                  Developed a real-time conversational AI tutor for language learning with speech-to-speech interaction, translation, pronunciation feedback, and context-aware dialogue.
                </Text>
              </VStack>

              <Box w="100%">
                <HStack w="100%" justify="space-between" align="flex-start">
                  <VStack align="flex-start" spacing={1}>
                    <Text fontSize="sm" fontWeight="semibold" color="#000C66">Core:</Text>
                    <Text fontSize="sm" color="#000C66">Python</Text>
                    <Text fontSize="sm" color="#000C66">Gemini Live API</Text>
                    <Text fontSize="sm" color="#000C66">PyAudio</Text>
                  </VStack>
                  <VStack align="flex-start" spacing={1}>
                    <Text fontSize="sm" fontWeight="semibold" color="#081933">Focus:</Text>
                    <Text fontSize="sm" color="#000C66">Speech-to-Speech</Text>
                    <Text fontSize="sm" color="#000C66">Pronunciation</Text>
                    <Text fontSize="sm" color="#000C66">Low Latency</Text>
                  </VStack>
                </HStack>
              </Box>
            </VStack>

            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              px={5}
              py={2}
              bg="rgba(255,255,255,0.65)"
              border="1px solid #000C66"
              borderRadius="999px"
              fontSize="sm"
              fontWeight="medium"
              color="#000C66"
              opacity={showCmpsHint ? 1 : 0}
              transition="opacity 0.75s ease"
              pointerEvents="none"
              display={{ base: "none", md: "block" }}
            >
              Click to view
            </Box>

            <IconButton
              as="a"
              href="https://github.com/KARKI2004/CMPS_3400_Project.git"
              aria-label="GitHub Repo"
              icon={<FaGithub />}
              variant="ghost"
              color="#b10f30"
              fontSize="22px"
              position="absolute"
              bottom="0"
              left="50%"
              transform="translateX(-50%)"
              _hover={{ color: "#000C66", transform: "translateX(-50%) scale(1.3)" }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          </Box>

          <Box
            role="group"
            onClick={() => window.open(CHAT_APP_URL, "_blank", "noopener,noreferrer")}
            onMouseEnter={() => {
              setShowHint(true);
              setTimeout(() => setShowHint(false), 1500);
            }}
            bg="rgba(255,255,255,0.1)"
            backdropFilter="blur(6px)"
            border="1px solid rgba(0,12,102,0.45)"
            borderRadius="16px"
            p={{ base: 4, md: 5 }}
            minH={{ base: "240px", md: "320px" }}
            w={{ base: "calc(100vw - 64px)", md: "100%" }}
            flex={{ base: "0 0 auto", md: "initial" }}
            transition="0.15s ease"
            _hover={{
              bg: "rgba(255,255,255,0.30)",
              borderColor: "#000C66",
            }}
            cursor="pointer"
            display="flex"
            position="relative"
            scrollSnapAlign={{ base: "center", md: "initial" }}
          >
            <VStack w="100%" h="100%" justify="space-between" spacing={4}>
              <VStack w="100%" spacing={6}>
                <Text fontSize="xl" fontWeight="bold" color="#000C66" textAlign="center">
                  Premature - Death Risk Classification System
                </Text>
                <Text fontSize="sm" color="#000C66" textAlign="left" w="100%" lineHeight="1.55">
                  Built a machine learning pipeline for classifying risk across 3,200 U.S. counties, focusing on preprocessing, feature engineering, and systematic model evaluation with an F1-score of 0.82 and ROC-AUC of 0.95.
                </Text>
              </VStack>

              <Box w="100%">
                <HStack w="100%" justify="space-between" align="flex-start">
                  <VStack align="flex-start" spacing={1}>
                    <Text fontSize="sm" fontWeight="semibold" color="#000C66">Core:</Text>
                    <Text fontSize="sm" color="#000C66">Python</Text>
                    <Text fontSize="sm" color="#000C66">scikit-learn</Text>
                    <Text fontSize="sm" color="#000C66">XGBoost</Text>
                  </VStack>
                  <VStack align="flex-start" spacing={1}>
                    <Text fontSize="sm" fontWeight="semibold" color="#081933">Data:</Text>
                    <Text fontSize="sm" color="#000C66">Pandas</Text>
                    <Text fontSize="sm" color="#000C66">Feature Engineering</Text>
                    <Text fontSize="sm" color="#000C66">Model Evaluation</Text>
                  </VStack>
                </HStack>
              </Box>
            </VStack>

            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              px={5}
              py={2}
              bg="rgba(255,255,255,0.65)"
              border="1px solid #000C66"
              borderRadius="999px"
              fontSize="sm"
              fontWeight="medium"
              color="#000C66"
              opacity={showHint ? 1 : 0}
              transition="opacity 0.75s ease"
              pointerEvents="none"
              display={{ base: "none", md: "block" }}
            >
              Click to view
            </Box>

            <IconButton
              as="a"
              href="https://github.com/KARKI2004/ScholarSpace.git"
              aria-label="GitHub Repo"
              icon={<FaGithub />}
              variant="ghost"
              color="#b10f30"
              fontSize="22px"
              position="absolute"
              bottom="0"
              left="50%"
              transform="translateX(-50%)"
              _hover={{ color: "#000C66", transform: "translateX(-50%) scale(1.3)" }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          </Box>

          <Box
            role="group"
            onClick={() => window.open(CLIPDROP_URL, "_blank", "noopener,noreferrer")}
            onMouseEnter={() => {
              setShowClipHint(true);
              setTimeout(() => setShowClipHint(false), 1500);
            }}
            bg="rgba(255,255,255,0.1)"
            backdropFilter="blur(6px)"
            border="1px solid rgba(0,12,102,0.45)"
            borderRadius="16px"
            p={{ base: 4, md: 5 }}
            minH={{ base: "240px", md: "320px" }}
            w={{ base: "calc(100vw - 64px)", md: "100%" }}
            flex={{ base: "0 0 auto", md: "initial" }}
            transition="0.15s ease"
            _hover={{
              bg: "rgba(255,255,255,0.30)",
              borderColor: "#000C66",
            }}
            cursor="pointer"
            display="flex"
            position="relative"
            scrollSnapAlign={{ base: "center", md: "initial" }}
          >
            <VStack w="100%" h="100%" justify="space-between" spacing={4}>
              <VStack w="100%" spacing={6}>
                <Text fontSize="xl" fontWeight="bold" color="#000C66" textAlign="center">
                  Real-Time Chat Application
                </Text>
                <Text fontSize="sm" color="#000C66" textAlign="left" w="100%" lineHeight="1.55">
                  Built a full-stack messaging platform with authentication, live communication, and event-driven updates to keep state consistent and the UI responsive.
                </Text>
              </VStack>

              <Box w="100%">
                <HStack w="100%" justify="space-between" align="flex-start">
                  <VStack align="flex-start" spacing={1}>
                    <Text fontSize="sm" fontWeight="semibold" color="#000C66">Frontend:</Text>
                    <Text fontSize="sm" color="#000C66">React</Text>
                    <Text fontSize="sm" color="#000C66">Socket.IO</Text>
                  </VStack>
                  <VStack align="flex-start" spacing={1}>
                    <Text fontSize="sm" fontWeight="semibold" color="#081933">Storage:</Text>
                    <Text fontSize="sm" color="#000C66">MongoDB</Text>
                    <Text fontSize="sm" color="#000C66">Realtime Events</Text>
                  </VStack>
                </HStack>
              </Box>
            </VStack>

            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              px={5}
              py={2}
              bg="rgba(255,255,255,0.65)"
              border="1px solid #000C66"
              borderRadius="999px"
              fontSize="sm"
              fontWeight="medium"
              color="#000C66"
              opacity={showClipHint ? 1 : 0}
              transition="opacity 0.75s ease"
              pointerEvents="none"
              display={{ base: "none", md: "block" }}
            >
              Click to view
            </Box>

            <IconButton
              as="a"
              href="https://github.com/KARKI2004/Clipdrop.git"
              aria-label="GitHub Repo"
              icon={<FaGithub />}
              variant="ghost"
              color="#b10f30"
              fontSize="22px"
              position="absolute"
              bottom="0"
              left="50%"
              transform="translateX(-50%)"
              _hover={{ color: "#000C66", transform: "translateX(-50%) scale(1.3)" }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          </Box>

          <Box
            role="group"
            onClick={() => window.open(CLIPDROP_URL, "_blank", "noopener,noreferrer")}
            onMouseEnter={() => {
              setShowProject5Hint(true);
              setTimeout(() => setShowProject5Hint(false), 1500);
            }}
            bg="rgba(255,255,255,0.1)"
            backdropFilter="blur(6px)"
            border="1px solid rgba(0,12,102,0.45)"
            borderRadius="16px"
            p={{ base: 4, md: 5 }}
            minH={{ base: "240px", md: "320px" }}
            w={{ base: "calc(100vw - 64px)", md: "100%" }}
            flex={{ base: "0 0 auto", md: "initial" }}
            transition="0.15s ease"
            _hover={{
              bg: "rgba(255,255,255,0.30)",
              borderColor: "#000C66",
            }}
            cursor="pointer"
            display="flex"
            position="relative"
            scrollSnapAlign={{ base: "center", md: "initial" }}
          >
            <VStack w="100%" h="100%" justify="space-between" spacing={4}>
              <VStack w="100%" spacing={6}>
                <Text fontSize="xl" fontWeight="bold" color="#000C66" textAlign="center">
                  Data Visualization & Processing System
                </Text>
                <Text fontSize="sm" color="#000C66" textAlign="left" w="100%" lineHeight="1.55">
                  Developed a system for structured dataset ingestion, transformation, and analysis with interactive workflows for visualization and missing-value handling.
                </Text>
              </VStack>

              <Box w="100%">
                <HStack w="100%" justify="space-between" align="flex-start">
                  <VStack align="flex-start" spacing={1}>
                    <Text fontSize="sm" fontWeight="semibold" color="#000C66">Data:</Text>
                    <Text fontSize="sm" color="#000C66">Pandas</Text>
                    <Text fontSize="sm" color="#000C66">NumPy</Text>
                  </VStack>
                  <VStack align="flex-start" spacing={1}>
                    <Text fontSize="sm" fontWeight="semibold" color="#081933">UI:</Text>
                    <Text fontSize="sm" color="#000C66">Streamlit</Text>
                    <Text fontSize="sm" color="#000C66">Analysis</Text>
                  </VStack>
                </HStack>
              </Box>
            </VStack>

            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              px={5}
              py={2}
              bg="rgba(255,255,255,0.65)"
              border="1px solid #000C66"
              borderRadius="999px"
              fontSize="sm"
              fontWeight="medium"
              color="#000C66"
              opacity={showProject5Hint ? 1 : 0}
              transition="opacity 0.75s ease"
              pointerEvents="none"
              display={{ base: "none", md: "block" }}
            >
              Click to view
            </Box>

            <IconButton
              as="a"
              href="https://github.com/KARKI2004/Clipdrop.git"
              aria-label="GitHub Repo"
              icon={<FaGithub />}
              variant="ghost"
              color="#b10f30"
              fontSize="22px"
              position="absolute"
              bottom="0"
              left="50%"
              transform="translateX(-50%)"
              _hover={{ color: "#000C66", transform: "translateX(-50%) scale(1.3)" }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          </Box>

        </SimpleGrid>
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
          aria-label="Show next project"
        >
          <ChevronRightIcon boxSize="28px" />
        </Box>
      </Box>

      </Box>
      <Box mt={12} w="100%" h="1.8px" bg="#000C66" borderRadius="20px" />
    </>
  );
}
