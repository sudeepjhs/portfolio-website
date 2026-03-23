"use client"

import { Box, SimpleGrid, Text, Heading, VStack, Badge, Link, Image } from "@chakra-ui/react"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  spanSize?: number
}

const ProjectCard = ({ title, description, tags, spanSize = 1 }: ProjectCardProps) => (
  <Box
    as={motion.div}
    _groupHover={{ y: -8, transition: "duration: 0.2" }}
    gridColumn={{ md: `span ${spanSize}` }}
    position="relative"
    bg="surface_container_low"
    borderRadius="xl"
    overflow="hidden"
    border="1px solid"
    borderColor="whiteAlpha.100"
    _hover={{ borderColor: "#a3e635", boxShadow: "0 0 30px rgba(163, 230, 53, 0.15)" }}
    transition="all 0.3s ease"
    p={6}
    height="100%"
    minH="300px"
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
  >
    <VStack align="flex-start" gap={4}>
      <Badge
        bg="rgba(163, 230, 53, 0.1)"
        color="#a3e635"
        fontFamily="var(--font-geist-mono)"
        fontSize="xs"
        px={2}
        py={0.5}
      >
        PROJECT
      </Badge>
      <Heading size="md" fontWeight="black" letterSpacing="tight">
        {title}
      </Heading>
      <Text color="whiteAlpha.600" fontSize="sm">
        {description}
      </Text>
    </VStack>

    <Box mt={8}>
      <SimpleGrid columns={3} gap={2}>
        {tags.map((tag) => (
          <Text
            key={tag}
            fontSize="10px"
            fontFamily="var(--font-geist-mono)"
            color="whiteAlpha.500"
            letterSpacing="widest"
          >
            {tag.toUpperCase()}
          </Text>
        ))}
      </SimpleGrid>
    </Box>
  </Box>
)

export const BentoGrid = () => {
  const projects = [
    { title: "Quantum AI Dashboard", description: "Advanced real-time analytics for quantum computing clusters with predictive modeling.", tags: ["React", "Prisma", "AI"], spanSize: 2 },
    { title: "Neuro Sync", description: "Biometric feedback interface for neural link simulations.", tags: ["Next.js", "D3.js"], spanSize: 1 },
    { title: "Cyber Vault", description: "Hardened encryption layer for decentralized storage networks.", tags: ["Web3", "Solidity"], spanSize: 1 },
    { title: "Ether Flow", description: "Low-latency streaming platform for high-performance creative workflows.", tags: ["WebRTC", "Canvas"], spanSize: 2 },
  ]

  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} w="full">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </SimpleGrid>
  )
}
