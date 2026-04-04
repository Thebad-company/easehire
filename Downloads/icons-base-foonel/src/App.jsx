import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IndustryShift from './components/IndustryShift';
import RealProblem from './components/RealProblem';
import Curriculum from './components/Curriculum';
import TrustSignals from './components/TrustSignals';
import ProofEngine from './components/ProofEngine';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import PlacementSupport from './components/PlacementSupport';
import LeadForm from './components/LeadForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Navbar />
      <main className="pb-20 pt-3 sm:pt-4">
        <Hero />
        <TrustSignals />
        <IndustryShift />
        <RealProblem />
        <Curriculum />
        <ProofEngine />
        <Testimonials />
        <CTASection />
        <PlacementSupport />
        <LeadForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
