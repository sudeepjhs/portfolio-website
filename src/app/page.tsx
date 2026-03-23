import { Heading, Text, VStack, Container, Box } from "@chakra-ui/react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { BentoGrid } from "@/components/BentoGrid";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";

export default function Home() {
  return (
    <Box as="main" minH="100vh" bg="background" color="white">
      <Navbar />
      <Hero />
      <AboutSection />

      <Box py="24" id="projects">
        <Container maxW="7xl">
          <VStack align="flex-start" gap={16}>
            <VStack align="flex-start" gap={4}>
              <Text
                fontSize="sm"
                fontWeight="bold"
                color="brand"
                fontFamily="mono"
                letterSpacing="widest"
              >
                / SELECTED WORKS
              </Text>
              <Heading size="4xl" fontWeight="black" letterSpacing="tighter">
                FEATURED <Text as="span" color="brand">PROJECTS</Text>
              </Heading>
            </VStack>
            <BentoGrid />

            <ExperienceSection />

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



