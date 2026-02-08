'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  baseOpacity?: number;
  enableBlur?: boolean;
  baseRotation?: number;
  blurStrength?: number;
  className?: string;
  wordAnimation?: boolean;
  direction?: 'left' | 'right' | 'none';
  xOffset?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  baseOpacity = 0.1,
  enableBlur = true,
  baseRotation = 3,
  blurStrength = 4,
  className = '',
  wordAnimation = true,
  direction = 'none', // Default none
  xOffset = 50,
}) => {
  const elRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!elRef.current) return;

      const element = elRef.current;

      // Calculate initial X based on direction
      let initialX = 0;
      if (direction === 'left') initialX = -xOffset;
      if (direction === 'right') initialX = xOffset;

      // If wordAnimation is explicitly true OR (default true) and children is a string
      const shouldAnimateWords = wordAnimation && typeof children === 'string';

      if (shouldAnimateWords) {
        const words = element.querySelectorAll('.word');

        gsap.fromTo(
          words,
          {
            opacity: baseOpacity,
            rotationZ: baseRotation,
            filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
            transformOrigin: 'left center',
            y: 10,
            x: initialX, // Apply x offset
          },
          {
            opacity: 1,
            rotationZ: 0,
            filter: 'blur(0px)',
            y: 0,
            x: 0,
            duration: 1,
            stagger: 0.05, // Stagger the words
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 95%', // Start earlier (when element is near bottom of screen)
              end: 'center center', // End when element is in middle of screen
              scrub: 2, // Slower, smoother scrubbing
            },
          }
        );
      } else {
        // Fallback for non-string children or block animation
        gsap.fromTo(
          element,
          {
            opacity: baseOpacity,
            rotationZ: baseRotation,
            filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
            transformOrigin: 'left center',
            x: initialX, // Apply x offset
          },
          {
            opacity: 1,
            rotationZ: 0,
            filter: 'blur(0px)',
            x: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 95%',
              end: 'center center',
              scrub: 2, // Slower, smoother scrubbing
            },
          }
        );
      }
    },
    { scope: elRef, dependencies: [children, wordAnimation, direction, xOffset] }
  );

  // Helper to split text if needed
  const renderContent = () => {
    if (wordAnimation && typeof children === 'string') {
      return children.split(' ').map((word, i) => (
        <span key={i} className="word inline-block mr-[0.25em] will-change-transform">
          {word}
        </span>
      ));
    }
    return children;
  };

  return (
    <div ref={elRef} className={className}>
      {renderContent()}
    </div>
  );
};

export default ScrollReveal;
