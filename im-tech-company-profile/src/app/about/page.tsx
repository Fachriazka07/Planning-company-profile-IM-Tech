import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import AboutHero from "@/components/About/AboutHero";
import VisionMission from "@/components/About/VisionMission";

export const metadata = {
    title: "Tentang Kami | IM Tech",
    description: "Kenali lebih dekat tim di balik solusi digital inovatif IM Tech.",
};

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-black">
                <AboutHero />
                <VisionMission />
                {/* Other sections will be added here later */}
            </main>
            <Footer />
        </>
    );
}
