"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import Image from 'next/image';
import { TitleGradient } from '@/components/shared/title-gradient';

const CultureAndStrengths = () => {
  // Separate state for independent control
  const [frontIndex, setFrontIndex] = useState(0);
  const [rearIndex, setRearIndex] = useState(1);

  // Track direction for animation
  const [frontDirection, setFrontDirection] = useState(1);
  const [rearDirection, setRearDirection] = useState(1);

  const strengths = [
    "Fokus pada kualitas performa dan pengalaman pengguna di setiap produk digital",
    "Proses kerja terstruktur transparan dan tepat waktu",
    "Solusi yang fleksibel dan disesuaikan dengan kebutuhan klien",
    "Menggunakan teknologi dan standar pengembangan terkini",
  ];

  const cultures = [
    "Kolaborasi terbuka antara tim dan klien",
    "Terbuka pada ide baru dan inovasi berkelanjutan",
    "Bertanggung jawab terhadap setiap proses dan hasil kerja",
    "Berorientasi pada solusi bukan sekadar fitur",
  ];

  // Using Unsplash images as requested
  const images = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80", // Team brainstorming
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80", // Coding close up
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80", // Team high five/success
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80", // Modern office
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80", // Collaboration
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80", // Meeting
  ];

  // Right Button -> Slides Front Image (Bottom)
  const handleFrontSlide = () => {
    setFrontDirection(1);
    setFrontIndex((prev) => (prev + 1) % images.length);
  };

  // Left Button -> Slides Rear Image (Top)
  const handleRearSlide = () => {
    setRearDirection(-1);
    setRearIndex((prev) => (prev + 1) % images.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 lg:py-32 bg-[#F9FAFB] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Section Title */}
        <div className="text-center mb-16 lg:mb-24">
<TitleGradient as="h2" className="text-3xl lg:text-[40px] font-bold mx-auto">
            Keunggulan & Budaya Kami
          </TitleGradient>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Side: Content Lists */}
          <div className="w-full lg:w-5/12 space-y-12">
            {/* Keunggulan */}
            <div>
              <h3 className="text-[20px] font-semibold text-[#575757] mb-6">
                Keunggulan kami
              </h3>
              <ul className="space-y-4">
                {strengths.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex-shrink-0">
                      <Check className="w-5 h-5 text-gray-200" strokeWidth={3} />
                    </div>
                    <span className="text-[16px] text-[#606060] leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Budaya */}
            <div>
              <h3 className="text-[20px] font-semibold text-[#575757] mb-6">
                Budaya kami
              </h3>
              <ul className="space-y-4">
                {cultures.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex-shrink-0">
                      <Check className="w-5 h-5 text-gray-200" strokeWidth={3} />
                    </div>
                    <span className="text-[16px] text-[#606060] leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Stacked Image Slider */}
          <div className="w-full lg:w-7/12 relative h-[500px] flex items-center justify-center">

            {/* Rear Group (Top Right-ish) */}
            <div className="absolute top-0 right-0 lg:right-4 w-[85%] lg:w-[75%] z-10 flex items-center gap-4 justify-end">
              {/* Left Button -> Controls Rear Image */}
              <button
                onClick={handleRearSlide}
                className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-lg z-30 transform active:scale-95 transition-transform flex-shrink-0 pr-1"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-8 h-8 text-white" strokeWidth={2.5} />
              </button>

              <div className="relative w-full aspect-[16/10] bg-white p-2 shadow-xl rotate-1">
                <div className="relative w-full h-full overflow-hidden">
                  <AnimatePresence initial={false} custom={rearDirection} mode="popLayout">
                    <motion.div
                      key={rearIndex}
                      custom={rearDirection}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={images[rearIndex]}
                        alt="Culture Rear"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Front Group (Bottom Left-ish) */}
            <div className="absolute bottom-0 left-0 lg:left-4 w-[85%] lg:w-[75%] z-20 flex items-center gap-4">

              {/* Image Part */}
              <div className="relative w-full aspect-[16/10] bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.2)] -rotate-1">
                <div className="relative w-full h-full overflow-hidden">
                  <AnimatePresence initial={false} custom={frontDirection} mode="popLayout">
                    <motion.div
                      key={frontIndex}
                      custom={frontDirection}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={images[frontIndex]}
                        alt="Culture Front"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Right Button -> Controls Front Image */}
              <button
                onClick={handleFrontSlide}
                className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-lg z-30 transform active:scale-95 transition-transform flex-shrink-0 pl-1"
                aria-label="Next slide"
              >
                <ChevronRight className="w-8 h-8 text-white" strokeWidth={2.5} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureAndStrengths;
