import React from 'react';
import HeroDetail from '@/components/portofolio/detail/HeroDetail';
import OverviewSection from '@/components/portofolio/detail/OverviewSection';
import KeyFeatures from '@/components/portofolio/detail/KeyFeatures';
import { WorkflowSection } from '@/components/portofolio/detail/WorkflowProcess';
import ProjectScreenshots from '@/components/portofolio/detail/ProjectScreenshots';
import TechStackDetail from '@/components/portofolio/detail/TechStackDetail';
import ChallengesLearning from '@/components/portofolio/detail/ChallengesLearning';
import NextProjectCTA from '@/components/portofolio/detail/NextProjectCTA';

// Dummy Data Import
import showcaseData from '@/data/showcasedummy.json';
import AboutDetailHero from '@/components/portofolio/detail/AboutDetailHero';

// Generate static params for all portfolio items
export async function generateStaticParams() {
  return showcaseData.map((item) => ({
    id: item.id.toString(),
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = showcaseData.find((p) => p.id.toString() === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Project Not Found</h1>
      </div>
    );
  }

  const features = project.features || [];

  return (
    <main className="min-h-screen bg-white">
      <AboutDetailHero />
      <HeroDetail 
        category={project.category}
        title={project.title}
        description={project.description}
        imageUrl={project.imageUrl}
        gallery={project.gallery}
      />

      <OverviewSection 
        overview={project.overview || ""}
        problem={project.problem || []}
        solution={project.solution || []}
      />

      <KeyFeatures features={features} />

      <TechStackDetail techStack={project.techStack} />

      <WorkflowSection />

      <ProjectScreenshots gallery={project.gallery || []} />

      <ChallengesLearning 
        challenges={project.challenges || []} 
        websiteUrl={project.websiteUrl}
      />

      <NextProjectCTA />
    </main>
  );
}
