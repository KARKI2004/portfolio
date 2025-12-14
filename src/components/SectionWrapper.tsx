import type { ReactNode } from "react";

import { Box } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

const SectionWrapper = ({ children }: Props) => {
  return (
    <Box
      padding="40px"
      bg="gray.50"
      minHeight="80vh"
      borderRadius="lg"
      marginLeft="110px"
      marginTop="90px"
    >
      {children}
    </Box>
  );
};

export default SectionWrapper;
