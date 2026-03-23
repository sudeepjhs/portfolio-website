"use client"

import { Box, Container, Heading, Text, VStack, HStack, Circle } from "@chakra-ui/react"
import { portfolioData } from "@/data/portfolio"

const ExperienceItem = ({ exp }: { exp: any }) => (
  <VStack align="flex-start" gap={4} w="full" position="relative" pb={12}>
    <HStack gap={6} w="full">
      <VStack align="flex-start" gap={0} flex={1}>
        <Text
          fontSize="xs"
          color="brand"
          fontFamily="mono"
          fontWeight="bold"
          letterSpacing="widest"
        >
          {exp.period.toUpperCase()}
        </Text>
        <Heading as="h3" size="lg" fontWeight="black" mt={1}>
          {exp.role} <Text as="span" color="whiteAlpha.400" fontWeight="light">@</Text> {exp.company}
        </Heading>
        <Text fontSize="sm" color="whiteAlpha.500" mt={1}>
          {exp.location}
        </Text>
      </VStack>
    </HStack>

    <VStack align="flex-start" gap={2} pl={{ base: 0, md: 4 }} borderLeft={{ base: "none", md: "1px solid" }} borderColor="whiteAlpha.200">
      {exp.description.map((item: string, idx: number) => (
        <HStack key={idx} align="flex-start" gap={4}>
          <Text color="brand" mt={1}>→</Text>
          <Text color="foreground.muted" fontSize="md">{item}</Text>
        </HStack>
      ))}
    </VStack>
  </VStack>
)

export const ExperienceSection = () => {
  return (
    <Box as="section" py={24} id="experience">
      <Container maxW="7xl">
        <VStack align="flex-start" gap={16}>
          <VStack align="flex-start" gap={4}>
            <Text
              fontSize="sm"
              fontWeight="bold"
              color="brand"
              fontFamily="mono"
              letterSpacing="widest"
            >
              / PROFESSIONAL JOURNEY
            </Text>
            <Heading as="h2" size="3xl" fontWeight="black" letterSpacing="tighter">
              WORK <Text as="span" color="brand">EXPERIENCE</Text>
            </Heading>
          </VStack>

          <VStack align="flex-start" gap={0} w="full">
            {portfolioData.experience.map((exp, idx) => (
              <ExperienceItem key={idx} exp={exp} />
            ))}
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}
