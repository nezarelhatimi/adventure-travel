import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Destinations from "@/components/sections/Destinations";
import Packages from "@/components/sections/Packages";

import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Trust from "@/components/sections/Trust";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Destinations />
      <Packages />
      <Trust />
      
      <Footer />
      <WhatsAppButton />
    </main>
  );
}