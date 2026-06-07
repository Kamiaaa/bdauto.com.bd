// components/RidePromo.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlinePhoneForwarded } from 'react-icons/md';
// Or use any other icon library - alternatively you can use a simple emoji or text

interface RidePromoProps {
    backgroundImage?: string;
    overlayOpacity?: number;
    className?: string;
    onSeeLineup?: () => void;
    onBookTestRide?: () => void;
}

const RidePromo: React.FC<RidePromoProps> = ({
    backgroundImage = '/img/back.jpg',
    overlayOpacity = 0.5,
    className = '',
    onSeeLineup,
    onBookTestRide
}) => {
    return (
        <div className={`relative min-h-screen flex items-center justify-center p-6 overflow-hidden ${className}`}>
            {/* Background Image with Next.js Image optimization */}
            <Image
                src={backgroundImage}
                alt="Ride background"
                fill
                className="object-cover"
                priority
                quality={100}
            />

            {/* Dark overlay with customizable opacity */}
            <div
                className="absolute inset-0 bg-black"
                style={{ opacity: overlayOpacity }}
            ></div>

            {/* Main container */}
            <div className="relative max-w-4xl mx-auto text-center z-10">
                {/* RIDE Logo/Brand */}
                <h1 className="text-8xl md:text-9xl font-bail tracking-tighter text-white mb-4">
                    Ride electric.
                    Ride classic.
                </h1>

                {/* Tagline/Body text */}
                <div className="space-y-3 text-white text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
                    <p>
                        Four electric scooters. One 250cc cruiser. Built in Bangladesh, backed by a five-year warranty, and priced to put fuel money back in your pocket.
                    </p>
                </div>

                {/* Buttons with the specified design */}
                <div className="flex flex-col sm:flex-row gap-4 z-10 justify-center">
                    {/* SEE THE LINEUP Button */}
                    <button
                        onClick={onSeeLineup}
                        className="relative overflow-hidden bg-red-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group flex items-center justify-center gap-2"
                        aria-label="See The Lineup"
                    >
                        <MdOutlinePhoneForwarded className="text-xl relative z-10" />
                        <span className="relative z-10">+8801335167729</span>
                        <span className="absolute inset-0 bg-red-700 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                    </button>

                    {/* BOOK A TEST RIDE Button */}
                    <button
                        onClick={onBookTestRide}
                        className="relative overflow-hidden bg-transparent border-2 border-red-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                    >
                        <span className="relative z-10">BOOK A TEST RIDE</span>
                        <span className="absolute inset-0 bg-red-600 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RidePromo;