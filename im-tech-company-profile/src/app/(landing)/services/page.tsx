import { ServicesHero, ServiceList, OurApproach, ServicesCTA } from '@/components/Services';

export default function ServicesPage() {
    return (
        <div className="bg-white min-h-screen font-sans">
            <ServicesHero />
            <ServiceList />
            <OurApproach />
            <ServicesCTA />
        </div>
    );
}
