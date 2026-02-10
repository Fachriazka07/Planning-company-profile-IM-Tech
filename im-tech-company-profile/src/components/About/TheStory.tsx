"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TheStory = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Title - medium 20px */}
              <h2 className="text-[20px] font-medium text-black mb-6">
                Cerita Kami
              </h2>

              {/* Paragraphs - regular 16px */}
              <div className="space-y-6 text-[16px] font-normal text-black leading-relaxed">
                <p>
                  Kami adalah tim yang bergerak di bidang pengembangan website, aplikasi mobile dengan fokus menghadirkan solusi digital yang fungsional modern dan mudah digunakan Setiap proyek kami kerjakan dengan pendekatan yang terstruktur mulai dari perencanaan desain hingga pengembangan untuk memastikan hasil yang sesuai dengan kebutuhan klien.
                </p>
                <p>
                  Kami percaya bahwa teknologi dan desain yang tepat dapat membantu bisnis berkembang Oleh karena itu kami selalu mengutamakan kualitas performa dan pengalaman pengguna dalam setiap solusi yang kami bangun Dengan komunikasi yang terbuka dan proses kerja yang transparan kami berkomitmen menjadi partner digital yang dapat diandalkan untuk jangka panjang
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <Image
                src="/images/about-team.png"
                alt="IM Tech Team"
                width={600}
                height={400}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheStory;
