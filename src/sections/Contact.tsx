import { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Input,
  Textarea,
  Button,
  Flex,
} from "@chakra-ui/react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = () => {
    if (!subject || !message || !name) return;

    const to = "karkisuyognp@gmail.com"; 

    const body = `${message}\n\nBest regards,\n${name}`;
    const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <>
      <Box
        id="contact"
        w="100%"
        pl={{ base: 4, lg: 10, xl: 16 }}
        pr={{ base: 4, lg: 10, xl: 16 }}
        mt={16}
        pb={16}
      >
        <Box
          bg="rgba(255,255,255,0.1)"
          backdropFilter="blur(6px)"
          border="1px solid rgba(0,12,102,0.45)"
          borderRadius="16px"
          p={8}
          w="100%"
          transition="0.15s ease"
          _hover={{
            bg: "rgba(255,255,255,0.30)",
            borderColor: "#000C66",
          }}
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            w="100%"
            gap={8}
            justify="space-between"
          >
            <Box flex="0.8">
              <Text
                fontSize="md"
                color="#000C66"
                lineHeight="1.7"
                textAlign="left"
              >
                I’m open to internships, collaborations, and software
                development projects. If you’d like to work together or have an
                opportunity to share, feel free to contact me. I enjoy building
                clean, efficient systems and working with people who value good
                engineering.
              </Text>
            </Box>

            <Box
              display={{ base: "none", md: "block" }}
              w="1px"
              bg="#000C66"
              borderRadius="20px"
            />

            <Box flex="1.6">
              <VStack spacing={4}>
                <Input
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  color="#000C66"
                  border="1px solid rgba(0,12,102,0.45)"
                  _hover={{
                    bg: "rgba(255,255,255,0.45)",
                    borderColor: "#000C66",
                  }}
                  required
                />

                <Textarea
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  color="#000C66"
                  border="1px solid rgba(0,12,102,0.45)"
                  _hover={{
                    bg: "rgba(255,255,255,0.45)",
                    borderColor: "#000C66",
                  }}
                  rows={7}
                  required
                />

                <HStack w="100%">
                  <Input
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    color="#000C66"
                    border="1px solid rgba(0,12,102,0.45)"
                    _hover={{
                      bg: "rgba(255,255,255,0.50)",
                      borderColor: "#000C66",
                    }}
                    required
                  />
                </HStack>

                <Box w="100%" display="flex" justifyContent="flex-end" mt={2}>
                  <Button
                    onClick={handleSendEmail}
                    color="#e0d3af"
                    px={10}
                    borderRadius="10px"
                    transition="0.25s ease"
                    _hover={{ transform: "scale(1.05)" }}
                    sx={{
                      backgroundColor: "#b10f30",
                      backgroundImage:
                        "url('https://www.transparenttextures.com/patterns/dark-denim-3.png')",
                      backgroundSize: "auto",
                    }}
                  >
                    Send via Email
                  </Button>
                </Box>
              </VStack>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Box w="100%" h="0.1px" bg="#000C66" borderRadius="20px" mt={0} />
    </>
  );
}
