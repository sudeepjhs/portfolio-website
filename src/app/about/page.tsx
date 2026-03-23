"use client"

import { Box, Container, Heading, Text, VStack, SimpleGrid, Image } from "@chakra-ui/react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { SkillsSection } from "@/components/SkillsSection"

export default function AboutPage() {
  return (
    <Box minH="100vh" bg="#131318" color="white">
      <Navbar />
      <Box pt="32" pb="24">
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={20} mb={32}>
            <VStack align="flex-start" gap={8}>
              <VStack align="flex-start" gap={4}>
                <Text 
                  fontSize="sm" 
                  fontWeight="bold" 
                  color="#a3e635" 
                  fontFamily="var(--font-geist-mono)"
                  letterSpacing="widest"
                >
                  STORY
                </Text>
                <Heading size="4xl" fontWeight="black" letterSpacing="tighter">
                  DIGITAL <br />
                  <Text as="span" color="#a3e635">ARCHITECT</Text>
                </Heading>
              </VStack>
              <Text fontSize="lg" color="whiteAlpha.800" lineHeight="tall">
                I am a focused developer dedicated to building high-fidelity digital products. My approach combines the precision of technical architecture with the creativity of modern web design.
              </Text>
              <Text fontSize="md" color="whiteAlpha.600" lineHeight="relaxed">
                With a background in full-stack engineering and a passion for complex UI, I specialize in creating interfaces that are both aesthetically premium and technically superior. I believe that every digital artifact should tell a story through its micro-interactions and performance.
              </Text>
            </VStack>

            <Box 
              position="relative" 
              borderRadius="2xl" 
              overflow="hidden"
              border="1px solid"
              borderColor="whiteAlpha.100"
              bg="surface_container_low"
              height="400px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {/* Placeholder for Profile Image */}
              <Box 
                w="full" 
                h="full" 
                bgGradient="linear(to-br, rgba(163, 230, 53, 0.05), transparent)"
                position="absolute"
                top="0"
                left="0"
              />
              <Text 
                fontFamily="var(--font-geist-mono)" 
                color="whiteAlpha.200" 
                fontSize="xs"
                letterSpacing="widest"
              >
                [ IMAGE_PLACEHOLDER ]
              </Text>
            </Box>
          </SimpleGrid>

          <SkillsSection />
        </Container>
      </Box>
      <Footer />
    </Box>
  )
}
