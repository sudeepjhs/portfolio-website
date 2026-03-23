"use client"

import { Box, SimpleGrid, Text, Heading, VStack, Badge, HStack } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"

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
    _hover={{ borderColor: "brand", boxShadow: "0 0 30px rgba(163, 230, 53, 0.15)" }}
    transition="all 0.3s ease"
    p={6}
    height="100%"
    minH="250px"
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
  >
    <VStack align="flex-start" gap={4}>
      <Badge
        bg="brand/10"
        color="brand"
        fontFamily="mono"
        fontSize="xs"
        px={2}
        py={0.5}
      >
        PROJECT
      </Badge>
      <Heading size="md" fontWeight="black" letterSpacing="tight">
        {title}
      </Heading>
      <Text color="foreground.muted" fontSize="sm" lineHeight="tall">
        {description}
      </Text>
    </VStack>

    <Box mt={8}>
      <HStack gap={4} wrap="wrap">
        {tags.map((tag) => (
          <Text
            key={tag}
            fontSize="10px"
            fontFamily="mono"
            color="whiteAlpha.500"
            letterSpacing="widest"
          >
            {tag.toUpperCase()}
          </Text>
        ))}
      </HStack>
    </Box>
  </Box>
)

export const BentoGrid = () => {
  const projects = portfolioData.projects

  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} w="full">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </SimpleGrid>
  )
}
