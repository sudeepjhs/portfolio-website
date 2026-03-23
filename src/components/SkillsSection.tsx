"use client"

import { Box, SimpleGrid, Text, Heading, VStack, HStack, Container, Progress } from "@chakra-ui/react"

interface SkillBadgeProps {
  label: string
  category: string
}

const SkillBadge = ({ label, category }: SkillBadgeProps) => (
  <HStack 
    bg="whiteAlpha.100" 
    px={3} 
    py={1.5} 
    borderRadius="sm" 
    border="1px solid" 
    borderColor="whiteAlpha.100"
    _hover={{ borderColor: "#a3e635", bg: "rgba(163, 230, 53, 0.05)" }}
    transition="all 0.2s"
    gap={3}
  >
    <Text 
      fontSize="10px" 
      fontFamily="var(--font-geist-mono)" 
      color="#a3e635" 
      fontWeight="bold"
      letterSpacing="widest"
    >
      {category.toUpperCase()}
    </Text>
    <Box width="1px" height="12px" bg="whiteAlpha.200" />
    <Text fontSize="13px" fontWeight="medium" color="whiteAlpha.800">
      {label}
    </Text>
  </HStack>
)

export const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Chakra UI", "Framer Motion", "D3.js"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Prisma", "PostgreSQL", "NextAuth", "APIs", "Serverless"]
    },
    {
      category: "Tools",
      skills: ["Git", "Docker", "pnpm", "Vite", "Figma", "Stitch"]
    }
  ]

  return (
    <VStack align="flex-start" gap={12} w="full">
      <VStack align="flex-start" gap={4}>
        <Text 
          fontSize="sm" 
          fontWeight="bold" 
          color="#a3e635" 
          fontFamily="var(--font-geist-mono)"
          letterSpacing="widest"
        >
          TECHNICAL CAPABILITIES
        </Text>
        <Heading size="2xl" fontWeight="black" letterSpacing="tight">
          SKILLS & <Text as="span" color="#a3e635">STACK</Text>
        </Heading>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 3 }} gap={10} w="full">
        {skillCategories.map((cat) => (
          <VStack key={cat.category} align="flex-start" gap={6}>
            <Text 
              fontSize="xs" 
              fontWeight="black" 
              color="whiteAlpha.400" 
              letterSpacing="widest"
              fontFamily="var(--font-geist-mono)"
            >
              / {cat.category.toUpperCase()}
            </Text>
            <SimpleGrid columns={1} gap={3} w="full">
              {cat.skills.map((skill) => (
                <SkillBadge key={skill} label={skill} category={cat.category} />
              ))}
            </SimpleGrid>
          </VStack>
        ))}
      </SimpleGrid>
    </VStack>
  )
}
