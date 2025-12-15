import { Box, SimpleGrid } from "@chakra-ui/react";

const skills = [
  "Python", "Java", "C", "C#", "JavaScript", "TypeScript",

  "React", "Node.js", ".NET",
  "Pandas", "NumPy",

  "HTML", "CSS", "Tailwind CSS", "UI/UX",

  "REST APIs", "Authentication",

  "SQL Server", "MongoDB", "Oracle",

  "Git + GitHub", "npm", "Postman",
  "VS Code", "Visual Studio"
];

export default function Skills() {
  return (
    <>
      <Box
        id="skills"
        w="100%"
        mx="auto"
        maxW={{ base: "680px", md: "100%" }}
        pl={{ base: 4, lg: 10, xl: 16 }}
        pr={{ base: 4, lg: 10, xl: 16 }}
        pt={{ base: 0, lg: 0 }}
        pb={20}
        mt={{ base: 0, lg: -3 }}
      >

        <SimpleGrid
          columns={{ base: 3, sm: 3, xl: 6 }}
          spacing={4}
          w="100%"
          minChildWidth="0"
        >
          {skills.map((skill) => (
            <Box
              key={skill}
              bg="rgba(255,255,255,0.1)"
              backdropFilter="blur(2px)"
              border="1px solid rgba(0, 12, 102, 0.35)"
              borderRadius="14px"
              py={2.5}
              px={3}
              textAlign="center"
              fontSize="sm"
              fontWeight="medium"
              color="#000C66"
              transition="all 0.15s ease"
              _hover={{
                bg: "rgba(255,255,255,0.30)",
                borderColor: "#000C66",
              }}
            >
              {skill}
            </Box>
          ))}

        </SimpleGrid>
      </Box>

      <Box
        w="100%"
        h="0.1px"
        bg="#000C66"
        borderRadius="20px"
        mt={-4}
      />
    </>
  );
}
