import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import FreeTrialSection from './components/FreeTrialSection';
import SocialProofSection from './components/SocialProofSection';
import HowItWorksSection from './components/HowItWorksSection';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import ExitIntentPopup from './components/ExitIntentPopup';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <FreeTrialSection />
        <SocialProofSection />
        <HowItWorksSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyBar />
      <ExitIntentPopup />
    </div>
  );
}
