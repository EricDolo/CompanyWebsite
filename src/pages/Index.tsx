import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import CookieBanner from '@/components/CookieBanner'; 

const Index = () => {
  return (
    <PageLayout>
      <Hero />
      <Services />
      <About />
      <Contact />
    </PageLayout>
  );
};

export default Index;
