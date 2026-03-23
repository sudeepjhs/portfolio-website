"use client"

import { Box, Button, Container, Flex, Heading, Stack, Text, VStack } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiOpenai,
} from "react-icons/si"
import { TbBrain } from "react-icons/tb"

// Custom OutSystems icon (not in react-icons)
const OutSystemsIcon = () => (
  <svg viewBox="0 0 32 32" width="1em" height="1em" fill="currentColor" aria-label="OutSystems">
    <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 4.5a9.5 9.5 0 1 1 0 19 9.5 9.5 0 0 1 0-19zm0 3a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zm0 3a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" />
  </svg>
)

import { portfolioData } from "@/data/portfolio"

const MotionBox = motion.create(Box)

// Skill card data
const skills = [
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6", delay: 0 },
  { icon: SiReact, label: "React JS", color: "#61DAFB", delay: 0.1 },
  { icon: SiNextdotjs, label: "Next.js", color: "#ffffff", delay: 0.2 },
  { icon: SiPython, label: "Python", color: "#3776AB", delay: 0.3 },
  { icon: SiOpenai, label: "OpenAI", color: "#74AA9C", delay: 0.4 },
  { icon: TbBrain, label: "Agentic AI", color: "#a3e635", delay: 0.5 },
  { icon: OutSystemsIcon, label: "OutSystems", color: "#E5323B", delay: 0.6 },
]

const SkillCard = ({
  icon: Icon,
  label,
  color,
  delay,
}: {
  icon: React.ElementType
  label: string
  color: string
  delay: number
}) => (
  // Outer box: entrance animation only
  <MotionBox
    initial={{ opacity: 0, y: 16, scale: 0.88 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.45, delay, ease: "easeOut" } as never}
  >
    {/* Inner box: infinite bounce */}
    <MotionBox
      animate={{ y: [0, -6, 0] } as never}
      transition={{
        duration: 1.8 + delay * 0.4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
        delay: delay * 0.6,
      } as never}
      whileHover={{ scale: 1.1 } as never}
      display="flex"
      alignItems="center"
      gap={2}
      px={3}
      py={2}
      borderRadius="lg"
      border="1px solid"
      borderColor="whiteAlpha.200"
      bg="whiteAlpha.50"
      backdropFilter="blur(10px)"
      cursor="default"
      style={{ boxShadow: `0 0 12px ${color}22` }}
      _hover={{
        borderColor: color,
        bg: "whiteAlpha.100",
        boxShadow: `0 0 20px ${color}44`,
      }}
      rounded={"full"}
    >
      <Box color={color} fontSize="lg">
        <Icon />
      </Box>
      <Text fontSize="xs" fontWeight="semibold" color="foreground.muted" whiteSpace="nowrap">
        {label}
      </Text>
    </MotionBox>
  </MotionBox>
)

export const Hero = () => {
  const { heroRoles: roles } = portfolioData
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)


  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentRole = roles[roleIndex]

      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1))
        setTypingSpeed(100)

        if (text === currentRole) {
          setTypingSpeed(2000) // Pause at the end
          setIsDeleting(true)
        }
      } else {
        setText(currentRole.substring(0, text.length - 1))
        setTypingSpeed(50)

        if (text === "") {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
          setTypingSpeed(500) // Pause before next role
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex, typingSpeed])


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
        backgroundImage="radial-gradient(token(colors.brand/15) 1px, transparent 1px)"
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
              color="brand"
              fontFamily="mono"
              letterSpacing="widest"
              mb={2}
            >
              AVAILABLE FOR NEW OPPORTUNITIES
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "5xl", lg: "7xl" }}
              fontWeight="black"
              lineHeight="shorter"
              letterSpacing="tighter"
            >
              HI, I'M <Text as="span" color="brand">{portfolioData.name.toUpperCase()}</Text><br />
              SOFTWARE ENGINEER SOLVING BUSINESS WITH <Text as="span" color="brand">AI</Text>
            </Heading>
          </motion.div>

          {/* Typing text + Skill cards side-by-side */}
          <Flex
            align={{ base: "flex-start", md: "center" }}
            direction={{ base: "column", md: "row" }}
            gap={{ base: 4, md: 8 }}
            w="full"
          >
            {/* Typing text */}
            <Box minH="1.5rem" flexShrink={0}>
              <Text
                fontSize={{ base: "md", md: "xl" }}
                fontWeight="medium"
                color="foreground.muted"
                fontFamily="mono"
                letterSpacing="normal"
                textTransform="uppercase"
              >
                {text}
                <Box
                  as="span"
                  display="inline-block"
                  width="2px"
                  height="1em"
                  bg="brand"
                  ml={1}
                  verticalAlign="middle"
                  className="typing-cursor"
                />
              </Text>
            </Box>


          </Flex>
          {/* Skill floating cards */}
          <Flex
            wrap="wrap"
            gap={2}
            align="center"
          >
            {skills.map((skill) => (
              <SkillCard key={skill.label} {...skill} />
            ))}
          </Flex>
          <Stack direction={{ base: "column", sm: "row" }} gap={4} pt={4}>
            <Button
              size="xl"
              bg="brand"
              color="background"
              fontWeight="bold"
              px={8}
              _hover={{
                bg: "brand.emphasis",
                transform: "translateY(-2px)",
                boxShadow: "0 0 20px rgba(163, 230, 53, 0.4)"
              }}
              transition="all 0.2s"
              onClick={() => window.open("#projects", "_self")}
            >
              View Projects
            </Button>
            <Button
              size="xl"
              variant="outline"
              borderColor="border"
              color="white"
              px={8}
              _hover={{
                borderColor: "brand",
                bg: "whiteAlpha.100",
                color: "brand"
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
