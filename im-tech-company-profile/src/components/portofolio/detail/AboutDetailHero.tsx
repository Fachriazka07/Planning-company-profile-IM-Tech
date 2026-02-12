"use client"

import React from 'react';
import { motion, Variants } from 'framer-motion';

const ServicesHero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      className="relative w-full h-[371px] flex items-center overflow-hidden"
      style={{
        backgroundImage: 'url(/images/background-page.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >


      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <div className="flex items-stretch">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
              className="w-[8px] bg-white mr-6 origin-top self-stretch"
            />

            <div className="flex flex-col justify-center py-4">
              <motion.div variants={itemVariants}>
                <h1 className="text-[32px] font-semibold text-white mb-4 leading-tight">
                  Proyek yang telah kami kerjakan
                </h1>
              </motion.div>
              <motion.div variants={itemVariants}>
                <p className="text-[20px] font-normal text-gray-300 leading-relaxed font-poppins">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt!
                  </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
