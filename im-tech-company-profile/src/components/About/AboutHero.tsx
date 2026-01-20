import React from "react";
import { TitleGradient } from "@/components/shared/title-gradient";
import GeometricSphere from "./GeometricSphere";

const AboutHero = () => {
    return (
        <div className="relative w-full h-screen min-h-[80vh] bg-[#000000] overflow-hidden">
            <div className="max-w-7xl mx-auto h-full px-1 flex flex-col items-center justify-center lg:flex-row relative z-10">

                {/* Left Side: Typography */}
                <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left z-20 lg:pl-0">
                    <TitleGradient
                        className="text-[36px] font-semibold mb-6"
                        as="h1" // Semantic HTML: Hero title should be H1
                    >
                        Tentang Kami
                    </TitleGradient>
                    <p className="font-poppins font-normal text-[16px] text-gray-300 leading-relaxed lg:leading-[1.8] max-w-[550px]">
                        IM Tech adalah partner teknologi Anda dalam mewujudkan solusi digital yang
                        inovatif. Kami memadukan keahlian teknis dengan desain modern untuk
                        menciptakan website dan aplikasi yang tidak hanya fungsional, tetapi
                        juga memberikan pengalaman pengguna terbaik.
                    </p>
                    <p className="font-poppins font-normal text-[16px] text-gray-300 leading-relaxed lg:leading-[1.8] max-w-[550px] mt-4">
                        Kami percaya pada kolaborasi transparan dan hasil yang terukur.
                        Dari konsep hingga peluncuran, kami memastikan setiap detail
                        mendukung pertumbuhan bisnis Anda jangka panjang.
                    </p>
                </div>

                {/* Right Side: Visual Asset & Overlap */}
                <div className="w-full lg:w-[45%] relative h-[50vh] lg:h-full flex items-center justify-center lg:block">
                    <div className="relative w-full h-full lg:absolute lg:-right-[10%] lg:top-0 z-10">
                        <GeometricSphere />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHero;
