import { Box, SimpleGrid, VStack, Text, HStack, IconButton } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

const DRIVE_EMBED =
  "https://drive.google.com/file/d/1XPWq8ElL6Nkq-SVIhqJDq02nXTnSHtA0/preview";
const CHAT_APP_URL = "https://chatbox-61u8.onrender.com/";
const CLIPDROP_URL =
  "https://chromewebstore.google.com/detail/clipdrop/iidcfkmndhkjhanfcbelgglmciaemgei";

export default function Projects() {
  const [showVideo, setShowVideo] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showChatHint, setShowChatHint] = useState(false);
  const [showClipHint, setShowClipHint] = useState(false);

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
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="100%">
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
            p={5}
            minH="320px"
            transition="0.15s ease"
            _hover={{
              bg: "rgba(255,255,255,0.30)",
              borderColor: "#000C66",
            }}
            cursor="pointer"
            display="flex"
            position="relative"
          >
            <VStack w="100%" h="100%" justify="space-between" spacing={4}>
              <VStack w="100%" spacing={6}>
                <Text fontSize="xl" fontWeight="bold" color="#000C66" textAlign="center">
                  Real-Time Chat Application
                </Text>
                <Text fontSize="sm" color="#000C66" textAlign="left" w="100%" lineHeight="1.55">
                  A secure real-time chat app with email login, built using React/Vite and a Node.js + MongoDB backend.
                </Text>
              </VStack>

              <Box w="100%">
                <HStack w="100%" justify="space-between" align="flex-start">
                  <VStack align="flex-start" spacing={1}>
                    <Text fontSize="sm" fontWeight="semibold" color="#000C66">Frontend:</Text>
                    <Text fontSize="sm" color="#000C66">React</Text>
                    <Text fontSize="sm" color="#000C66">Vite</Text>
                    <Text fontSize="sm" color="#000C66">JavaScript</Text>
                  </VStack>
                  <VStack align="flex-start" spacing={1}>
                    <Text fontSize="sm" fontWeight="semibold" color="#081933">Backend:</Text>
                    <Text fontSize="sm" color="#000C66">MongoDB</Text>
                    <Text fontSize="sm" color="#000C66">Node.js</Text>
                    <Text fontSize="sm" color="#000C66">Express</Text>
                    <Text fontSize="sm" color="#000C66">Auth</Text>
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
            onClick={() => setShowVideo(true)}
            onMouseEnter={() => {
              setShowHint(true);
              setTimeout(() => setShowHint(false), 1500);
            }}
            bg="rgba(255,255,255,0.1)"
            backdropFilter="blur(6px)"
            border="1px solid rgba(0,12,102,0.45)"
            borderRadius="16px"
            p={5}
            minH="320px"
            transition="0.15s ease"
            _hover={{
              bg: "rgba(255,255,255,0.30)",
              borderColor: "#000C66",
            }}
            cursor="pointer"
            display="flex"
            position="relative"
          >
            <VStack w="100%" h="100%" justify="space-between" spacing={4}>
              <VStack w="100%" spacing={6}>
                <Text fontSize="xl" fontWeight="bold" color="#000C66" textAlign="center">
                  ScholarSpace Web App
                </Text>
                <Text fontSize="sm" color="#000C66" textAlign="left" w="100%" lineHeight="1.55">
                  A student platform for posts and threaded discussions, built with TypeScript/React and a C#/.NET + SQL Server backend.
                </Text>
              </VStack>

              <Box w="100%">
                <HStack w="100%" justify="space-between" align="flex-start">
                  <VStack align="flex-start" spacing={1}>
                    <Text fontSize="sm" fontWeight="semibold" color="#000C66">Frontend:</Text>
                    <Text fontSize="sm" color="#000C66">TypeScript</Text>
                    <Text fontSize="sm" color="#000C66">React</Text>
                  </VStack>
                  <VStack align="flex-start" spacing={1}>
                    <Text fontSize="sm" fontWeight="semibold" color="#000C66">Backend:</Text>
                    <Text fontSize="sm" color="#000C66">C#</Text>
                    <Text fontSize="sm" color="#000C66">.NET</Text>
                    <Text fontSize="sm" color="#000C66">SQL Server</Text>
                    <Text fontSize="sm" color="#000C66">Auth</Text>
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
            p={5}
            minH="320px"
            transition="0.15s ease"
            _hover={{
              bg: "rgba(255,255,255,0.30)",
              borderColor: "#000C66",
            }}
            cursor="pointer"
            display="flex"
            position="relative"
          >
            <VStack w="100%" h="100%" justify="space-between" spacing={4}>
              <VStack w="100%" spacing={6}>
                <Text fontSize="xl" fontWeight="bold" color="#000C66" textAlign="center">
                  ClipDrop Browser Extension
                </Text>
                <Text fontSize="sm" color="#000C66" textAlign="left" w="100%" lineHeight="1.55">
                  A privacy-first, session-only multi-snippet extension that captures Ctrl+C text, stores up to six snippets, and clears automatically when the browser closes.
                </Text>
              </VStack>

              <Box w="100%">
                <HStack w="100%" justify="space-between" align="flex-start">
                  <VStack align="flex-start" spacing={1}>
                    <Text fontSize="sm" fontWeight="semibold" color="#000C66">Platform:</Text>
                    <Text fontSize="sm" color="#000C66">Chrome Extension</Text>
                    <Text fontSize="sm" color="#000C66">Manifest V3</Text>
                    <Text fontSize="sm" color="#000C66">JavaScript</Text>
                  </VStack>
                  <VStack align="flex-start" spacing={1}>
                    <Text fontSize="sm" fontWeight="semibold" color="#081933">Core:</Text>
                    <Text fontSize="sm" color="#000C66">Content Scripts</Text>
                    <Text fontSize="sm" color="#000C66">Service Worker</Text>
                    <Text fontSize="sm" color="#000C66">Session Storage</Text>
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
        </SimpleGrid>
      </Box>

      <Box mt={12} w="100%" h="1.8px" bg="#000C66" borderRadius="20px" />

      {showVideo && (
        <Box
          position="fixed"
          top="0"
          left="0"
          w="100vw"
          h="100vh"
          bg="rgba(0,0,0,0.6)"
          backdropFilter="blur(6px)"
          zIndex={100}
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={() => setShowVideo(false)}
        >
          <Box
            w="80%"
            maxW="900px"
            h="500px"
            bg="black"
            borderRadius="12px"
            overflow="hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/TqNQOgE7iCI"
              width="100%"
              height="100%"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </Box>
        </Box>
      )}
    </>
  );
}
