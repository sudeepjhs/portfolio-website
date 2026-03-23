import { Box } from "@chakra-ui/react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <Box as="main" minH="100vh" bg="#131318" color="white">
      <Navbar />
      <Hero />
      {/* Other sections would go here */}
      <Box height="100vh" /> {/* Spacer for scroll demonstration */}
      <Footer />
    </Box>
  );
}

