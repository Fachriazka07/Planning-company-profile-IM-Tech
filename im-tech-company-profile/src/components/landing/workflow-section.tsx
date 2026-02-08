'use client';

import { Check } from 'lucide-react';
import { TitleGradient } from '@/components/shared/title-gradient';

const steps = [
  { id: 1, name: 'Discovery' },
  { id: 2, name: 'Design' },
  { id: 3, name: 'Development' },
  { id: 4, name: 'Testing' },
  { id: 5, name: 'Launch' },
];

export function WorkflowSection() {
  return (
    <section id="workflow" className="font-sans py-[64px] lg:py-[128px] bg-[#F9FAFB]">
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

        {/* Content Container - Desktop: Compact Pill (~650px), Mobile: Vertical Stack */}
        <div className="bg-white border border-gray-200 rounded-3xl lg:rounded-full py-8 lg:py-4 px-8 lg:px-6 max-w-full lg:max-w-[800px] mx-auto shadow-sm relative">
          {/* Mobile Only: Vertical Connecting Line */}
          <div className="lg:hidden absolute left-[3.15rem] top-10 bottom-10 w-[2px] bg-gray-200" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-0 relative">
            {steps.map((step, index) => (
              <div key={step.id} className="relative w-full lg:w-auto">
                {/* Step Item Content */}
                <div className="flex items-center gap-[11px] z-10 relative bg-white pr-2 lg:pr-0">
                  {/* Icon Circle - Black with check */}
                  <div className="w-[28px] h-[28px] rounded-full bg-black flex items-center justify-center flex-shrink-0 z-10">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </div>

                  {/* Text Content */}
                  <span className="text-[16px] lg:text-[14px] font-semibold text-black whitespace-nowrap">
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
