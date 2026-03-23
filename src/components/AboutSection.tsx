"use client"

import { Box, Container, Heading, Text, VStack, SimpleGrid, Icon } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { LuTarget, LuAward, LuZap } from "react-icons/lu"

const AboutFeature = ({ icon, title, description }: { icon: any, title: string, description: string }) => (
  <VStack align="flex-start" gap={4} p={6} bg="whiteAlpha.50" borderRadius="md" border="1px solid" borderColor="whiteAlpha.100">
    <Icon as={icon} w={6} h={6} color="brand" />
    <Heading as="h3" size="sm" color="white">{title}</Heading>
    <Text fontSize="sm" color="foreground.muted" lineHeight="tall">{description}</Text>
  </VStack>
)

export const AboutSection = () => {
  return (
    <Box as="section" py={24} id="about">
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={16} alignContent="center">
          <VStack align="flex-start" gap={8}>
            <VStack align="flex-start" gap={4}>
              <Text
                fontSize="sm"
                fontWeight="bold"
                color="brand"
                fontFamily="mono"
                letterSpacing="widest"
              >
                / ABOUT ME
              </Text>
              <Heading as="h2" size="3xl" fontWeight="black" letterSpacing="tighter">
                CRAFTING <Text as="span" color="brand">SOLUTIONS</Text> WITH INTELLIGENCE
              </Heading>
            </VStack>

            <Text fontSize="lg" color="whiteAlpha.800" lineHeight="tall">
              {portfolioData.about}
            </Text>

            <VStack align="flex-start" gap={4} pt={4}>
              <Text fontSize="sm" color="whiteAlpha.500" fontFamily="var(--font-geist-mono)">
                LANGUAGES & EDUCATION
              </Text>
              <Text color="whiteAlpha.800">
                <Text as="span" color="brand" fontWeight="bold">Education: </Text>
                {portfolioData.education[0].degree} from {portfolioData.education[0].school} ({portfolioData.education[0].period})
              </Text>
              <Text color="whiteAlpha.800">
                <Text as="span" color="brand" fontWeight="bold">Languages: </Text>
                {portfolioData.languages.join(", ")}
              </Text>
            </VStack>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
            <AboutFeature
              icon={LuTarget}
              title="Problem Solver"
              description="Focused on solving business problems with secure, modular systems and modern authentication."
            />
            <AboutFeature
              icon={LuZap}
              title="AI Specialist"
              description="Integrating LLMs into production workflows, automating up to 70% of manual processes."
            />
            <AboutFeature
              icon={LuAward}
              title="Award Winning"
              description="Awarded the Extra Mile Award at Valantic LCS for innovation and exceptional performance."
            />
            <Box
              p={6}
              bg="brand"
              borderRadius="md"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              color="background"
            >
              <Text fontWeight="black" fontSize="4xl" lineHeight="1">{`${new Date().getFullYear() - 2022}+`}</Text>
              <Text fontWeight="bold" fontSize="sm" mt={2} letterSpacing="wider">YEARS OF EXPERIENCE</Text>
            </Box>
          </SimpleGrid>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
