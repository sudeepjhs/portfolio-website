"use client"

import { Box, Button, Container, Heading, Stack, Text, VStack } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export const Hero = () => {
  const [text, setText] = useState("")
  const fullText = "Digital Architect & Full Stack Developer"
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index])
        setIndex((prev) => prev + 1)
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [index])

  return (
    <Box 
      as="section" 
      pt={{ base: "32", md: "48" }} 
      pb={{ base: "16", md: "24" }}
      position="relative"
      overflow="hidden"
    >
      {/* Background Dot Grid */}
      <Box 
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="-1"
        backgroundImage="radial-gradient(rgba(163, 230, 53, 0.15) 1px, transparent 1px)"
        backgroundSize="32px 32px"
      />

      <Container maxW="7xl">
        <VStack align="flex-start" gap={8}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Text
              fontSize="sm"
              fontWeight="bold"
              color="#a3e635"
              fontFamily="var(--font-geist-mono)"
              letterSpacing="widest"
              mb={2}
            >
              AVAILABLE FOR NEW OPPORTUNITIES
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
              fontWeight="black"
              lineHeight="shorter"
              letterSpacing="tighter"
            >
              BUILDING THE <br />
              <Text as="span" color="#a3e635">FUTURE</Text> OF WEB
            </Heading>
          </motion.div>


          <Box height="1.5rem">
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="whiteAlpha.700"
              fontFamily="var(--font-geist-mono)"
            >
              {text}
              <Box 
                as="span" 
                display="inline-block"
                width="2px"
                height="1em"
                bg="#a3e635"
                ml={1}
                verticalAlign="middle"
                className="typing-cursor"
              />
            </Text>
          </Box>
          <Stack direction={{ base: "column", sm: "row" }} gap={4} pt={4}>
            <Button
              size="xl"
              bg="#a3e635"
              color="#131318"
              fontWeight="bold"
              px={8}
              _hover={{ 
                bg: "#bef264",
                transform: "translateY(-2px)",
                boxShadow: "0 0 20px rgba(163, 230, 53, 0.4)"
              }}
              transition="all 0.2s"
            >
              View Projects
            </Button>
            <Button
              size="xl"
              variant="outline"
              borderColor="whiteAlpha.300"
              color="white"
              px={8}
              _hover={{ 
                borderColor: "#a3e635",
                bg: "whiteAlpha.100",
                color: "#a3e635"
              }}
              transition="all 0.2s"
            >
              Get in Touch
            </Button>
          </Stack>
        </VStack>
      </Container>
    </Box>
  )
}

