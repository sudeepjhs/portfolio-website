import { Heading, Text, VStack, Container, Box } from "@chakra-ui/react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { BentoGrid } from "@/components/BentoGrid";
import { SkillsSection } from "@/components/SkillsSection";

import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <Box as="main" minH="100vh" bg="#131318" color="white">
      <Navbar />
      <Hero />
      
      <Box py="24" id="projects">
        <Container maxW="7xl">
          <VStack align="flex-start" gap={16}>
             <VStack align="flex-start" gap={4}>
              <Text 
                fontSize="sm" 
                fontWeight="bold" 
                color="#a3e635" 
                fontFamily="var(--font-geist-mono)"
                letterSpacing="widest"
              >
                / SELECTED WORKS
              </Text>
              <Heading size="4xl" fontWeight="black" letterSpacing="tighter">
                FEATURED <Text as="span" color="#a3e635">PROJECTS</Text>
              </Heading>
            </VStack>
            <BentoGrid />
            
            <Box w="full" pt={12}>
              <SkillsSection />
            </Box>
          </VStack>
        </Container>
      </Box>

      <ContactSection />
      <Footer />
    </Box>
  );
}



