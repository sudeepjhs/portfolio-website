"use client"

import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { BentoGrid } from "@/components/BentoGrid"

export default function ProjectsPage() {
  return (
    <Box minH="100vh" bg="background" color="white">
      <Navbar />
      <Box pt="32" pb="24">
        <Container maxW="7xl">
          <VStack align="flex-start" gap={12}>
            <VStack align="flex-start" gap={4}>
              <Text
                fontSize="sm"
                fontWeight="bold"
                color="brand"
                fontFamily="mono"
                letterSpacing="widest"
              >
                PORTFOLIO
              </Text>
              <Heading size="4xl" fontWeight="black" letterSpacing="tighter">
                SELECTED <br />
                <Text as="span" color="brand">PROJECTS</Text>
              </Heading>
              <Text maxW="2xl" color="whiteAlpha.600" fontSize="lg">
                A showcase of technical architecture, creative coding, and high-performance digital products built for the modern web.
              </Text>
            </VStack>

            <BentoGrid />
          </VStack>
        </Container>
      </Box>
      <Footer />
    </Box>
  )
}
