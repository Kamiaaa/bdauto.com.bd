'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

// --- Types ---
interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
}

interface CarouselProps {
  slides?: Slide[];
  autoPlayInterval?: number;
}

// --- Default Data ---
const defaultSlides: Slide[] = [
  {
    id: 1,
    title: "Bangladesh's first homegrown EV",
    description: 'Experience the tranquility of alpine peaks and crystal clear skies.',
    image: '/img/slide-01.jpg',
    color: 'from-emerald-700 to-teal-800',
  },
  {
    id: 2,
    title: 'Ocean Dreams',
    description: 'Let the waves carry your thoughts to distant horizons.',
    image: '/img/slide-02.jpg',
    color: 'from-blue-700 to-cyan-800',
  },
  {
    id: 3,
    title: 'Urban Pulse',
    description: 'Feel the energy of city lights and modern architecture.',
    image: '/img/slide-03.jpg',
    color: 'from-purple-700 to-pink-800',
  },
  {
    id: 4,
    title: 'Forest Whispers',
    description: 'Discover the magic hidden in ancient woodland paths.',
    image: '/img/slide-02.jpg',
    color: 'from-green-700 to-lime-800',
  },
];

export default function Carousel({ 
  slides = defaultSlides, 
  autoPlayInterval = 5000 
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [effect, setEffect] = useState<'fade' | 'zoom' | 'slide'>('fade');

  // Cycle through effects
  useEffect(() => {
    const effectInterval = setInterval(() => {
      setEffect((prev) => {
        if (prev === 'fade') return 'zoom';
        if (prev === 'zoom') return 'slide';
        return 'fade';
      });
    }, 12000);
    
    return () => clearInterval(effectInterval);
  }, []);

  const getSlideStyles = (isCurrent: boolean, isAnimatingOut: boolean = false) => {
    const baseStyle = 'absolute inset-0 w-full h-full transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]';
    
    switch (effect) {
      case 'fade':
        if (isCurrent && !isAnimatingOut) return `${baseStyle} opacity-100`;
        if (isCurrent && isAnimatingOut) return `${baseStyle} opacity-0`;
        return `${baseStyle} opacity-0`;
        
      case 'zoom':
        if (isCurrent && !isAnimatingOut) return `${baseStyle} opacity-100 scale-100`;
        if (isCurrent && isAnimatingOut) return `${baseStyle} opacity-0 scale-110`;
        return `${baseStyle} opacity-0 scale-95`;
        
      case 'slide':
        if (isCurrent && !isAnimatingOut) {
          return `${baseStyle} opacity-100 translate-x-0`;
        }
        if (isCurrent && isAnimatingOut) {
          return `${baseStyle} opacity-100 ${direction === 'right' ? '-translate-x-full' : 'translate-x-full'}`;
        }
        return `${baseStyle} opacity-0 ${direction === 'right' ? 'translate-x-full' : '-translate-x-full'}`;
        
      default:
        return baseStyle;
    }
  };

  const goToSlide = useCallback((index: number, newDirection: 'left' | 'right') => {
    if (isAnimating) return;
    
    setDirection(newDirection);
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentIndex(index);
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 500);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    const nextIdx = (currentIndex + 1) % slides.length;
    goToSlide(nextIdx, 'right');
  }, [currentIndex, slides.length, goToSlide]);

  const prevSlide = useCallback(() => {
    const prevIdx = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(prevIdx, 'left');
  }, [currentIndex, slides.length, goToSlide]);

  // Auto play
  useEffect(() => {
    if (autoPlayInterval <= 0) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);
    
    return () => clearInterval(interval);
  }, [nextSlide, autoPlayInterval]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Preload adjacent images
  useEffect(() => {
    const nextIdx = (currentIndex + 1) % slides.length;
    const prevIdx = (currentIndex - 1 + slides.length) % slides.length;
    
    [slides[nextIdx], slides[prevIdx]].forEach((slide) => {
      const img = new window.Image();
      img.src = slide.image;
    });
  }, [currentIndex, slides]);

  const currentSlide = slides[currentIndex];
  const prevSlideIndex = (currentIndex - 1 + slides.length) % slides.length;

  return (
    <div className="w-full overflow-hidden bg-black" style={{ height: 'calc(100vh - 64px)' }}>
      {/* Main Carousel Container */}
      <div className="relative w-full h-full">
        
        {/* Previous/Next Slide (for smooth transitions) */}
        <div className="absolute inset-0">
          <div className={getSlideStyles(false, false)}>
            <div className="relative w-full h-full">
              <Image
                src={slides[prevSlideIndex].image}
                alt={`Slide ${slides[prevSlideIndex].id}`}
                fill
                className="object-cover"
                priority={prevSlideIndex === 0}
                sizes="100vw"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${slides[prevSlideIndex].color} opacity-60`} />
            </div>
          </div>
        </div>

        {/* Current Slide */}
        <div className="absolute inset-0">
          <div className={getSlideStyles(true, isAnimating)}>
            <div className="relative w-full h-full">
              <Image
                src={currentSlide.image}
                alt={currentSlide.title}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${currentSlide.color} opacity-50`} />
            </div>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16 pb-20 md:pb-24 lg:pb-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="max-w-4xl transform transition-all duration-700 delay-100 animate-slide-up">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bail text-white mb-3 md:mb-5 drop-shadow-2xl tracking-tight">
              {currentSlide.title}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl drop-shadow-lg leading-relaxed">
              {currentSlide.description}
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all duration-500 transform hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed z-20 group"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all duration-500 transform hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed z-20 group"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Minimal Indicators */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex justify-center gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (index !== currentIndex && !isAnimating) {
                  const newDirection = index > currentIndex ? 'right' : 'left';
                  goToSlide(index, newDirection);
                }
              }}
              disabled={isAnimating}
              className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                index === currentIndex
                  ? 'w-10 bg-white shadow-lg'
                  : 'w-1.5 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}