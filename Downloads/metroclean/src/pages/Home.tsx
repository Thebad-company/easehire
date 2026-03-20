import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Flagship } from "../components/Flagship";
import { Workflow } from "../components/Workflow";
import { Safety } from "../components/Safety";
import { Mission } from "../components/Mission";
import { Logistics } from "../components/Logistics";
import { Gallery } from "../components/Gallery";
import { TrustedBy } from "../components/TrustedBy";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
  return (
    <main>
      {/* 1. Hero */}
      <Hero />
      
      {/* 2. Trust Indicators (Stats) */}
      <Stats />
      
      {/* 3. About (short) */}
      <div id="about"><About /></div>
      
      {/* 4. Services (clean cards) */}
      <div id="services"><Services /></div>
      
      {/* 5. Flagship Capability */}
      <Flagship />
      
      {/* 6. Process (Workflow) */}
      <Workflow />
      
      {/* 7. Safety Section */}
      <div id="safety"><Safety /></div>
      
      {/* 8. Mission */}
      <div id="mission"><Mission /></div>

      {/* 8.5 Fleet & Logistics (Strategic Placement) */}
      <Logistics />
      
      {/* 9. Clients / Logos (Full Row) */}
      <TrustedBy />
      
      {/* 10. Gallery */}
      <Gallery />
      
      {/* 11. Contact CTA */}
      <section id="contact" className="py-24 bg-surface-container-low">
        <ContactSection />
      </section>
    </main>
  );
};
