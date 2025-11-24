import { Button, Heading, Box, Text, Stack } from "@chakra-ui/react";

export default function App() {
  return (
    <Box className="h-screen flex flex-col justify-center items-center bg-gray-50">
      <Heading mb={4} color="teal.500">
        Chakra UI + Tailwind ✅
      </Heading>
      <Text fontSize="xl" color="gray.600" textAlign="center" mb={6}>
        Your setup is healthy — Shadcn was the issue, not your system.
      </Text>
      <Stack direction="row" spacing={4}>
        <Button colorScheme="teal" size="lg">
          Chakra Works!
        </Button>
        <Button variant="outline" colorScheme="teal" size="lg">
          Tailwind Works Too!
        </Button>
      </Stack>
    </Box>
  );
}
