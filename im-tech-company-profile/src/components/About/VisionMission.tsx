'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { TitleGradient } from '@/components/shared/title-gradient';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ScrollReveal from '@/components/shared/ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

const VisionMission = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const misiTitleRef = useRef<HTMLDivElement>(null);
  const visiTitleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Visi Title Animation: Fade In from Left
      gsap.fromTo(
        visiTitleRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: visiTitleRef.current,
            start: 'top 85%',
          },
        }
      );

      // Misi Title Animation: Fade In from Right
      gsap.fromTo(
        misiTitleRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: misiTitleRef.current,
            start: 'top 85%',
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative w-full bg-white text-black">
      <div className="max-w-7xl mx-auto h-full px-6 lg:px-12 relative z-20 pt-32">
        {/* --- VISI SECTION (TOP LEFT) --- */}
        {/* Reduced bottom margin to bring Misi closer (gap ~20px after reveal) */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left mb-20 lg:mb-32">
          <div ref={visiTitleRef} className="mb-4">
            <TitleGradient className="text-[40px] font-bold mb-4" as="h2">
              Visi
            </TitleGradient>
          </div>

          {/* Scroll Reveal Visi - FROM LEFT */}
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur={true}
            baseRotation={3}
            blurStrength={4}
            // Typography: 32px Semibold Black
            className="font-poppins font-semibold text-[24px] lg:text-[32px] text-black leading-tight lg:leading-[1.4]"
            direction="left"
          >
            Menjadi partner digital terpercaya yang menghadirkan solusi web, aplikasi dan desain
            UI/UX berkualitas untuk mendukung pertumbuhan bisnis di era digital
          </ScrollReveal>
        </div>

        {/* --- MISI SECTION (BOTTOM RIGHT) --- */}
        <div className="w-full flex justify-end">
          <div className="w-full lg:w-1/2 flex flex-col items-end text-right">
            <div ref={misiTitleRef} className="mb-4">
              <TitleGradient className="text-[40px] font-bold mb-4" as="h2">
                Misi
              </TitleGradient>
            </div>

            {/* List for Misi - FROM RIGHT */}
            <ul className="font-poppins font-semibold text-[16px] lg:text-[24px] text-black leading-tight lg:leading-[1.4] space-y-4 list-none">
              <li className="flex items-center justify-end gap-3 text-right">
                <ScrollReveal
                  baseOpacity={0}
                  enableBlur={true}
                  blurStrength={10}
                  className="inline-block"
                  wordAnimation={true}
                  direction="right"
                >
                  Website dan aplikasi mobile yang fungsional, aman, dan scalable
                </ScrollReveal>
              </li>
              <li className="flex items-center justify-end gap-3 text-right">
                <ScrollReveal
                  baseOpacity={0}
                  enableBlur={true}
                  blurStrength={10}
                  className="inline-block"
                  wordAnimation={true}
                  direction="right"
                >
                  Merancang UI/UX yang intuitif, menarik, dan berfokus pada kebutuhan pengguna
                </ScrollReveal>
              </li>
              <li className="flex items-center justify-end gap-3 text-right">
                <ScrollReveal
                  baseOpacity={0}
                  enableBlur={true}
                  blurStrength={10}
                  className="inline-block"
                  wordAnimation={true}
                  direction="right"
                >
                  Memberikan solusi digital yang relevan melalui proses kerja yang profesional dan
                  transparan
                </ScrollReveal>
              </li>
              <li className="flex items-center justify-end gap-3 text-right">
                <ScrollReveal
                  baseOpacity={0}
                  enableBlur={true}
                  blurStrength={10}
                  className="inline-block"
                  wordAnimation={true}
                  direction="right"
                >
                  Membangun kolaborasi jangka panjang dengan klien sebagai mitra pertumbuhan
                </ScrollReveal>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Left Arrows - Double Arrow Setup - 0 deg rotation */}
      <div
        className="absolute left-0 z-50 pointer-events-none"
        style={{ bottom: '-100px' }} // Adjusted to 80px gap margin as requested
      >
        <div style={{ position: 'relative', width: '600px', height: '300px' }}>
          {/* Small Arrow (Left) - 394x159 - Rotated 0 */}
          <div
            style={{
              position: 'absolute',
              left: '0px', // Snap to left
              bottom: '0px',
              width: '394px',
              height: '159px',
              transform: 'rotate(0deg)',
              zIndex: 51,
            }}
          >
            <Image
              src="/images/about/arroww.png"
              alt="Arrow Small Center"
              width={394}
              height={159}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </div>

          {/* Big Arrow (Right) - 471x236 - Rotated 0 */}
          <div
            style={{
              position: 'absolute',
              left: '150px', // Maintain overlap relative to small (0 + 150)
              bottom: '0px',
              width: '471px',
              height: '236px',
              transform: 'rotate(0deg)',
              zIndex: 50,
            }}
          >
            <Image
              src="/images/about/arroww.png"
              alt="Arrow Big Center"
              width={471}
              height={236}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
