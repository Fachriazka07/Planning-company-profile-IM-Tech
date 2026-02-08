import React from 'react';
import { TitleGradient } from '@/components/shared/title-gradient';
import GeometricSphere from './GeometricSphere';

const AboutHero = () => {
  return (
    <div className="relative w-full h-screen min-h-[80vh] bg-[#000000] overflow-hidden">
      <div className="max-w-7xl mx-auto h-full px-6 lg:px-12 flex flex-col items-center justify-center lg:flex-row relative z-10">
        {/* Left Side: Typography */}
        <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left z-20">
          <TitleGradient className="text-[36px] font-bold pb-2" as="h1">
            Tentang Kami
          </TitleGradient>
          <p className="font-poppins font-normal text-base lg:text-lg text-gray-300 leading-relaxed max-w-lg">
            IM Tech adalah partner teknologi Anda dalam mewujudkan solusi digital yang inovatif.
            Kami memadukan keahlian teknis dengan desain modern untuk menciptakan website dan
            aplikasi yang tidak hanya fungsional, tetapi juga memberikan pengalaman pengguna
            terbaik.
          </p>
          <p className="font-poppins font-normal text-base lg:text-lg text-gray-300 leading-relaxed max-w-lg mt-4">
            Kami percaya pada kolaborasi transparan dan hasil yang terukur. Dari konsep hingga
            peluncuran, kami memastikan setiap detail mendukung pertumbuhan bisnis Anda jangka
            panjang.
          </p>
        </div>

        {/* Right Side: Visual Asset & Overlap */}
        <div className="w-full lg:w-[45%] relative h-[40vh] lg:h-full flex items-center justify-center">
          <div className="relative w-[320px] h-[320px] lg:w-[600px] lg:h-[600px]">
            <GeometricSphere />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
