import Hero from '../components/Hero';
import Footer from '../components/Footer';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutUsSection from '../components/AboutUsSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutUsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
