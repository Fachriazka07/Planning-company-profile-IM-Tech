'use client';

import { useRef, useLayoutEffect, useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TitleGradient } from '@/components/shared/title-gradient';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const steps = [
  { id: 1, name: 'Discovery' },
  { id: 2, name: 'Design' },
  { id: 3, name: 'Development' },
  { id: 4, name: 'Testing' },
  { id: 5, name: 'Launch' },
];

export function WorkflowSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const stepElements = stepsRef.current.filter(Boolean);
      const totalSteps = stepElements.length;

      // Set initial states - all steps hidden
      gsap.set(stepElements, {
        opacity: 0,
        scale: 0.5,
      });

      // Line starts invisible
      if (lineRef.current) {
        gsap.set(lineRef.current, {
          scaleX: isMobile ? 1 : 0,
          scaleY: isMobile ? 0 : 1,
          transformOrigin: isMobile ? 'top center' : 'left center'
        });
      }

      // Create timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 80%',
          toggleActions: 'play none none none',
        }
      });

      // Sequential animation: icon appears → line grows → next icon → repeat
      stepElements.forEach((step, index) => {
        // Each step appears with pop effect
        tl.to(step, {
          opacity: 1,
          scale: 1,
          duration: 0.35,
          ease: 'back.out(2)'
        });

        // Line grows to reach next icon (except for last step)
        if (index < totalSteps - 1) {
          const progress = (index + 1) / (totalSteps - 1);
          tl.to(lineRef.current, {
            scaleX: isMobile ? 1 : progress,
            scaleY: isMobile ? progress : 1,
            duration: 0.25,
            ease: 'power1.out'
          }, '-=0.1'); // Slight overlap for smooth flow
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      id="workflow"
      className="font-sans py-[64px] lg:py-[128px] bg-[#F9FAFB]"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <TitleGradient as="h2" className="text-3xl lg:text-4xl pb-3 leading-tight">
            Bagaimana Cara Kami Bekerja
          </TitleGradient>
          <p className="text-[18px] lg:text-[20px] font-medium text-black max-w-4xl mx-auto mt-4 leading-relaxed">
            Proses kerja kami dirancang sederhana terarah dan fokus pada hasil agar setiap proyek
            dapat berjalan lancar dan tepat sasaran
          </p>
        </div>

        <div
          ref={containerRef}
          className="bg-white border border-gray-200 rounded-3xl lg:rounded-full py-6 lg:py-5 px-8 lg:px-10 max-w-full lg:max-w-[800px] mx-auto shadow-sm relative overflow-hidden"
        >
          <div
            ref={lineRef}
            className="absolute bg-gray-300
              lg:left-[8%] lg:right-[8%] lg:top-[28px] lg:h-[2px] lg:w-auto
              left-[3.15rem] top-10 bottom-10 w-[2px] lg:bottom-auto"
          />

          <div className="flex flex-col lg:flex-row items-start lg:items-start justify-between gap-8 lg:gap-0 relative">
            {steps.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => { stepsRef.current[index] = el; }}
                className="relative w-full lg:w-auto"
              >
                <div className="flex lg:flex-col items-center gap-[11px] lg:gap-2 z-10 relative bg-white pr-2 lg:pr-0 lg:px-2">
                  <div className="w-[28px] h-[28px] rounded-full bg-black flex items-center justify-center flex-shrink-0 z-10 shadow-md">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[16px] lg:text-[13px] font-semibold text-black whitespace-nowrap">
                    {step.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
