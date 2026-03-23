"use client"

import { Box, Container, Flex, HStack, Link, Text } from "@chakra-ui/react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(19, 19, 24, 0)", "rgba(19, 19, 24, 0.7)"]
  )

  const borderBottom = useTransform(
    scrollY,
    [0, 50],
    ["1px solid rgba(255, 255, 255, 0)", "1px solid rgba(163, 230, 53, 0.1)"]
  )

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50)
    })
  }, [scrollY])

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <Box
      as={motion.nav}
      style={{ backgroundColor: "#131318", borderBottom: "1px solid rgba(163, 230, 53, 0.1)" }}
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      backdropFilter="blur(12px)"
      transition="all 0.3s ease"
      py={isScrolled ? 3 : 5}
    >
      <Container maxW="7xl">
        <Flex justify="space-between" align="center">
          <Link
            href="#"
            _hover={{ textDecoration: "none" }}
          >
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="#a3e635"
              fontFamily="var(--font-geist-mono)"
              letterSpacing="tighter"
            >
              SUDEEP.DEV
            </Text>
          </Link>

          <HStack gap={8} display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                fontSize="sm"
                fontWeight="medium"
                color="whiteAlpha.800"
                _hover={{ color: "#a3e635" }}
                transition="color 0.2s"
              >
                {link.name}
              </Link>
            ))}
          </HStack>

          <Box
            px={4}
            py={1.5}
            borderRadius="sm"
            border="1px solid"
            borderColor="#a3e635"
            color="#a3e635"
            fontSize="xs"
            fontWeight="bold"
            fontFamily="var(--font-geist-mono)"
            cursor="pointer"
            _hover={{ bg: "rgba(163, 230, 53, 0.1)" }}
            transition="all 0.2s"
          >
            RESUME
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
