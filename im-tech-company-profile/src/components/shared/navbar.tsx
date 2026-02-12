'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // Pages where navbar should be static, white bg, black text
  const isStaticPage = pathname?.startsWith('/blog') || 
                       pathname === '/about' || 
                       pathname?.startsWith('/portofolio') || 
                       pathname?.startsWith('/services');
                       
  // Keep legacy isBlog variable just in case, or replace usages
  const isBlog = pathname?.startsWith('/blog');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    
    // If on a static page and link is a hash link (e.g. #about), redirect to home first
    if (isStaticPage && href.startsWith('#')) {
      window.location.href = `/${href}`;
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'z-50 transition-all duration-300 font-sans',
        isStaticPage 
          ? 'relative bg-white py-4 border-b border-gray-100' 
          : cn(
              'fixed top-0 left-0 right-0',
              isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
            )
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "flex items-center gap-2 font-bold text-3xl transition-colors",
            isStaticPage ? "text-black" : "text-white"
          )}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span>IM Tech</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={cn(
                "text-[16px] font-medium transition-colors hover:text-[#00AAFF]",
                isStaticPage ? "text-black" : "text-white"
              )}
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={() => scrollToSection('#contact')}
            className={cn(
              "rounded-md px-6 py-5 text-sm font-bold transition-all duration-200 hover:scale-105",
              isStaticPage 
                ? "bg-black text-white hover:bg-gray-800" 
                : "bg-white text-black hover:bg-[#00AAFF] hover:text-white"
            )}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className={isStaticPage ? "text-black" : "text-white"}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[350px] bg-black/80 backdrop-blur-xl border-l border-white/10"
          >
            <VisuallyHidden>
              <SheetTitle>Menu</SheetTitle>
            </VisuallyHidden>

            <div className="flex flex-col mt-12 px-6">
              {navLinks.map((link, index) => (
                <div key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-2xl font-medium text-white hover:text-[#00AAFF] text-left transition-colors py-4 w-full"
                  >
                    {link.label}
                  </button>
                  {index < navLinks.length - 1 && <div className="w-full h-px bg-white/20" />}
                </div>
              ))}
              <Button
                onClick={() => scrollToSection('#contact')}
                className="bg-white text-black rounded-md w-full py-6 mt-8 font-bold transition-all duration-200 hover:bg-[#00AAFF] hover:text-white hover:scale-105"
              >
                Get Started
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
