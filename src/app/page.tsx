import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CrossDevice from "@/components/CrossDevice";
import Features from "@/components/Features";
import CommunityCTA from "@/components/CommunityCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-space-dark">
      <Navbar />
      <Hero />
      <CrossDevice />
      <Features />
      <CommunityCTA />
      <Footer />
    </main>
  );
}
