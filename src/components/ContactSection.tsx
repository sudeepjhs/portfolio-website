"use client"

import { Box, Container, VStack, Heading, Text, SimpleGrid, Button, Input, Textarea, Stack } from "@chakra-ui/react"
import { motion } from "framer-motion"

export const ContactSection = () => {
  return (
    <Box py="32" position="relative" bg="black" id="contact">
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={20}>
          <VStack align="flex-start" gap={8}>
            <VStack align="flex-start" gap={4}>
              <Text
                fontSize="sm"
                fontWeight="bold"
                color="brand"
                fontFamily="mono"
                letterSpacing="widest"
              >
                / READY TO COMMENCE?
              </Text>
              <Heading as="h2" size="4xl" fontWeight="black" letterSpacing="tighter">
                LET'S BUILD <br />
                <Text as="span" color="brand">TOGETHER</Text>
              </Heading>
            </VStack>
            <Text fontSize="lg" color="foreground.muted" lineHeight="tall">
              Whether you have a specific project in mind or just want to explore the possibilities of futuristic digital architecture, I'm ready to connect.
            </Text>

            <VStack align="flex-start" gap={2} pt={4}>
              <Text fontSize="xs" color="whiteAlpha.400" fontFamily="var(--font-geist-mono)">DIRECT_CHANNEL</Text>
              <Text fontSize="xl" fontWeight="bold">hello@sudeep.dev</Text>
            </VStack>
          </VStack>

          <Box
            p={8}
            bg="whiteAlpha.50"
            borderRadius="xl"
            border="1px solid"
            borderColor="whiteAlpha.100"
            position="relative"
            overflow="hidden"
          >
            {/* Ambient Background Glow */}
            <Box
              position="absolute"
              top="-20%"
              right="-20%"
              w="200px"
              h="200px"
              bg="brand"
              filter="blur(100px)"
              opacity="0.05"
            />

            <VStack gap={6}>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
                <VStack align="flex-start" gap={2}>
                  <Text fontSize="10px" color="whiteAlpha.500" fontFamily="var(--font-geist-mono)">IDENTIFIER</Text>
                  <Input
                    placeholder="Full Name"
                    bg="whiteAlpha.50"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    _focus={{ borderColor: "brand" }}
                  />
                </VStack>
                <VStack align="flex-start" gap={2}>
                  <Text fontSize="10px" color="whiteAlpha.500" fontFamily="var(--font-geist-mono)">PROTOCOL</Text>
                  <Input
                    placeholder="Email Address"
                    bg="whiteAlpha.50"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    _focus={{ borderColor: "brand" }}
                  />
                </VStack>
              </SimpleGrid>

              <VStack align="flex-start" gap={2} w="full">
                <Text fontSize="10px" color="whiteAlpha.500" fontFamily="var(--font-geist-mono)">PAYLOAD</Text>
                <Textarea
                  placeholder="Project Details"
                  rows={6}
                  bg="whiteAlpha.50"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  _focus={{ borderColor: "brand" }}
                />
              </VStack>

              <Button
                w="full"
                size="lg"
                bg="brand"
                color="background"
                fontWeight="black"
                _hover={{ bg: "brand.emphasis", boxShadow: "0 0 20px rgba(163, 230, 53, 0.3)" }}
              >
                TRANSMIT MESSAGE
              </Button>
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
