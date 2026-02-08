'use client';

import { cn } from '@/lib/utils';
import React from 'react';

interface TitleGradientProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span';
}

export function TitleGradient({ children, className, as: Component = 'span' }: TitleGradientProps) {
  return (
    <Component
      className={cn(
        'bg-gradient-to-r from-[#00AAFF] to-[#1100FF] bg-clip-text text-transparent font-poppins font-semibold',
        className
      )}
    >
      {children}
    </Component>
  );
}
