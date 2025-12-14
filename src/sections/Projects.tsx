import { Box, SimpleGrid, VStack, Text, HStack, IconButton } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import scholarspaceVideo from "../assets/scholarspace.mp4";



export default function Projects() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <Box id="projects" w="100%" pl={{ base: 4, lg: 10, xl: 16 }} pr={{ base: 4, lg: 10, xl: 16 }} mt={16} pb={16}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="100%">
          <Box
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
                <HStack w="100%" justify="space-between" align="flex-start" alignItems="flex-start">  {/* align to bottom */}
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


            <IconButton
              as="a"
              href="https://github.com/"
              aria-label="GitHub Repo"
              icon={<FaGithub />}
              variant="ghost"
              color="#b10f30"
              fontSize="22px"
              position="absolute"
              bottom="0"
              transform="translateX(-50%)"
              _hover={{ color: "#000C66", transform: "translateX(-50%) scale(1.3)" }}
            />
          </Box>

          <Box
            onClick={() => setShowVideo(true)}
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
                <HStack w="100%" justify="space-between" align="flex-start" alignItems="flex-start">
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

            <IconButton
              as="a"
              href="https://github.com/"
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
            />
          </Box>

        </SimpleGrid>
      </Box>

      <Box w="100%" h="0.1px" bg="#000C66" borderRadius="20px" mt={0} />
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
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={scholarspaceVideo}
              controls
              autoPlay
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </Box>
        </Box>
      )}

    </>
  );
}
