import { Box, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const sections = ["skills", "projects", "experience", "leadership", "contact"] as const;

const SCROLL_OFFSET: Record<(typeof sections)[number], number> = {
  skills: -140,
  projects: -90,
  experience: -90,
  leadership: -90,
  contact: -80,
};

export default function MobileNav() {
  const [active, setActive] = useState<(typeof sections)[number]>("skills");
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
      const anchor = Math.round(window.innerHeight * 0.35);
      let current: (typeof sections)[number] = "skills";
      let found = false;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= anchor && rect.bottom >= anchor) {
          current = id;
          found = true;
          break;
        }
        if (rect.top <= anchor) current = id;
      }

      if (!isManuallyScrolling) setActive(found ? current : current);
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
      px={2}
      py={4.5}
    >
      <Box
        display="grid"
        gridTemplateColumns={`repeat(${sections.length}, minmax(0, 1fr))`}
        columnGap="4px"
        alignItems="center"
      >
        {sections.map((sec) => (
          <Box
            as="button"
            key={sec}
            w="100%"
            minW={0}
            h="30px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            px={0.5}
            py={1}
            borderRadius={active === sec ? "9px" : "0"}
            bg={active === sec ? "rgba(224, 211, 175, 0.95)" : "transparent"}
            transition="background-color 0.18s ease, border-radius 0.18s ease"
            cursor="pointer"
            onClick={() => scrollToWithOffset(sec)}
          >
            <Text
              fontSize="11px"
              letterSpacing="0.01em"
              textTransform="capitalize"
              color={active === sec ? "#000C66" : "rgba(224, 211, 175, 0.78)"}
              transition="color 0.18s ease"
              whiteSpace="nowrap"
              textAlign="center"
            >
              {sec}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
