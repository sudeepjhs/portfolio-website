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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sudeep Agarwal",
    "jobTitle": "Software Engineer & AI Integration Specialist",
    "url": "https://www.sudeepagarwal.dev/", // Update logic here if URL changes
    "sameAs": [
      "https://linkedin.com/in/sudeepagarwaljhs",
      "https://github.com/sudeepjhs"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Sagar Institute of Science and Technology (RGPV)"
    },
    "knowsAbout": [
      "Software Development",
      "Software Engineering",
      "Full-Stack Development",
      "React.js",
      "Next.js",
      "Node.js",
      "AI Integration",
      "GPT-4",
      "TypeScript",
      "Chakra UI",
      "AWS",
      "OutSystems"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Valantic LCS"
    }
  };

  return (
    <Box as="main" minH="100vh" bg="background" color="white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
              <Heading as="h2" size="4xl" fontWeight="black" letterSpacing="tighter">
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



