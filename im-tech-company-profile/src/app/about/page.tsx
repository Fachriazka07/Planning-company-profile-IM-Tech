import AboutHero from "@/components/About/AboutHero";
import React from "react";

export const metadata = {
    title: "Tentang Kami | IM Tech",
    description: "Kenali lebih dekat tim di balik solusi digital inovatif IM Tech.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black">
            <AboutHero />
            {/* Other sections will be added here later */}
        </main>
    );
}
