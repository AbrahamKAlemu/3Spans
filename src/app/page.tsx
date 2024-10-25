// pages/page.tsx

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "3Spans",
  description: "3Spans is an interactive tool for modeling vectors, performing operations, and exploring 3D space. Enhance your understanding of vector mathematics with our intuitive platform.",
  // Add other metadata as needed
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Contact />
    </>
  );
}
