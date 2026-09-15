import { MotionConfig } from "framer-motion";
import { useEffect } from "react";
import { LanguageProvider } from "./i18n";
import { useLanguage } from "./hooks/useLanguage";
import { handleInitialHash } from "./utils/scroll";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import TrustSection from "./sections/TrustSection";
import ProblemSection from "./sections/ProblemSection";
import SolutionSection from "./sections/SolutionSection";
import HowItWorks from "./sections/HowItWorks";
import DashboardPreview from "./sections/DashboardPreview";
import Benefits from "./sections/Benefits";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";
import AboutUs from "./sections/AboutUs";
import Location from "./sections/Location";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import FinalCTA from "./sections/FinalCTA";

function Page() {
  const { t } = useLanguage();

  useEffect(() => {
    handleInitialHash();
  }, []);

  return (
    <div className="bg-ink-950">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-volt-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950"
      >
        {t.nav.skip}
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <DashboardPreview />
        <Benefits />
        <Pricing />
        <Testimonials />
        <AboutUs />
        <Location />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <Page />
      </MotionConfig>
    </LanguageProvider>
  );
}
