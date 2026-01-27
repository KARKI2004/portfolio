import { Box, HStack, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const sections = ["about", "skills", "projects", "experience", "contact"] as const;

const SCROLL_OFFSET: Record<(typeof sections)[number], number> = {
  about: -60,
  skills: -140,
  projects: -90,
  experience: -90,
  contact: -80,
};

export default function MobileNav() {
  const [active, setActive] = useState<(typeof sections)[number]>("about");
  const [isManuallyScrolling, setIsManuallyScrolling] = useState(false);
  const rafId = useRef<number | null>(null);

  const scrollToWithOffset = (id: (typeof sections)[number]) => {
    const el = document.getElementById(id);
    if (!el) return;

    setIsManuallyScrolling(true);
    const top = el.getBoundingClientRect().top + window.pageYOffset + SCROLL_OFFSET[id];
    window.scrollTo({ top, behavior: "smooth" });
    setTimeout(() => setIsManuallyScrolling(false), 650);
  };

  useEffect(() => {
    const getActiveSection = () => {
      const viewportAnchor = 120;
      let current: (typeof sections)[number] = "about";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top - viewportAnchor <= 0) {
          current = id;
        }
      }

      if (!isManuallyScrolling) setActive(current);
    };

    const onScroll = () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(getActiveSection);
    };

    getActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isManuallyScrolling]);

  return (
    <Box
      position="fixed"
      left="0"
      right="0"
      bottom="0"
      zIndex={30}
      display={{ base: "block", md: "none" }}
      bg="#081933"
      borderTop="1px solid rgba(224, 211, 175, 0.18)"
      sx={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/dark-denim-3.png')",
        backgroundSize: "auto",
      }}
      px={4}
      py={3.5}
    >
      <HStack justify="space-between" align="center">
        {sections.map((sec) => (
          <Text
            key={sec}
            fontSize="xs"
            letterSpacing="0.02em"
            textTransform="capitalize"
            color={active === sec ? "#fff6dc" : "rgba(224, 211, 175, 0.7)"}
            textShadow={
              active === sec
                ? "0 0 10px rgba(255, 246, 220, 0.9), 0 0 22px rgba(255, 230, 170, 0.85), 0 0 36px rgba(255, 220, 150, 0.75)"
                : "none"
            }
            borderBottom={active === sec ? "2px solid #b10f30" : "2px solid transparent"}
            pb="2px"
            cursor="pointer"
            onClick={() => scrollToWithOffset(sec)}
          >
            {sec}
          </Text>
        ))}
      </HStack>
    </Box>
  );
}
