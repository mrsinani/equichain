import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Solution } from "@/components/site/Solution";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Persona } from "@/components/site/Persona";
import { Trust } from "@/components/site/Trust";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Persona />
        <Trust />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
