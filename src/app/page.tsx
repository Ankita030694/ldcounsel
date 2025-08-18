import Hero from '../components/Hero';
import Footer from '../components/Footer';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutUsSection from '../components/AboutUsSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import OurTeamSection from '../components/OurTeamSection';
import DisclaimerPopup from '../components/DisclaimerPopup';

export default function Home() {
  return (
    <div className="min-h-screen">
      <DisclaimerPopup />
      <Hero />
      <AboutUsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
    </div>
  );
}
