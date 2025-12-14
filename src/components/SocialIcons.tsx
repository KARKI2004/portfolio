import { HStack, IconButton } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

type Props = {
  inSpine?: boolean; // ← NEW (default false)
};

const SocialIcons = ({ inSpine = false }: Props) => {
  return (
    <HStack spacing={4} p={0} m={0}>

      <IconButton
        as="a"
        href="https://linkedin.com"
        aria-label="LinkedIn"
        icon={<FaLinkedin />}
        variant="ghost"
        color="#b10f30"
        fontSize="20px"
        minW="28px"
        h="28px"
        p={0}
        _hover={{
          color: inSpine ? "#e0d3af" : "#000C66",   // ← FIXED HOVER COLOR
          transform: "scale(1.4)",
        }}
        transition="transform 0.2s ease, color 0.2s ease"
      />

      <IconButton
        as="a"
        href="https://github.com"
        aria-label="GitHub"
        icon={<FaGithub />}
        variant="ghost"
        color="#b10f30"
        fontSize="20px"
        minW="28px"
        h="28px"
        p={0}
        _hover={{
          color: inSpine ? "#e0d3af" : "#000C66",
          transform: "scale(1.4)",
        }}
        transition="transform 0.2s ease, color 0.2s ease"
      />

      <IconButton
        as="a"
        href="mailto:you@mail.com"
        aria-label="Email"
        icon={<FaEnvelope />}
        variant="ghost"
        color="#b10f30"
        fontSize="20px"
        minW="28px"
        h="28px"
        p={0}
        _hover={{
          color: inSpine ? "#e0d3af" : "#000C66",
          transform: "scale(1.4)",
        }}
        transition="transform 0.2s ease, color 0.2s ease"
      />

    </HStack>
  );
};

export default SocialIcons;
