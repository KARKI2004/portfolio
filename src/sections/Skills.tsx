import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "Java", "C", "C#", "JavaScript", "TypeScript"],
  },
  {
    label: "Frameworks\n& Libraries",
    skills: ["React", "Node.js", ".NET", "Pandas", "NumPy"],
  },
  {
    label: "Frontend",
    skills: ["HTML", "CSS", "Tailwind", "UI/UX"],
  },
  {
    label: "Backend",
    skills: ["REST APIs", "Auth"],
  },
  {
    label: "Databases",
    skills: ["SQL Server", "MongoDB", "Oracle"],
  },
  {
    label: "Tools",
    skills: ["Git/GitHub", "npm", "Postman", "VS Code", "WordPress"],
  },
];

export default function Skills() {
  return (
    <>
      <Box
        id="skills"
        w="100%"
        maxW={{ base: "680px", md: "100%" }}
        pl={{ base: 4, lg: 10, xl: 16 }}
        pr={{ base: 4, lg: 10, xl: 16 }}
        pt={{ base: 0, lg: 0 }}
        pb={20}
        mt={{ base: 0, lg: -3 }}
      >
        <SimpleGrid
          columns={{ base: 2, md: 3, xl: 6 }}
          spacing={{ base: 4, md: 6, xl: 10 }}
          w="100%"
        >
          {skillGroups.map((group) => (
            <Box
              key={group.label}
              bg="rgba(255,255,255,0.10)"
              backdropFilter="blur(4px)"
              border="none"
              borderRadius={{ base: "12px", md: "14px" }}
              py={{ base: 3, md: 4 }}
              px={{ base: 3, md: 4 }}
              minH={{ base: "180px", md: "210px" }}
            >
              <VStack align="stretch" spacing={2}>
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="bold"
                  color="#000C66"
                  textAlign="center"
                  whiteSpace="pre-line"
                >
                  {group.label}
                </Text>
                <Box w="100%" h="1px" bg="rgba(0,12,102,0.35)" />
                <VStack spacing={1.5} align="center">
                  {group.skills.map((skill) => (
                    <Text key={skill} fontSize={{ base: "sm", md: "md" }} color="#000C66">
                      {skill}
                    </Text>
                  ))}
                </VStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Box
        w="100%"
        h="2.1px"
        bg="#000C66"
        opacity={0.5}
        borderRadius="20px"
        mt={-4}
      />
    </>
  );
}
