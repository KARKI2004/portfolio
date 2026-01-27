import { Box, keyframes, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const CREAM = "#e0d3af";
  const [show, setShow] = useState(false);
  const hideTimer = useRef<number | null>(null);
  const lastScrollY = useRef(0);

  const isMobile = useBreakpointValue({ base: true, md: false });

  const slideUp = keyframes`
    from { transform: translateY(40px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  `;

  const showTemporarily = () => {
    setShow(true);

    if (hideTimer.current) {
      window.clearTimeout(hideTimer.current);
    }

    hideTimer.current = window.setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  useEffect(() => {
    const isShortPage = () =>
      document.body.offsetHeight <= window.innerHeight + 5;

    const isAtBottom = () =>
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 5;

    const getDividerY = () => {
      const el = document.getElementById("experience-contact-divider");
      return el ? el.offsetTop : null;
    };

    const handleScroll = () => {
      const currentY = window.scrollY;
      const dividerY = getDividerY();

      // Hide immediately when scrolling up
      if (currentY < lastScrollY.current) {
        setShow(false);
      }

      // Hide when above Experience → Contact divider
      if (dividerY !== null && currentY < dividerY) {
        setShow(false);
      }

      // Existing bottom-of-page behavior
      if (!isShortPage() && isAtBottom()) {
        showTemporarily();
      }

      lastScrollY.current = currentY;
    };

    const handleWheel = (e: WheelEvent) => {
      if (isShortPage() && e.deltaY > 0) {
        showTemporarily();
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
    };
  }, []);

  // Do not render on mobile
  if (isMobile) return null;

  return (
    <Box
      position="fixed"
      right="0"
      bottom="0"
      w={{ base: "230px", md: "230px" }}
      h={{ base: "140px", md: "160px" }}
      maxW="100vw"
      overflow="hidden"
      zIndex={20}
      opacity={show ? 1 : 0}
      pointerEvents="none"
      animation={show ? `${slideUp} 0.6s ease-out` : ""}
      transition="opacity 0.6s ease-out"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 230 160"
        preserveAspectRatio="xMaxYMax slice"
      >
        <defs>
          <pattern
            id="leather"
            patternUnits="userSpaceOnUse"
            width="300"
            height="300"
          >
            <image
              href="/assets/leatherSpine.png"
              width="450"
              height="450"
              preserveAspectRatio="xMidYMid slice"
            />
          </pattern>

          <pattern
            id="grain"
            patternUnits="userSpaceOnUse"
            width="300"
            height="300"
          >
            <image
              href="https://www.transparenttextures.com/patterns/dark-denim-3.png"
              width="300"
              height="300"
            />
          </pattern>
        </defs>

        <path
          d="M230,160 H40 a40,40 0 1 1 10,-79 a55,45 0 1 1 95,-23 a65,55 0 1 1 85,47 H230 Z"
          fill="url(#leather)"
        />

        <path
          d="M230,160 H40 a40,40 0 1 1 10,-79 a55,45 0 1 1 95,-23 a65,55 0 1 1 85,47 H230 Z"
          fill="url(#grain)"
          opacity="0.1"
        />

        <text
          y="118"
          textAnchor="end"
          fontSize="12"
          fontWeight="400"
          fill={CREAM}
          opacity="0.75"
        >
          <tspan x="210" dy="0">© 2026 Suyog Karki</tspan>
          <tspan x="210" dy="18">Built with React &amp; TypeScript</tspan>
        </text>
      </svg>
    </Box>
  );
}
