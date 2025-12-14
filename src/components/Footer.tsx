import { Box, keyframes } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const CREAM = "#e0d3af";
  const [show, setShow] = useState(false);
  const hideTimer = useRef<number | null>(null);

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

    const handleScroll = () => {
      if (!isShortPage() && isAtBottom()) {
        showTemporarily();
      }
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

  return (
    <Box
      position="absolute"
      right="-20"
      bottom="0"
      w={{ base: "240px", md: "300px" }}
      h={{ base: "140px", md: "170px" }}
      zIndex={20}
      opacity={show ? 1 : 0}
      pointerEvents="none"
      animation={show ? `${slideUp} 0.6s ease-out` : ""}
      transition="opacity 0.6s ease-out"
    >
      <svg width="100%" height="100%" viewBox="0 0 300 170">
        <defs>
          <pattern
            id="leather"
            patternUnits="userSpaceOnUse"
            width="300"
            height="300"
          >
            <image
              href="/src/assets/leatherSpine.png"
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
          x="210"
          y="125"
          textAnchor="end"
          fontSize="16"
          fontWeight="600"
          fill={CREAM}
        >
          one line at a time.
        </text>
      </svg>
    </Box>
  );
}
