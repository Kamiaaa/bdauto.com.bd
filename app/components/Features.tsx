'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { MdOutlinePhoneForwarded, MdOutlineFlight, MdOutlineHotel, MdOutlineDirectionsCar } from "react-icons/md";
import { IoCarOutline, IoFlashOutline, IoBuildOutline, IoCloudDownloadOutline, IoPhonePortraitOutline } from "react-icons/io5";

const Features = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleViewPackagesClick = () => {
        window.location.href = '/packages';
    };

    const handleContactClick = () => {
        window.location.href = '/contact';
    };

    return (
        <section
            ref={containerRef}
            className="relative w-full h-auto min-h-150 overflow-hidden bg-fixed bg-center bg-cover bg-no-repeat py-16"
            style={{ backgroundImage: "url('/img/slide-01.jpg')" }}
        >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16 space-y-8">
                {/* Top Tagline */}
                <div className="z-10">
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bail font-bold text-white max-w-5xl z-10 leading-tight">
                        Not just vehicles. An integrated system.
                    </p>
                </div>

                {/* Main Heading */}
                <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl text-white max-w-5xl z-10 leading-tight">
                    The future of mobility isn't isolated products — it's connected systems that quietly support everyday life.
                </h2>

                {/* Features Grid - 4 column layout from design */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 z-10 max-w-6xl mx-auto w-full">
                    {/* Charging */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-left border border-white/20 hover:bg-white/15 transition-all duration-300">
                        <div className="bg-red-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                            <IoFlashOutline className="text-red-400 text-2xl" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Charging</h3>
                        <p className="text-white/70 text-sm">
                            Standard 11 kW AC plus DC fast-charging support, with partners across the country.
                        </p>
                    </div>

                    {/* Service Centers */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-left border border-white/20 hover:bg-white/15 transition-all duration-300">
                        <div className="bg-red-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                            <IoBuildOutline className="text-red-400 text-2xl" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Service Centers</h3>
                        <p className="text-white/70 text-sm">
                            Certified technicians, genuine parts on hand, and end-to-end vehicle care.
                        </p>
                    </div>

                    {/* Software Updates */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-left border border-white/20 hover:bg-white/15 transition-all duration-300">
                        <div className="bg-red-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                            <IoCloudDownloadOutline className="text-red-400 text-2xl" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Software Updates</h3>
                        <p className="text-white/70 text-sm">
                            Vehicles that improve over time — refinements delivered to your dashboard.
                        </p>
                    </div>

                    {/* Owner App */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-left border border-white/20 hover:bg-white/15 transition-all duration-300">
                        <div className="bg-red-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                            <IoPhonePortraitOutline className="text-red-400 text-2xl" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Owner App</h3>
                        <p className="text-white/70 text-sm">
                            Charging status, climate control, vehicle health — all from your phone.
                        </p>
                    </div>
                </div>
            </div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60 z-0" />
        </section>
    );
};

export default Features;