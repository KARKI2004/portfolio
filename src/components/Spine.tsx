import { Box, VStack, Text, Avatar, Fade } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SocialIcons from "./SocialIcons";

const sectionOffset: Record<string, number> = {
  about: 0,
  skills: 80,
  projects: 160,
  experience: 240,
  contact: 320,
};

const Spine = () => {
  const [showMini, setShowMini] = useState(false);
  const [active, setActive] = useState<keyof typeof sectionOffset>("about");
  const [isManuallyScrolling, setIsManuallyScrolling] = useState(false);

  const [hovered, setHovered] = useState<string | null>(null);
  const [hoverTimer, setHoverTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const HOVER_DELAY = 300;

  const sections: (keyof typeof sectionOffset)[] = [
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];
  const SCROLL_OFFSET: Record<keyof typeof sectionOffset, number> = {
    about: -60,
    skills: -140,
    projects: -90,
    experience: -90,
    contact: -80,
  };

  const scrollToWithOffset = (id: string, offset: number = -80) => {
    const el = document.getElementById(id);
    if (!el) return;

    setIsManuallyScrolling(true);
    const top = el.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top, behavior: "smooth" });

    setTimeout(() => setIsManuallyScrolling(false), 650);
  };

  useEffect(() => {
    const target = document.getElementById("about");
    if (!target) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries?.[0];
        if (!entry) return;
        setShowMini(!entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    obs.observe(target);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        (entries) => {
          const entry = entries?.[0];
          if (!entry) return;

          if (!isManuallyScrolling && entry.isIntersecting) {
            setActive(id);
          }
        },
        { threshold: 0.7 }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isManuallyScrolling]);

  const subsections: Record<string, string[]> = {
    about: [],
    skills: ["Languages", "Frameworks & Libraries", "Frontend", "Backend", "Databases", "Tools"],
    projects: ["Real-Time Chat Application", "ScholarSpace"],
    experience: ["Research Assistant", "Software Intern", "Network Operator"],
    contact: ["Send Message"],
  };

  return (
    <Box
      position="fixed"
      left="0"
      top="0"
      bottom="0"
      width="225px"
      bg="#081933"
      backgroundImage={`url("/assets/leatherSpine.png")`}
      backgroundSize="cover"
      color="white"
      pt="20px"
      px="1"
      display={{ base: "none", md: "flex" }}
      flexDirection="column"
      alignItems="center"
      zIndex="50"
      borderTopRightRadius="9px"
      borderBottomRightRadius="9px"
      overflow="hidden"
      boxShadow="
        3px 0 4px rgba(0,0,0,0.45),
        3px 0 4px rgba(0,0,0,0.25)
      "
    >

      <Box as="style">{`
        @keyframes subtreeFade {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</Box>

      <Box
        position="absolute"
        inset="0"
        pointerEvents="none"
        sx={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/dark-denim-3.png')",
          opacity: 0.1,
        }}
      />

      <Box
        position="absolute"
        left="45px"
        top="230"
        bottom="0"
        width="2px"
        zIndex={1}
        sx={{
          backgroundColor: "#b10f30",
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/dark-denim-3.png')",
          backgroundSize: "auto",
          opacity: 0.85,
        }}
      />


      <Fade in={showMini} transition={{ enter: { duration: 0.45, ease: "easeOut" }, exit: { duration: 0.35, ease: "easeIn" } }}>
        <VStack
          spacing={2}
          mt="7px"
          zIndex={10}
          opacity={showMini ? 1 : 0.6}
          transform={showMini ? "scale(1)" : "scale(0.95)"}
          transition="opacity 0.30s ease-out, transform 0.20s ease-out"
        >
          <Avatar
          src="/assets/Profile.jpg"
          boxSize="130px" />
          <SocialIcons inSpine />
        </VStack>
      </Fade>

      <VStack
        spacing={12}
        align="flex-start"
        width="100%"
        mt="70px"
        pl="60px"
        position="relative"
        zIndex={5}
        opacity={0.85}
      >

        <Box
          position="absolute"
          left="37px"
          top={`${sectionOffset[active]}px`}
          width="9px"
          height="9px"
          bg="#d9c89a"
          borderRadius="full"
          boxShadow="0 0 6px rgba(255,255,255,0.9)"
          transition="top 0.40s ease"
          zIndex={20}
        />


        {sections.map((sec) => {
          const subs = subsections[sec] ?? [];

          return (
            <Box key={sec} width="100%">

              <Text
                fontSize="lg"
                fontWeight="bold"
                color="#e0d3af"
                cursor="pointer"
                onClick={() => scrollToWithOffset(sec, SCROLL_OFFSET[sec])}
                onMouseEnter={() => {
                  const t = setTimeout(() => setHovered(sec), HOVER_DELAY);
                  setHoverTimer(t);
                }}
                onMouseLeave={() => {
                  if (hoverTimer) clearTimeout(hoverTimer);
                  setHoverTimer(null);
                  setHovered(null);
                }}
                transition="transform 0.18s ease"
                transform={active === sec ? "scale(1.08)" : "scale(1)"}
                _hover={{ transform: "scale(1.08)" }}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </Text>
              {(active === sec || hovered === sec) && subs.length > 0 && (
                <VStack
                  spacing={1.5}
                  mt={2}
                  pl={4}
                  align="flex-start"
                  animation="subtreeFade 0.25s ease forwards"
                >
                  {subs.map((sub) => (
                    <Box
                      key={sub}
                      display="flex"
                      alignItems="flex-start"
                      cursor="pointer"
                      onClick={() => scrollToWithOffset(sec)}
                      _hover={{ opacity: 1 }}
                    >
                      <Box as="span" fontSize="sm" opacity={0.75} width="10px">
                        •
                      </Box>
                      <Text fontSize="sm" color="#e0d3af" opacity={0.95} ml={1}>
                        {sub}
                      </Text>
                    </Box>
                  ))}
                </VStack>
              )}
            </Box>
          );
        })}
      </VStack>
    </Box>
  );
};

export default Spine;
