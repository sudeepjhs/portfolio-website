"use client"

import { Box, Container, Flex, HStack, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu"
import { portfolioData } from "@/data/portfolio"

export const Footer = () => {
  return (
    <Box as="footer" py={20} borderTop="1px solid" borderColor="whiteAlpha.100">
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={12}>
          <VStack align="flex-start" gap={6}>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="brand"
              fontFamily="mono"
            >
              {portfolioData.name.split(' ')[0].toUpperCase()}.DEV
            </Text>
            <Text color="whiteAlpha.600" fontSize="sm" lineHeight="tall">
              {portfolioData.about}
            </Text>
            <HStack gap={4}>
              <Link href={portfolioData.github} target="_blank" color="whiteAlpha.600" _hover={{ color: "brand" }}>
                <LuGithub size={20} />
              </Link>
              <Link href={portfolioData.linkedin} target="_blank" color="whiteAlpha.600" _hover={{ color: "brand" }}>
                <LuLinkedin size={20} />
              </Link>
              <Link href={portfolioData.portfolio} target="_blank" color="whiteAlpha.600" _hover={{ color: "brand" }}>
                <LuMail size={20} />
              </Link>
            </HStack>
          </VStack>

          <VStack align="flex-start" gap={4}>
            <Text fontWeight="bold" fontSize="md">Navigation</Text>
            <Link href="#" color="whiteAlpha.600" _hover={{ color: "brand" }}>Home</Link>
            <Link href="#projects" color="whiteAlpha.600" _hover={{ color: "brand" }}>Projects</Link>
            <Link href="#about" color="whiteAlpha.600" _hover={{ color: "brand" }}>About</Link>
            <Link href="#contact" color="whiteAlpha.600" _hover={{ color: "brand" }}>Contact</Link>
          </VStack>

          <VStack align="flex-start" gap={4}>
            <Text fontWeight="bold" fontSize="md">Contact</Text>
            <Text color="whiteAlpha.600" fontSize="sm">{portfolioData.email}</Text>
            <Text color="whiteAlpha.600" fontSize="sm">Indore, India</Text>
          </VStack>

          <VStack align="flex-start" gap={4}>
            <Text fontWeight="bold" fontSize="md">Newsletter</Text>
            <Text color="whiteAlpha.600" fontSize="sm">Get the latest updates on my projects and articles.</Text>
            <Box w="full" position="relative">
              <Box
                as="input"
                w="full"
                bg="whiteAlpha.50"
                border="1px solid"
                borderColor="whiteAlpha.200"
                borderRadius="sm"
                px={4}
                py={2}
                fontSize="sm"
                color="white"
                _focus={{ borderColor: "brand", outline: "none" }}
                // @ts-ignore
                placeholder="Email address"
              />

            </Box>
          </VStack>
        </SimpleGrid>

        <Flex
          mt={20}
          pt={8}
          borderTop="1px solid"
          borderColor="whiteAlpha.50"
          justify="space-between"
          align="center"
          direction={{ base: "column", md: "row" }}
          gap={4}
        >
          <Text color="whiteAlpha.400" fontSize="xs">
            © {new Date().getFullYear()} Sudeep Agarwal. All rights reserved.
          </Text>
          <HStack gap={6}>
            <Link href="#" color="whiteAlpha.400" fontSize="xs" _hover={{ color: "white" }}>Privacy Policy</Link>
            <Link href="#" color="whiteAlpha.400" fontSize="xs" _hover={{ color: "white" }}>Terms of Service</Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
