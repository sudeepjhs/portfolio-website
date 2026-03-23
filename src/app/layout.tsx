import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sudeepagarwal.dev/"),
  title: "Sudeep Agarwal | Software Engineer & AI Integration Specialist",
  description: "Portfolio of Sudeep Agarwal - A high-performance software engineer focused on futuristic web experiences, full-stack engineering, and AI Integration.",
  keywords: [
    "Sudeep Agarwal",
    "Software Engineer",
    "Software Developer",
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "AI Integration Specialist",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Hire Software Engineer",
    "Agentic AI Engineer",
    "Hire React Developer Sudeep Agarwal"
  ],
  authors: [{ name: "Sudeep Agarwal", url: "https://www.sudeepagarwal.dev/" }],
  creator: "Sudeep Agarwal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sudeepagarwal.dev/",
    title: "Sudeep Agarwal | Software Engineer & AI Integration Specialist",
    description: "Portfolio of Sudeep Agarwal - Full-Stack Developer with 2+ years of experience building scalable applications and integrating GPT-4 into production workflows.",
    siteName: "Sudeep Agarwal Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sudeep Agarwal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudeep Agarwal | Software Engineer & AI Integration Specialist",
    description: "Portfolio of Sudeep Agarwal - Full-Stack Developer with 2+ years of experience building scalable applications and integrating GPT-4.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { Provider } from "@/components/ui/provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}

