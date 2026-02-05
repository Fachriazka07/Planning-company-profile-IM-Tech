import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { Hero } from '@/components/landing/hero';
import { AboutSection } from '@/components/landing/about-section';
import { SectionDivider } from '@/components/shared/section-divider';
import { ServicesSection } from '@/components/landing/services-section';
import { WorkflowSection } from '@/components/landing/workflow-section';
import { PortfolioShowcase } from '@/components/landing/portfolio-showcase';
import { InsightSection } from '@/components/landing/insight-section';
import { ContactSection } from '@/components/landing/contact-section';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ServicesSection />
        <SectionDivider />
        <PortfolioShowcase />
        <SectionDivider />
        <InsightSection />
        <SectionDivider />
        <WorkflowSection />
        <SectionDivider />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
