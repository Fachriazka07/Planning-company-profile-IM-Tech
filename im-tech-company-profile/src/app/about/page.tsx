import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import AboutHero from '@/components/About/AboutHero';
import TheStory from '@/components/About/TheStory';
import VisionMission from '@/components/About/VisionMission';
import CoreValues from '@/components/About/CoreValues';
import CultureAndStrengths from '@/components/About/CultureAndStrengths';
import TeamSection from '@/components/About/TeamSection';
import AboutCTA from '@/components/About/AboutCTA';

export const metadata = {
  title: 'Tentang Kami | IM Tech',
  description: 'Kenali lebih dekat tim di balik solusi digital inovatif IM Tech.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <AboutHero />
        <TheStory />
        <VisionMission />
        <CoreValues />
        <CultureAndStrengths />
        <TeamSection />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}