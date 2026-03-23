"use client"

import { Box, SimpleGrid, Text, Heading, VStack, HStack } from "@chakra-ui/react"
import { portfolioData } from "@/data/portfolio"

interface SkillBadgeProps {
  label: string
  category: string
}

const SkillBadge = ({ label, category }: SkillBadgeProps) => (
  <HStack
    bg="background.subtle"
    px={3}
    py={1.5}
    borderRadius="sm"
    border="1px solid"
    borderColor="whiteAlpha.100"
    _hover={{ borderColor: "brand", bg: "brand/5" }}
    transition="all 0.2s"
    gap={3}
    w="full"
  >
    <Text
      fontSize="10px"
      fontFamily="mono"
      color="brand"
      fontWeight="bold"
      letterSpacing="widest"
      whiteSpace="nowrap"
    >
      {category.toUpperCase()}
    </Text>
    <Box width="1px" height="12px" bg="whiteAlpha.200" />
    <Text fontSize="13px" fontWeight="medium" color="foreground.muted">
      {label}
    </Text>
  </HStack>
)

export const SkillsSection = () => {
  const skillCategories = portfolioData.skills

  return (
    <VStack align="flex-start" gap={12} w="full">
      <VStack align="flex-start" gap={4}>
        <Text
          fontSize="sm"
          fontWeight="bold"
          color="brand"
          fontFamily="mono"
          letterSpacing="widest"
        >
          TECHNICAL CAPABILITIES
        </Text>
        <Heading as="h2" size="2xl" fontWeight="black" letterSpacing="tight">
          SKILLS & <Text as="span" color="brand">STACK</Text>
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
